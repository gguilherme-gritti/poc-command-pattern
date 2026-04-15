import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import type { Task } from '@/lib/types'
import { cn } from '@/lib/utils'

interface TaskItemProps {
  task: Task
  onToggle: (task: Task) => void
  onDelete: (task: Task) => void
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="group flex items-center gap-3 rounded-lg border bg-card px-4 py-3 transition-colors hover:bg-accent/50">
      <Checkbox
        checked={task.done}
        onCheckedChange={() => onToggle(task)}
        aria-label={`Marcar "${task.title}" como ${task.done ? 'pendente' : 'concluída'}`}
      />

      <span
        className={cn(
          'flex-1 text-sm transition-colors',
          task.done && 'text-muted-foreground line-through',
        )}
      >
        {task.title}
      </span>

      <Button
        variant="ghost"
        size="icon"
        className="size-8 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={() => onDelete(task)}
        aria-label={`Remover "${task.title}"`}
      >
        <Trash2 className="size-4 text-destructive" />
      </Button>
    </div>
  )
}
