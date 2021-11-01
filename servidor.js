const express = require('express');
//const sequelize = require('sequelize');

const bodyParser = require('body-parser');  //ACTIVAMOS LA LIBRERIA "body-parser" PARA PETICIONES "POST" ASOCIADAS A OBJETOS

const apiRouter = require('./routes/api');  //LLAMADO A LAS RUTAS QUE ENTRAN AL SERVIDOR
const servidor = express();

require('./DB'); //NOS SINCRONIZA NUESTRA BASE DE DATOS

//CONFIGURACION BASICA PARA RECIBIR PETICIONES
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended: true}));

servidor.use('/api', apiRouter);  //PETICIONES QUE VENGAN DE NUESTRA CARPETA "api"

//MENSAJE DE PRUEBA PARA VERIFICAR LA FUNCIONABILIDAD DEL SERVIDOR
servidor.get('/',(req,res) => {
    res.send('-- Bienvenido a Computer SA --');
});

servidor.listen(3000, ()=> {
    console.log('Servidor activo en http://localhost3000');
});