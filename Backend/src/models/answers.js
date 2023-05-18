const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const answersSchema = new Schema({
    idA: String,
    idQuestion: String,
    answer: String,
    value: String
}, {
    versionKey: false
});

module.exports = model('answers', answersSchema);