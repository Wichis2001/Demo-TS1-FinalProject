const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const rankingSchema = new Schema({
    idRank: String,
    idUser: String,
    score: Number
}, {
    versionKey: false
});

module.exports = model('rankings', rankingSchema);