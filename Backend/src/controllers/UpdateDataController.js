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

async function updateScoreRanking(idRank, newScore) {
    const updatedRanking = await Ranking.findByIdAndUpdate(
        idRank, { score: newScore }, { new: true }
    );
    return updatedRanking;
}

module.exports = {
    updateScoreRanking
};