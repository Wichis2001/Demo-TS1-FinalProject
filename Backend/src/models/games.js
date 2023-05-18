const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const gameSchema = new Schema({
    idGame: String,
    nameGame: String,
    passwrd: String,
    descriptn: String,
    idModel: String
}, {
    versionKey: false
});

module.exports = model('games', gameSchema);