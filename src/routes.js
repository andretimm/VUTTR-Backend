const express = require('express');

//Instacia rotas
const routes = express.Router();

//Importa controllers
const ToolsController = require('./controllers/ToolsController');

//Retorna ferramentas
routes.get('/tools', ToolsController.getTools);

//Cria ferramenta
routes.post('/tools', ToolsController.setTools);

//Deleta ferramenta
routes.delete('/tools/:id', ToolsController.removeTools);

//Exporta rotas
module.exports = routes;