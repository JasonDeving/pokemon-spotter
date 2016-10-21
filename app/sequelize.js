var Sequelize = require('sequelize'),
	// sequelize = new Sequelize('database', 'user', 'password', {
 //    	host: 'localhost',
 //    	dialect: 'mysql'
 //    })
    sequelize = new Sequelize('o3quxqj2utbg0ueb', 'n5i36j4eb1w6ibx3', 'zid5fxowrlnixkid', {
    	host: 'z37udk8g6jiaqcbx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    	dialect: 'mysql'
    })

module.exports = sequelize