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
      await queryInterface.removeColumn('trainingcourseinfo', 'nameofcourse', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'nameofcourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainingcourseinfo', 'typeofcourse', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'typeofcourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainingcourseinfo', 'leveloffered', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'leveloffered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'majorareascovered',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'majorareascovered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'keylearningoutcomes',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'keylearningoutcomes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'noofstartupscompletedthecourse',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'noofstartupscompletedthecourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'coursedevelopment',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'coursedevelopment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'ifoutsourcednameofcourseofferingbodydetails',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'ifoutsourcednameofcourseoffered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'documentaryevidence',
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

      await queryInterface.removeColumn('trainingcourseinfo', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn('trainings', 'titleoftraining', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'titleoftraining',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'dateofevent', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'dateofevent',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'numberofparticipants', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'numberofparticipants',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'majorfocusareaandoutcomes',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'majorfocusareaandoutcomes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'audiencetype', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'audiencetype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'organizer', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'organizer',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'nameoforicpersonalattended',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'nameoforicpersonalattended',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'detailsoforicpersonnelattended',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'detailsoforicpersonnelattended',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'categoriesid', {
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
        'trainings',
        'categoriesid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'detailsoforicpersonnelattended',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'detailsoforicpersonnelattended',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'nameoforicpersonalattended',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'nameoforicpersonalattended',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'organizer', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'organizer',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'audiencetype', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'audiencetype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'majorfocusareaandoutcomes',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'majorfocusareaandoutcomes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'numberofparticipants', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'numberofparticipants',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'dateofevent', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'dateofevent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'titleoftraining', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainings',
        'titleoftraining',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'documentaryevidence',
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

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'ifoutsourcednameofcourseoffered',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'ifoutsourcednameofcourseofferingbodydetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'coursedevelopment',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'coursedevelopment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'noofstartupscompletedthecourse',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'noofstartupscompletedthecourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'keylearningoutcomes',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'keylearningoutcomes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'majorareascovered',
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'majorareascovered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainingcourseinfo', 'leveloffered', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'leveloffered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainingcourseinfo', 'typeofcourse', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'typeofcourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('trainingcourseinfo', 'nameofcourse', {
        transaction,
      });

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'nameofcourse',
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
