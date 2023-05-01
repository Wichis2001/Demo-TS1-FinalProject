const express = require('express');
const mainControler = require('../../controllers/MainPageControler');
const Ranking = require('../../models/rankings');
const router = express.Router();
//verificar login

router.route("/getRankings").get(async function(request, response) {
    const rankings = await Ranking.find().sort({ score: -1 }).then(function(result) {
        return result;
    }).catch((err) => {
        console.error(err);
    });

    const arrayRanks = [];

    for (let index = 0; index < rankings.length; index++) {
        const temp = rankings[index];
        const RankPage = {
            user: await mainControler.getNameUser(temp.idUser),
            score: temp.score
        };

        arrayRanks.push(RankPage);
    }
    response.json(arrayRanks);
});

module.exports = router;