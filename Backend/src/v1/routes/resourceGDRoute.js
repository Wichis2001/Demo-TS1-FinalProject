const express = require('express');
const ResourceGD = require('../../models/resorceGD');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addResorceGD', async function(request, response) {
    const lastRegister = await ResourceGD.count();
    const insert = new ResourceGD({
        idRGI: "RGD" + (lastRegister + 1),
        idGame: request.body.idGame,
        img: request.body.img
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;