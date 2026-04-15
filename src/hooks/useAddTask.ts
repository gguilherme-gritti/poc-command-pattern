import { useCallback } from 'react'
import { AddTaskCommand } from '@/commands/AddTaskCommand'
import { useTaskReceiver } from '@/lib/TaskReceiver'
import { useCommandManager } from './useCommandManager'

/**
 * Client do Command Pattern: cria o Command com o Receiver
 * correto e delega a execução ao Invoker (useCommandManager).
 */
export function useAddTask() {
  const { execute } = useCommandManager()
  const receiver = useTaskReceiver()

  return useCallback(
    (title: string) => execute(new AddTaskCommand(title, receiver)),
    [execute, receiver],
  )
}
