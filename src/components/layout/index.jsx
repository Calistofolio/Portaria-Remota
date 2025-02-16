import Header from "../header"
import Footer from "../footer"
import FeedbackMessage from "../feedback-message"
import { Outlet } from "react-router"
import { useContext, useEffect } from "react"
import { VisitContext } from "../../context"

function Layout() {
    const { visitInfo, dialogRef } = useContext(VisitContext)

    useEffect(() =>{
        dialogRef.current.showModal()
      },[...visitInfo.map(item => item.status)])

      useEffect(() =>{
        dialogRef.current.showModal()
      },[visitInfo])

    return (
        <div>
            <Header/>
            <Outlet/>
            <FeedbackMessage/>
           <Footer/>
        </div>
    )
  }
  
  export default Layout
  