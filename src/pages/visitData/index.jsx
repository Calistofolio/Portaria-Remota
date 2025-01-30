import Input from "../../components/input"
import Button from "../../components/button"
import { NavLink, useParams } from "react-router"
import { useContext } from "react"
import { VisitContext } from "../../context/visitContext"

function VisitData() {
  const { visitInfo, setVisitInfo } = useContext(VisitContext)
  const params = useParams();
  

  function handleClick(e){
    e.preventDefault();
    const name = document.getElementById("name")
    const date = document.getElementById("date")
    if (visitInfo == null) {
      setVisitInfo({name: name.value, date: date.value})
    } else{
      setVisitInfo([...visitInfo, {name: name.value, date: date.value}])
    }
  }

  return (
    <div>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <form action="/" onSubmit={handleClick}>
        <Input {...(params.id != "setVisit" ? {value: visitInfo[params.id].name} : {value : null}) }
          inputType = "text" iId="name"/>
        <Input inputType = "date" iId="date"/>
        <Input inputType = "text" iId=""/>
        <Input inputType = "text" iId=""/>
        <Input inputType = "text" iId=""/>
        <Input inputType = "text" iId=""/>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <Button bType = "submit" title="Salvar"/>
      </form>
      {params.id}
    </div>
  )
}

export default VisitData
