const express = require('express');
const Answer = require('../../models/answers');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addAnswer', async function(request, response) {
    const lastRegister = await Answer.count();
    const insert = new Answer({
        idA: "A" + (lastRegister + 1),
        idQuestion: request.body.idQuestion,
        answer: request.body.answer,
        value: request.body.value
    });

    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;