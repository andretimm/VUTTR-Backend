//Dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Instancia aplicacao
const app = express();

//Extrair servidor http
const server = require('http').Server(app);

//Conecta banco de dados
mongoose.connect(
    "mongodb://vuttr:vuttr123@ds119164.mlab.com:19164/vuttr",
    {
        useNewUrlParser: true
    }
);

//Habilita cross domain
app.use(cors());
//Seta JSON como padrao
app.use(express.json());
//Rotas
app.use(require('./routes'));

//Inicia aplicacao
server.listen(3000, () => {
    console.log('Server iniciado na porta 3000');
});

module.exports = app; // Necessario para rodas os testes