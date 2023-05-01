const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const commentsSchema = new Schema({
    idComm: String,
    idUser: String,
    idGame: String,
    information: String
}, {
    versionKey: false
});

module.exports = model('comments', commentsSchema);