import { useContext } from "react"
import style from "./FeedbackMessage.module.css"
import { VisitContext } from "../../context"

function FeedbackMessage() {

    const {dialogRef, modalAction} = useContext(VisitContext)

    return (
       
            <dialog ref={dialogRef} className={style.feedback}>
                <p>Visita {modalAction} com sucesso!</p>
                <button id="closeModal" onClick={() => dialogRef.current.close()}>X</button>
            </dialog>
    )
  }
  
  export default FeedbackMessage
  