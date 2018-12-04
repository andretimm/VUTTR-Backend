require("dotenv-safe").load();
var jwt = require('jsonwebtoken');

module.exports = {
    //loga usuario
    async login(req, res) {
        //TODO: Criar colletions no banco com todos usuarios
        const user = { login: req.body.login, pass: req.body.pass };
        const { login } = user.login; //esse id viria do banco de dados
        var token = jwt.sign({ login }, process.env.SECRET, {
            expiresIn: 300 // expira em 5 minutos
        });
        res.status(200).send({ auth: true, token: token });
    }
};