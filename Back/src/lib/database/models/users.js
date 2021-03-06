'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    userName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    password: DataTypes.STRING,
    win: DataTypes.INTEGER,
    draw: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    friends: DataTypes.TEXT,
	google: DataTypes.TEXT,
    currentlyActive: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
