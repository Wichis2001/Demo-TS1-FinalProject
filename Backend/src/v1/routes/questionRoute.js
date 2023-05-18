const express = require('express');
const Question = require('../../models/questionBoxes');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addQuestion', async function(request, response) {
    const lastRegister = await Question.count();
    const insert = new Question({
        idQB: "QB" + (lastRegister + 1),
        idGame: request.body.idGame,
        question: request.body.question,
        score: request.body.score
    });

    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;