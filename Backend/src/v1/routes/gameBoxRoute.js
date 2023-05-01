const express = require('express');
const GameBox = require('../../models/gameBoxes');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addGameBox', async function(request, response) {
    const lastRegister = await GameBox.count();
    const insert = new GameBox({
        idGB: "GB" + (lastRegister + 1),
        idUser: request.body.idUser,
        idGame: request.body.idGame
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;