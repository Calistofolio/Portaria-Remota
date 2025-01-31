import Button from "../../components/button"
import { NavLink } from "react-router"
import MainCard from "../../components/main-card"
import AptInfo from "../../components/apt-info"
import style from "./Home.module.css"
import VisitsTable from "../../components/visitsTable/visitsTable"

function Home() {
  return (
    <div className={style.relative}>
      <AptInfo/>
      <div className={style.position}>
        
        <MainCard class="card">
          <div className={style.title}>
            <h2>Gerencie suas visitas</h2>
            <NavLink to="/visitData/setVisit">
              <Button className={style.addVisit} title="Adicionar nova visita"/>
            </NavLink>
          </div>
          <VisitsTable/>
        </MainCard>
      </div>
      </div>
    
  )
}

export default Home
