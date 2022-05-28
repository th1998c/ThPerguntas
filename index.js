const express = require("express")
const app = express()

// chamano ejs
app.set("view engine","ejs")

// rota inicial
app.get("/",(req, res) => {
    res.render("index.ejs")
})

// abertura servidor
app.listen(8080,()=>{
    console.log("servidor está rodando")
})