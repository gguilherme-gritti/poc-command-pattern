import { useCallback } from 'react'
import { useAtom, useAtomValue } from 'jotai'
import type { Command } from '@/commands/Command'
import {
  commandHistoryAtom,
  canUndoAtom,
  lastCommandLabelAtom,
} from '@/commands/CommandManager'

/**
 * Invoker do Command Pattern.
 *
 * Centraliza a execução e o undo de commands:
 * - execute(): executa o command e registra no histórico
 * - undo(): desfaz o último command (só remove do histórico se der certo)
 *
 * Todo command passa por aqui. Se precisar adicionar logging,
 * rate limiting ou qualquer cross-cutting concern, só precisa mudar aqui.
 */

const MAX_HISTORY = 50

export function useCommandManager() {
  const [history, setHistory] = useAtom(commandHistoryAtom)
  const canUndo = useAtomValue(canUndoAtom)
  const lastLabel = useAtomValue(lastCommandLabelAtom)

  const execute = useCallback(
    async (command: Command) => {
      await command.execute()
      setHistory((prev) => [...prev.slice(-(MAX_HISTORY - 1)), command])
    },
    [setHistory],
  )

  const undo = useCallback(async () => {
    if (history.length === 0) return

    const lastCommand = history[history.length - 1]
    await lastCommand.undo()
    setHistory((prev) => prev.slice(0, -1))
  }, [history, setHistory])

  return { execute, undo, canUndo, lastLabel }
}
