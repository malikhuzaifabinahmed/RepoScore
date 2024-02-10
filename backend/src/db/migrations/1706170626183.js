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
      await queryInterface.removeColumn('startupemploment', 'nameofstartup', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'startupfacultymembername',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'startupfacultymembername',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'designationdepartment',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'designationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'startupstatusincubatedgraduated',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'startupstatusincubatedgraduated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employeename', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'employeename',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employmenttype', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'employmenttype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'salarystipendhonorarium',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'salarystipendhonorarium',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employeesince', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'employeesince',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'categoryid', {
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
        'startupemploment',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employeesince', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'employeesince',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'salarystipendhonorarium',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'salarystipendhonorarium',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employmenttype', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'employmenttype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employeename', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
        'employeename',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'startupstatusincubatedgraduated',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'startupstatusincubatedgraduated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'designationdepartment',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'designationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'startupfacultymembername',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'startupfacultymembername',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'nameofstartup', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupemploment',
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
