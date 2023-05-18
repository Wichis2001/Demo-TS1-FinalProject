const express = require('express');
const router = express.Router();

router.route("/scramble/:word").get(async function(request, response) {

    let scrambled = "";
    const letters = request.params.word.split('');

    while (letters.length > 0) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomLetter = letters.splice(randomIndex, 1)[0];
        scrambled += randomLetter;
    }

    response.send({ 'word': scrambled });

});

router.route("/newScramble").post(async function(request, response) {
    const data = {
        nameGame: request.body.nameGame,
        passwrd: request.body.passwrd,
        descriptn: request.body.descriptn,
        idModel: request.body.idModel
    }

    fetch('http://localhost:4200/api/addGame', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(response => {
            //COSAS
            const data2 = {
                idGame: request.body.idGame,
                word: request.body.word,
                score: request.body.score
            }

            fetch('http://localhost:4200/api/addWord', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data2)
                })
                .then(response => response.json())
                .then(response => {
                    //COSAS
                })
                .catch(error => console.error(error));


        })
        .catch(error => console.error(error));






    const lastRegister = await Game.count();
    const insert = new Game({
        idGame: "G" + (lastRegister + 1),
        nameGame: request.body.nameGame,
        passwrd: request.body.passwrd,
        descriptn: request.body.descriptn,
        idModel: request.body.idModel
    });
    const insertData = await insert.save();
    response.json(insertData);
    console.log(request.body);

});





module.exports = router;