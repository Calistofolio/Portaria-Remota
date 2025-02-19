import Header from "../header"
import Footer from "../footer"
import FeedbackMessage from "../feedback-message"
import { Outlet } from "react-router"
import CancelModal from "../cancel-modal"

function Layout() {


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
  