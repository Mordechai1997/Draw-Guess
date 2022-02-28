const express = require('express');
const router = express.Router();
const path = require('path');
const controllerSignin = require('../controller/signin');

router.get('/', (req, res) => {
    res.render('welcome', {
        action: "/signin",
        css: "css/login.css"
    })

});
router.post('/signin', controllerSignin.signin)


module.exports = router;