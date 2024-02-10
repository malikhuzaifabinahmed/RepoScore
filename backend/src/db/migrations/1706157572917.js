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
      await queryInterface.removeColumn('startupmentoring', 'nameofmentor', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupmentoring',
        'nameofmentor',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'designation', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupmentoring',
        'designation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'fieldarea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupmentoring',
        'fieldarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'noofmentoringlecturesprovided',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'noofmentoringlecturesprovided',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'noofstartupsfacilitated',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'noofstartupsfacilitated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'costpermentoringhourchargedifany',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'costpermentoringhourchargedifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'totalmentoringsessions',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'totalmentoringsessions',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn('startupmentoring', '', {
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
        'startupmentoring',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'totalmentoringsessions',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'totalmentoringsessions',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'costpermentoringhourchargedifany',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'costpermentoringhourchargedifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'noofstartupsfacilitated',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'noofstartupsfacilitated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'noofmentoringlecturesprovided',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'noofmentoringlecturesprovided',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'fieldarea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupmentoring',
        'fieldarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'designation', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupmentoring',
        'designation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'nameofmentor', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupmentoring',
        'nameofmentor',
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
