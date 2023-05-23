const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8080;
//RUTAS
const login = require('./v1/windows/login');
const register = require('./v1/windows/register');
const notifications = require('./v1/windows/notifications');
const comments = require('./v1/windows/comentarios');
const rankings = require('./v1/windows/rankings');
const scores = require('./v1/windows/scores');
const medalTables = require('./v1/windows/medalTables');
const scramble = require('./v1/windows/scramble')
const preguntados = require('./v1/windows/preguntados')
const game = require('./v1/windows/gameRoute')
const reports = require('./v1/windows/reportes')
const admin = require('./v1/windows/admin')
    //DEFINIMOS EL USO DE JSON'S
    //!Habilitar CORS
app.use(cors());
app.use(express.json());
//CONEXION CON LA BASE DE DATOS

async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/game_box', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log('Conectado a la base de datos: ', db.connection.name);
    } catch (error) {
        console.log(error);
    }
}
start();


app.use("/api", login);
app.use("/api", register);
app.use("/api", notifications);
app.use("/api", comments);
app.use("/api", rankings);
app.use("/api", scores);
app.use("/api", medalTables);
app.use("/api", scramble);
app.use("/api", preguntados);
app.use("/api", game);
app.use("/api", reports);
app.use("/api", admin);
app.listen(PORT, function() {
    console.log('SERVER LISTENING ON PORT ' + PORT);
});