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
        'anualresearchrevenue',
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
        'bicfundinginfo',
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
        'bichumanresource',
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
        'bicserviceofferinginfo',
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
        'bicsupportinfo',
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
        'colaborationagreement',
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
        'commities',
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
        'coursedetailsinfo',
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
        'engagementevents',
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
        'graduatedstartupfacilitationinfo',
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
        'honorsandawards',
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
        'humanresource',
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
        'mentorshipinfo',
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
        'partnershipinfo',
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
        'patents',
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
        'policyadvocacy',
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
        'researchlinks',
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
        'researchpolicy',
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
        'researchproposalandgrants',
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
        'spinoffstartups',
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
        'startupemploment',
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
        'startupevents',
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
        'startupincubation',
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
        'startupmentoring',
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
        'startuprevenue',
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
        'startupsappliedforpitching',
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
      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('startupmentoring', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('startupemploment', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('spinoffstartups', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.removeColumn('researchpolicy', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('researchlinks', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('policyadvocacy', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('partnershipinfo', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('mentorshipinfo', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('honorsandawards', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.removeColumn('engagementevents', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('coursedetailsinfo', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'colaborationagreement',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.removeColumn('bicsupportinfo', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'categoryIdId',
        { transaction },
      );

      await queryInterface.removeColumn('bichumanresource', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn('bicfundinginfo', 'categoryIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'categoryIdId',
        { transaction },
      );

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
