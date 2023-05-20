const express = require('express');
const initialConfig = require('../../controllers/InitialConfigControler');
const User = require('../../models/users');
const router = express.Router();

router.route("/login/create").post(async function(request, response) {

    const { nickname, lastname, name, password, rol } = request.body;
    const lastRegister = await User.count();

    const insert = new User({
        idUser: "U" + (lastRegister + 1),
        nickname: nickname,
        name: name,
        lastname: lastname,
        password: password,
        rol: rol
    });

    if (insert && name != '' && password != '' && lastname != '' && nickname != '') {
        const insertData = await insert.save();
        initialConfig.addUserRank(insert.idUser);
        response.send( insert );
    } else {
        response.send('Datos inválidos');
    }

});

module.exports = router;