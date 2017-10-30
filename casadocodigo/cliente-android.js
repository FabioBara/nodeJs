var html = require('http');

var configuracoes = {
    hostname: 'localhost',
    port:3000,
    path: '/produtos',
    headers: {
        'Accept':'application/json'
    }
};
    html.get(configuracoes, function(res){
        console.log(res.statusCode);
        res.on('data', function(body){
            console.log("Corpo: " + body)
        });
    });
