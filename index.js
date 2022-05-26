const express = require('express');

const path = require('path');

const app = express();

const amigos = [
    {
        id:1,
        name:"Juan"
    },
    {
        id:2,
        name:"Romina"
    },
    {
        id:3,
        name:"Ricardo"
    },
]


app.get('/', (req, res) => {
    res.send("<h1>Hola Mundo</h1>");
})

app.get('/amigos', (req, res) => {
    res.send(amigos);
})

app.get('/index', (_req,res) => {
    let htmlInfo = path.resolve(__dirname,'./vistas/index.html');
    res.sendFile(htmlInfo);
})
app.listen(3001, () => console.log("Servidor escuchando en puerto 3001"));