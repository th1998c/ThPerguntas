// criação model pergunta
const Sequelize = require('sequelize') //importando sequelize
const connection = require('./database') //inportando conexão

const Pergunta = connection.define('perguntas',{ //'pergunta' é o nome da tabela
    titulo:{                    //definindo campo e seus tipos
        type: Sequelize.STRING,
        allowNUll:false         //não permite null
    },
    decricao:{
        type: Sequelize.TEXT,
        allowNUll:false
    }
});

Pergunta.sync({force: false}).then(() => {  // passando tabela para criação caso não exista
    console.log("Tabela 'pergunta' criada.")
})
