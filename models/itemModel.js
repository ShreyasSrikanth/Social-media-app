const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const items = sequelize.define('User',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey: true
    },
    imageUrl:Sequelize.STRING,
    imageCaption: Sequelize.STRING
});

module.exports = items;
