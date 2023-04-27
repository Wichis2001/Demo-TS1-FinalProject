const express = require('express');
const router = express.Router();

router.route("login/create").post(function(request, response) {

    let user = request.body.user;
    let psswrd = request.body.password;

    if (user != null && psswrd != null && user != "" && psswrd != "") {
        //ingresar a la base de datos
    } else {
        res.send('ERROR AL INGRESAR VALOR');
    }
});

module.exports = router;