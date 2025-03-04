import { useState, useRef, createContext, useEffect } from "react";
import { useNavigate } from "react-router";

const VisitContext = createContext();

function VisitProvider({children}){
    const navigate = useNavigate();
    const dialogRef = useRef()
    const cancelRef = useRef()
    const [visitInfo, setVisitInfo] = useState([])
    const [index, setIndex] = useState()
    const [modalAction, setModalAction] = useState()
    const [success, setSuccess] = useState()

    function failureFeedBack(){
      setSuccess(false)
      dialogRef.current.showModal()
    }

    function addVisitFeedback(){
      setModalAction("adicionada")
      setSuccess(true)
      dialogRef.current.showModal()
    }
    
    function cancelVisit(){
        visitInfo.map((p, i) => i == index ? p.status = false : p.status = p.status)
        cancelRef.current.close()
        navigate("/")
        setModalAction("removida")
        setSuccess(true)
        dialogRef.current.showModal()
      }

      function nav(path){
        path == null ? navigate("/") : navigate(path);
      }

    return(
        <VisitContext.Provider value={{ addVisitFeedback, visitInfo, setVisitInfo, cancelVisit, nav, dialogRef, cancelRef, index, setIndex, modalAction, success, failureFeedBack }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}