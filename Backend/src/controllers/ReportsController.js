const addDC = require('../controllers/AddDataController');
const getDC = require('../controllers/GetsDataController');
const uptDC = require('../controllers/UpdateDataController');

async function getGamesWithMoreTimeUsed(request, response) {
    const idUser = request.params.idUser;
    const games = await getDC.getGamesMTPlayed(idUser);
    const array = [];
    games.forEach(element => {
        const gameInfoTemp = {
            nameGame: element.nameGame,
            times: element.userCount
        }
        array.push(gameInfoTemp);
    });
    response.json(array);
}

async function getGamesWithMoreUsers(request, response) {
    const idUser = request.params.idUser;
    const games = await getDC.getGamesMoreUsers(idUser);
    const array = [];
    games.forEach(element => {
        const gameInfoTemp = {
            nameGame: element.nameGame,
            users: element.userCount
        }
        array.push(gameInfoTemp);
    });
    response.json(array);
}

module.exports = {
    getGamesWithMoreTimeUsed,
    getGamesWithMoreUsers
};