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

    const afterFirstRender = (callback, dependence) =>{
      const firstRender = useRef(true);
      useEffect(() =>{
        if(!firstRender){
          callback();
        }
      }, dependence)

      useEffect(() =>{
        firstRender.current = false
      },[])
    };
    
    function cancelVisit(){
        visitInfo.map((p, i) => i == index ? p.status = false : p.status = p.status)
        cancelRef.current.close()
        navigate("/")
      }

      function nav(path){
        path == null ? navigate("/") : navigate(path);
      }

    return(
        <VisitContext.Provider value={{ visitInfo, setVisitInfo, afterFirstRender, cancelVisit, nav, dialogRef, cancelRef, index, setIndex, modalAction, setModalAction }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}