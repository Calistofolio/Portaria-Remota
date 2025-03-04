import Button from "../../components/button"
import MainCard from "../../components/main-card"
import AptInfo from "../../components/apt-info"
import style from "./Home.module.css"
import VisitsTable from "../../components/visitsTable"
import { useContext } from "react"
import { VisitContext } from "../../context"

function Home() {
  const {nav} = useContext(VisitContext)
  
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
              <Button onclick={() => nav("visitData/setVisit")} title="Adicionar nova visita"/>
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
