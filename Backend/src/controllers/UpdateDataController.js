const Ranking = require('../models/rankings');
const User = require('../models/users');

async function updateScoreRanking(idRank, newScore) {
    const updatedRanking = await Ranking.findByIdAndUpdate(
        idRank, { score: newScore }, { new: true }
    );
    return updatedRanking;
}

async function updateUser(request, response) {
    const editUser = await User.updateOne({
        idUser: request.body.idUser
    }, {
        "$set": {
            nickname: request.body.nickname,
            name: request.body.name,
            lastname: request.body.lastname,
            password: request.body.password,
        }
    });
    return editUser;
}

module.exports = {
    updateScoreRanking,
    updateUser
};