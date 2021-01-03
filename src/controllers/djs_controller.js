const { pick } = require("lodash");

const { djs, Musicalgenre, DjMusicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    // Your code here
    return await djs.findAll();
  },

  getDj: async (name) => {
    // Your code here

    return await djs.findOne({ name });
  },

  addDj: async (data) => {
    // Your code here
    return await djs.create(data);
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
