import MainCard from "../main-card"
import Logo from "../../assets/Logo-SanPedro.png"

MainCard

function AptInfo() {

    return (
        <div>
            <MainCard>
                <img src={Logo} alt="" />
                <p>Apartamento 405, Bloco A</p>
            </MainCard>
        </div>
    )
  }
  
  export default AptInfo
  