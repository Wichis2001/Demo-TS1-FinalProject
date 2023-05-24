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
const gameBoxes = require('../models/gameBoxes');

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

async function getRank(idUser) {
    return await Ranking.find({ idUser: idUser })
}

async function getMedalTable(json) {
    return await Ranking.findOne({ idUser: json.idUser, idMedal: json.idMedal })
}
async function getGamesMTPlayed(idUser) {
    return await Score.aggregate([{
            $lookup: {
                from: "games",
                localField: "idGame",
                foreignField: "idGame",
                as: "gameInfo"
            }
        },
        {
            $lookup: {
                from: "game_boxes",
                localField: "idGame",
                foreignField: "idGame",
                as: "gameBoxInfo"
            }
        },
        {
            $match: {
                "gameBoxInfo.idUser": idUser
            }
        },
        {
            $group: {
                _id: "$idGame",
                userCount: { $sum: 1 }
            }
        },
        {
            $lookup: {
                from: "games",
                localField: "_id",
                foreignField: "idGame",
                as: "gameInfo"
            }
        },
        {
            $sort: {
                userCount: -1
            }
        },
        {
            $project: {
                _id: 0,
                idGame: "$_id",
                userCount: 1,
                nameGame: { $arrayElemAt: ["$gameInfo.nameGame", 0] }
            }
        }
    ])

}

async function getGamesMoreUsers(idUser) {
    return await Score.aggregate([{
            $lookup: {
                from: "games",
                localField: "idGame",
                foreignField: "idGame",
                as: "gameInfo"
            }
        },
        {
            $lookup: {
                from: "game_boxes",
                localField: "idGame",
                foreignField: "idGame",
                as: "gameBoxInfo"
            }
        },
        {
            $match: {
                "gameBoxInfo.idUser": idUser
            }
        },
        {
            $group: {
                _id: "$idGame",
                userCount: { $addToSet: "$idUser" }
            }
        },
        {
            $lookup: {
                from: "games",
                localField: "_id",
                foreignField: "idGame",
                as: "gameInfo"
            }
        },
        {
            $project: {
                _id: 0,
                idGame: "$_id",
                userCount: { $size: "$userCount" },
                nameGame: { $arrayElemAt: ["$gameInfo.nameGame", 0] }
            }
        },
        {
            $sort: {
                userCount: -1
            }
        }
    ])


}

async function getUsers(rol) {
    return await User.find({ rol: rol });
}

async function getUser(idUser) {
    return await User.findOne({ idUser: idUser });
}

async function getGamesToTeachers() {
    return await gameBoxes.aggregate([{
            $lookup: {
                from: "users",
                localField: "idUser",
                foreignField: "idUser",
                as: "userInfo"
            }
        },
        {
            $match: {
                "userInfo.rol": "maestro"
            }
        },
        {
            $group: {
                _id: "$idUser",
                gameBoxCount: { $sum: 1 }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "idUser",
                as: "userDetails"
            }
        },
        {
            $project: {
                _id: 0,
                idUser: "$_id",
                gameBoxCount: 1,
                nickname: { $arrayElemAt: ["$userDetails.nickname", 0] }
            }
        },
        {
            $sort: {
                gameBoxCount: -1
            }
        }
    ])

}


async function getCommentsStudents() {
    return await Comment.aggregate([{
            $lookup: {
                from: "users",
                localField: "idUser",
                foreignField: "idUser",
                as: "userInfo"
            }
        },
        {
            $match: {
                "userInfo.rol": "estudiante"
            }
        },
        {
            $group: {
                _id: "$idUser",
                commentCount: { $sum: 1 }
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "_id",
                foreignField: "idUser",
                as: "userDetails"
            }
        },
        {
            $project: {
                _id: 0,
                idUser: "$_id",
                commentCount: 1,
                nickname: { $arrayElemAt: ["$userDetails.nickname", 0] }
            }
        },
        {
            $sort: {
                commentCount: -1
            }
        }
    ])

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
    getGames,
    getGamesMTPlayed,
    getGamesMoreUsers,
    getUsers,
    getUser,
    getGamesToTeachers,
    getCommentsStudents,
    getRank,
    getMedalTable
};