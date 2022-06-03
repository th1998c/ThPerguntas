const express = require("express")
const req = require("express/lib/request")
const app = express()

//chamando conexão banco
const connection = require("./database/database")
//importando model pergunta
const pergunta = require('./database/Pergunta')
//importando model respostas
const resposta = require('./database/Resposta')
//database
connection.authenticate()
.then(() =>{
    console.log('conexão feita com o banco de dados')
})
.catch((msgErro) =>{
    console.log(erro)
})

//chamando body-parser
const bodyParser = require("body-parser")
const Pergunta = require("./database/Pergunta")

// chamano ejs
app.set("view engine","ejs")
// arquivos estaticos
app.use(express.static('public'))
//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas

// rota inicial
app.get("/",(req, res) => {
    // buscando perguntas no banco
    Pergunta.findAll({ raw: true, order:[ //raw receber apenas dados do banco // order ordenar
    ['id','DESC'] // DESC = decrescente ASC = crescente
    ] }).then(perguntas => {
        res.render("index.ejs",{
            perguntas: perguntas
        })
    })
})
// rota de página do formulario de pergunta
app.get("/perguntar",(req,res) =>{
    res.render("perguntar.ejs")
})

//rota de submit de pergunta
app.post("/enviarpergunta",(req,res) =>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    pergunta.create({ // insert into perguntas values...
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

//rota recebendo id da pergunta como parametro e fazendo busca com ele.
app.get('/pergunta/:id',(req, res)=>{
   var id = req.params.id
   Pergunta.findOne({ raw: true,
       where:{
           id:id
       }
   }).then(pergunta =>{
       if(pergunta != undefined){
            res.render("pergunta.ejs",{
                pergunta: pergunta
            })
       }else{
            res.redirect('/')
       }

   })
})

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})