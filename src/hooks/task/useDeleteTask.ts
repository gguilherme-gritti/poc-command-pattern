import { useCallback } from 'react'
import { DeleteTaskCommand } from '@/commands/task/DeleteTaskCommand'
import { useTaskReceiver } from '@/lib/receivers/TaskReceiver'
import type { Task } from '@/lib/types'
import { useCommandManager } from '../useCommandManager'

export function useDeleteTask() {
  const { execute } = useCommandManager()
  const receiver = useTaskReceiver()

  return useCallback(
    (task: Task) => execute(new DeleteTaskCommand(task, receiver)),
    [execute, receiver],
  )
}
