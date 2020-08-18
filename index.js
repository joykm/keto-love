var PORT = process.env.PORT || 11734;
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('port', PORT);

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/recipes',function(req, res){
  res.render('recipes');
});

app.get('/benefits',function(req, res){
  res.render('benefits');
});

app.get('/risks',function(req, res){
  res.render('risks');
});

app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
  console.log(
      `Express started on http://${process.env.HOSTNAME}:${app.get('port')}; press Ctrl-C to terminate.`
      );
});

// app.listen(process.env.PORT || <your port number>);
