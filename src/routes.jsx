import { Routes, Route } from 'react-router'
import Home from './pages/home'
import VisitData from './pages/visitData'
import Header from './components/header'
import Footer from './components/footer'

function AppRoutes() {

  return (
      <Routes>
        <Route element={<Header/>}>
            <Route element={<Footer/>}>
                <Route index element={<Home/>}/>
                <Route path='/visitData/:id' element={<VisitData/>}/>
            </Route>
        </Route>
      </Routes>
  )
}

export default AppRoutes
