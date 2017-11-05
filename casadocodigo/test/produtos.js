var http = require('http');
var assert = require('assert');

describe('#ProdutosController', function(){
    it('#listagem json', function(done){
        var configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept':'application/json'
            }
        };
        http.get(configuracoes, function(res){
            assert.equal(res.statusCode,200);
            assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
            done();
            /*
            if(res.statusCode == 200){
                console.log('statusCode esta ok');
            }
            if(res.headers['content-type'] == 'application/json; charset=utf-8'){
                console.log('content-type esta ok');
            }
            done();*/
        });
    });
});

describe('#ProdutosController2', function(){

    it('#Teste HTML', function(done){
        var configuracoes = {
            hostname: 'localhost',
            port: 3000,
            path: '/produtos',
            headers: {
                'Accept':'text/html'
            }
        };
        http.get(configuracoes, function(res){
            //text/html; charset=utf-8
            assert.equal(res.statusCode,200);
            assert.equal(res.headers['content-type'], 'text/html; charset=utf-8');
            done();
        });
    });
});