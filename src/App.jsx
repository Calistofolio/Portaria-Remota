import { Routes, Route } from 'react-router'
import Home from './pages/home'
import VisitData from './pages/visitData/visitData'
import { VisitContext } from './context/visitContext'
import { useState } from 'react'
import Header from './components/header/header'

function App() {
  const [visitInfo, setVisitInfo] = useState([])

  return (
    <VisitContext.Provider value={{ visitInfo, setVisitInfo }}>
      <Routes>
        <Route element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='/visitData' element={<VisitData/>}/>
        </Route>
      </Routes>
    </VisitContext.Provider>
  )
}

export default App
