import { useContext } from "react"
import { VisitContext } from "../../context"
import style from "./CancelModal.module.css"
import Button from "../button"


function CancelModal(props) {

    const {cancelVisit, cancelRef} = useContext(VisitContext)

    return (
            <dialog className={style.cancelModal} ref={cancelRef}>
                <h4 className={style.modalTitle}>Cancelamento</h4>
                <h2>Tem certeza que deseja cancelar essa visita?</h2>
                <div className={style.button}>
                    <Button title="Não" onclick={() => cancelRef.current.close()}/>
                    <span className={style.cancelButton}>
                        <Button title="Sim, quero cancelar a visita" onclick={() => cancelVisit(props.index)}/>
                    </span>
                </div>
            </dialog>
    )
  }
  
  export default CancelModal
  