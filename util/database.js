const Sequelize = require('sequelize');

const sequelise = new Sequelize('node-test1','root','root',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelise;