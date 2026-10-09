const express = require('express');
const app = express();

let lista = [
    {titulo: "1ª Modelo", descricao: "Fictício"},
    {titulo: "2ª Modelo", descricao: "Real"}
];

app.listen(3000, ()=> console.log("escutando"));
app.use(express.static('site'));

app.use(express.json());

app.post('/api/lista', (req, res) => (
    const novo = req.body;
    lista.push(novo);
    res.json({status: "sucesso"});
));

app.get('/api/lista', (req, res) => {
    res.json(lista);
});