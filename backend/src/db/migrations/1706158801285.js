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
      await queryInterface.removeColumn('startupsappliedforpitching', 'idea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'idea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'entrepreneur',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'entrepreneur',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'fieldarea',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'fieldarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'educationalbackground',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'educationalbackground',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'teammembers',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'teammembers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'currentstatus',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'currentstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'resultremarksfromcompetition',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'resultremarksfromcompetition',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'availabilityoffundingseedmoney',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'availabilityoffundingseedmoney',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'dateheld',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'dateheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'noofideasapplied',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'noofideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'categoryid',
        { transaction },
      );

      await queryInterface.removeColumn('startupsappliedforpitching', '', {
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
        'startupsappliedforpitching',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'noofideasapplied',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'noofideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'dateheld',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'dateheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'availabilityoffundingseedmoney',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'availabilityoffundingseedmoney',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'resultremarksfromcompetition',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'resultremarksfromcompetition',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'currentstatus',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'currentstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'teammembers',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'teammembers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'educationalbackground',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'educationalbackground',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'fieldarea',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'fieldarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'entrepreneur',
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'entrepreneur',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('startupsappliedforpitching', 'idea', {
        transaction,
      });

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'idea',
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
