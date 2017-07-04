var Sequelize = require('sequelize');

var connection = new Sequelize('my-blog', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = connection;