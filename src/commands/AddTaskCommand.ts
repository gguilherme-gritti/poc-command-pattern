import type { Task } from '@/lib/types'
import type { TaskReceiver } from '@/lib/TaskReceiver'
import type { Command } from './Command'

/**
 * O Command sabe O QUE fazer e O QUE desfazer.
 * Delega o COMO para o Receiver (TaskReceiver).
 */
export class AddTaskCommand implements Command {
  readonly label: string
  #title: string
  #receiver: TaskReceiver
  #createdTask: Task | null = null

  constructor(title: string, receiver: TaskReceiver) {
    this.#title = title
    this.#receiver = receiver
    this.label = `Adicionar "${title}"`
  }

  async execute(): Promise<void> {
    this.#createdTask = await this.#receiver.addTask(this.#title)
  }

  async undo(): Promise<void> {
    if (!this.#createdTask) return
    await this.#receiver.removeTask(this.#createdTask.id)
  }
}
