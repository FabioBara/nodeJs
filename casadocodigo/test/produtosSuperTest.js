var express = require('../config/express')();
var request = require('supertest')(express);

//teste verificando se retorna um Json valido
describe('ProdutosSuperTest', function(){
    it('#listagem Json',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('#listagem html',function(done){
        request.get('/produtos')
        .set('Accept','text/html')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });

    it('cadastro de produtos invalidos', function(done){
            request.post('/produtos/salva')
            .send({ nome: "rola", descricao: ""})
            .expect(400, done);
    });

    it('cadastro de valores validos', function(done){
        request.post('/produtos/salva')
        .send({nome: "Livro Super Teste", descricao: "Livro Super Teste", preco: 100})
        .expect(302, done);
    });
});
