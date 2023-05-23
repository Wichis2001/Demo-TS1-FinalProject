const express = require('express');
const mainControler = require('../../controllers/MainPageControler');
const Comments = require('../../models/comments');
const router = express.Router();
//GET COMENTARIOS DE UN JUEGO - REQUERIMIENTOS: ID_GAME
router.route("/getComments/:idGame").get(async function(request, response) {

    const idGame = request.params.idGame;
    const comsTemp = await Comments.find({ idGame: idGame });
    const arrayComs = [];

    for (let index = 0; index < comsTemp.length; index++) {
        const temp = comsTemp[index];

        const ComentPage = {
            nameUser: await mainControler.getNameUser(temp.idUser),
            comment: temp.information
        };

        arrayComs.push(ComentPage);
    }
    response.json(arrayComs);
});

module.exports = router;