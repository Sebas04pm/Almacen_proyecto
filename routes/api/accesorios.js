const router = require('express').Router();

const{ almac } = require('../../DB');  //HACEMOS EL LLAMADO AL MODELO QUE ESTA EN LA BASE DE DATOS "DB.js"

//PETICION DE INGRESO DE DATOS
router.post('/', async (req, res) => {
    const ing = await almac.create(req.body);
    res.json(ing);
});

//PETICION PARA CONSULTAR LOS DATOS
router.get('/', async (req, res) => {
    const a = await almac.findAll();  //RECUPERAMOS TODOS LOS REGISTROS DE LA TABLA
    res.json(a);
});

//PETICION DE EDICION DE DATOS
router.put('/:accId', async (req, res) => {
    await almac.update(req.body, {
        where: {id: req.params.accId}
    });
    res.json({ success: 'Archivo Modificado'})
});

//PETICION DE ELIMINAR DATOS
router.delete('/:accId', async (req, res) => {
    await almac.destroy({
        where: {id: req.params.accId}
    });
    res.json({ success: 'Archivo Borrado'})
})

module.exports = router;