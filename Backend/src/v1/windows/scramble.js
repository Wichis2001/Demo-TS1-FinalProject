const express = require('express');
const Game = require('../../models/games');
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

module.exports = router;