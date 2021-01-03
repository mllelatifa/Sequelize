"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      djs.belongsTo(models.clubs, { foreignKey: "club_id" });

      djs.belongsToMany(models.musicalgenres, {
        through: "djmusicalgenres",
        foreignKey: "dj_id",
      });
    }
  }
  djs.init(
    {
      url_name: DataTypes.STRING,
      name: DataTypes.STRING,
      biography: DataTypes.STRING,
      souncloud: DataTypes.STRING,
      facebook: DataTypes.STRING,
      instagram: DataTypes.STRING,
      spotify: DataTypes.STRING,
      beatport: DataTypes.STRING,
      mixcloud: DataTypes.STRING,
      youtube: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "djs",
    }
  );
  return djs;
};
