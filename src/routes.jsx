import { Routes, Route } from 'react-router'
import Layout from './components/layout'
import Home from './pages/home'
import VisitData from './pages/visitData'

function AppRoutes() {

  return (
      <Routes>
        <Route element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/visitData/:id' element={<VisitData/>}/>
        </Route>
      </Routes>
  )
}

export default AppRoutes
