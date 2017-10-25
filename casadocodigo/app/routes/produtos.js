
// nao eh mais utilizado, eh tudo carreado conforme configuracao no express.js via express-load
//var dbConnectionFactory = require('../infra/dbConnectionFactory');

module.exports = function(app){
    app.get('/produtos', function(req, res){

        //no load-express eh possivel carregar o modulo atraves do caminho do diretorio que esta 
        //o modulo, fica parecido com a invocacao de uma classe estatica do java 
        var con = app.infra.dbConnectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(con);

        produtosBanco.lista(function(err, result){
            res.render('produtos/lista', {lista:result});
        });
        con.end();
    });
}


