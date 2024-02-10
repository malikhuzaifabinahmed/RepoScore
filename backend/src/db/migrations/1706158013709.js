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
      await queryInterface.removeColumn('startuprevenue', 'nameofstartup', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'facultymembernamedesignationdepartment',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'facultymembernamedesignationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'currentstatus', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'currentstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'incubatedsinceandexpectedgraduation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'incubatedsinceandexpectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'revenuegenerated', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'revenuegenerated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'totalmonthsinincubation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'totalmonthsinincubation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'averagerevenue', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'averagerevenue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'sharingmechanismbetweenbicheiandstartup',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'sharingmechanismbetweenbicheiandstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'categoryid', {
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
        'startuprevenue',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'sharingmechanismbetweenbicheiandstartup',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'sharingmechanismbetweenbicheiandstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'averagerevenue', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'averagerevenue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'totalmonthsinincubation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'totalmonthsinincubation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'revenuegenerated', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'revenuegenerated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'incubatedsinceandexpectedgraduation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'incubatedsinceandexpectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'currentstatus', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'currentstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'facultymembernamedesignationdepartment',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'facultymembernamedesignationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'nameofstartup', {
        transaction,
      });

      await queryInterface.addColumn(
        'startuprevenue',
        'nameofstartup',
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
