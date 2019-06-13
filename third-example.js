const express = require('express');
const app = express();

const path = require('path');
//const hbs = require('hbs')

const directorioPartials = path.join(__dirname, '/template/partials');
const dirViews = path.join(__dirname, '/template/views')

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });


  let people = [
    {
        id: 1,
        name: 'pepito'
    },
    {
        id: 2,
        name: 'Pancho'
    },
    {
        id: 3,
        name: 'Rudolf'
    }

  ]

  // hbs
// registra los partials
//hbs.registerPartials(directorioPartials);
//trae el motor del hbs
//app.set('view engine', 'hbs');
app.set('view engine', 'pug');
// cambia el directorio de views por defecto
app.set('views', path.join(dirViews));

let loginned = true;

let showip = ((req, res, next) => {
    console.log('127.0.0.1');
    next();
});

app.use((req, res, next) => {
    if(loginned){
        next();
    } else {
        res.send('Please Login');
    }

}, showip);

app.get('/', (req, res) => {
   // res.send('get');
  // res.render('index');
  res.render('main', { titulo: 'Welcome' , mensaje: 'Hi There', people: people});
});

app.post('/', (req, res) => {
    res.send('post');
});

app.put('/', (req, res) => {
    res.send('put');
});

app.patch('/', (req, res) => {
    res.send('patch');
});

app.delete('/', (req, res) => {
    res.send('delete');
});

