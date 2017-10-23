var app = require('./config/express')();

// retirada a configuracao de rotas do app e colocando direto no express.js gerenciado pelo express-load
//var rotasProdutos = require('./app/routes/produtos');

//rotasProdutos(app);

app.listen(3000, function(){
    console.log("servidor rodando teste!");

});