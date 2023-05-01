const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const resorceGISchema = new Schema({
    idRGI: String,
    idGame: String,
    img: String
}, {
    versionKey: false
});

module.exports = model('resorces_gis', resorceGISchema);