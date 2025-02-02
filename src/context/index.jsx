import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const VisitContext = createContext();

function VisitProvider({children}){
    const navigate = useNavigate();
    const [visitInfo, setVisitInfo] = useState([])
    
    function cancelVisit(visitId){
        visitInfo.map((p, i) => i == visitId ? p.status = false : p.status = p.status)
        navigate("/")
      }

      function nav(path){
        path == null ? navigate("/") : navigate(path);
      }

    return(
        <VisitContext.Provider value={{ visitInfo, setVisitInfo, cancelVisit, nav }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}