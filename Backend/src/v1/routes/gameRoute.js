const express = require('express');
const Game = require('../../models/games');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addGame', async function(request, response) {
    const lastRegister = await Game.count();
    const insert = new Game({
        idGame: "G" + (lastRegister + 1),
        nameGame: request.body.nameGame,
        passwrd: request.body.passwrd,
        descriptn: request.body.descriptn
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;