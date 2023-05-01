const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const scoreSchema = new Schema({
    idScore: String,
    idUser: String,
    idGame: String,
    score: Number
}, {
    versionKey: false
});

module.exports = model('scores', scoreSchema);