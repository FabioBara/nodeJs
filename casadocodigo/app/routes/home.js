module.exports = function(app){
    app.get('/', function(req, res){
        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.lista(function(err, result){
            res.render('home/index', {livros:result});
        });
        con.end();
    });
}