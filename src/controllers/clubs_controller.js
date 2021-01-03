/* eslint-disable prettier/prettier */
const { clubs } = require("../models");

const clubsController = {
  getAllClubs: async () => {
    // Your code here
    return await clubs.findAll();
  },
  getClub: async (name) => {
    // Your code here
    return await clubs.findOne({ where: { name } });
  },
  addClub: async (data) => {
    // Your code here
    return await clubs.create(data);
  },
};

module.exports = clubsController;
