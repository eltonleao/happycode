var express = require('express');
var app = express();
var ejs = require('ejs');
var data = require('./data/data.json');
var cursos = require('./data/cursos.json');


process.env.data = data;
process.env.cursos = cursos;

var bodyParser = require('body-parser');



app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public/'));
app.use(bodyParser());

app.get('/', function(req, res){
    res.render('home.ejs',{cursos: cursos});
});
app.get('/curso', function(req, res){
    res.render('cursos/curso.ejs', {cursos: cursos});
});
app.get('/redirect', function(req, res){
    res.redirect("/"+ req.query.nome);
});
app.get('/sample', function(req, res){
    res.render('sample.ejs');
});

app.get('*', function(req, res){
    res.render('404.ejs');
});
var port = Number(process.env.PORT || 9000);
app.listen(port);
console.log(`Tudo ok na porta ${port}`);