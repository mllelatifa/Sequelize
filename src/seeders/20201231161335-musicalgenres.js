"use strict";
const now = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "musicalgenres",
      [
        { id: 1, name: "Open Format", createdAt: now, updatedAt: now },
        { id: 2, name: "House", createdAt: now, updatedAt: now },
        { id: 3, name: "Deep House", createdAt: now, updatedAt: now },
        { id: 4, name: "Electro", createdAt: now, updatedAt: now },
        { id: 5, name: "Funk", createdAt: now, updatedAt: now },
        { id: 6, name: "Hip Hop", createdAt: now, updatedAt: now },
        { id: 7, name: "Rap", createdAt: now, updatedAt: now },
      ],
      {}
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
    await queryInterface.bulkDelete("musicalgenres", null, {});
  },
};
