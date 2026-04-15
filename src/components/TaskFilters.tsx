import { useAtom } from 'jotai'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { filterAtom } from '@/store/atoms'
import type { TaskFilter } from '@/lib/types'

const filters: { value: TaskFilter; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'todo', label: 'Pendentes' },
  { value: 'done', label: 'Concluídas' },
]

export function TaskFilters() {
  const [filter, setFilter] = useAtom(filterAtom)

  return (
    <Tabs
      value={filter}
      onValueChange={(v) => setFilter(v as TaskFilter)}
    >
      <TabsList>
        {filters.map((f) => (
          <TabsTrigger key={f.value} value={f.value}>
            {f.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
