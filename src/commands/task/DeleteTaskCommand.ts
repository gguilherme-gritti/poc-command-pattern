import type { Task } from '@/lib/types'
import type { TaskReceiver } from '@/lib/receivers/TaskReceiver'
import type { Command } from './Command'

export class DeleteTaskCommand implements Command {
  readonly label: string
  #task: Task
  #receiver: TaskReceiver

  constructor(task: Task, receiver: TaskReceiver) {
    this.#task = task
    this.#receiver = receiver
    this.label = `Remover "${task.title}"`
  }

  async execute(): Promise<void> {
    await this.#receiver.removeTask(this.#task.id)
  }

  async undo(): Promise<void> {
    await this.#receiver.restoreTask(this.#task)
  }
}
