import { useState, useRef, createContext } from "react";
import { useNavigate } from "react-router";

const VisitContext = createContext();

function VisitProvider({children}){
    const navigate = useNavigate();
    const dialogRef = useRef()
    const [visitInfo, setVisitInfo] = useState([])
    
    function cancelVisit(visitId){
        visitInfo.map((p, i) => i == visitId ? p.status = false : p.status = p.status)
        navigate("/")
      }

      function nav(path){
        path == null ? navigate("/") : navigate(path);
      }

    return(
        <VisitContext.Provider value={{ visitInfo, setVisitInfo, cancelVisit, nav, dialogRef }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}