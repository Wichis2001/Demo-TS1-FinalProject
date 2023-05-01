const express = require('express');
const Comment = require('../../models/comments');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addComment', async function(request, response) {
    const lastRegister = await Comment.count();
    const insert = new Comment({
        idComm: "C" + (lastRegister + 1),
        idUser: request.body.idUser,
        idGame: request.body.idGame,
        information: Request.body.information
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;