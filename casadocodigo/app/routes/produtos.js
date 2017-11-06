
// nao eh mais utilizado, eh tudo carreado conforme configuracao no express.js via express-load
//var dbConnectionFactory = require('../infra/dbConnectionFactory');

module.exports = function(app){
    var listarProdutos = function(req, res, next){
        //no load-express eh possivel carregar o modulo atraves do caminho do diretorio que esta 
        //o modulo, fica parecido com a invocacao de uma classe estatica do java 
        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.lista(function(err, result){
           if(err){
               return next(err);
           }
            console.log(err);
                res.format({
                    html: function(){
                        res.render('produtos/lista', {lista:result});
                    },
                    json: function(){
                        res.json(result);
                    },
                    xml: function(){
                        // teria que implementar um funcao que cria um xml pra mim 
                        res.json(result);
                    }
                });
        });
        con.end();
    }

    app.get('/produtos', function(req, res, next){
        listarProdutos(req, res, next);   
    });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form', {errosValidacao:{}, produto:{}});
    });

    app.post('/produtos/salva', function(req, res){

        var produto = req.body;
         //express Validator aqui

        req.assert('nome', 'O titulo nao pode ser branco').notEmpty();
        req.assert('preco','O preco esta invalido').isFloat();

        var erros = req.validationErrors();

        //em caso de erro, o sistema retorna o codigo html de erro correspondente e a msg de erro para a tela
        if(erros){
            res.format({
                html: function(){
                    res.status(400).render('produtos/form', {errosValidacao:erros, produto:produto});
                },
                json: function(){
                    res.status(400).json(erros);
                }
            });
            return;
        }

        var con = app.infra.dbConnectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(con);

        produtosDAO.salva(produto, function(err, result){
            res.redirect("/produtos");
        }); 
    });
}


