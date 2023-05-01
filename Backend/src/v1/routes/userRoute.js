const express = require('express');
const User = require('../../models/users');
const router = express.Router();
//POST : INSERTAR COSAS
router.post('/addUser', async function(request, response) {
    const lastRegister = await User.count();
    const insert = new User({
        idUser: "U" + (lastRegister + 1),
        name: request.body.name,
        password: request.body.password
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);
});

module.exports = router;