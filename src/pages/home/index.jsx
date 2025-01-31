import Button from "../../components/button"
import { NavLink } from "react-router"
import MainCard from "../../components/main-card"
import AptInfo from "../../components/apt-info"
import style from "./Home.module.css"
import VisitsTable from "../../components/visitsTable/visitsTable"

function Home() {
  return (
    <div className={style.relative}>
      
      <div className={style.position}>
        <div className={style.aptCard}>
          <AptInfo/>
        </div>
        <MainCard>
          <div className={style.content}>
          <div className={style.title}>
            <h2>Gerencie suas visitas</h2>
            <div className={style.button}>
            <NavLink to="/visitData/setVisit">
              <Button title="Adicionar nova visita"/>
            </NavLink>
            </div>
          </div>
          <VisitsTable/>
          </div>
        </MainCard>
      </div>
      </div>
    
  )
}

export default Home
