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

module.exports = {
    getNameGame,
    getNameUser,
    getTypeMedal,
    getDescrpMedal
};