const express = require("express")
const req = require("express/lib/request")
const app = express()

//chamando body-parser
const bodyParser = require("body-parser")

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
    // renderisando index.ejs e passando variaveis para o html
    res.render("index.ejs")
})
// rota de página do formulario de pergunta
app.get("/perguntar",(req,res) =>{
    res.render("perguntar.ejs")
})

//rota de submit de pergunta
app.post("/enviarpergunta",(req,res) =>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    res.send('formulário recebido! título: '+titulo+'<br> descrição: '+descricao)
})

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})