const express = require('express');
const Medal = require('../../models/medals');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addMedal', async function(request, response) {
    const lastRegister = await Medal.count();
    const insert = new Medal({
        idMedal: "M" + (lastRegister + 1),
        tipo: request.body.tipo,
        description: request.body.description
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;