const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const users = sequelize.define('users', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false

    }
})
module.exports = users;