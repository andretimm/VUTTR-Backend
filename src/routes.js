const express = require('express');

//Instacia rotas
const routes = express.Router();

//Retorna ferramentas
routes.get('/tools', function (req, res) {
    var tag = req.param('tag');
    if(tag){
        res.status(200).json(tag);
    }else{
        res.status(200).json('tools');
    }   
});

//Cria ferramenta
routes.post('/tools', function (req, res) {
    res.status(201).json('create tootls'); 
});

//Deleta ferramenta
routes.delete('/tools/:id', function (req, res) {
    var id = req.params.id;
    res.status(200).json('delete tools');     
});

//Exporta rotas
module.exports = routes;