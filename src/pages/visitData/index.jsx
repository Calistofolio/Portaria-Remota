import Input from "../../components/input"
import Button from "../../components/button"
import { NavLink } from "react-router"

function VisitData() {
  return (
    <div>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <Input inputType = "text"/>
      <Input inputType = "date"/>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <Button title="Salvar"/>
    </div>
  )
}

export default VisitData
