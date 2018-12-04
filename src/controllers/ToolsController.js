const Tools = require('../models/Tools');

module.exports = {
    //Retorna ferramentas
    async getTools(req, res) {
        var tag = req.query.tag;
        if (tag) {
            return res.status(200).json(tag);
        } else {
            return res.json('tools');
        }
    },
    //Cria nova Ferramenta
    async setTools(req, res) {
        return res.status(201).json('create tootls');
    },
    //Remove ferramenta
    async removeTools(req, res) {
        var id = req.params.id;
        return res.status(200).json('delete tools');
    }
};