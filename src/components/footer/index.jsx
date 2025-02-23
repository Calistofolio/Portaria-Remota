import style from "./Footer.module.css"
import { FaFacebookF } from "react-icons/fa"
import { FaDribbble } from "react-icons/fa"
function Footer() {

    return (
        <div>
            <div className={style.relative}>
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
        </div>
    )
  }
  
  export default Footer
  