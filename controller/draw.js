const games = require('../models/games');
const store = require("store2");

exports.chooseWord = (req, res, next) => {
    res.render('wordChoice', {
        css: '/css/wordChoice.css'
    });
}
exports.viewImg = (req, res, next) => {
    res.render('viewImg', {
        css: '/css/style.css'
    });
}

exports.wordSelected = (req, res, next) => {
    store.set('points', req.params.point)
    store.set('word', req.params.word)

    res.render('draw', {
        word: store.get('word'),
        css: '/css/draw.css'
    });
}