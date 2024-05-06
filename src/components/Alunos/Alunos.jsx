import React from 'react';
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router
import "./Alunos.css"; // Importa estilos CSS para este componente
import Header from '../Header/Header'; // Importa o componente Header
import Navbar from '../NavBar/Navbar'; // Importa o componente Navbar


import Aluno1 from "../../img/aluno 1.png"; // Importa a imagem do aluno

const Alunos = () => {

  // Simulação dos dados dos alunos - atualmente estático, mas poderia vir de um banco de dados
    // ESSA PORRA VAI VIR DO BANCO DE DADOS //

  const alunos = Array(16).fill().map((_, index) => ({
    login: {
      id: (index + 1).toString() // Gera IDs únicos para cada aluno (de 1 a 16)
    },
    foto: {
      foto: Aluno1 // Define a foto do aluno
    },
    name: {
      nome: `Guilherme`, 
      sobrenome: 'Devito'
    }
  }));

  return (
    <div className='alunos'> {/* Container principal */}
      <Header/> {/* Renderiza o componente Header */}
      <div className="flexAlunos"> {/* Container flexível para organização */}
        <Navbar/> {/* Renderiza o componente Navbar */}
        <div className="listaAlunos"> {/* Container para a lista de alunos */}
          {/* Mapeia os dados de cada aluno e renderiza um componente para cada um */}
          {alunos.map((aluno) => (
            <div key={aluno.login.id} className="aluno"> {/* Componente para cada aluno */}
              {/* Define um link para a página individual do aluno */}
              <Link to={`/Carometro-universal/aluno/${aluno.login.id}`}>
                {/* Renderiza a foto do aluno */}
                <img src={aluno.foto.foto} alt="Aluno" />
                {/* Renderiza o nome completo do aluno */}
                <p className='alunoNome'>{`${aluno.name.nome} ${aluno.name.sobrenome}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alunos;
