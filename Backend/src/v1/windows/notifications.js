const express = require('express');
const mainControler = require('../../controllers/MainPageControler');
const Notification = require('../../models/notifications');
const router = express.Router();
//GET NOTIFICACIONES DE UN USUARIOS - REQUERIMIENTOS: ID_USUARIO
router.route("/getNotifications/:idUser").get(async function(request, response) {

    const idUser = request.params.idUser;
    const notsTemp = await Notification.find({ idUser: idUser });
    const arrayNot = [];

    for (let index = 0; index < notsTemp.length; index++) {
        const temp = notsTemp[index];

        const NotPage = {
            nameGame: await mainControler.getNameGame(temp.idGame),
            descriptn: temp.descriptn
        };

        arrayNot.push(NotPage);
    }
    response.json(arrayNot);
});
//AGREGAR NOTIFICACION
router.route("/addNotification").post(async function(request, response) {
    await mainControler.addNotification(request, response);
});

module.exports = router;