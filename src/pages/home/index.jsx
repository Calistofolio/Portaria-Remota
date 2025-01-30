import Button from "../../components/button"
import { NavLink } from "react-router"
import { useContext } from "react"
import { VisitContext } from "../../context/visitContext"

function Home() {
  const {visitInfo} = useContext(VisitContext)
  return (
    <div>
      
      <NavLink to="/visitData/setVisit">
          <Button title="Adicionar nova visita"/>
      </NavLink>
      {visitInfo.map((c, i) => <div key={i}> {c.name} {c.date} <NavLink to={"/visitData/" + i}>Edit</NavLink></div>)}
    </div>
  )
}

export default Home
