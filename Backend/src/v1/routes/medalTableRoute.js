const express = require('express');
const MedalTable = require('../../models/medalsTable');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addMedalTable', async function(request, response) {
    const lastRegister = await Medal.count();
    const insert = new Medal({
        idTableMedal: "MT" + (lastRegister + 1),
        idUser: request.body.idUser,
        idMedal: request.body.idMedal
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;