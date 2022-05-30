const express = require("express")
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

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})