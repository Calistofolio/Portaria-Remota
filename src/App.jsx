import { Routes, Route } from 'react-router'
import Home from './pages/home'
import VisitData from './pages/visitData/visitData'

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/visitData' element={<VisitData/>}/>
    </Routes>
  )
}

export default App
