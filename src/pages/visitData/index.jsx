import Input from "../../components/input"
import Button from "../../components/button"
import { useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
import { VisitContext } from "../../context"
import MainCard from "../../components/main-card"
import style from "./VisitData.module.css"



function VisitData() {
  const params = useParams();
  const { visitInfo, setVisitInfo, addVisitFeedback, nav, cancelRef, setIndex } = useContext(VisitContext)
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
  },[])


  function handleInputChange(propName, propValue) {
    setThisVisit({ ...thisVisit, [propName]: propValue });
  }

  function handleClick(e){
    e.preventDefault();
    const thisDate = new Date()
    const date = (thisVisit.date + "T" + thisVisit.hour + ":00") 
    const visitDate = new Date(date)
    
    if(thisDate.getTime() > visitDate.getTime()){
      console.log("nhao")
    } else if (visitInfo == null) {
      setVisitInfo(thisVisit)
      addVisitFeedback()
      nav()
    } else if(params.id != "setVisit"){
      setVisitInfo(visitInfo.map((visit, i) => i == params.id ? thisVisit : visit));
      addVisitFeedback()
      nav()
    } else{
      setVisitInfo([...visitInfo, thisVisit])
      addVisitFeedback()
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
        <Input label="Nome do visitante" onchange={(e) => handleInputChange("name", e.target.value)} inputValue={thisVisit.name} place="Digite o nome do visitante" req={true}  inputType = "text" />
        <Input label="Data" place="Selecione a data" onchange={(e) => handleInputChange("date", e.target.value)} inputValue={thisVisit.date} req={true} inputType = "date" iId="date"/>
        <Input label="Hora" place="Digite a hora" onchange={(e) => handleInputChange("hour", e.target.value)} inputValue={thisVisit.hour} req={true} inputType = "time" iId="hour"/>
        <Input label="Tipo de documento" place="Digite o tipo de documento" onchange={(e) => handleInputChange("docType", e.target.value)} inputValue={thisVisit.docType} req={true} inputType = "text" />
        <Input label="Número do documento" place="Digite o número do documento" onchange={(e) => handleInputChange("docNum", e.target.value)} inputValue={thisVisit.docNum} req={true} inputType = "number"/>
        <Input label="Observação (Opcional)" place="Digite a observação" onchange={(e) => handleInputChange("obs", e.target.value)} inputValue={thisVisit.obs} inputType = "text"/>
      
      <div className={style.button}>
      {params.id != "setVisit" ? <span className={style.red}> <Button bType="button" onclick={() => cancelRef.current.showModal()} title="Cancelar visita"/> </span> : "" }
        <span>
          <Button bType="button" onclick={() => nav()} title="Voltar"/>
          </span>
          <span className={style.save}>
            <Button bType = "submit" title="Salvar"/>
          </span>
        </div>
      </form>
        </div>
      </MainCard>
    </div>
  
  )
}

export default VisitData
