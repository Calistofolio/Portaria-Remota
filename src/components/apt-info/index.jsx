import MainCard from "../main-card"
import Logo from "../../assets/Logo-SanPedro.png"
import style from "./AptInfo.module.css"

function AptInfo() {

    return (
        <div>
            <MainCard>
                <img className={style.logo} src={Logo} alt="San Pedro Residence Logo" />
                <p className={style.apt}>Apartamento 405, Bloco A</p>
            </MainCard>
        </div>
    )
  }
  
  export default AptInfo
  