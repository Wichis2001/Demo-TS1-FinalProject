const express = require('express');
const admnC = require('../../controllers/AdminController')
const router = express.Router();
//GET DE LOS ADMINISTRADORES
router.get('/getAdmins', async function(request, response) {
    await admnC.getUsers(request, response, 'admin');
});
//GET DE LOS MAESTROS
router.get('/getMaestros', async function(request, response) {
    await admnC.getUsers(request, response, 'maestro');
});
//GET DE LOS ESTUDIANTES
router.get('/getEstudiantes', async function(request, response) {
    await admnC.getUsers(request, response, 'estudiante');
});
//GET USUARIO - REQUERIMIENTOS: ID_USER
router.get('/getUser/:idUser', async function(request, response) {
    await admnC.getUser(request, response);
});

//PUT USUARIO - REQUERIMIENTOS: ID_USER
router.put('/editUser', async function(request, response) {
    await admnC.editUser(request, response);
});

module.exports = router;