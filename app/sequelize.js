var Sequelize = require('sequelize'),
	// sequelize = new Sequelize('database', 'user', 'password', {
 //    	host: 'localhost',
 //    	dialect: 'mysql'
 //    })
    sequelize = new Sequelize('', '', '', {
    	host: '',
    	dialect: 'mysql'
    })

module.exports = sequelize