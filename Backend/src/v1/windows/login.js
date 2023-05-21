const express = require('express');
const User = require('../../models/users');
const router = express.Router();
//verificar login

router.route("/login").post(async function(request, response) {
    const { nickname, password } = request.body;

    const userTemp = await User.findOne({ nickname, password });

    if (userTemp) {
        response.send({
            userTemp,
            ok: true
        });
    } else {
        response.status( 400 ).send({
            ok: false,
            msg: `El usuario ${ nickname } no se encuentra registrado`
        })
    }
});

module.exports = router;