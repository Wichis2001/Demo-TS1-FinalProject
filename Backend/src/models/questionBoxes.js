const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const questionBoxesSchema = new Schema({
    idQB: String,
    idGame: String,
    question: String,
    score: Number
}, {
    versionKey: false
});

module.exports = model('question_boxes', questionBoxesSchema);