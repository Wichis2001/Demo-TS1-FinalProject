const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema({
    idUser: String,
    name: String,
    password: String
}, {
    versionKey: false
});

module.exports = model('users', userSchema);