import Header from "../header"
import Footer from "../footer"
import FeedbackMessage from "../feedback-message"
import { Outlet } from "react-router"

function Layout() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <FeedbackMessage/>
           
        </div>
    )
  }
  
  export default Layout
  