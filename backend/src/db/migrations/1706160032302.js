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
      await queryInterface.removeColumn('visits', 'nameofvisits', {
        transaction,
      });

      await queryInterface.addColumn(
        'visits',
        'nameofvisits',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('visits', 'dateofvisit', {
        transaction,
      });

      await queryInterface.addColumn(
        'visits',
        'dateofvisit',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('visits', 'agendaofvisit', {
        transaction,
      });

      await queryInterface.addColumn(
        'visits',
        'agendaofvisit',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('visits', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn('visits', '', { transaction });

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
        'visits',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'visits',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn('visits', 'agendaofvisit', {
        transaction,
      });

      await queryInterface.addColumn(
        'visits',
        'agendaofvisit',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('visits', 'dateofvisit', {
        transaction,
      });

      await queryInterface.addColumn(
        'visits',
        'dateofvisit',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('visits', 'nameofvisits', {
        transaction,
      });

      await queryInterface.addColumn(
        'visits',
        'nameofvisits',
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
