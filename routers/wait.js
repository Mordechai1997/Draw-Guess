const express = require('express');
const router = express.Router();
const shopController = require('../controller/wait')

router.get('/', shopController.waitingSecondPlayer);
router.get('/Painting', shopController.waitingPainting);
router.get('/checkImg', shopController.checkImgUpdate);
router.get('/checkanswer', shopController.checkIfThereIsAnswer);
router.get('/:img', shopController.waitingForReply);





module.exports = router;