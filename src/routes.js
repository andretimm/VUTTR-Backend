const express = require('express');

//Instacia rotas
const routes = express.Router();

//Importa controllers
const ToolsController = require('./controllers/ToolsController');
const UserController = require('./controllers/UserController');
const validation = require('./controllers/Authentication');

//Login
routes.post('/login', UserController.login);

//Retorna ferramentas
routes.get('/tools', ToolsController.getTools);

//Cria ferramenta
routes.post('/tools', validation, ToolsController.setTools);

//Deleta ferramenta
routes.delete('/tools/:id', validation, ToolsController.removeTools);

//Exporta rotas
module.exports = routes;