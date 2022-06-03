const express = require("express")
const req = require("express/lib/request")
const app = express()

// chamano ejs
app.set("view engine","ejs")
// arquivos estaticos
app.use(express.static('public'))
// rota inicial
app.get("/",(req, res) => {
    // renderisando index.ejs e passando variaveis para o html
    res.render("index.ejs")
})

app.get("/perguntar",(req,res) =>{
    res.render("perguntar.ejs")
})

//rota de submit de pergunta
app.post("/enviarpergunta",(req,res) =>{
    res.send('formulário recebido')
})

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})