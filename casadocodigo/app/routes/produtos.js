
// nao eh mais utilizado, eh tudo carreado conforme configuracao no express.js via express-load
//var dbConnectionFactory = require('../infra/dbConnectionFactory');

module.exports = function(app){
    var listarProdutos = function(req, res){
        //no load-express eh possivel carregar o modulo atraves do caminho do diretorio que esta 
        //o modulo, fica parecido com a invocacao de uma classe estatica do java 
        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.lista(function(err, result){
            res.render('produtos/lista', {lista:result});
        });
        con.end();
    }

    app.get('/produtos', function(req, res){
        listarProdutos(req, res);   
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form');
    });

    app.post('/produtos/salva', function(req, res){

        var produto = req.body;
        
        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.salva(produto, function(err, result){
            res.redirect("/produtos");
        }); 
    });
}


