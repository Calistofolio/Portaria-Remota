function CancelModal() {

    return (
        <div>
            <dialog id="modal">
                <p>Visita adicionada com sucesso!</p>
                <button id="closeModal" onClick={() => modal.close()}>X</button>
            </dialog>
        </div>
    )
  }
  
  export default CancelModal
  