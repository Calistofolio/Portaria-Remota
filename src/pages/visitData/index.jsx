import Input from "../../components/input"
import Button from "../../components/button"
import { useNavigate, useParams } from "react-router"
import { useContext } from "react"
import { VisitContext } from "../../context"
import MainCard from "../../components/main-card"
import style from "./VisitData.module.css"


function VisitData() {
  const { visitInfo, setVisitInfo, cancelVisit, nav } = useContext(VisitContext)
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
      setVisitInfo(visit => visit.map((visit, i) => i == params.id ? {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status} : visit));
      navigate("/")
     
    } else{
      setVisitInfo([...visitInfo, {name: name.value, date: date.value, hour: hour.value, docType: docType.value, docNum: docNum.value, obs: obs.value, status: status}])
      navigate("/")
    }
  }


  return (
    
    <div className={style.position}>
      <div>
        <Button onclick={() => nav()} title="Voltar"/>
        </div>
      <MainCard>
        <div className={style.content}>
      <div className={style.title}>
        {params.id == "setVisit" ? <h2>Adicionar visita</h2> : <h2>Editar visita</h2> }
    </div>
      <form onSubmit={handleClick}>
        <Input label="Nome do visitante" place="Digite o nome do visitante" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].name} : {value : null})} inputType = "text" iId="name"/>
        <Input label="Data" place="Selecione a data" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].date} : {value : null})} inputType = "date" iId="date"/>
        <Input label="Hora" place="Digite a hora" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].hour} : {value : null})} inputType = "time" iId="hour"/>
        <Input label="Tipo de documento" place="Digite o tipo de documento" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docType} : {value : null})} inputType = "text"  iId="docType"/>
        <Input label="Número do documento" place="Digite o número do documento" req={true} {...(params.id != "setVisit" ? {value: visitInfo[params.id].docNum} : {value : null})} inputType = "number" iId="docNum"/>
        <Input label="Observação (Opcional)" place="Digite a observação"  {...(params.id != "setVisit" ? {value: visitInfo[params.id].obs} : {value : null})} inputType = "text" iId="obs"/>
      
      <div className={style.button}>
        <div>
          <Button onclick={() => nav()} title="Voltar"/>
          </div>
          <div className={style.save}>
            <Button  bType = "submit" title="Salvar"/>
          </div>
        </div>
      </form>
      {params.id != "setVisit" ? <div className={style.red}> <Button onclick={() => cancelVisit(params.id)} title="Cancelar visita"/> </div> : "" }
        </div>
      </MainCard>
    </div>
  
  )
}

export default VisitData
