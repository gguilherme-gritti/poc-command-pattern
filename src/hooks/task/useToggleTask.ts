import { useCallback } from 'react'
import { ToggleTaskCommand } from '@/commands/task/ToggleTaskCommand'
import { useTaskReceiver } from '@/lib/receivers/TaskReceiver'
import type { Task } from '@/lib/types'
import { useCommandManager } from '@/hooks/useCommandManager'

export function useToggleTask() {
  const { execute } = useCommandManager()
  const receiver = useTaskReceiver()

  return useCallback(
    (task: Task) => execute(new ToggleTaskCommand(task, receiver)),
    [execute, receiver],
  )
}
