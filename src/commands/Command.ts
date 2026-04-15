/**
 * Interface base do Command Pattern.
 *
 * Cada command encapsula uma ação que muda estado (mutation)
 * e sabe como desfazê-la. Isso separa a intenção da ação
 * da execução, permitindo undo de forma genérica.
 */
export interface Command {
  /** Descrição legível da ação para feedback ao usuário */
  readonly label: string
  execute(): Promise<void>
  undo(): Promise<void>
}
