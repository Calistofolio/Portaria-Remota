import { useState, useRef, createContext } from "react";
import { useNavigate } from "react-router";

const VisitContext = createContext();

function VisitProvider({children}){
    const navigate = useNavigate();
    const dialogRef = useRef()
    const cancelRef = useRef()
    const [visitInfo, setVisitInfo] = useState([])
    const [index, setIndex] = useState()
    const [modalAction, setModalAction] = useState()
    
    function cancelVisit(){
        visitInfo.map((p, i) => i == index ? p.status = false : p.status = p.status)
        cancelRef.current.close()
        navigate("/")
      }

      function nav(path){
        path == null ? navigate("/") : navigate(path);
      }

    return(
        <VisitContext.Provider value={{ visitInfo, setVisitInfo, cancelVisit, nav, dialogRef, cancelRef, index, setIndex, modalAction, setModalAction }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}