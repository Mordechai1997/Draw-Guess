const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const games = sequelize.define('games', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    idFirstPlayer: {
        type: DataTypes.INTEGER
    },
    idSecondPlayer: {
        type: DataTypes.INTEGER
    },
    idModeGame: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING
    }
})
module.exports = games;