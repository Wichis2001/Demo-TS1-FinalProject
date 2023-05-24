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
        return game.idGame;
    }
}

async function newPreguntados(request, response) {
    const { nameGame, passwrd, descriptn, idUser, quesAns, scores } = request.body;

    if (quesAns.length == scores.length) {

        const insertGame = {
            nameGame: nameGame,
            passwrd: passwrd,
            descriptn: descriptn,
            idModel: 'M2'
        }

        const game = await addDC.addData(insertGame, 'Game');
        console.log(game);

        const insertGB = {
            idUser: idUser,
            idGame: game.idGame
        }

        await addDC.addData(insertGB, 'GameBox');

        //INSERTAR PREGUNTAS Y ANSWERS
        for (let index = 0; index < quesAns.length; index++) {
            const quesTemp = quesAns[index];
            const scoreTemp = scores[index];
            const insertQuestion = {
                idGame: game.idGame,
                question: quesTemp.question,
                score: scoreTemp
            }
            const question = await addDC.addData(insertQuestion, 'Question');

            for (let index = 0; index < quesTemp.answers.length; index++) {
                const answerTemp = quesTemp.answers[index];
                const insertAnswer = {
                    idQuestion: question.idQB,
                    answer: answerTemp.answer,
                    value: answerTemp.value
                }
                await addDC.addData(insertAnswer, 'Answer');

            }

        }
        response.json({ 'idGame': game.idGame });
        return game.idGame;
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

async function getAllFreeGames(request, response) {
    const freeGames = await getDC.getFreeGames();
    response.json(freeGames);
}

async function getAllGames(request, response) {
    const games = await getDC.getGames();
    response.json(games);
}

async function getAllGamesOwner(request, response) {
    const { idUser } = request.params;
    const gamesOwner = await getDC.getGameBoxesOwner(idUser);

    const arrayGames = [];

    for (const element of gamesOwner) {
        const gameTemp = await getDC.getGame(element.idGame);
        arrayGames.push(gameTemp);
    }

    response.json(arrayGames);
}

async function verifyPassword(request, response) {
    const { idGame, password } = request.params;
    const gameTemp = await getDC.getGame(idGame);

    if (gameTemp.passwrd == password) {
        response.json('correct');
    } else {
        response.json('incorrect');
    }

}

module.exports = {
    newScramble,
    newPreguntados,
    addScore,
    getAllFreeGames,
    getAllGamesOwner,
    getAllGames,
    verifyPassword
};