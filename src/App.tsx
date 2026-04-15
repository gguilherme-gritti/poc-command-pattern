import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'
import { Home } from './pages/Home'

/**
 * O QueryClientProvider fica no nível mais alto da árvore.
 * O Jotai não precisa de Provider — usa o store default
 * (recomendado para apps com um único store).
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  )
}

export default App
