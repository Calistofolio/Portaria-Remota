import { createContext } from "react";
import { useState } from "react";

const VisitContext = createContext();

function VisitProvider({children}){
    const [visitInfo, setVisitInfo] = useState([])
    
    return(
        <VisitContext.Provider value={{ visitInfo, setVisitInfo }}>
            {children}
        </VisitContext.Provider>
    )
}

export { VisitProvider, VisitContext}