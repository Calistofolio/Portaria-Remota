import { VisitProvider } from './context'
import AppRoutes from './routes'

function App() {

  return (
    <VisitProvider>
      <AppRoutes/>
    </VisitProvider>
  )
}

export default App
