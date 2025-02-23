import { useContext } from "react"
import style from "./FeedbackMessage.module.css"
import { VisitContext } from "../../context"

function FeedbackMessage() {

    const {dialogRef, modalAction, success} = useContext(VisitContext)

    return (
        <div>
            {success ? (
                <dialog ref={dialogRef} className={style.success}>
                    <p>Visita {modalAction} com sucesso!</p>
                    <button id="closeModal" onClick={() => dialogRef.current.close()}>X</button>
                </dialog>
            ) : (
                <dialog ref={dialogRef} className={style.failure}>
                    <p>Não foi possivel adicionar a visita</p>
                    <button id="closeModal" onClick={() => dialogRef.current.close()}>X</button>
                </dialog>
            )
            }
        </div>
    )
  }
  
  export default FeedbackMessage
  