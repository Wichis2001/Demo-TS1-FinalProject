const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
    idUser: String,
    nickname: String,
    name: String,
    lastname: String,
    password: String,
    rol: String
}, {
    versionKey: false
});

module.exports = model('users', userSchema);