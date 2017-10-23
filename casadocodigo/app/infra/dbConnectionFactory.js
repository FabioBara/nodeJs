var mySQL = require('mysql');
function createDBConnection(){
    return mySQL.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database: 'casadocodigo'
    });
}

//Wrapper, nao colocar () para nao invocar a funcao, somente retornar a referencia dela.
//desta forma eu evito que o banco faca conexao sempre que a app subir pelo nodeMOn
module.exports = function(){
    return createDBConnection;
}