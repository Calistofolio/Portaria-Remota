import { Routes, Route } from 'react-router'
import Home from './pages/home'
import VisitData from './pages/visitData/visitData'
import { VisitContext } from './context/visitContext'

function App() {

  return (
    // <VisitContext>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/visitData' element={<VisitData/>}/>
      </Routes>
    // </VisitContext>
  )
}

export default App
