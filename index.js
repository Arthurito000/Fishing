const express = require('express');
const app = express();

let lista = [
    {titulo: "1ª Obra de arte", descricao: "Fictício"},
    {titulo: "2ª Obra de arte", descricao: "Real"}
];

app.listen(3000, ()=> console.log("escutando"));
app.use(express.static('site'));