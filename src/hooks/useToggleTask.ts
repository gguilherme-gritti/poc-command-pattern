import { useCallback } from 'react'
import { ToggleTaskCommand } from '@/commands/ToggleTaskCommand'
import { useTaskReceiver } from '@/lib/TaskReceiver'
import type { Task } from '@/lib/types'
import { useCommandManager } from './useCommandManager'

export function useToggleTask() {
  const { execute } = useCommandManager()
  const receiver = useTaskReceiver()

  return useCallback(
    (task: Task) => execute(new ToggleTaskCommand(task, receiver)),
    [execute, receiver],
  )
}
