require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// HANDLEBARS
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => { //rutas
    res.render('home',{
        nombre: 'fernando herrera',
        titulo : 'Curso Node'
    }); //para que aparezca sin html
}); // TODO ESTO ES UN CONTROLADOR



app.get('/generic', (req, res) => { //rutas
    res.render('generic',{
        nombre: 'Angel Doria',
        titulo : 'Curso Node'
    }); //para que aparezca sin html
});

app.get('/elements', (req, res) => { //rutas
    res.render('elements',{
        nombre: 'fernando herrera',
        titulo : 'Curso Node'
    }); //para que aparezca sin html
});



  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


// app.get('/', function (req, res) {
//     res.send('Home page')
// })

// app.get('/hola-mundo', function (req, res) {
//     res.send('Hello World en ruta')
// })

// app.get('*', function (req, res) {
//     res.send('404 | page not found')
// })