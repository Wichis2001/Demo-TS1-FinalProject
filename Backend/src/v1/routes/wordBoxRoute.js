const express = require('express');
const Word = require('../../models/wordBoxes');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addWord', async function(request, response) {
    const lastRegister = await Word.count();
    const insert = new Word({
        idWB: "WB" + (lastRegister + 1),
        idGame: request.body.idGame,
        word: request.body.word,
        score: request.body.score
    });

    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;