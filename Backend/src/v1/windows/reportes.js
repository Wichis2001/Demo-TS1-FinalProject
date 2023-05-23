const express = require('express');
const rC = require('../../controllers/ReportsController');
const aGC = require('../../controllers/AddGameController');
const router = express.Router();
//                          REPORTES DEL MAESTRO
//GET DE LOS JUEGOS CREADOS POR UN USUARIO - REQUERIMIENTO: ID_USER
router.get('/getGamesOwner/:idUser', async function(request, response) {
    await aGC.getAllGamesOwner(request, response);
});

//GET DE LOS JUEGOS CREADOS POR UN USUARIO - REQUERIMIENTO: ID_USER
router.get('/getGamesOwner/:idUser', async function(request, response) {
    await aGC.getAllGamesOwner(request, response);
});



module.exports = router;