const Sequelize = require('sequelize');
const sequelize = require('../connection/database');

const Voting = sequelize.define('voting', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    votingOption: {
        type: Sequelize.STRING,
        allowNull: false
    },
    votingLocation: {
        type: Sequelize.STRING
    },
    votingNumber: {
        type: Sequelize.STRING
    },
    yardNumber: {
        type: Sequelize.STRING
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

module.exports = Voting;