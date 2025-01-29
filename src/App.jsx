import { VisitContext } from './context/visitContext'
import { useState } from 'react'
import AppRoutes from './routes'

function App() {
  const [visitInfo, setVisitInfo] = useState([])
  const [inputFields, setInputFields] = useState([])

  return (
    <VisitContext.Provider value={{ visitInfo, setVisitInfo, inputFields, setInputFields }}>
      <AppRoutes/>
    </VisitContext.Provider>
  )
}

export default App
