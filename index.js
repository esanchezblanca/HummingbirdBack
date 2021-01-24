const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000
//Router básico
const apiRouter = require('./app/routes/api');


const app = express();



require('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Respuesta de la app en el localhost si funciona correctamente
app.use('/api', apiRouter);


//Determinamos en qué puerto se levanta
app.listen(PORT,() => {
    console.log('Server levantado')
});