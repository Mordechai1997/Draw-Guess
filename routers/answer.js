const express = require('express');
const controllerAnswer = require('../controller/answer')
const router = express.Router();

router.post('/', controllerAnswer.getAnswer);
router.get('/correct', controllerAnswer.correctAnswer);
router.get('/wrong', controllerAnswer.wrongAnswer);
router.get('/theanswer', controllerAnswer.theAnswer);





module.exports = router;