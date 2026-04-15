import type { Task } from '@/lib/types'
import type { TaskReceiver } from '@/lib/TaskReceiver'
import type { Command } from './Command'

export class ToggleTaskCommand implements Command {
  readonly label: string
  #task: Task
  #receiver: TaskReceiver

  constructor(task: Task, receiver: TaskReceiver) {
    this.#task = task
    this.#receiver = receiver
    this.label = task.done
      ? `Reabrir "${task.title}"`
      : `Concluir "${task.title}"`
  }

  async execute(): Promise<void> {
    await this.#receiver.toggleTask(this.#task.id)
  }

  async undo(): Promise<void> {
    await this.#receiver.toggleTask(this.#task.id)
  }
}
