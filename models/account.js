const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize) => {
  return sequelize.define('Account', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    website: { type: DataTypes.STRING, allowNull: true },
    secretToken: { type: DataTypes.STRING, allowNull: false, defaultValue: () => uuidv4() }
  }, {
    tableName: 'accounts',
    timestamps: false
  });
};