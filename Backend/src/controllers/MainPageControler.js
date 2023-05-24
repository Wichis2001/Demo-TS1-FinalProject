const addDC = require('../controllers/AddDataController');
const getDC = require('../controllers/GetsDataController');
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
    const { rol, title, descriptn } = request.body;
    const arrayUsers = await getDC.getUsers(rol);
    for (let index = 0; index < arrayUsers.length; index++) {
        const element = arrayUsers[index];
        const insertNot = {
            idUser: element.idUser,
            title: title,
            descriptn: descriptn
        }
        const notificationInsert = await addDC.addData(insertNot, 'Notification');
    }

    response.json({ status: "OK" });
}

module.exports = {
    getNameGame,
    getNameUser,
    getTypeMedal,
    getDescrpMedal,
    addComment,
    addNotification
};