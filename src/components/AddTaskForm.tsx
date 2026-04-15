import { useState, type FormEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useAddTask } from '@/hooks/task/useAddTask'

export function AddTaskForm() {
  const [title, setTitle] = useState('')
  const addTask = useAddTask()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = title.trim()
    if (!trimmed) return

    await addTask(trimmed)
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nova tarefa..."
        className="flex-1"
      />
      <Button type="submit" size="default" disabled={!title.trim()}>
        <Plus className="mr-1 size-4" />
        Adicionar
      </Button>
    </form>
  )
}
