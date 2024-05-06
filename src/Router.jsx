//Insere as rotas no projeto
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// Início da importação as paginas feitas
import Login from "./components/Login/Login.jsx";
import Cadastro from "./components/Cadastro/Cadastro.jsx";
import Home from "./components/Home/Home.jsx";
import Alunos from "./components/Alunos/Alunos.jsx";
import DetalhesAluno from "./components/DetalhesAlunos/DetalhesAlunos.jsx";
import ContinuarCadastro from "./components/ContinuarCadastro/ContinuarCadastro.jsx";
import Turmas from "./components/Turmas/Turmas.jsx"


//Fim das importações das páginas

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* cria as rotas e seus caminhos */}
        <Routes>
          {/* Define as rotas e seus caminhos */}
          <Route path="/Carometro-universal/" element={<Login />} exact  />
          <Route path="/Carometro-universal/home" element={<Home />} />
          <Route path="/Carometro-universal/turmas" element={<Turmas />} />
          <Route path="/Carometro-universal/cadastro" element={<Cadastro />} />
          <Route path="/Carometro-universal/alunos" element={<Alunos />} />
          <Route path="/Carometro-universal/continuarCadastro" element={<ContinuarCadastro />} />
          

          {/* Rotas e caminhos para as páginas de cada aluno e dos alunos da sala */}
          <Route path="/Carometro-universal/aluno/:id" element={<DetalhesAluno />} />
          <Route path="*" element={<Alunos />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;