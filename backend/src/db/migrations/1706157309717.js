module.exports = {
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async up(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('startupincubation', '', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'idea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'idea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'teammembers', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'teammembers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'sectorfield', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'seedfundingsecuredifany',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'seedfundingsecuredifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'incubatedsince', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'incubatedsince',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'expectedgraduation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'expectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'internshipjobsprovidedviastartup',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'internshipjobsprovidedviastartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'totalslots', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'totalslots',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'occupiedslots', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'occupiedslots',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'categoryid', {
        transaction,
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  /**
   * @param {QueryInterface} queryInterface
   * @param {Sequelize} Sequelize
   * @returns {Promise<void>}
   */
  async down(queryInterface, Sequelize) {
    /**
     * @type {Transaction}
     */
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'startupincubation',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'occupiedslots', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'occupiedslots',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'totalslots', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'totalslots',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'internshipjobsprovidedviastartup',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'internshipjobsprovidedviastartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'expectedgraduation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'expectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'incubatedsince', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'incubatedsince',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'seedfundingsecuredifany',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'seedfundingsecuredifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'sectorfield', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'teammembers', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'teammembers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'idea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupincubation',
        'idea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
