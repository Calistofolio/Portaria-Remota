import Input from "../../components/input"
import Button from "../../components/button"
import { NavLink, useNavigate, useParams } from "react-router"
import { useContext } from "react"
import { VisitContext } from "../../context/visitContext"
import MainCard from "../../components/main-card"
import FeedbackMessage from "../../components/feedback-message"
import style from "./VisitData.module.css"


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
    const modal = document.getElementById("modal")
    const status = true
    const thisDate = new Date()
    
    
    if (visitInfo == null) {
      setVisitInfo({name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value})
    } else if(thisDate > date.valueAsDate.getTime()){
      console.log("Não é possivel definir uma visita e")
    } else if(params.id != "setVisit"){
      setVisitInfo(visit => visit.map((visit, i) => i == params.id ? {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status} : visit));
      modal.showModal()
     
    } else{
      setVisitInfo([...visitInfo, {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status}])
      navigate("/")
    }
  }

  function cancelVisit(){
    const name = document.getElementById("name")
    const date = document.getElementById("date")
    const hour = document.getElementById("hour")
    const docType = document.getElementById("docType")
    const docNum = document.getElementById("docNum")
    const obs = document.getElementById("obs")
    const modal = document.getElementById("modal")
    const status = false
    setVisitInfo(visit => visit.map((visit, i) => i == params.id ? {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status} : visit));
    navigate("/")
  }

  return (
    
    <div className={style.position}>
       <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
      <MainCard>
        
      <div>
        {params.id == "setVisit" ? <h2>Adicionar visita</h2> : <h2>Editar visita</h2> }
    </div>
      <form onSubmit={handleClick}>
        <Input place="Digite o nome do visitante" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].name} : {value : null})} inputType = "text" iId="name"/>
        <Input place="Selecione a data" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].date} : {value : null})} inputType = "date" iId="date"/>
        <Input place="Digite a hora" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].hour} : {value : null})} inputType = "time" iId="hour"/>
        <Input place="Digite o tipo de documento" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docType} : {value : null})} inputType = "text"  iId="docType"/>
        <Input place="Digite o número do documento" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docNum} : {value : null})} inputType = "number" iId="docNum"/>
        <Input place="Digite a observação"  {...(params.id != "setVisit" ? {value: visitInfo[params.id].obs} : {value : null})} inputType = "text" iId="obs"/>
      <NavLink to="/">
        <Button title="Voltar"/>
      </NavLink>
        <Button bType = "submit" title="Salvar"/>
      </form>
      <Button onclick={() => cancelVisit()} title="Cancelar visita"/>
      </MainCard>
      
    </div>
  
  )
}

export default VisitData
