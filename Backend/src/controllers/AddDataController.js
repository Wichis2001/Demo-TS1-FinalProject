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

async function addData(jsonData, typeData) {
    const lastRegister = await getLastRegister(typeData);
    const dataInserted = await getInsert(lastRegister, jsonData, typeData);
    //const insertData = await insert.save();
    //response.json(insertData);
    console.log(dataInserted);
    return dataInserted;
}

async function getLastRegister(typeData) {
    switch (typeData) {
        case 'Answer':
            return await Answer.count();
        case 'Comment':
            return await Comment.count();
        case 'GameBox':
            return await GameBox.count();
        case 'Game':
            return await Game.count();
        case 'ModelGame':
            return await ModelGame.count();
        case 'Medal':
            return await Medal.count();
        case 'MedalTable':
            return await MedalTable.count();
        case 'Notification':
            return await Notification.count();
        case 'Question':
            return await Question.count();
        case 'Ranking':
            return await Ranking.count();
        case 'Score':
            return await Score.count();
        case 'User':
            return await User.count();
        case 'Word':
            return await Word.count();
    }

}

async function getInsert(lastRegister, jsonData, typeData) {
    let insert = null;
    switch (typeData) {
        case 'Answer':
            insert = new Answer({
                idA: "A" + (lastRegister + 1),
                idQuestion: jsonData.idQuestion,
                answer: jsonData.answer,
                value: jsonData.value
            });
            return await insert.save();
        case 'Comment':
            insert = new Comment({
                idComm: "C" + (lastRegister + 1),
                idUser: jsonData.idUser,
                idGame: jsonData.idGame,
                information: jsonData.information
            });
            return await insert.save();
        case 'GameBox':
            insert = new GameBox({
                idGB: "GB" + (lastRegister + 1),
                idUser: jsonData.idUser,
                idGame: jsonData.idGame
            });
            return await insert.save();
        case 'Game':
            insert = new Game({
                idGame: "G" + (lastRegister + 1),
                nameGame: jsonData.nameGame,
                passwrd: jsonData.passwrd,
                descriptn: jsonData.descriptn,
                idModel: jsonData.idModel
            });
            console.log('ANTES DE INSERTAR EL JUEGO');
            return await insert.save();
        case 'ModelGame':
            insert = new ModelGame({
                idModel: "M" + (lastRegister + 1),
                name: jsonData.name,
                descriptn: jsonData.descriptn
            });
            return await insert.save();
        case 'Medal':
            insert = new Medal({
                idMedal: "M" + (lastRegister + 1),
                tipo: jsonData.tipo,
                description: jsonData.description
            });
            return await insert.save();
        case 'MedalTable':
            insert = new MedalTable({
                idTableMedal: "MT" + (lastRegister + 1),
                idUser: jsonData.idUser,
                idMedal: jsonData.idMedal
            });
            return await insert.save();
        case 'Notification':
            insert = new Notification({
                idNot: "N" + (lastRegister + 1),
                idUser: jsonData.idUser,
                idGame: jsonData.idGame,
                descriptn: jsonData.descriptn
            });
            return await insert.save();
        case 'Question':
            insert = new Question({
                idQB: "QB" + (lastRegister + 1),
                idGame: jsonData.idGame,
                question: jsonData.question,
                score: jsonData.score
            });
            return await insert.save();
        case 'Ranking':
            insert = new Ranking({
                idRank: "R" + (lastRegister + 1),
                idUser: jsonData.idUser,
                score: jsonData.score
            });
            return await insert.save();
        case 'Score':
            insert = new Score({
                idScore: "S" + (lastRegister + 1),
                idUser: jsonData.idUser,
                idGame: jsonData.idGame,
                score: jsonData.score
            });
            return await insert.save();
        case 'User':
            insert = new User({
                idUser: "U" + (lastRegister + 1),
                name: jsonData.name,
                password: jsonData.password
            });
            return await insert.save();
        case 'Word':
            insert = new Word({
                idWB: "WB" + (lastRegister + 1),
                idGame: jsonData.idGame,
                word: jsonData.word,
                score: jsonData.score
            });
            return await insert.save();
    }


}

module.exports = {
    addData
};