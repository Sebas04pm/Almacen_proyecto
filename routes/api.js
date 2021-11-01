const router = require('express').Router();

const apiAccesoRouter = require('./api/accesorios');
router.use('/accesorios', apiAccesoRouter);

module.exports = router;