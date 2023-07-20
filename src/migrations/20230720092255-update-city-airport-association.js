'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Airports', {
      fields: ['CityId'],
      type: 'foreign key',
      name: 'Airports_Cities_fk', // Give your foreign key constraint a name
      references: {
        table: 'Cities',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'Airports_Cities_fk');
  }
};
