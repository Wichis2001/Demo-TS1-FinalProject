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

async function getGamesTeachers(request, response) {
    const games = await getDC.getGamesToTeachers();
    const array = [];
    games.forEach(element => {
        const gameInfoTemp = {
            nickname: element.nickname,
            countGames: element.gameBoxCount
        }
        array.push(gameInfoTemp);
    });
    response.json(array);
}


async function getCommentStudents(request, response) {
    const commentsCount = await getDC.getCommentsStudents();
    const array = [];
    commentsCount.forEach(element => {
        const commInfoTemp = {
            nickname: element.nickname,
            countComments: element.commentCount
        }
        array.push(commInfoTemp);
    });
    response.json(array);
}

module.exports = {
    getGamesWithMoreTimeUsed,
    getGamesWithMoreUsers,
    getGamesTeachers,
    getCommentStudents
};