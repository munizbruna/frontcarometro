import React from "react";
import { useParams } from "react-router-dom";
import "./DetalhesAlunos.css";
import Header from "../Header/Header";
import Navbar from "../NavBar/Navbar";
import { useState } from "react";


// Importe a imagem do aluno
import Aluno1 from "../../img/aluno 1.png";
import Sair from "../../img/cancelar.png";

const DetalhesAluno = () => {
  const { id } = useParams(); // Obter o parâmetro de rota para o ID do aluno

  // Variáveis fictícias para simular os detalhes do aluno
  const aluno = {
    foto: {
      large: Aluno1, // Imagem do aluno
    },
    name: {
      nome: "Guilherme",
      sobrenome: "Devito",
    },
    genero: "Minha fêmea",
    idade: {
      age: 12,
    },
    email: "devito@gmail.com",
    telefone: "14 99637-9527",
    cpf: "11111111111",
    cep: "11111111",
    estado: "SP",
    tipo: "professor",
    idAuno: "1",
    password: "12345678",
    logradouro: "Rua top",
    bairro: "Bairro top",
    cidade: "Cidade top",
  };

  // Isso cria um card para quem está usando o carometro ver mais informações sobre o aluno, ele mostra todas informações que estão no banco de dados sobre ele
  // eu havia colocado tudo na primeira tela mas a estetica não ficou muito legal então fiz usando esse card
  // caso queira tirar vou deixar comentada a forma de por tudo no card pricipal e o que tirar desse card novo

  // ------------------------ REMOVER ESSA LINHA ----------------
  const [cardAberto, setCardAberto] = useState(false);

  const alertOcorrencia = () => {
    alert("Sua ocorrência foi enviada!");
  };

  const alertObservacao = () => {
    alert("Sua ocorrência foi enviada!");
  };

  return (
    <div className="detalhesAluno">
      <Header />
      <div className="NavbarDetalhesAlunos">
        <Navbar />
        <div className="navbarAlunos">
          <h2 className="tituloAlunos">Detalhes do Aluno</h2>

          {aluno ? (
            <div className="infoAluno">
              <div>
                <img
                  src={aluno.foto.large}
                  alt="Estudante"
                  className="fotoAluno"
                />
              </div>

              <div className="infoApi">
                <label>
                  <strong>Nome:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.name.nome} ${aluno.name.sobrenome}`}
                  />
                </label>

                <label>
                  <strong>Email:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.email}`}
                  />
                </label>

                <label>
                  <strong>Telefone:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.telefone}`}
                  />
                </label>

                {/* Caso queira deixar tudo em uma pag sem o outro card tire o comentario do código seguinte e apgue as alterações indicadas do card novo */}

                {/* <label>
                  <strong>Cpf:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.cpf}`}
                  />
                </label>

                <label>
                  <strong>Cep:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.cep}`}
                  />
                </label>


                <label>
                  <strong>Estado:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.estado}`}
                  />
                </label>

                <label>
                  <strong>Tipo de usuario:</strong>
                  <input
                    className="inputAlunos"
                    type="text"
                    disabled
                    value={`${aluno.tipo}`}
                  />
                </label> */}


                {/* Apartir desse ponto pode ser apagado caso queria tirar o card adicional (ira ter uma linha especificando quando acaba*/}
                <div className="CardMaisAlunos">
                  <button
                    className="buttonMaisAlunos"
                    onClick={() => setCardAberto(true)}
                  >
                    Mais detalhes sobre o aluno
                  </button>
                  {cardAberto && (
                    <div className="maisAlunos">
                      <div className="HeaderMaisAlunos">
                        <h2>Mais detalhes sobre o Aluno </h2>
                        <button
                          className="buttonSair"
                          onClick={() => setCardAberto(false)}
                        >
                          <img className="buttonSair" src={Sair} alt="" />{" "}
                        </button>
                      </div>

                      <div className="conteudoMaisAlunos">
                        <div className="cardprimeiro">
                          <img
                            src={aluno.foto.large}
                            alt="Estudante"
                            className="fotoAluno"
                          />

                          <div className="primeiraDiv">
                            <label className="labelQuebra">
                              <strong>Nome:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.name.nome} ${aluno.name.sobrenome}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>ID:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.idAuno}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Email:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.email}`}
                              />
                            </label>
                          </div>
                        </div>

                        <div className="maisDetalhes">
                          <div>
                            <label className="labelQuebra">
                              <strong>Telefone:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.telefone}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Cpf:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.cpf}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Senha:</strong>{" "}
                              {/* Eu não sei se vai ter a senha */}
                              <input
                                className="inputAlunos"
                                type="password"
                                disabled
                                value={`${aluno.password}`}
                              />
                            </label>
                          </div>

                          <div>
                            <label className="labelQuebra">
                              <strong>Cep:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.cep}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Logradouro:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.logradouro}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Bairro:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.bairro}`}
                              />
                            </label>
                          </div>

                          <div className="ultimaDiv">
                            <label className="labelQuebra">
                              <strong>Cidade:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.cidade}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Estado:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.estado}`}
                              />
                            </label>

                            <label className="labelQuebra">
                              <strong>Tipo de usuario:</strong>
                              <input
                                className="inputAlunos"
                                type="text"
                                disabled
                                value={`${aluno.tipo}`}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* ------------------------------------------------------ Apague até aqui ---------------------------------------------------*/}
              </div>
              <div className="areaProfessor">
                <h4 className="tituloOcorrencia">Motivos de ocorrência</h4>
                <div className="inputOcorrencia">
                  <div className="quebraLinha">
                    <div className="linha1">
                      <div className="margin">
                        <input className="radio" type="radio" name="" id="" />
                        <label htmlFor="indisciplina">Indisciplina</label>
                      </div>

                      <div className="margin">
                        <input className="radio" type="radio" name="" id="" />
                        <label htmlFor="educacao">Falta de Educação</label>
                      </div>

                      <div className="margin">
                        <input className="radio" type="radio" name="" id="" />
                        <label htmlFor="depredacao">
                          Depredação do patrimônio
                        </label>
                      </div>
                    </div>

                    <div className="linha2">
                      <div className="margin">
                        <input className="radio" type="radio" name="" id="" />
                        <label htmlFor="regras">Descumprir Regras</label>
                      </div>

                      <div className="margin">
                        <input className="radio" type="radio" name="" id="" />
                        <label htmlFor="brigas">Brigas</label>
                      </div>
                    </div>
                  </div>

                  <div className="linha3">
                    <div className="outros">
                      <label htmlFor="outros" className="radio">
                        Outros:
                      </label>
                      <input
                        className="inputOutros"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="horario">
                    <label htmlFor="horario">Horário: </label>
                    <select id="horario" name="horario">
                      <option value="ensino_medio">Ensino Médio</option>
                      <option value="ensino_tecnico">Ensino Técnico</option>
                    </select>
                  </div>

                  <div className="professor">
                    <label className="radio" htmlFor="professor">
                      Professor:
                    </label>
                    <input className="professor" type="text" placeholder="" />
                  </div>

                  <button
                    className="buttonOcorrencia"
                    onClick={alertOcorrencia}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Carregando...</p>
          )}

          <div className="anotacao">
            {" "}
            {/*Eu não sei se isso vai existir na versão final */}
            <h3>Observações sobre o Aluno:</h3>
            <input type="text" className="inputAnotacao" />
            <button className="buttonAnotacao" onClick={alertObservacao}>
              {" "}
              Enviar{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalhesAluno;
