const mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
const should = chai.should();

//Model
const Tools = require('../src/models/Tools');

let token = '';
let id = '';
chai.use(chaiHttp);

describe('Tools', () => {
    beforeEach((done) => { //Limpa base apos rodar tudo
        Tools.deleteMany({ title: '[unit-teste]' }, (err) => {
            done();
        });
    });

    //Login
    describe('/POST login', () => {
        it('Deve retornar o token de autenticacao', (done) => {
            const login = {
                login: "andre.timm",
                pass: "123"
            }
            chai.request(server)
                .post('/login')
                .send(login)
                .set('x-access-token', '')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('token');
                    token = res.body.token
                    done();
                });
        });
    });

    //GET
    describe('/GET tools', () => {
        it('Deve retornar todas as ferramentas', (done) => {
            chai.request(server)
                .get('/tools')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    //Filter
    describe('/GET tools', () => {
        it('Deve retornar todas as ferramentas filtrando por tag', (done) => {
            chai.request(server)
                .get('/tools?tag=node')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    //Post
    describe('/POST tools', () => {
        it('Deve criar uma nova ferramenta', (done) => {
            const tools = {
                title: "[unit-teste]",
                link: "https://github.com/typicode/hotel",
                description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
                tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
            };
            chai.request(server)
                .post('/tools')
                .send(tools)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.have.property('_id');
                    res.body.should.have.property('title');
                    id = res.body._id;
                    done();
                });
        });

    });

    //Delete
    describe('/DELETE/:id tools', () => {
        it('Deve deletar o registro pelo id', (done) => {
            chai.request(server)
                .delete('/tools/' + id)
                .set('x-access-token', token)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

});