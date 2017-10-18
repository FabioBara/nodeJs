module.exports = function(app){
    app.get("/produtos", function(req, res){

        var mySQL = require('mysql');
        var con = mySQL.createConnection({
            host : 'localhost',
            user : 'root',
            password : '1234',
            database: 'casadocodigo'
        });

        con.query('SELECT * FROM casadocodigo.livros', function(err, result){
            res.render("produtos/lista", {lista:result});
           // res.send(result, {lista:result});
        });


        con.end();
        //res.render("produtos/lista"); 
    });
}


