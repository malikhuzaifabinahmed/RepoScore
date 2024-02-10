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
      await queryInterface.removeColumn('startupsincubated', 'briefidea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsincubated',
        'briefidea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymembername',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymembername',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymemberdesignation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymemberdesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymemberdepartment',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymemberdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'sectorfield', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsincubated',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'seedfundingsecuredifany',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'seedfundingsecuredifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'stage', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsincubated',
        'stage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'incubatedsinceexpectedgraduation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'incubatedsinceexpectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'internshipjobscreated',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'internshipjobscreated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'totalfacultystartups',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'totalfacultystartups',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'categoryid', {
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
        'startupsincubated',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'totalfacultystartups',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'totalfacultystartups',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'internshipjobscreated',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'internshipjobscreated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'incubatedsinceexpectedgraduation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'incubatedsinceexpectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'stage', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsincubated',
        'stage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'seedfundingsecuredifany',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'seedfundingsecuredifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'sectorfield', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsincubated',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymemberdepartment',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymemberdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymemberdesignation',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymemberdesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymembername',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymembername',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'briefidea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsincubated',
        'briefidea',
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
