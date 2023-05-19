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

module.exports = {
    getLastGame,
    getAllWordsCodes,
    getWord,
    getRankingIdUser
};