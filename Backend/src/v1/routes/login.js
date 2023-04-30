const express = require('express');
const router = express.Router();
//verificar login

router.route("/login").post(function(request, response) {

    let user = request.body.user;
    let psswrd = request.body.password;

    if (user != null && psswrd != null && user != "" && psswrd != "") {
        //traer de la base de datos y verificar
        res.send('INGRESAR A LA PAGINA PRINCIPAL');
    } else {
        res.send('ERROR AL INGRESAR VALOR');
    }
});



module.exports = router;