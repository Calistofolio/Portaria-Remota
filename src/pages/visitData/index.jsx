import Input from "../../components/input"
import Button from "../../components/button"
import { useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
import { VisitContext } from "../../context"
import MainCard from "../../components/main-card"
import style from "./VisitData.module.css"
import CancelModal from "../../components/cancel-modal"


function VisitData() {
  const params = useParams();
  const { visitInfo, setVisitInfo, nav, cancelRef, setIndex } = useContext(VisitContext)
  const [thisVisit, setThisVisit] = useState({
    name: "",
    date: "",
    hour: "",
    docType: "",
    docNum: "",
    status: true,
    obs: "",
  })
  

  useEffect(() => {
    setIndex(params.id)
    if(params.id != "setVisit"){
      setThisVisit(visitInfo[params.id])
    }
  }),[]

  function handleClick(e){
    e.preventDefault();
    const thisDate = new Date()
    
    
    if (visitInfo == null) {
      setVisitInfo(thisVisit)
      nav()
    } else if(params.id != "setVisit"){
      setVisitInfo(visitInfo.map((visit, i) => i == params.id ? thisVisit : visit));
      nav()
    } else{
      setVisitInfo([...visitInfo, thisVisit])
      nav()
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
        <Input label="Nome do visitante" onchange={(e) => thisVisit.name = e.target.value} inputValue={thisVisit.name} place="Digite o nome do visitante" req={true}  inputType = "text" />
        <Input label="Data" place="Selecione a data" onchange={(e) => thisVisit.date = e.target.value} inputValue={thisVisit.date} req={true} inputType = "date" iId="date"/>
        <Input label="Hora" place="Digite a hora" onchange={(e) => thisVisit.hour = e.target.value} inputValue={thisVisit.hour} req={true} inputType = "time" iId="hour"/>
        <Input label="Tipo de documento" place="Digite o tipo de documento" onchange={(e) => thisVisit.docType = e.target.value} inputValue={thisVisit.docType} req={true} inputType = "text" />
        <Input  label="Número do documento" place="Digite o número do documento" onchange={(e) => thisVisit.docNum = e.target.value} inputValue={thisVisit.docNum} req={true} inputType = "number"/>
        <Input label="Observação (Opcional)" place="Digite a observação" onchange={(e) => thisVisit.obs = e.target.value} inputValue={thisVisit.obs} inputType = "text"/>
      
      <div className={style.button}>
        <div>
          <Button bType="button" onclick={() => nav()} title="Voltar"/>
          </div>
          <div className={style.save}>
            <Button bType = "submit" title="Salvar"/>
          </div>
        </div>
      </form>
      {params.id != "setVisit" ? <div className={style.red}> <Button onclick={() => cancelRef.current.showModal()} title="Cancelar visita"/> </div> : "" }
        </div>
        <CancelModal/>
      </MainCard>
    </div>
  
  )
}

export default VisitData
