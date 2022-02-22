# Seja bem-vindo ao meu projeto, espero que goste :D

-A aplicação apresenta em uma única página relacionadas ao banco de dados, o cadastro de dados, a exibição deles e a exclusão.

-Utilizei o banco de dados MySQL para desenvolver a aplicação e para fazer a conexão com o banco utilizei o Sequelize (arquivo db.js).

# Requisitos

Para executar a aplicação será necessário:

- Ambiente de desenvolvimento integrado (IDE), recomendo o Visual Studio Code
- Node.js
- MySQL ou outro sistema de gerenciamento de banco de dados
- Algumas dependêbcias instaladas por meio do npm install



# Observações importantes
-O nome do banco de dados utilizado foi "mensagem-db", caso utilizar outro nome, deve ser alterado no arquivo db.js

-Dentro do banco "mensagem-db" deve haver uma tabela com o nome "mensagens" que pode ser criada por meio do arquivo Mensagem.js tirando as "//" no início da linha 16 e rodando o nodemon (após a criação da tabela, pode deixar essa linha comentada novamente)

-A senha do banco de dados precisa ser alterada no arquivo db.js no lugar de "SENHA DO BANCO" incluir a senha do MySQL

-Para rodar a aplicação pode ser necessária a instalação do sequelize e rodar o nodemon, para isso basta digitar os seguintes códigos no diretório da pasta:

npm install --save sequelize

nodemon app.js

e abrir o link http://localhost:8088/ no navegador


# Tecnologias utilizadas
- Sequelize, Express, Handlebars, Body-Parser e Moment.js.
