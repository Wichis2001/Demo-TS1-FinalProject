const Answer = require('../models/answers');
const Comment = require('../models/comments');
const GameBox = require('../models/gameBoxes');
const Game = require('../models/games');
const ModelGame = require('../models/modelGame');
const Medal = require('../models/medals');
const MedalTable = require('../models/medalsTable');
const Notification = require('../models/notifications');
const Question = require('../models/questionBoxes');
const Ranking = require('../models/rankings');
const Score = require('../models/scores');
const User = require('../models/users');
const Word = require('../models/wordBoxes');

async function getLastGame() {
    return await Game.findOne({ idGame: "G" + ((await Game.count()) + 1) })
}

async function getAllWordsCodes(idGame) {
    const words = await Word.find({ idGame: idGame })
    const codes = [];
    words.forEach(element => {
        codes.push(element.idWB);
    });
    return codes;
}

async function getWord(idWord) {
    const temp = await Word.findOne({ idWB: idWord })
    return temp;
}

async function getRankingIdUser(idUser) {
    const temp = await Ranking.findOne({ idUser: idUser })
    return temp;
}


async function getAllQuestionsCodes(idGame) {
    const questions = await Question.find({ idGame: idGame })
    const codes = [];
    questions.forEach(element => {
        codes.push(element.idQB);
    });
    return codes;
}

async function getQuestion(idQuest) {
    const temp = await Question.findOne({ idQB: idQuest })
    return temp;
}

async function getAllAnswersCodes(idQuest) {
    const answers = await Answer.find({ idQuestion: idQuest })
    const codes = [];
    answers.forEach(element => {
        codes.push(element.idA);
    });
    return codes;
}

async function getAnswer(idAnswer) {
    const temp = await Answer.findOne({ idA: idAnswer })
    return temp;
}

async function getFreeGames() {
    return await Game.find({ passwrd: '' })
}

async function getGames() {
    return await Game.find()
}

async function getGame(idGame) {
    return await Game.findOne({ idGame: idGame })
}

async function getGameBoxesOwner(idUser) {
    return await GameBox.find({ idUser: idUser })
}

module.exports = {
    getLastGame,
    getAllWordsCodes,
    getWord,
    getRankingIdUser,
    getAllQuestionsCodes,
    getQuestion,
    getAllAnswersCodes,
    getAnswer,
    getFreeGames,
    getGame,
    getGameBoxesOwner,
    getGames
};