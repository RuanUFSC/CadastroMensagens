const Sequelize = require('sequelize')

//Conexão com o banco de dados
const sequelize = new Sequelize('mensagem_db', 'root', 'Rulo@2609', { //'nome do banco', 'root', 'senha do banco'
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}