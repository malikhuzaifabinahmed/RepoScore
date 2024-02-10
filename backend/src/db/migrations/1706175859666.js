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
      await queryInterface.addColumn(
        'trainingcourseinfo',
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

      await queryInterface.addColumn(
        'trainings',
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

      await queryInterface.addColumn(
        'universityadvancedstudiesandresearchboard',
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

      await queryInterface.addColumn(
        'visits',
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

      await queryInterface.addColumn(
        'workshopeventinfo',
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
      await queryInterface.removeColumn('workshopeventinfo', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('visits', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('trainingcourseinfo', 'categoryIdId', {
        transaction,
      });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
