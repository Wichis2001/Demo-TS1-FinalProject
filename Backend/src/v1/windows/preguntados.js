const express = require('express');
const getRC = require('../../controllers/GetsDataController');
const router = express.Router();

router.route("/getCodesQuestions/:idGame").get(async function(request, response) {
    const codesQuestions = await getRC.getAllQuestionsCodes(request.params.idGame);
    response.send(codesQuestions);
});

router.route("/getQuestion/:idQuest").get(async function(request, response) {
    const question = await getRC.getQuestion(request.params.idQuest);
    response.send(question.question);
});

router.route("/getCodesAnswers/:idQuest").get(async function(request, response) {
    const codeAnswers = await getRC.getAllAnswersCodes(request.params.idQuest);
    response.send(codeAnswers);
});

router.route("/getAnswer/:idAnswer").get(async function(request, response) {
    const answer = await getRC.getAnswer(request.params.idAnswer);
    response.send(answer.answer);
});

router.route("/playPreguntados/:idQuest/:idAnswer").get(async function(request, response) {
    const { idQuest, idAnswer } = request.params;
    const answer = await getRC.getAnswer(idAnswer);
    const question = await getRC.getQuestion(idQuest);
    let points = 0;
    if (answer.value == 'true') {
        points = question.score;
    }
    response.send(points.toString());
});

module.exports = router;