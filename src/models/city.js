'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      City.hasMany(models.Airport, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE', // Add ON DELETE CASCADE option
        onUpdate: 'CASCADE', // Add ON UPDATE CASCADE option
      }); // Each city can have multiple airports
    }
  }
  City.init({
    name: DataTypes.STRING,
    allowNull: false,
    unique: true
  
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};