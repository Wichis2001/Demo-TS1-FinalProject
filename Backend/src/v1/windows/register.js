const express = require('express');
const initialConfig = require('../../controllers/InitialConfigControler');
const User = require('../../models/users');
const router = express.Router();

router.route("/login/create").post(async function(request, response) {

    const { name, password } = request.body;
    const lastRegister = await User.count();

    const insert = new User({
        idUser: "U" + (lastRegister + 1),
        name: name,
        password: password
    });

    if (insert && name != '' && password != '') {
        const insertData = await insert.save();
        initialConfig.addUserRank(insert.idUser);
        response.send({ 'idUser': insert.idUser });
    } else {
        response.send('Datos inválidos');
    }

});

module.exports = router;