const express = require('express');
const rC = require('../../controllers/ReportsController');
const aGC = require('../../controllers/AddGameController');
const router = express.Router();
//                          REPORTES DEL MAESTRO
//GET DE LOS JUEGOS CREADOS POR UN USUARIO - REQUERIMIENTO: ID_USER
router.get('/getGamesOwner/:idUser', async function(request, response) {
    await aGC.getAllGamesOwner(request, response);
});

//GET DE LAS VECES QUE SE HA JUGADO CADA JUEGO CREADO POR UN USUARIO - REQUERIMIENTO: ID_USER
router.get('/getGamesWithMoreTimeUsed/:idUser', async function(request, response) {
    await rC.getGamesWithMoreTimeUsed(request, response);
});

//GET DE LA CANTIDAD DE USUARIOS QUE SE HA JUGADO CADA JUEGO CREADO POR UN USUARIO - REQUERIMIENTO: ID_USER
router.get('/getGamesWithMoreUsers/:idUser', async function(request, response) {
    await rC.getGamesWithMoreUsers(request, response);
});

module.exports = router;