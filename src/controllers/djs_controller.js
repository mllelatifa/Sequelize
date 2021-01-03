const { pick } = require("lodash");

const { djs, musicalgenres, DjMusicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    // Your code here
    return await djs.findAll({ include: musicalgenres });
  },

  getDj: async (name) => {
    // Your code here

    return await djs.findOne({ where: { name } });
  },

  addDj: async (data) => {
    // Your code here
    const allGenres = await musicalgenres.findAll();
    const musical_genres = data.musical_genres;

    const dj = await djs.create(data);
    musical_genres.forEach(async (genre) => {
      allGenres.forEach(async (dbGenre) => {
        if (dbGenre.dataValues.name === genre)
          await dj.addMusicalgenre(dbGenre);
      });
    });

    return djs.findOne({
      where: { id: dj.id },
      include: musicalgenres,
    });
  },

  updateDj: async (name, data) => {
    // Your code here
    return djs.update(data, { where: { name } });
  },

  deleteDj: async (name) => {
    // Your code here
    return await djs.destroy({ where: { name } });
  },
};

module.exports = djsController;
