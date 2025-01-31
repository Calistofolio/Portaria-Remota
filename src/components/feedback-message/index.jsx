import style from "./FeedbackMessage.module.css"

function FeedbackMessage() {


    return (
        <div>
            <dialog id="modal" className={style.feedback}>
                <p>Visita adicionada com sucesso!</p>
                <button id="closeModal" onClick={() => modal.close()}>X</button>
            </dialog>
        </div>
    )
  }
  
  export default FeedbackMessage
  