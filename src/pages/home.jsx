import Button from "../components/button/button"
import { NavLink } from "react-router"

function Home() {
  return (
    <NavLink to="/visitData">
        <Button title="Adicionar nova visita"/>
    </NavLink>
  )
}

export default Home
