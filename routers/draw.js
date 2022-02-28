const express = require('express');
const router = express.Router();
const drawController = require('../controller/draw')

router.get('/', drawController.chooseWord);
router.get('/img', drawController.viewImg);
router.get('/:point&:word', drawController.wordSelected);


module.exports = router;