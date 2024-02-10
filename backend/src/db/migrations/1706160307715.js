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
      await queryInterface.removeColumn('workshopeventinfo', 'title', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'title',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'dateheld', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'dateheld',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'venue', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'venue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'fieldthematicarea',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'fieldthematicarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'panelistmentoradvisorname',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'panelistmentoradvisorname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'panelistmentoradvisordesignation',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'panelistmentoradvisordesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'arrangedby', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'arrangedby',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'facultystudent', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'facultystudent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'noofparticipants',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'noofparticipants',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'totalnoeventsheld',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'totalnoeventsheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'categoryid', {
        transaction,
      });

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'categoryIdId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'categories',
            key: 'id',
          },
        },
        { transaction },
      );

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
      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'totalnoeventsheld',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'totalnoeventsheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'noofparticipants',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'noofparticipants',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'facultystudent', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'facultystudent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'arrangedby', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'arrangedby',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'panelistmentoradvisordesignation',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'panelistmentoradvisordesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'panelistmentoradvisorname',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'panelistmentoradvisorname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'fieldthematicarea',
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'fieldthematicarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'venue', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'venue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'dateheld', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'dateheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'title', {
        transaction,
      });

      await queryInterface.addColumn(
        'workshopeventinfo',
        'title',
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
