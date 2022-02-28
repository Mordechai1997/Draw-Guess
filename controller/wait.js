const games = require('../models/games');
const store = require("store2");
const { redirect } = require('express/lib/response');


exports.waitingSecondPlayer = (req, res, next) => {
    games.count({
        where: { id: store.get('idGame'), idModeGame: 2 },
    }).then((count) => {
        if (count === 1) {
            return res.redirect('/draw')
        } else {
            return res.render('wait', {
                title: 'Wait for the other player',
                js: "/js/waitPlayer.js",
                css: '/css/wait.css'
            })
        }
    })
}
exports.waitingPainting = (req, res, next) => {
    res.render('wait', {
        title: 'Wait for the drawing to complete',
        js: "/js/paintWaiting.js",
        css: '/css/wait.css'

    })
}
exports.checkImgUpdate = (req, res, next) => {

    games.count({
        where: { id: store.get('idGame'), img: null },
    }).then((count) => {
        if (count > 0) {
            return res.render('wait', {
                title: 'Wait for the drawing to complete',
                js: "/js/paintWaiting.js",
                css: '/css/wait.css'

            })
        }
        return res.redirect('/draw/img')
    })
}

exports.waitingForReply = (req, res, next) => {
    games.findOne({ where: { id: store.get('idGame') } })
        .then((game) => {
            game.update({ img: 'active' })
        }).then(() => {

            res.render('wait', {
                title: 'Wait for the answer',
                js: "/js/waitingForReply.js",
                css: '/css/wait.css'

            })
        })

}

exports.checkIfThereIsAnswer = (req, res, next) => {
    games.count({
        where: { id: store.get('idGame'), img: null },
    }).then((count) => {
        if (count === 1) {
            return res.redirect('/answer/theAnswer')
        } else {
            return res.render('wait', {
                title: 'Wait for the answer',
                js: "/js/waitingForReply.js",
                css: '/css/wait.css'

            })
        }
    })


}