const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const notificationSchema = new Schema({
    idNot: String,
    idUser: String,
    title: String,
    descriptn: String
}, {
    versionKey: false
});

module.exports = model('notificacions', notificationSchema);