'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Peliculas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.STRING
      },
      adult: {
        type: Sequelize.BOOLEAN
      },
      popularity: {
        type: Sequelize.FLOAT
      },
      image: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Peliculas');
  }
};