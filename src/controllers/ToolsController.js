const Tools = require('../models/Tools');

module.exports = {
    //Retorna ferramentas
    async getTools(req, res) {
        var tag = req.query.tag;
        if (tag) {
            const tools = await Tools.find({tags : tag}).sort('-createdAt');
            return res.status(200).json(tools);
        } else {
            //Retorna todas ferramentas ordenado pela data de criacao
            const tools = await Tools.find({}).sort('-createdAt');
            return res.status(200).json(tools);
        }
    },
    //Cria nova Ferramenta
    async setTools(req, res) {
        const tools = await Tools.create(req.body);
        return res.status(201).json(tools);
    },
    //Remove ferramenta
    async removeTools(req, res) {
        var id = req.params.id;
        const tools = await Tools.deleteOne({_id : id});
        return res.status(200).json({});
    }
};