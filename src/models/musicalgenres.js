"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class musicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      musicalgenres.belongsToMany(models.djs, {
        through: "djmusicalgenres",
        foreignKey: "musicalgenre_id",
      });
      // define association here
    }
  }
  musicalgenres.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "musicalgenres",
    }
  );
  return musicalgenres;
};
