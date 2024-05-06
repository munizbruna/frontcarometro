import React from 'react'; // Importa o módulo React
import chaveLogo from "../../img/chave.png"; // Importa a imagem da chave
import senaiLogo from "../../img/senai.png"; // Importa a imagem do Senai
import "./Cadastro.css"; // Importa os estilos CSS específicos para o componente
import { Link } from "react-router-dom"; // Importa o componente Link do React Router


const Cadastro = () => {
  return (
    <div className='cadastro'> {/* Container principal */}
      
      <div className='inputCadastro'> {/* Container para os campos de entrada */}
        <div className='geralCadastro'> {/* Container geral para organização */}

          <h1 className='titulo'>CADASTRO</h1> {/* Título do formulário de cadastro */}

          {/* Campos de entrada para usuário, e-mail, senha e confirmação de senha */}
          <label className="titulosCaixas" htmlFor="usuario">Usuário:</label>
          <input className="caixas" type="text" name="usuario" id="usuario" required/>

          <label className="titulosCaixas" htmlFor="email">E-mail: </label>
          <input className="caixas" type="email" name="email" id="email" required/>

          <label className="titulosCaixas" htmlFor="senha">Senha: </label>
          <input className="caixas" type="password" name="senha" id="senha" required/>

          <label className="titulosCaixas" htmlFor="confirmarSenha">Confirme senha:</label>
          <input className="caixas" type="text" name="confirmaSenha" id="confirmaSenha" required/>

          {/* Botão para continuar o cadastro, vinculado à rota '/Carometro-universal/ContinuarCadastro' */}
          <Link to={"/Carometro-universal/ContinuarCadastro"} className='button'>Continuar Cadastro</Link>
          
          {/* Link para redirecionar para a página de login, vinculado à rota '/Carometro-universal' */}
          <Link to={"/Carometro-universal"}>Já tem uma conta?</Link>

        </div>
      </div>

      <div className='cardSenai'> {/* Container para a parte visual */}
        <div id='imagens'> {/* Container para as imagens */}
          {/* Imagem do logo do Senai */}
          <img src={senaiLogo} alt="Senai" className='senaiLogo' />
          {/* Imagem da chave */}
          <img src={chaveLogo} alt="Chave" className='chaveLogoCadastro' />
        </div>
      </div>
    </div>
  )
}

export default Cadastro; // Exporta o componente Cadastro
