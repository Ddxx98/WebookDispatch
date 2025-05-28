const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Destination', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    accountId: { type: DataTypes.INTEGER, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    method: { type: DataTypes.STRING, allowNull: false },
    headers: { type: DataTypes.TEXT, allowNull: false,
      get() {
        const raw = this.getDataValue('headers');
        return raw ? JSON.parse(raw) : {};
      },
      set(value) {
        this.setDataValue('headers', JSON.stringify(value));
      }
    }
  }, {
    tableName: 'destinations',
    timestamps: false
  });
};