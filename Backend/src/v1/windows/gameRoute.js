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

            break;

    }

});

router.post('/addPoints', async function(request, response) {
    await aGC.addScore(request, response);
});

module.exports = router;