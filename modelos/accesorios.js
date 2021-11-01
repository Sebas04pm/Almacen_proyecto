module.exports = (sequelize, type) => {
    return sequelize.define('almacen', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre_cat: type.STRING,
        marca: type.STRING,
        modelo: type.STRING,
        capacidad: type.STRING,
    })
}