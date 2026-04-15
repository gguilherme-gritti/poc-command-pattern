import { atom } from 'jotai'
import type { Command } from './Command'

/**
 * Estado reativo do histórico de commands via Jotai.
 *
 * Esses atoms representam apenas o ESTADO do Invoker.
 * O COMPORTAMENTO (execute, undo) fica no hook useCommandManager.
 */

export const commandHistoryAtom = atom<Command[]>([])

export const canUndoAtom = atom((get) => get(commandHistoryAtom).length > 0)

export const lastCommandLabelAtom = atom((get) => {
  const history = get(commandHistoryAtom)
  return history.length > 0 ? history[history.length - 1].label : null
})
