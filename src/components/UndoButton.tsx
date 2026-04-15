import { Button } from '@/components/ui/button'
import { Undo2 } from 'lucide-react'
import { useCommandManager } from '@/hooks/useCommandManager'

export function UndoButton() {
  const { undo, canUndo, lastLabel } = useCommandManager()

  if (!canUndo) return null

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={undo}
      className="gap-2"
      title={lastLabel ? `Desfazer: ${lastLabel}` : 'Desfazer'}
    >
      <Undo2 className="size-4" />
      Desfazer
    </Button>
  )
}
