const addDC = require('../controllers/AddDataController');
const getDC = require('../controllers/GetsDataController');
const uptDC = require('../controllers/UpdateDataController');

async function newScramble(request, response) {
    const { nameGame, passwrd, descriptn, idUser, words, scores } = request.body;

    if (words.length == scores.length) {

        const insertGame = {
            nameGame: nameGame,
            passwrd: passwrd,
            descriptn: descriptn,
            idModel: 'M1'
        }

        const game = await addDC.addData(insertGame, 'Game');
        console.log(game);

        const insertGB = {
            idUser: idUser,
            idGame: game.idGame
        }

        await addDC.addData(insertGB, 'GameBox');

        for (let index = 0; index < words.length; index++) {
            const wordTemp = words[index];
            const scoreTemp = scores[index];

            const insertWord = {
                idGame: game.idGame,
                word: wordTemp,
                score: scoreTemp
            };
            await addDC.addData(insertWord, 'Word');
        }
        response.json({ 'idGame': game.idGame });
    }
}

async function addScore(request, response) {
    const { idUser, idGame, score } = request.body;

    const insertScore = {
        idUser: idUser,
        idGame: idGame,
        score: score
    }

    await addDC.addData(insertScore, 'Score');
    const rankingTemp = await getDC.getRankingIdUser(idUser);
    await uptDC.updateScoreRanking(rankingTemp._id, (rankingTemp.score + score));

    response.json(score);

}

module.exports = {
    newScramble,
    addScore
};