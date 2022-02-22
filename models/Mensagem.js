const db = require('./db.js')

const Mensagem = db.sequelize.define('mensagens', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    mensagem: {
        type: db.Sequelize.TEXT, //STRING TEM LIMITE DE CHAR, TEXT NÃO TEM
        allowNull: false,
    }
})

//Mensagem.sync({force:true}) //PARA CRIAR A TABELA NO BANCO
module.exports = Mensagem;