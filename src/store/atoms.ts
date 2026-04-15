import { atom } from 'jotai'
import type { TaskFilter } from '@/lib/types'

/**
 * Jotai é usado exclusivamente para estado de UI/cliente.
 * O estado do servidor (tasks) fica no React Query.
 * Isso evita duplicação e conflitos de fonte de verdade.
 */

export const filterAtom = atom<TaskFilter>('all')
