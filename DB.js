//COMANDOS Y LIBRERIAS PARA LEVANTAR LA BASE DE DATOS
const datos = require('sequelize');

const accesorioModel = require('./modelos/accesorios');

//COLOCAMOS EL NOMBRE DE USUARIO, NOMBRE DE LA BASE Y LA CONTRASEÑA QUE NOS ARROJO EL "https://remotemysql.com/databases.php"
const sequelize = new datos('zj2PJH4VDT','zj2PJH4VDT','Rg6wESWPHi', {
    host: 'remotemysql.com',
    dialect:'mysql'
});

const almac = accesorioModel(sequelize, datos);  //SE CREA UN MODELO "almac" PARA SINCRONIZAR LA B.D.
sequelize.sync({force: false})

.then(()=> {                               //DEVUELVE LAS PROMESAS CUANDO LAS TABLAS SE HAYAN CREADO
    console.log('Tablas Sincronizadas')  
})

module.exports = {    //EXPORTAMOS LOS OBJETOS QUE NECESITAMOS
    almac
}
