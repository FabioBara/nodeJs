var express = require('../config/express')();
var request = require('supertest')(express);

describe('ProdutosSuperTest', function(){
    it('listagem Json',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});


describe('ProdutosSuperTestHTML', function(){
    it('listagem html',function(done){
        request.get('/produtos')
        .set('Accept','text/html')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });
});