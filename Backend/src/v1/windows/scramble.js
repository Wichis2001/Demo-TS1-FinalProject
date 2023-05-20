const express = require('express');
const getRC = require('../../controllers/GetsDataController');
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

router.route("/getCodeWords/:idGame").get(async function(request, response) {

    const codesWords = await getRC.getAllWordsCodes(request.params.idGame);
    response.send(codesWords);
});

router.route("/getWord/:idWord").get(async function(request, response) {
    const word = await getRC.getWord(request.params.idWord);
    response.send(word.word);
});

router.route("/playScramble/:idWord/:answer").get(async function(request, response) {
    const { idWord, answer } = request.params;
    const word = await getRC.getWord(idWord);
    let points = 0;
    if (word.word == answer) {
        points = word.score;
    }
    response.send(points.toString());
});

module.exports = router;