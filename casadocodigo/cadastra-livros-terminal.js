var html = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos/salva',
    method: 'post',
    headers: {
        'Accept':'application/json',
        'Content-type':'application/json'
    }
};
// com o Content-type eh possivel informar que ao fazer o post, a instancia da conexao podera passa Json
 var client = html.request(configuracoes, function(res){
        console.log(res.statusCode);
        res.on('data', function(body){
            console.log("Corpo: " + body)
        });
    });
var produto = {
    nome: "mais sobre node",
    descricao: "node, programando em Java Script",
    preco: 100
}

//stringfy eh toString para Json
// o request soh eh disparado quando utilizado o end
    client.end(JSON.stringify(produto));