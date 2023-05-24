const addDC = require('./AddDataController');
const getDC = require('../controllers/GetsDataController');
const notC = require('../controllers/NotificationsController');

async function addMedalRanking(idUser) {

    const ranking = await getDC.getRank(idUser);
    let idMedal = "";

    if (ranking.score >= 300) {
        idMedal = 'M1'
    } else if (ranking.score >= 200 && ranking.score < 300) {
        idMedal = 'M2'
    } else if (ranking.score >= 100 && ranking.score < 200) {
        idMedal = 'M3'
    }

    const insertMT = {
        idUser: idUser,
        idMedal: idMedal
    }
    if (await getDC.getMedalTable(insertMT) != null) {
        const notificationInsert = await addDC.addData(insertMT, 'MedalTable');
        await notC.addNotMedal(idUser, idMedal);
        return notificationInsert
    }
}


module.exports = {
    addMedalRanking
};