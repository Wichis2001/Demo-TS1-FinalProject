const express = require('express');
const ResourceGI = require('../../models/resorceGI');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addResourceGI', async function(request, response) {
    const lastRegister = await ResourceGI.count();
    const insert = new ResourceGI({
        idRGI: "RGI" + (lastRegister + 1),
        idGame: request.body.idGame,
        img: request.body.img
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;