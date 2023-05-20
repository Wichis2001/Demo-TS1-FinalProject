const express = require('express');
const aGC = require('../../controllers/AddGameController');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addNewGame', async function(request, response) {
    const { idModel } = request.body;

    switch (idModel) {
        case 'M1':
            await aGC.newScramble(request, response);
            break;
        case 'M2':
            await aGC.newPreguntados(request, response);
            break;

    }

});

router.post('/addPoints', async function(request, response) {
    await aGC.addScore(request, response);
});

router.get('/getGamesFree', async function(request, response) {
    await aGC.getAllFreeGames(request, response);
});

router.get('/getGamesOwner/:idUser', async function(request, response) {
    await aGC.getAllGamesOwner(request, response);
});

router.get('/getAllGames', async function(request, response) {
    await aGC.getAllGames(request, response);
});

router.get('/verifyPassword/:idGame/:password', async function(request, response) {
    await aGC.verifyPassword(request, response);
});

module.exports = router;