const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const modelGamesSchema = new Schema({
    idModel: String,
    name: String,
    descriptn: String
}, {
    versionKey: false
});

module.exports = model('model_games', modelGamesSchema);