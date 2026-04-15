import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AddTaskForm } from '@/components/AddTaskForm'
import { TaskFilters } from '@/components/TaskFilters'
import { TaskList } from '@/components/TaskList'
import { UndoButton } from '@/components/UndoButton'

export function Home() {
  return (
    <div className="min-h-svh bg-muted/40">
      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-semibold tracking-tight text-foreground">
            Task Manager
          </h1>
          <UndoButton />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Tarefas</CardTitle>
            <CardDescription>
              Gerencie suas tarefas com suporte a undo via Command Pattern
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <AddTaskForm />

            <div className="flex items-center justify-between">
              <TaskFilters />
            </div>

            <TaskList />
          </CardContent>
        </Card>
      </main>

      <footer className="border-t bg-card">
        <div className="mx-auto max-w-2xl px-4 py-6 text-center text-sm text-muted-foreground">
          React Query + Jotai + Command Pattern
        </div>
      </footer>
    </div>
  )
}
