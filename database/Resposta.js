// criação model resposta
const Sequelize = require('sequelize') //importando sequelize
const connection = require('./database') //inportando conexão

const Resposta = connection.define("respostas",{
    corpo:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Resposta.sync({force: false}).then(() =>{
    console.log("Tabela 'respostas' criada.")
})

module.exports = Resposta