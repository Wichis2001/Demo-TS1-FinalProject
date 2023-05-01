const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const medalSchema = new Schema({
    idMedal: String,
    tipo: String,
    description: String
}, {
    versionKey: false
});

module.exports = model('medals', medalSchema);