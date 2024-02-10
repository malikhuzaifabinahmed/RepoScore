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
      await queryInterface.removeColumn(
        'mentorshipinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'partnershipinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'spinoffstartups',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupevents',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'documentaryevidence',
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
      await queryInterface.addColumn(
        'startupemploment',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupmentoring',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupevents',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'documentaryevidence',
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
