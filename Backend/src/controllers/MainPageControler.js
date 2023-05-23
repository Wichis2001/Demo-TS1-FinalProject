const addDC = require('../controllers/AddDataController');
const Game = require('../models/games');
const User = require('../models/users');
const Medal = require('../models/medals');

async function getNameGame(idGameParam) {
    const tempGame = await Game.findOne({ idGame: idGameParam })
    return tempGame.nameGame;
}

async function getNameUser(idUserParam) {
    const tempUser = await User.findOne({ idUser: idUserParam })
    return tempUser.nickname;
}

async function getDescrpMedal(idMedal) {
    const tempMedal = await Medal.findOne({ idMedal: idMedal })
    return tempMedal.description;
}

async function getTypeMedal(idMedal) {
    const tempMedal = await Medal.findOne({ idMedal: idMedal })
    return tempMedal.tipo;
}

async function addComment(request, response) {
    const { idUser, idGame, information } = request.body;

    const insertComment = {
        idUser: idUser,
        idGame: idGame,
        information: information
    }

    const comentInsert = await addDC.addData(insertComment, 'Comment');

    response.json(comentInsert);
}

async function addNotification(request, response) {
    const { idUser, idGame, descriptn } = request.body;

    const insertComment = {
        idUser: idUser,
        idGame: idGame,
        descriptn: descriptn
    }

    const notificationInsert = await addDC.addData(insertComment, 'Notification');

    response.json(notificationInsert);
}

module.exports = {
    getNameGame,
    getNameUser,
    getTypeMedal,
    getDescrpMedal,
    addComment,
    addNotification
};