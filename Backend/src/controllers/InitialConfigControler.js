const Ranking = require('../models/rankings');
//POST : INSERTAR COSAS
async function addUserRank(idUser) {
    const lastRegister = await Ranking.count();
    const insert = new Ranking({
        idRank: "R" + (lastRegister + 1),
        idUser: idUser,
        score: 0
    });
    const insertData = await insert.save();
};

module.exports = {
    addUserRank
};