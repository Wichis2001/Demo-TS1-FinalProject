var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'game_box',
    user: 'root',
    password: ''
});

conexion.connect(function(error) {
    if (error) {
        console.error('Error de conexion: ' + error.stack);
        return;
    }
    console.log('Conectado con la base de datos');
})