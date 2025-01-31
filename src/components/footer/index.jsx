import style from "./Footer.module.css"
import { Outlet } from "react-router"
import { FaFacebookF } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa"
function Footer() {

    return (
        <div>
            <Outlet/>
            <footer className={style.footer}>
                <div>
                    © 2025 Accenture. All rights reserved.
                </div>
                <div className={style.icon}>
                    <FaFacebookF/>
                    <FaDribbble/>
                </div>
            </footer>
        </div>
    )
  }
  
  export default Footer
  