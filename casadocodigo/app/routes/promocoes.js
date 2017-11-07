module.exports = function(app){
    app.get('/promocoes/form', function(req, res){
        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.lista(function(err, result){
            res.render('promocoes/form', {lista:result});
        });
        con.end();
    });

    app.post("/promocoes",function(req,res){
        var promocao = req.body;
        console.log(promocao);
        app.get('io').emit('novaPromocao',promocao);
        res.redirect('promocoes/form');
    });
}