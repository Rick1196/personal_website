import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Main from './features/main'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Main />
      </div>
    </QueryClientProvider>
  )
}

export default App
