const express = require('express');
const ModelGame = require('../../models/modelGame');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addModelGame', async function(request, response) {
    const lastRegister = await ModelGame.count();
    const insert = new ModelGame({
        idModel: "M" + (lastRegister + 1),
        name: request.body.name,
        descriptn: request.body.descriptn
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;