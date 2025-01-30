import { VisitContext } from './context/visitContext'
import { useState } from 'react'
import AppRoutes from './routes'

function App() {
  const [visitInfo, setVisitInfo] = useState([])

  return (
    <VisitContext.Provider value={{ visitInfo, setVisitInfo }}>
      <AppRoutes/>
    </VisitContext.Provider>
  )
}

export default App
