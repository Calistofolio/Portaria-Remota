import { useContext } from "react"
import { VisitContext } from "../../context"
import Button from "../button"
import { useParams } from "react-router"

function CancelModal(props) {
    const params = useParams();

    const {cancelVisit, cancelRef} = useContext(VisitContext)

    return (
            <dialog ref={cancelRef}>
                <p>Visita adicionada com sucesso!</p>
                <Button title="Cancel" onclick={() => cancelVisit(props.index)}/>
                <Button title="close" onclick={() => cancelRef.current.close()}/>
            </dialog>

    )
  }
  
  export default CancelModal
  