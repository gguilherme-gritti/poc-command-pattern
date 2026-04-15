import { useCallback } from 'react'
import { DeleteTaskCommand } from '@/commands/DeleteTaskCommand'
import { useTaskReceiver } from '@/lib/TaskReceiver'
import type { Task } from '@/lib/types'
import { useCommandManager } from './useCommandManager'

export function useDeleteTask() {
  const { execute } = useCommandManager()
  const receiver = useTaskReceiver()

  return useCallback(
    (task: Task) => execute(new DeleteTaskCommand(task, receiver)),
    [execute, receiver],
  )
}
