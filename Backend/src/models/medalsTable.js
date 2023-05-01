const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const medalTableSchema = new Schema({
    idTableMedal: String,
    idUser: String,
    idMedal: String
}, {
    versionKey: false
});

module.exports = model('medal_tables', medalTableSchema);