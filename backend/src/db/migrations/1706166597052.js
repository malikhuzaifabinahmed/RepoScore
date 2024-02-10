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
      await queryInterface.removeColumn('startupevents', 'nameofevent', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'nameofevent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'dateheld', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'dateheld',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'panelistdetails', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'panelistdetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'ideasapplied', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'ideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'ideasselected', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'ideasselected',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'winnersdetails', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'winnersdetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'prizefundingamount', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'prizefundingamount',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupevents',
        'eventfundingsourcessponsors',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'eventfundingsourcessponsors',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'noofideasapplied', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'noofideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupevents',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', '', { transaction });

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
        'startupevents',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupevents',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'noofideasapplied', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'noofideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupevents',
        'eventfundingsourcessponsors',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'eventfundingsourcessponsors',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'prizefundingamount', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'prizefundingamount',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'winnersdetails', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'winnersdetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'ideasselected', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'ideasselected',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'ideasapplied', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'ideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'panelistdetails', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'panelistdetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'dateheld', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'dateheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'nameofevent', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupevents',
        'nameofevent',
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
