import type { Task } from './types'

const LATENCY_MS = 400

const tasks: Task[] = [
  {
    id: '1',
    title: 'Estudar Command Pattern',
    done: false,
    createdAt: Date.now() - 3000,
  },
  {
    id: '2',
    title: 'Configurar React Query',
    done: true,
    createdAt: Date.now() - 2000,
  },
  {
    id: '3',
    title: 'Implementar Undo',
    done: false,
    createdAt: Date.now() - 1000,
  },
]

function delay(ms = LATENCY_MS) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export async function getTasks(): Promise<Task[]> {
  await delay()
  return structuredClone(tasks)
}

export async function addTask(title: string): Promise<Task> {
  await delay()
  const task: Task = {
    id: crypto.randomUUID(),
    title,
    done: false,
    createdAt: Date.now(),
  }
  tasks.push(task)
  return structuredClone(task)
}

export async function toggleTask(id: string): Promise<Task> {
  await delay()
  const task = tasks.find((t) => t.id === id)
  if (!task) throw new Error(`Task ${id} not found`)
  task.done = !task.done
  return structuredClone(task)
}

export async function deleteTask(id: string): Promise<Task> {
  await delay()
  const index = tasks.findIndex((t) => t.id === id)
  if (index === -1) throw new Error(`Task ${id} not found`)
  const [removed] = tasks.splice(index, 1)
  return structuredClone(removed)
}

// Usado internamente pelo undo de delete para reinserir a task
export async function restoreTask(task: Task): Promise<Task> {
  await delay()
  tasks.push(structuredClone(task))
  return structuredClone(task)
}
