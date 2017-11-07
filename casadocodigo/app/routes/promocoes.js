module.exports = function(app){
    app.get('/promocoes/form', function(req, res){
        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.lista(function(err, result){
            res.render('promocoes/form', {lista:result});
        });
        con.end();
    });

    app.post('/promocoes', function(req, res){
        var promo = req.body;
        console.log(promo);
        res.redirect('promocoes/form');
    });
}