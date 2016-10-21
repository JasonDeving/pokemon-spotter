var UserMeta = require('./User.js'),
    connection = require('../sequelize.js');
    // PokemonMeta = require('./character.js')
var Sequelize = require('sequelize')


var User = connection.define('users', UserMeta.attributes, UserMeta.options)
var Character = connection.define('Characters', {

    // the routeName gets saved as a string
    routeName: Sequelize.STRING,
    // the name of the character (string)
    name: Sequelize.STRING,
    // address is a string
    address: Sequelize.STRING,
    // lat
    lat: Sequelize.INTEGER,
    // long
    long: Sequelize.INTEGER,
    // points
    points: Sequelize.INTEGER
  });

// you can define relationships here
User.sync();
Character.sync();
module.exports.User = User
module.exports.Character = Character