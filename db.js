// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('appdb', 'admin', 'Admin1234', {
  host: 'terraform-20250609062538846500000001.c27ss8cu656n.us-east-1.rds.amazonaws.com',
  port: 3306,
  dialect: 'mysql',
  logging: console.log // (or false to hide logs)
});

module.exports = sequelize;
