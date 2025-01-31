import Button from "../../components/button"
import { NavLink } from "react-router"
import { useContext } from "react"
import { VisitContext } from "../../context/visitContext"
import MainCard from "../../components/main-card"
import style from "./Home.module.css"

function Home() {
  const {visitInfo} = useContext(VisitContext)
  return (
    <MainCard>
      <div>
        <NavLink to="/visitData/setVisit">
            <Button title="Adicionar nova visita"/>
        </NavLink>
          <table>
          {visitInfo.map((c, i) =>
            <tr key={i}> 
            <td> {c.name} </td> 
            <td>{c.date} </td>
            <td> {c.hour}</td> 
            <td> <NavLink to={"/visitData/" + i}><Button title="Editar"/></NavLink></td>
            </tr>)}
          </table>
      </div>
    </MainCard>
  )
}

export default Home
