const express = require('express');
const Answer = require('../../models/answers');

async function getNameGame(idGameParam) {
    const tempGame = await Game.findOne({ idGame: idGameParam })
    return tempGame.nameGame;
}

async function getNameUser(idUserParam) {
    const tempUser = await User.findOne({ idUser: idUserParam })
    return tempUser.name;
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