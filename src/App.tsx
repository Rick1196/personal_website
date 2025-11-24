import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Routes from './features/routes'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes />
      </div>
    </QueryClientProvider>
  )
}

export default App
