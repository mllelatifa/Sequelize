// const { Musicalgenre } = require("../models");
const { djs, musicalgenres, DjMusicalgenre } = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    // Your code here
    return await musicalgenres.findAll({ include: djs });
  },
};

module.exports = musicalGenresController;
