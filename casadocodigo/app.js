var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// retirada a configuracao de rotas do app e colocando direto no express.js gerenciado pelo express-load
//var rotasProdutos = require('./app/routes/produtos');

//rotasProdutos(app);

//enviando uma varivel que ficara disponivel para toda a app, 
//no caso a do socket.io que eu vou poder fazer com que o meu backend envie dado para o front
app.set('io',io);


http.listen(3000, function(){
    console.log("servidor rodando teste!");
});