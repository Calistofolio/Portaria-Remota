import Input from "../../components/input"
import Button from "../../components/button"
import { NavLink, useNavigate, useParams } from "react-router"
import { useContext } from "react"
import { VisitContext } from "../../context/visitContext"
import MainCard from "../../components/main-card"


function VisitData() {
  const { visitInfo, setVisitInfo } = useContext(VisitContext)
  const params = useParams();
  const navigate = useNavigate();
  

  function handleClick(e){
    e.preventDefault();
    const name = document.getElementById("name")
    const date = document.getElementById("date")
    const hour = document.getElementById("hour")
    const docType = document.getElementById("docType")
    const docNum = document.getElementById("docNum")
    const obs = document.getElementById("obs")
    const status = true
    const thisDate = new Date()
    
    
    if (visitInfo == null) {
      setVisitInfo({name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value})
    } else if(thisDate > date.valueAsDate.getTime()){
      console.log("Não é possivel definir uma visita e")
    } else if(params.id != "setVisit"){
      setVisitInfo(visit => visit.map((visit, i) => i == params.id ? {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status.value} : visit));
      navigate("/")
    } else{
      setVisitInfo([...visitInfo, {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status.value}])
      navigate("/")
    }
  }

  return (
    <MainCard>
    <div>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <form onSubmit={handleClick}>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].name} : {value : null})} inputType = "text" iId="name"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].date} : {value : null})} inputType = "date" iId="date"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].hour} : {value : null})} inputType = "time" iId="hour"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docType} : {value : null})} inputType = "text"  iId="docType"/>
        <Input req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docNum} : {value : null})} inputType = "text" iId="docNum"/>
        <Input  {...(params.id != "setVisit" ? {value: visitInfo[params.id].obs} : {value : null})} inputType = "text" iId="obs"/>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
        <Button bType = "submit" title="Salvar"/>
      </form>
    </div>
    </MainCard>
  )
}

export default VisitData
