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
    const hour = document.getElementById("hour")
    const docType = document.getElementById("docType")
    const docNum = document.getElementById("docNum")
    const obs = document.getElementById("obs")
    const status = document.getElementById("status")
    const thisDate = new Date().getTime()
    
    
    if (visitInfo == null) {
      setVisitInfo({name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value})
    } else if(thisDate > date.valueAsDate.getTime()){
      console.log("Não é possivel definir uma visita e")
    } else{
      setVisitInfo([...visitInfo, {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value}])
    }
  }

  return (
    <div>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <form action="/" onSubmit={handleClick}>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].name} : {value : null})} inputType = "text" iId="name"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].date} : {value : null})} inputType = "date" iId="date"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].hour} : {value : null})} inputType = "text" iId="hour"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docType} : {value : null})} inputType = "text"  iId="docType"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docNum} : {value : null})} inputType = "text" iId="docNum"/>
        <Input  {...(params.id != "setVisit" ? {value: visitInfo[params.id].obs} : {value : null})} inputType = "text" iId="obs"/>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <Button bType = "submit" title="Salvar"/>
      </form>
    </div>
  )
}

export default VisitData
