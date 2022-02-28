const users = require('../models/users');
const games = require('../models/games');
const store = require("store2");




exports.signin = (req, res, next) => {

    const user = users.build({
        userName: req.body.nickname
    });

    user.save().then((user) => {
        games.count({
            where: { idModeGame: 1 },
        }).then((count) => {
            if (count == 0) {
                const game = games.build({
                    idFirstPlayer: user.dataValues.id,
                    idModeGame: 1,
                })
                game.save().then((game) => store.set('idGame', game.dataValues.id))
                res.redirect('/wait');


            } else {
                games.findOne({ where: { idModeGame: 1 } })
                    .then((game) => {
                        game.update({ idSecondPlayer: user.dataValues.id, idModeGame: 2 })
                        store.set('idGame', game.dataValues.id)
                    })
                res.redirect('/wait/Painting');

            }
        })

    });

}