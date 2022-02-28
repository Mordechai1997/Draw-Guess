const Game_mode = require('../models/game_mode')

const arrMode = ['waiting', 'active', 'closed'];
const createSituation = (index) => {
    const mode = Game_mode.build({
        id: index,
        mode: arrMode[index - 1]
    });
    mode.save();
}
exports.createSituations = () => {
    for (let i = 1; i <= arrMode.length; i++) {
        createSituation(i)
    }
}