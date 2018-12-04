//Dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//Extrair servidor http
const server = require('http').Server(app);

//Instancia aplicacao
const app = express();

//Habilita cross domain
app.use(cors());
//Seta JSON como padrao
app.use(express.json());

//Inicia aplicacao
server.listen(3000, () => {
    console.log('Server iniciado na porta 3000');
});