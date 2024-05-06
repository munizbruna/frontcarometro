# Carômetro Escolar em React

Este projeto foi desenvolvido como parte de um estudo sobre React e tem como objetivo criar um carômetro específico para uma escola. O Carômetro Escolar é uma aplicação que permite avaliar e monitorar diferentes aspectos relacionados à vida escolar.


## Componentes
### Alunos


O componente `Alunos` é responsável por exibir uma lista de alunos, obtidos de uma API usando o `axios`. Cada aluno é representado por um link que direciona para a página de detalhes do aluno, que parece ser `/carometro/aluno/:id`. Este componente também importa os componentes `Header` e `Navbar`.

### DetalhesAluno

O componente `DetalhesAluno` é responsável por exibir os detalhes de um aluno específico, obtidos da mesma API usando o `axios`. Ele também permite ao usuário registrar motivos de ocorrência, fazer anotações e interagir com campos de entrada.

## Como Executar

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório para o seu ambiente local.
3. No diretório do projeto, execute o comando `npm install` para instalar as dependências.
4. Após a instalação das dependências, execute o comando `npm run dev` para iniciar o servidor de desenvolvimento.
5. Abra seu navegador e acesse `http://localhost:5173` para acessar o Carômetro Escolar.

## Tecnologias Utilizadas

- React
- Axios
- React Router
- CSS


