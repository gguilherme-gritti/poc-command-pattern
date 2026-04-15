import { useCallback } from 'react'
import { AddTaskCommand } from '@/commands/task/AddTaskCommand'
import { useTaskReceiver } from '@/lib/receivers/TaskReceiver'
import { useCommandManager } from '@/hooks/useCommandManager'

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
