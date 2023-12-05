require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use( express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'WIlliam Duarte', titulo: 'Curso de node'
  })
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'WIlliam Duarte', titulo: 'Curso de node'
    })
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'WIlliam Duarte', titulo: 'Curso de node'
    });
});

app.get('*', function (req, res) {
    res.send('404 | Page not found')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})