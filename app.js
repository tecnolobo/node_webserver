require('dotenv').config(); // inicializamos el paquete
const express = require('express')
const app = express();
const hbs = require('hbs');
const port = process.env.PORT;

app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials'); //Aqui ponemos todas las vistas reutilizables

app.use(express.static('public'));//indica a express que va sevir todo lo que este en la carpeta public


app.get('/', function (req, res) {
  res.render('home',{
    nombre: 'pagina probando ando',
    titulo:'Curso node'
  });
});

app.listen(port)