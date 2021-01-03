"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class djmusicalgenres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  djmusicalgenres.init(
    {
      dj_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "djs",
          key: "id",
        },
      },

      musicalgenre_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "musicalgenres",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "djmusicalgenres",
    }
  );
  return djmusicalgenres;
};
