const express = require('express');
const mainControler = require('../../controllers/MainPageControler');
const Score = require('../../models/scores');
const router = express.Router();
//verificar login

router.route("/getScores/:idGame").get(async function(request, response) {
    const scores = await Score.find({ idGame: request.params.idGame }).sort({ score: -1 }).then(function(result) {
        return result;
    }).catch((err) => {
        console.error(err);
    });

    const arrayScores = [];

    for (let index = 0; index < scores.length; index++) {
        const temp = scores[index];
        const ScorePage = {
            user: await mainControler.getNameUser(temp.idUser),
            score: temp.score
        };

        arrayScores.push(ScorePage);
    }
    response.json(arrayScores);
});

module.exports = router;