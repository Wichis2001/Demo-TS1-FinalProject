const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const wordBoxesSchema = new Schema({
    idWB: String,
    idGame: String,
    word: String,
    score: Number
}, {
    versionKey: false
});

module.exports = model('word_boxes', wordBoxesSchema);