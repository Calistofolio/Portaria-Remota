import Header from "../header"
import Footer from "../footer"
import FeedbackMessage from "../feedback-message"
import { Outlet } from "react-router"
import { useContext, useEffect } from "react"
import { VisitContext } from "../../context"
import CancelModal from "../cancel-modal"

function Layout() {
    const { visitInfo, dialogRef, setModalAction, afterFirstRender } = useContext(VisitContext)

    afterFirstRender(() =>{
        setModalAction("removida")
        dialogRef.current.showModal()
      },[...visitInfo.map(item => item.status)])

      afterFirstRender(() =>{
        setModalAction("adicionada")
        dialogRef.current.showModal()
      },[visitInfo])
      

    return (
        <div>
            <Header/>
            <Outlet/>
            <CancelModal/>
            <FeedbackMessage/>
           <Footer/>
        </div>
    )
  }
  
  export default Layout
  