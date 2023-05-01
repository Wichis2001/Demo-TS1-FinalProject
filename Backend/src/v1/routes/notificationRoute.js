const express = require('express');
const Notification = require('../../models/notifications');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addNotification', async function(request, response) {
    const lastRegister = await Notification.count();
    const insert = new Notification({
        idNot: "N" + (lastRegister + 1),
        idUser: request.body.idUser,
        idGame: request.body.idGame,
        descriptn: request.body.descriptn
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;