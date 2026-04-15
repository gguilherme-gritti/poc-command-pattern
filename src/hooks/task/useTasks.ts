import { useQuery } from '@tanstack/react-query'
import { useAtomValue } from 'jotai'
import { getTasks } from '@/lib/api'
import { TASKS_QUERY_KEY } from '@/lib/queryClient'
import type { Task } from '@/lib/types'
import { filterAtom } from '@/store/atoms'

/**
 * Hook que combina React Query (server state) com Jotai (filtro local).
 *
 * O React Query é a fonte de verdade para as tasks.
 * O Jotai fornece o filtro ativo, e a filtragem acontece no cliente
 * via `select` — sem duplicar dados.
 */
export function useTasks() {
  const filter = useAtomValue(filterAtom)

  return useQuery<Task[]>({
    queryKey: TASKS_QUERY_KEY,
    queryFn: getTasks,
    select: (tasks) => {
      const filtered = tasks.filter((task) => {
        if (filter === 'done') return task.done
        if (filter === 'todo') return !task.done
        return true
      })
      return filtered.sort((a, b) => b.createdAt - a.createdAt)
    },
  })
}
