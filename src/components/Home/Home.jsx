import React from 'react';
import Navbar from '../NavBar/Navbar';
import Header from '../Header/Header';
import "./Home.css";


import Mancha from "../../img/fundo_senai.png";
import Senai from "../../img/senai.jpg";

const Home = () => {
  return (
    <div>
      <Header texto="CAROMETRO"/>
      <div className="geralHome">
        <Navbar/>

        <div className="conteudoHome">

        <div className="esquerdaHome">
          <div className="imagemComTitulo">
            <img src={Mancha} alt="" className='manchaHome'/>
            <p className='tituloSobreImagem'>CARÔMETRO</p>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
