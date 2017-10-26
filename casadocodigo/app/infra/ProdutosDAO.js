//constroi a pseudo classe
function ProdutosDAO(con){
    this._con = con;
}

//define o metodo da classe
ProdutosDAO.prototype.lista = function(callback){
    this._con.query('SELECT * FROM casadocodigo.livros', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback){
    console.log(produto);
    this._con.query('insert into casadocodigo.livros set ?', produto, callback);
}

//retorna o dado do obj
module.exports = function(){
        return ProdutosDAO;
}