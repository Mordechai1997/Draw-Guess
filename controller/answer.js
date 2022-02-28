const games = require('../models/games');
const store = require("store2");


exports.getAnswer = (req, res, next) => {
    games.findOne({ where: { id: store.get('idGame') } })
        .then((game) => {
            game.update({ img: null })
        })
    store.set('answer', req.body.answer);
    if (req.body.answer === store.get('word')) {
        res.redirect('/answer/correct')
    } else {
        res.redirect('/answer/wrong')
    }

}
exports.correctAnswer = (req, res, next) => {
    res.render('correctAnswer', {
        points: store.get('points'),
        css: '/css/style.css'
    });
}
exports.wrongAnswer = (req, res, next) => {
    res.render('wrongAnswer', {
        points: store.get('points'),
        css: '/css/style.css'

    });
}
exports.theAnswer = (req, res, next) => {
    res.render('theAnswer', {
        answer: store.get('answer'),
        word: store.get('word'),
        css: '/css/style.css'

    })
}