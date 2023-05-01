const express = require('express');
const User = require('../../models/users');
const router = express.Router();
//verificar login

router.route("/login").post(async function(request, response) {
    const { name, password } = request.body;
    // Query the database to find the user with the given email and password
    const userTemp = await User.findOne({ name, password });

    if (userTemp) {
        //COLOCAR URL DEL HOME
        response.redirect('/home/' + name);
    } else {
        response.send('Usuario o contraseña inválida');
    }
});



module.exports = router;