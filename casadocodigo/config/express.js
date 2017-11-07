
    var express = require('express');
    var load = require('express-load');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');
   

module.exports = function(){

    var app = express();

    //midleware que carrega os css e etc, tudo que eh estatico
    app.use(express.static('./app/public'));
    app.set('view engine','ejs');
    app.set('views', './app/views');

    // configuracao responsavel por aceitar nos posts o tipo de dado, como html e Json
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
}

