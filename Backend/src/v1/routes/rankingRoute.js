const express = require('express');
const Ranking = require('../../models/rankings');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addRanking', async function(request, response) {
    const lastRegister = await Ranking.count();
    const insert = new Ranking({
        idRank: "R" + (lastRegister + 1),
        idUser: request.body.idUser,
        score: request.body.score
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;