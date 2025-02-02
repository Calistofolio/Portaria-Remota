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

    return(
        <VisitContext.Provider value={{ visitInfo, setVisitInfo, cancelVisit }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}