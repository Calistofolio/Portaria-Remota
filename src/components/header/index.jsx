import Logo from "../../assets/logo.png"
import Avatar from "../../assets/Avatar.png"
import Button from "../button"
import { NavLink } from "react-router"
import style from "./Header.module.css"
import Family from "../../assets/Family.png"

function Header() {

    return (
        <div>
            <div className={style.header}>
                <div>
                    <NavLink to="/">
                        <img src={Logo}alt="" />
                    </NavLink>
                </div>
                <div>
                    <div className={style.profile}>
                        <div className={style.name}>
                            Roberto
                        </div>
                        <img className={style.userPic} src={Avatar}alt="User avatar" />
                        <Button title="Sair"/>
                    </div>
                </div>
            </div>
            <img src={Family} className={style.family}  alt="" />
        </div>
    )
  }
  
  export default Header
  