import style from "./VisitStatus.module.css"
function VisitStatus(props) {

  return (
    <div className={style.status}>
        {props.visit == true ? <p className={style.visitOn}>Visita não realizada</p> : <p className={style.visitOff}>Cancelada</p>}
    </div>
  )
}

export default VisitStatus