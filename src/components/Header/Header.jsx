import React from 'react'
import "./Header.css"
// Importa a logo
import senaiLogo from "../../img/senai.png";
import { Link } from 'react-router-dom';


const Header = ({texto}) => {
  return (
    // Div com todas as informações do header
        <div className="header">
          {/* Foto da logo */}
        <Link to={"/Carometro-universal/home"} className='img_header'>
        <img src={senaiLogo} alt="Senai" className='logoHome' />
        <p className='legendaHeader'>SENAI "Shunji Nishimura"</p>

        </Link>

        </div>
  )
}

export default Header
