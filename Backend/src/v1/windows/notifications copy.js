const express = require('express');
const mainControler = require('../../controllers/MainPageControler');
const Notification = require('../../models/notifications');
const router = express.Router();
//verificar login

router.route("/getComments/:idUser").get(async function(request, response) {

    const { idUser } = request.params.idUser;
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



module.exports = router;