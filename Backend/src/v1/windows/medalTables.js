const express = require('express');
const mainControler = require('../../controllers/MainPageControler');
const MedalTable = require('../../models/medalsTable');
const router = express.Router();
//verificar login

router.route("/getMedalTable").get(async function(request, response) {

    const { idUser } = request.body;
    const mdTemp = await MedalTable.find({ idUser: idUser });
    const arrayMD = [];

    for (let index = 0; index < mdTemp.length; index++) {
        const temp = mdTemp[index];

        const MTpage = {
            medal: await mainControler.getTypeMedal(temp.idMedal),
            descriptn: await mainControler.getDescrpMedal(temp.idMedal)
        };

        arrayMD.push(MTpage);
    }
    response.json(arrayMD);
});

module.exports = router;