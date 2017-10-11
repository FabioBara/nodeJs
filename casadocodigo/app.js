var app = require('./config/express')();

var rotasProdutos = require('./app/routes/produtos');

rotasProdutos(app);

app.listen(3000, function(){
    console.log("servidor rodando teste!");

});