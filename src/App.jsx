import { VisitProvider } from './context/visitContext'
import AppRoutes from './routes'

function App() {

  return (
    <VisitProvider>
      <AppRoutes/>
    </VisitProvider>
  )
}

export default App
