const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const resorceGDSchema = new Schema({
    idRGI: String,
    idGame: String,
    data: String
}, {
    versionKey: false
});

module.exports = model('resorces_gds', resorceGDSchema);