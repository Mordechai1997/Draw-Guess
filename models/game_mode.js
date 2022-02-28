const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const game_mode = sequelize.define('game_mode', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    mode: {
        type: DataTypes.STRING,
        allowNull: false

    }
})

module.exports = game_mode;