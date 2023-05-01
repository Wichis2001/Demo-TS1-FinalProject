const express = require('express');
const Score = require('../../models/scores');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addScore', async function(request, response) {
    const lastRegister = await Score.count();
    const insert = new Score({
        idScore: "S" + (lastRegister + 1),
        idUser: request.body.idUser,
        idGame: request.body.idGame,
        score: request.body.score
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;