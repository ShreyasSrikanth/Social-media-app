const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const items = sequelize.define('comments',{
    name:Sequelize.STRING,
    comments:Sequelize.STRING
});

module.exports = items;
