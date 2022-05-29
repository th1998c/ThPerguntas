const express = require("express")
const app = express()

// chamano ejs
app.set("view engine","ejs")

// rota inicial
app.get("/:nome/:lang",(req, res) => {
    var nome = req.params.nome
    var lang = req.params.lang
    // renderisando index.ejs e passando variaveis para o html
    res.render("index.ejs",{
        nome: nome,
        lang: lang,
        empresa: "ThPerguntas",
        nascimento: 1998
    })
})

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})