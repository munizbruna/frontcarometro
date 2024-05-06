import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import Home from "../../img/home.png";
import Salas from "../../img/Salas.png"


const Navbar = () => {
  return (
    // Váriaval para toda a barra
    <div className="navbar">
      {/* Váriavel para a narra lateral */}
      <div className="sidebar">
        <ul>
          {/* Botão para retornar à home */}
          <li><Link to="/Carometro-universal/home"> <button><img src={Home} alt="Home" /> Página Inicial</button> </Link></li>
        </ul>

        <ul>
          {/* Botão para retornar à home */}
          <li><Link to="/Carometro-universal/turmas"> <button><img src={Salas} alt="sem imagem" /> Turmas</button> </Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
