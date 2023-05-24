const addDC = require('./AddDataController');
const mPC = require('./MainPageControler');

async function addNotRegister(idUser) {

    const insertNot = {
        idUser: idUser,
        title: "Bienvenid@ " + await mPC.getNameUser(idUser),
        descriptn: "Estamos felices de que te hayas unido a nuestro sitio de juegos"
    }
    const notificationInsert = await addDC.addData(insertNot, 'Notification');
    return notificationInsert
}

async function addNotCreateGame(idUser, idGame) {

    const insertNot = {
        idUser: idUser,
        title: "Has creado el juego: " + await mPC.getNameGame(idGame),
        descriptn: "Hemos registrado con exito tu nuevo juego"
    }
    const notificationInsert = await addDC.addData(insertNot, 'Notification');
    return notificationInsert
}

async function addNotMedal(idUser, idMedal) {

    const insertNot = {
        idUser: idUser,
        title: "Has ganado la medalla: " + await mPC.getTypeMedal(idMedal),
        descriptn: "Felicidades, te has ganado una nueva medalla"
    }
    const notificationInsert = await addDC.addData(insertNot, 'Notification');
    return notificationInsert
}

module.exports = {
    addNotRegister,
    addNotCreateGame,
    addNotMedal
};