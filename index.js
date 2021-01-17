const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Respuesta de la app en el localhost si funciona correctamente
app.get('/', (req, res) => {
    res.send('App is working');
});


//Determinamos en qué puerto se levanta
app.listen(3000,() => {
    console.log('Server levantado')
});