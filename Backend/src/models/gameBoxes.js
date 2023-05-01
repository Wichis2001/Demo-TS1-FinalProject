const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const gameBoxesSchema = new Schema({
    idGB: String,
    idUser: String,
    idGame: String
}, {
    versionKey: false
});

module.exports = model('game_boxes', gameBoxesSchema);