import { useTasks } from '@/hooks/useTasks'
import { useToggleTask } from '@/hooks/useToggleTask'
import { useDeleteTask } from '@/hooks/useDeleteTask'
import { TaskItem } from './TaskItem'
import { ListChecks } from 'lucide-react'

export function TaskList() {
  const { data: tasks, isLoading } = useTasks()
  const toggleTask = useToggleTask()
  const deleteTask = useDeleteTask()

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3 py-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-12 animate-pulse rounded-lg bg-muted"
          />
        ))}
      </div>
    )
  }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-muted-foreground">
        <ListChecks className="size-10 opacity-40" />
        <p className="text-sm">Nenhuma tarefa encontrada</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  )
}
