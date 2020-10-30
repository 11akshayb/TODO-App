const config = require('./testdb.config.js');
const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // logging: true
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
