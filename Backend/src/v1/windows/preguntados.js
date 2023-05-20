const express = require('express');
const getRC = require('../../controllers/GetsDataController');
const router = express.Router();
//GET DE LOS CODIGOS DE LAS PREGUNTAS DE UN JUEGO - REQUERIMIENTO:ID_GAME
router.route("/getCodesQuestions/:idGame").get(async function(request, response) {
    const codesQuestions = await getRC.getAllQuestionsCodes(request.params.idGame);
    response.send(codesQuestions);
});
//GET TEXTO DE LA PREGUNTA DEL JUEGO - REQUERIMIENTOS: ID_QUESTION
router.route("/getQuestion/:idQuest").get(async function(request, response) {
    const question = await getRC.getQuestion(request.params.idQuest);
    response.send(question.question);
});
//GET DE LOS CODIGOS DE LAS RESPUESTA DE UN JUEGO - REQUERIMIENTO:ID_QUESTION
router.route("/getCodesAnswers/:idQuest").get(async function(request, response) {
    const codeAnswers = await getRC.getAllAnswersCodes(request.params.idQuest);
    response.send(codeAnswers);
});
//GET TEXTO DE LA RESPUESTA A UNA PREGUNTA - REQUERIMIENTOS: ID_ANSWER
router.route("/getAnswer/:idAnswer").get(async function(request, response) {
    const answer = await getRC.getAnswer(request.params.idAnswer);
    response.send(answer.answer);
});
//GET PUNTOS OBTENIDOS AL SELECCIONAR UNA RESPUESTA - ID_QUESTION, ID_ANSWER - DEVUELTE: puntos obtenidos si es correcto o no
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