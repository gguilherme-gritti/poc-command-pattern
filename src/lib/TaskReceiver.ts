import { useMemo } from 'react'
import { useQueryClient, type QueryClient } from '@tanstack/react-query'
import * as api from '@/lib/api'
import type { Task } from '@/lib/types'
import { TASKS_QUERY_KEY } from '@/lib/queryClient'

/**
 * Receiver do Command Pattern.
 *
 * Encapsula COMO as operações são feitas: chamadas à API,
 * optimistic updates no cache do React Query e rollback em caso de erro.
 *
 * Os Commands delegam para cá — eles sabem O QUE fazer e O QUE desfazer,
 * mas o Receiver sabe COMO executar cada operação.
 */
export class TaskReceiver {
  #queryClient: QueryClient

  constructor(queryClient: QueryClient) {
    this.#queryClient = queryClient
  }

  /**
   * Padrão snapshot/rollback: salva o cache antes da mutation
   * para poder restaurar em caso de erro.
   * Equivalente ao que React Query faz internamente no onMutate.
   */
  #snapshot(): Task[] | undefined {
    return this.#queryClient.getQueryData<Task[]>(TASKS_QUERY_KEY)
  }

  #rollback(snapshot: Task[] | undefined): void {
    this.#queryClient.setQueryData(TASKS_QUERY_KEY, snapshot)
  }

  /**
   * Cancela queries in-flight antes de aplicar optimistic update.
   * Sem isso, um refetch em andamento poderia sobrescrever o update otimista.
   */
  async #cancelQueries(): Promise<void> {
    await this.#queryClient.cancelQueries({ queryKey: TASKS_QUERY_KEY })
  }

  async addTask(title: string): Promise<Task> {
    await this.#cancelQueries()
    const snapshot = this.#snapshot()
    const optimisticId = `optimistic-${Date.now()}`

    this.#queryClient.setQueryData<Task[]>(TASKS_QUERY_KEY, (old = []) => [
      ...old,
      { id: optimisticId, title, done: false, createdAt: Date.now() },
    ])

    try {
      const created = await api.addTask(title)
      this.#queryClient.setQueryData<Task[]>(TASKS_QUERY_KEY, (old = []) =>
        old.map((t) => (t.id === optimisticId ? created : t)),
      )
      return created
    } catch (error) {
      this.#rollback(snapshot)
      throw error
    }
  }

  async removeTask(id: string): Promise<void> {
    await this.#cancelQueries()
    const snapshot = this.#snapshot()

    this.#queryClient.setQueryData<Task[]>(TASKS_QUERY_KEY, (old = []) =>
      old.filter((t) => t.id !== id),
    )

    try {
      await api.deleteTask(id)
    } catch (error) {
      this.#rollback(snapshot)
      throw error
    }
  }

  async restoreTask(task: Task): Promise<void> {
    await this.#cancelQueries()
    const snapshot = this.#snapshot()

    this.#queryClient.setQueryData<Task[]>(TASKS_QUERY_KEY, (old = []) => [
      ...old,
      task,
    ])

    try {
      await api.restoreTask(task)
    } catch (error) {
      this.#rollback(snapshot)
      throw error
    }
  }

  async toggleTask(id: string): Promise<void> {
    await this.#cancelQueries()
    const snapshot = this.#snapshot()

    this.#queryClient.setQueryData<Task[]>(TASKS_QUERY_KEY, (old = []) =>
      old.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    )

    try {
      await api.toggleTask(id)
    } catch (error) {
      this.#rollback(snapshot)
      throw error
    }
  }
}

/**
 * Hook que fornece uma instância estável do Receiver.
 * O QueryClient é estável, então o Receiver é criado uma única vez.
 */
export function useTaskReceiver(): TaskReceiver {
  const queryClient = useQueryClient()
  return useMemo(() => new TaskReceiver(queryClient), [queryClient])
}
