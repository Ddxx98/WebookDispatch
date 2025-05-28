const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'data-pusher.sqlite'),
  logging: false
});

const Account = require('./account')(sequelize);
const Destination = require('./destination')(sequelize);

Account.hasMany(Destination, { foreignKey: 'accountId', onDelete: 'CASCADE' });
Destination.belongsTo(Account, { foreignKey: 'accountId' });

module.exports = { sequelize, Account, Destination };