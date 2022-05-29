const express = require("express")
const app = express()

// chamano ejs
app.set("view engine","ejs")
// arquivos estaticos
app.use(express.static('public'))
// rota inicial
app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    var exibirMsg = false
    
    var produtos = [
        {nome: "Gillete", preco: 5.50},
        {nome: "Bonzano", preco: 12.2},
        {nome: "maça", preco: 0.70}
    ]
    // renderisando index.ejs e passando variaveis para o html
    res.render("index.ejs",{
        nome: nome,
        lang: lang,
        empresa: "ThPerguntas",
        nascimento: 1998,
        msg: exibirMsg,
        produtos: produtos
    })
})

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})