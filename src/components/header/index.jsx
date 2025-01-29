import { Outlet } from "react-router"
import Logo from "../../assets/logo.png"
import Avatar from "../../assets/Avatar.png"
import Button from "../button"
import { NavLink } from "react-router"
import style from "./Header.module.css"

function Header() {

    return (
        <div>
            <div className={style.header}>
                <span>
                    <NavLink to="/">
                        <img src={Logo}alt="" />
                    </NavLink>
                </span>
                <span>
                    Roberto
                    <img src={Avatar}alt="" />
                </span>
                <span>
                    <Button title="Sair"/>
                </span>
            </div>
            <Outlet/>
        </div>
    )
  }
  
  export default Header
  