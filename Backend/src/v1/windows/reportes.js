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
//                          REPORTES DEL ADMIN
//GET DE LA CANTIDAD DE JUEGOS QUE HA CREADO CADA MAESTRO
router.get('/getGamesTeachers', async function(request, response) {
    await rC.getGamesTeachers(request, response);
});
//GET DE LA LOS USUARIOS QUE MAS HAN COMENTADO
router.get('/getCommentStudents', async function(request, response) {
    await rC.getCommentStudents(request, response);
});

//ESTUDIANTES CON MAS COMENTARIOS

module.exports = router;