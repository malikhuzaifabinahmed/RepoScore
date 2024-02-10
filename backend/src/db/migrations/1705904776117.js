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
      await queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'activegraduatedstartupinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'anualresearchrevenue',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'bicdata',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'bicfundinginfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'bichumanresource',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'bicserviceofferinginfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'bicsupportinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'categories',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'colaborationagreement',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'commities',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'coursedetailsinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'engagementevents',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'graduatedstartupfacilitationinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'honorsandawards',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'humanresource',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'mentorshipinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'oricdata',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'partnershipinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'patents',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'policyadvocacy',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'researchlinks',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'researchpolicy',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'researchproposalandgrants',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'spinoffstartups',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startupemploment',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startupevents',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startupincubation',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startupmentoring',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startuprevenue',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startupsappliedforpitching',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'startupsincubated',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'trainingcourseinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'trainings',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'university',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'universityadvancedstudiesandresearchboard',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'visits',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.createTable(
        'workshopeventinfo',
        {
          id: {
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true,
          },
          createdById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          updatedById: {
            type: Sequelize.DataTypes.UUID,
            references: {
              key: 'id',
              model: 'users',
            },
          },
          createdAt: { type: Sequelize.DataTypes.DATE },
          updatedAt: { type: Sequelize.DataTypes.DATE },
          deletedAt: { type: Sequelize.DataTypes.DATE },
          importHash: {
            type: Sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: true,
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'firstName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'lastName',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'phoneNumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'email',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'role',
        {
          type: Sequelize.DataTypes.ENUM,

          values: ['admin', 'user'],
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'disabled',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'password',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerified',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetToken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'passwordResetTokenExpiresAt',
        {
          type: Sequelize.DataTypes.DATE,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'users',
        'provider',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupemploment',
        'designationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupemploment',
        'employeename',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupemploment',
        'employmenttype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupemploment',
        'employeesince',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupemploment',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'nameofevent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'dateheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'panelistdetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'ideasapplied',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'ideasselected',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'winnersdetails',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        'prizefundingamount',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupevents',
        'noofideasapplied',
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
        'startupevents',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupevents',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'idea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'teammembers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'seedfundingsecuredifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'incubatedsince',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'expectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'internshipjobsprovidedviastartup',
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
        'startupincubation',
        'totalslots',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'occupiedslots',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupincubation',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'nameofmentor',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'designation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        'fieldarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupmentoring',
        'noofstartupsfacilitated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupmentoring',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupmentoring',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupmentoring',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'facultymembernamedesignationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'currentstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'incubatedsinceandexpectedgraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'revenuegenerated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'totalmonthsinincubation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'averagerevenue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startuprevenue',
        'sharingmechanismbetweenbicheiandstartup',
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
        'startuprevenue',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'idea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'fieldarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'teammembers',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'resultremarksfromcompetition',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        'noofideasapplied',
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

      await queryInterface.addColumn(
        'startupsappliedforpitching',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'briefidea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsincubated',
        'facultymemberdesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsincubated',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsincubated',
        'stage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'startupsincubated',
        'internshipjobscreated',
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
        'startupsincubated',
        'totalfacultystartups',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'startupsincubated',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'nameofcourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'typeofcourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'leveloffered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'keylearningoutcomes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'coursedevelopment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'trainingcourseinfo',
        'documentaryevidence',
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

      await queryInterface.addColumn(
        'trainings',
        'titleoftraining',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'dateofevent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'numberofparticipants',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'trainings',
        'audiencetype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'organizer',
        {
          type: Sequelize.DataTypes.TEXT,
        },
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

      await queryInterface.addColumn(
        'trainings',
        'detailsoforicpersonnelattended',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'trainings',
        'categoriesid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'province',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'city',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'sector',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'postaladdress',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'universityheadposition',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'universityheadname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'universityheademail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'universityheadphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'registrarname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'registraremail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'registrarphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'registrarpaemail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'registrarpaphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberofsanctionedfaculityposts',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberoffaculity',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberofphdfaculity',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberofvacantfaculityposts',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'universityadvancedstudiesandresearchboard',
        'nameofmemberdevelopedwith',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'universityadvancedstudiesandresearchboard',
        'executiondate',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'universityadvancedstudiesandresearchboard',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'visits',
        'nameofvisits',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'visits',
        'dateofvisit',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'visits',
        'agendaofvisit',
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

      await queryInterface.addColumn(
        'visits',
        '',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'title',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'dateheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'venue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'fieldthematicarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'panelistmentoradvisorname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'panelistmentoradvisordesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'arrangedby',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'facultystudent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'noofparticipants',
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
        'workshopeventinfo',
        'totalnoeventsheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'workshopeventinfo',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'nameofgraduatedstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'companybriefidea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'dateofgraduation',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'currentstatusactiveregisteredconcernaccelerated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'networthofstartupaverageyearlyrevenue',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'ipoacquisitionamalgamationifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'noofemployeeswithstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'survivalrateofgraduatedstartups',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'totalstartupsactiveaftergraduation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'activegraduatedstartupinfo',
        'totalstartupshavingipoacquisition',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'researchgrantname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'remarks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'anexpagerefno',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'oricoverheadinreleasedfunding',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'nationalorinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'titleofresearchproposal',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'detailsofpi',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'isjointventure',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'nameofjointventure',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'detailsofjointventure',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'startDate',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'totalfundingapproved',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'oricoverheadinapprovedfunding',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'anualresearchrevenue',
        'nameofpi',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'universityname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'oricbankaccounttitle',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'oricbankaccountnumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'ORICCentralizedEmailId',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'ORICPostalAddress',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'shortlinkforORICWebsite',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'nameoffocalpersonmanagingwebpage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'phonenumberoffocalpersonmanagingwebpage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'tiscphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicdata',
        'tiscemailid',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'nameoffundingagency',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'nationalorinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'typeoffunding',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'amountsecured',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'amountutilizeddistributed',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'inkindsupportfromfundingagencyifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'agreementsignedwithfundingagencyifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicfundinginfo',
        'recurringoronetypesupport',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'isbicsupportstaff',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'position',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'fulltimeparttime',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'officephonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'mobilenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'emailid',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'qualificationlevel',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'qualificationtitle',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'fieldofstudy',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'cnic',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'dateofappointment',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'periodupto',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'totalexperience',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'nonacademiaexperience',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bichumanresource',
        'notificationofficeorderjoiningreportandcv',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'natureofserviceofferedsessionheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'nameofserviceprovider',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'backgroundandexpertise',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'localinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'noofstartupsfacilitated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicserviceofferinginfo',
        'totalnosessionsheld',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicsupportinfo',
        'levelofsupportfinancialinkind',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicsupportinfo',
        'areafacilitatedthroughsupport',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicsupportinfo',
        'financialinkindsupportextendedforactivity',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'bicsupportinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'categories',
        'categoryname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'categories',
        'categorytype',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'categories',
        'organization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'typeoflinkages',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'nationalinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'hostcountryname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'hostcountryaddress',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'startDate',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'endDate',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'keyinitiativestobeundertaken',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'field',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'scopeofcollaboration',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'dateoflinkageestablishment',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'colaborationagreement',
        'financialsupport',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'designation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'parentinstitutionorganization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'sectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'rolestatusincommittee',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'membersince',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'notified',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'commities',
        'noofmembers',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'titleofcourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'field',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'level',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'credithours',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'totalmodules',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'optionalcompulsory',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'departmentsschoolsofferingthecourse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'learningoutcomes',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'coursedetailsinfo',
        'totalnoofcoursesoffered',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'titleofevent',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'componentofcommunityinvolved',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'audiance',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'outcome',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'collaborationdeveloped',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'dateofevent',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'nameofcollaboratingpartners',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'nameofsponsoringagency',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'willbeparticipatedorarranged',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'remarks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'engagementevents',
        'anexpageno',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'graduatedstartupfacilitationinfo',
        'keyareasoffacilitationrequestedbygraduatedstartups',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'graduatedstartupfacilitationinfo',
        'typeoffacilitationmentoringtrainingsprovidedtograduated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'graduatedstartupfacilitationinfo',
        'noofgraduatedstartupsfacilitated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'graduatedstartupfacilitationinfo',
        'documentaryevidence',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'graduatedstartupfacilitationinfo',
        'totalstartupsincubatedsincebicsinception',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'graduatedstartupfacilitationinfo',
        'totalstartupsgraduatedsincebicsinception',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'titleofaward',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'nameofawardingorganization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'contactsofawardingorganization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'briefdetailsofworkhonored',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'prizeamount',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'awardwinnername',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'awardwinnerdesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'awardwinnerdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'remarks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'honorsandawards',
        'annexpagerefno',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'position',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'officephonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'role',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'emailid',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'qualificationlevel',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'qualificationtitle',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'fieldofstudy',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'cnic',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'dateofappointment',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'periodupto',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'totalexperience',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'nonacademicexperience',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'humanresource',
        'universityIdId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'university',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'nameofmentor',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'fieldareasofexpertise',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'nationalinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'mentoringsessionsheldatbicduringtheyear',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'noofstartupsfacilitatedthroughsessions',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'mentorshipinfo',
        'ifcorporatebodymousigningdateifany',
        {
          type: Sequelize.DataTypes.DATEONLY,
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

      await queryInterface.addColumn(
        'oricdata',
        'oricbankaccounttitle',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'oricbankaccountnumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'oriccentralizedemailid',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'oricpostaladdress',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'shortlinkfororicwebsite',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'nameoffocalpersonmanagingwebpage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'phonenumberoffocalpersonmanagingwebpage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'tiscphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'tiscemailid',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'oricdata',
        'universityIdId',
        {
          type: Sequelize.DataTypes.UUID,

          references: {
            model: 'university',
            key: 'id',
          },
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'nameofpartneringorganization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'nationalinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'fieldareaofexpertise',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'typeoflink',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'dateofsigning',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'majorareasofcooperationmodalities',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'partnershipinfo',
        'keyoutcomesfromlinks',
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
        'patents',
        'leadinventorname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'leadinventordesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'leadinventordepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'titleofinvention',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'categoryofip',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'developmentstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'keyscientificaspects',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'commercialpartner',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'patentfiledwithname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'patentfiledwithdate',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'fieldofuse',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'nationalinternational',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'durationofagreement',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'financialsupport',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'previousdisclosur',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'dateoffilling',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'statusofnegotiation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'licenseename',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'licenseeorganization',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'annexpagerefno',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'patents',
        'remarks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'nameofgovernmentbodypresented',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'dateofpresentation',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'nameofpi',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'pidesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'pidepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'areaadvocated',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'description',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'namecoalitionpartner',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'issueverification',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'backingresearchstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'advocacytoolsadopted',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'policyadvocacy',
        'anexpageno',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'typeoflinkage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'region',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'namehostinstitution',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'addresshostinstitution',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'countryofhostinstitution',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'nameofcollaboratingpartners',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'addressofcollaboratingpartners',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'countryofcollaboratingpartners',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'fieldofstudy',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'researchborderareas',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'scopeofcollaboration',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'linkageestablishmentdate',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'salientfeaturesoflinkage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchlinks',
        'anexpagereference',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchpolicy',
        'titleofresearchpolicy',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchpolicy',
        'researchpolicyreferencenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchpolicy',
        'dateofapproval',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchpolicy',
        'approvedby',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'approvedorrequiredmodificationordifferedordisapproved',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'thematicarea',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'nameofresearch',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'nameofpi',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'pidesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'pidepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'nameofcopi',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'copidesignation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'copidepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'titleofresearchproposal',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'durationstartingandendingdate',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'totalfundingrequestedrs',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'totalfundingapproved',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'totalfundingreleased',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'collaboratingpartnerdetailsifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'cofundingpartnerdetailsifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'nameofsponsringagency',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'addressofsponsoringagency',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'countryofsponsoringagency',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'status',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'remarks',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'relatedinformation',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'keyprojectdeliverables',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'oricoverheadinapprovedfunding',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'dateofcontract',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'dateofapproval',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'dateofprojectcompletion',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'totalfundingutilized',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'approved',
        {
          type: Sequelize.DataTypes.BOOLEAN,

          defaultValue: false,
          allowNull: false,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'dateofproposalsubmission',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'dateofreview',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'researchproposalandgrants',
        'statusofirbmeeting',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'nameofstartup',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'briefideabackingresearchsectorfield',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'facultymembernamedesignationdepartment',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'ipstatus',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'nameofspinoff',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'stage',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'licenseagreementsignedifany',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.addColumn(
        'spinoffstartups',
        'fundingsources',
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
        'spinoffstartups',
        'totalfacultystartups',
        {
          type: Sequelize.DataTypes.INTEGER,
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
        'spinoffstartups',
        'totalfacultystartups',
        { transaction },
      );

      await queryInterface.removeColumn(
        'spinoffstartups',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn('spinoffstartups', 'fundingsources', {
        transaction,
      });

      await queryInterface.removeColumn(
        'spinoffstartups',
        'licenseagreementsignedifany',
        { transaction },
      );

      await queryInterface.removeColumn('spinoffstartups', 'stage', {
        transaction,
      });

      await queryInterface.removeColumn('spinoffstartups', 'nameofspinoff', {
        transaction,
      });

      await queryInterface.removeColumn('spinoffstartups', 'ipstatus', {
        transaction,
      });

      await queryInterface.removeColumn(
        'spinoffstartups',
        'facultymembernamedesignationdepartment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'spinoffstartups',
        'briefideabackingresearchsectorfield',
        { transaction },
      );

      await queryInterface.removeColumn('spinoffstartups', 'nameofstartup', {
        transaction,
      });

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'statusofirbmeeting',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'dateofreview',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'dateofproposalsubmission',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'approved',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'totalfundingutilized',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'dateofprojectcompletion',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'dateofapproval',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'dateofcontract',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'oricoverheadinapprovedfunding',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'keyprojectdeliverables',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'relatedinformation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'remarks',
        { transaction },
      );

      await queryInterface.removeColumn('researchproposalandgrants', 'status', {
        transaction,
      });

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'countryofsponsoringagency',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'addressofsponsoringagency',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'nameofsponsringagency',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'cofundingpartnerdetailsifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'collaboratingpartnerdetailsifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'totalfundingreleased',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'totalfundingapproved',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'totalfundingrequestedrs',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'durationstartingandendingdate',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'titleofresearchproposal',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'copidepartment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'copidesignation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'nameofcopi',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'pidepartment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'pidesignation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'nameofpi',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'nameofresearch',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'thematicarea',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchproposalandgrants',
        'approvedorrequiredmodificationordifferedordisapproved',
        { transaction },
      );

      await queryInterface.removeColumn('researchpolicy', 'approvedby', {
        transaction,
      });

      await queryInterface.removeColumn('researchpolicy', 'dateofapproval', {
        transaction,
      });

      await queryInterface.removeColumn(
        'researchpolicy',
        'researchpolicyreferencenumber',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchpolicy',
        'titleofresearchpolicy',
        { transaction },
      );

      await queryInterface.removeColumn('researchlinks', 'anexpagereference', {
        transaction,
      });

      await queryInterface.removeColumn(
        'researchlinks',
        'salientfeaturesoflinkage',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'linkageestablishmentdate',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'scopeofcollaboration',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'researchborderareas',
        { transaction },
      );

      await queryInterface.removeColumn('researchlinks', 'fieldofstudy', {
        transaction,
      });

      await queryInterface.removeColumn(
        'researchlinks',
        'countryofcollaboratingpartners',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'addressofcollaboratingpartners',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'nameofcollaboratingpartners',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'countryofhostinstitution',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'addresshostinstitution',
        { transaction },
      );

      await queryInterface.removeColumn(
        'researchlinks',
        'namehostinstitution',
        { transaction },
      );

      await queryInterface.removeColumn('researchlinks', 'region', {
        transaction,
      });

      await queryInterface.removeColumn('researchlinks', 'typeoflinkage', {
        transaction,
      });

      await queryInterface.removeColumn('policyadvocacy', 'anexpageno', {
        transaction,
      });

      await queryInterface.removeColumn(
        'policyadvocacy',
        'advocacytoolsadopted',
        { transaction },
      );

      await queryInterface.removeColumn(
        'policyadvocacy',
        'backingresearchstatus',
        { transaction },
      );

      await queryInterface.removeColumn('policyadvocacy', 'issueverification', {
        transaction,
      });

      await queryInterface.removeColumn(
        'policyadvocacy',
        'namecoalitionpartner',
        { transaction },
      );

      await queryInterface.removeColumn('policyadvocacy', 'description', {
        transaction,
      });

      await queryInterface.removeColumn('policyadvocacy', 'areaadvocated', {
        transaction,
      });

      await queryInterface.removeColumn('policyadvocacy', 'pidepartment', {
        transaction,
      });

      await queryInterface.removeColumn('policyadvocacy', 'pidesignation', {
        transaction,
      });

      await queryInterface.removeColumn('policyadvocacy', 'nameofpi', {
        transaction,
      });

      await queryInterface.removeColumn(
        'policyadvocacy',
        'dateofpresentation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'policyadvocacy',
        'nameofgovernmentbodypresented',
        { transaction },
      );

      await queryInterface.removeColumn('patents', 'remarks', { transaction });

      await queryInterface.removeColumn('patents', 'annexpagerefno', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'licenseeorganization', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'licenseename', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'statusofnegotiation', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'dateoffilling', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'previousdisclosur', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'financialsupport', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'durationofagreement', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'nationalinternational', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'fieldofuse', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'patentfiledwithdate', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'patentfiledwithname', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'commercialpartner', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'keyscientificaspects', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'developmentstatus', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'categoryofip', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'titleofinvention', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'leadinventordepartment', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'leadinventordesignation', {
        transaction,
      });

      await queryInterface.removeColumn('patents', 'leadinventorname', {
        transaction,
      });

      await queryInterface.removeColumn(
        'partnershipinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'partnershipinfo',
        'keyoutcomesfromlinks',
        { transaction },
      );

      await queryInterface.removeColumn(
        'partnershipinfo',
        'majorareasofcooperationmodalities',
        { transaction },
      );

      await queryInterface.removeColumn('partnershipinfo', 'dateofsigning', {
        transaction,
      });

      await queryInterface.removeColumn('partnershipinfo', 'typeoflink', {
        transaction,
      });

      await queryInterface.removeColumn(
        'partnershipinfo',
        'fieldareaofexpertise',
        { transaction },
      );

      await queryInterface.removeColumn(
        'partnershipinfo',
        'nationalinternational',
        { transaction },
      );

      await queryInterface.removeColumn(
        'partnershipinfo',
        'nameofpartneringorganization',
        { transaction },
      );

      await queryInterface.removeColumn('oricdata', 'universityIdId', {
        transaction,
      });

      await queryInterface.removeColumn('oricdata', 'tiscemailid', {
        transaction,
      });

      await queryInterface.removeColumn('oricdata', 'tiscphonenumber', {
        transaction,
      });

      await queryInterface.removeColumn(
        'oricdata',
        'phonenumberoffocalpersonmanagingwebpage',
        { transaction },
      );

      await queryInterface.removeColumn(
        'oricdata',
        'nameoffocalpersonmanagingwebpage',
        { transaction },
      );

      await queryInterface.removeColumn('oricdata', 'shortlinkfororicwebsite', {
        transaction,
      });

      await queryInterface.removeColumn('oricdata', 'oricpostaladdress', {
        transaction,
      });

      await queryInterface.removeColumn('oricdata', 'oriccentralizedemailid', {
        transaction,
      });

      await queryInterface.removeColumn('oricdata', 'oricbankaccountnumber', {
        transaction,
      });

      await queryInterface.removeColumn('oricdata', 'oricbankaccounttitle', {
        transaction,
      });

      await queryInterface.removeColumn(
        'mentorshipinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'mentorshipinfo',
        'ifcorporatebodymousigningdateifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'mentorshipinfo',
        'noofstartupsfacilitatedthroughsessions',
        { transaction },
      );

      await queryInterface.removeColumn(
        'mentorshipinfo',
        'mentoringsessionsheldatbicduringtheyear',
        { transaction },
      );

      await queryInterface.removeColumn(
        'mentorshipinfo',
        'nationalinternational',
        { transaction },
      );

      await queryInterface.removeColumn(
        'mentorshipinfo',
        'fieldareasofexpertise',
        { transaction },
      );

      await queryInterface.removeColumn('mentorshipinfo', 'nameofmentor', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'universityIdId', {
        transaction,
      });

      await queryInterface.removeColumn(
        'humanresource',
        'nonacademicexperience',
        { transaction },
      );

      await queryInterface.removeColumn('humanresource', 'totalexperience', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'periodupto', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'dateofappointment', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'cnic', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'fieldofstudy', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'qualificationtitle', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'qualificationlevel', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'emailid', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'role', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'officephonenumber', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'position', {
        transaction,
      });

      await queryInterface.removeColumn('humanresource', 'name', {
        transaction,
      });

      await queryInterface.removeColumn('honorsandawards', 'annexpagerefno', {
        transaction,
      });

      await queryInterface.removeColumn('honorsandawards', 'remarks', {
        transaction,
      });

      await queryInterface.removeColumn(
        'honorsandawards',
        'awardwinnerdepartment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'honorsandawards',
        'awardwinnerdesignation',
        { transaction },
      );

      await queryInterface.removeColumn('honorsandawards', 'awardwinnername', {
        transaction,
      });

      await queryInterface.removeColumn('honorsandawards', 'prizeamount', {
        transaction,
      });

      await queryInterface.removeColumn(
        'honorsandawards',
        'briefdetailsofworkhonored',
        { transaction },
      );

      await queryInterface.removeColumn(
        'honorsandawards',
        'contactsofawardingorganization',
        { transaction },
      );

      await queryInterface.removeColumn(
        'honorsandawards',
        'nameofawardingorganization',
        { transaction },
      );

      await queryInterface.removeColumn('honorsandawards', 'titleofaward', {
        transaction,
      });

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'totalstartupsgraduatedsincebicsinception',
        { transaction },
      );

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'totalstartupsincubatedsincebicsinception',
        { transaction },
      );

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'noofgraduatedstartupsfacilitated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'typeoffacilitationmentoringtrainingsprovidedtograduated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'graduatedstartupfacilitationinfo',
        'keyareasoffacilitationrequestedbygraduatedstartups',
        { transaction },
      );

      await queryInterface.removeColumn('engagementevents', 'anexpageno', {
        transaction,
      });

      await queryInterface.removeColumn('engagementevents', 'remarks', {
        transaction,
      });

      await queryInterface.removeColumn(
        'engagementevents',
        'willbeparticipatedorarranged',
        { transaction },
      );

      await queryInterface.removeColumn(
        'engagementevents',
        'nameofsponsoringagency',
        { transaction },
      );

      await queryInterface.removeColumn(
        'engagementevents',
        'nameofcollaboratingpartners',
        { transaction },
      );

      await queryInterface.removeColumn('engagementevents', 'dateofevent', {
        transaction,
      });

      await queryInterface.removeColumn(
        'engagementevents',
        'collaborationdeveloped',
        { transaction },
      );

      await queryInterface.removeColumn('engagementevents', 'outcome', {
        transaction,
      });

      await queryInterface.removeColumn('engagementevents', 'audiance', {
        transaction,
      });

      await queryInterface.removeColumn(
        'engagementevents',
        'componentofcommunityinvolved',
        { transaction },
      );

      await queryInterface.removeColumn('engagementevents', 'titleofevent', {
        transaction,
      });

      await queryInterface.removeColumn(
        'coursedetailsinfo',
        'totalnoofcoursesoffered',
        { transaction },
      );

      await queryInterface.removeColumn(
        'coursedetailsinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'coursedetailsinfo',
        'learningoutcomes',
        { transaction },
      );

      await queryInterface.removeColumn(
        'coursedetailsinfo',
        'departmentsschoolsofferingthecourse',
        { transaction },
      );

      await queryInterface.removeColumn(
        'coursedetailsinfo',
        'optionalcompulsory',
        { transaction },
      );

      await queryInterface.removeColumn('coursedetailsinfo', 'totalmodules', {
        transaction,
      });

      await queryInterface.removeColumn('coursedetailsinfo', 'credithours', {
        transaction,
      });

      await queryInterface.removeColumn('coursedetailsinfo', 'level', {
        transaction,
      });

      await queryInterface.removeColumn('coursedetailsinfo', 'field', {
        transaction,
      });

      await queryInterface.removeColumn('coursedetailsinfo', 'titleofcourse', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'noofmembers', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'notified', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'documentaryevidence', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'membersince', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'rolestatusincommittee', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'sectorfield', {
        transaction,
      });

      await queryInterface.removeColumn(
        'commities',
        'parentinstitutionorganization',
        { transaction },
      );

      await queryInterface.removeColumn('commities', 'designation', {
        transaction,
      });

      await queryInterface.removeColumn('commities', 'name', { transaction });

      await queryInterface.removeColumn(
        'colaborationagreement',
        'financialsupport',
        { transaction },
      );

      await queryInterface.removeColumn(
        'colaborationagreement',
        'dateoflinkageestablishment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'colaborationagreement',
        'scopeofcollaboration',
        { transaction },
      );

      await queryInterface.removeColumn('colaborationagreement', 'field', {
        transaction,
      });

      await queryInterface.removeColumn(
        'colaborationagreement',
        'keyinitiativestobeundertaken',
        { transaction },
      );

      await queryInterface.removeColumn('colaborationagreement', 'endDate', {
        transaction,
      });

      await queryInterface.removeColumn('colaborationagreement', 'startDate', {
        transaction,
      });

      await queryInterface.removeColumn(
        'colaborationagreement',
        'hostcountryaddress',
        { transaction },
      );

      await queryInterface.removeColumn(
        'colaborationagreement',
        'hostcountryname',
        { transaction },
      );

      await queryInterface.removeColumn(
        'colaborationagreement',
        'nationalinternational',
        { transaction },
      );

      await queryInterface.removeColumn(
        'colaborationagreement',
        'typeoflinkages',
        { transaction },
      );

      await queryInterface.removeColumn('categories', 'organization', {
        transaction,
      });

      await queryInterface.removeColumn('categories', 'categorytype', {
        transaction,
      });

      await queryInterface.removeColumn('categories', 'categoryname', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bicsupportinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicsupportinfo',
        'financialinkindsupportextendedforactivity',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicsupportinfo',
        'areafacilitatedthroughsupport',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicsupportinfo',
        'levelofsupportfinancialinkind',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'totalnosessionsheld',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'noofstartupsfacilitated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'localinternational',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'backgroundandexpertise',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'nameofserviceprovider',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicserviceofferinginfo',
        'natureofserviceofferedsessionheld',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bichumanresource',
        'notificationofficeorderjoiningreportandcv',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bichumanresource',
        'nonacademiaexperience',
        { transaction },
      );

      await queryInterface.removeColumn('bichumanresource', 'totalexperience', {
        transaction,
      });

      await queryInterface.removeColumn('bichumanresource', 'periodupto', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bichumanresource',
        'dateofappointment',
        { transaction },
      );

      await queryInterface.removeColumn('bichumanresource', 'cnic', {
        transaction,
      });

      await queryInterface.removeColumn('bichumanresource', 'fieldofstudy', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bichumanresource',
        'qualificationtitle',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bichumanresource',
        'qualificationlevel',
        { transaction },
      );

      await queryInterface.removeColumn('bichumanresource', 'emailid', {
        transaction,
      });

      await queryInterface.removeColumn('bichumanresource', 'mobilenumber', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bichumanresource',
        'officephonenumber',
        { transaction },
      );

      await queryInterface.removeColumn('bichumanresource', 'name', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bichumanresource',
        'fulltimeparttime',
        { transaction },
      );

      await queryInterface.removeColumn('bichumanresource', 'position', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bichumanresource',
        'isbicsupportstaff',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'recurringoronetypesupport',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'agreementsignedwithfundingagencyifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'inkindsupportfromfundingagencyifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'amountutilizeddistributed',
        { transaction },
      );

      await queryInterface.removeColumn('bicfundinginfo', 'amountsecured', {
        transaction,
      });

      await queryInterface.removeColumn('bicfundinginfo', 'typeoffunding', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'nationalorinternational',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicfundinginfo',
        'nameoffundingagency',
        { transaction },
      );

      await queryInterface.removeColumn('bicfundinginfo', 'nameofstartup', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'tiscemailid', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'tiscphonenumber', {
        transaction,
      });

      await queryInterface.removeColumn(
        'bicdata',
        'phonenumberoffocalpersonmanagingwebpage',
        { transaction },
      );

      await queryInterface.removeColumn(
        'bicdata',
        'nameoffocalpersonmanagingwebpage',
        { transaction },
      );

      await queryInterface.removeColumn('bicdata', 'shortlinkforORICWebsite', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'ORICPostalAddress', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'ORICCentralizedEmailId', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'oricbankaccountnumber', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'oricbankaccounttitle', {
        transaction,
      });

      await queryInterface.removeColumn('bicdata', 'universityname', {
        transaction,
      });

      await queryInterface.removeColumn('anualresearchrevenue', 'nameofpi', {
        transaction,
      });

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'oricoverheadinapprovedfunding',
        { transaction },
      );

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'totalfundingapproved',
        { transaction },
      );

      await queryInterface.removeColumn('anualresearchrevenue', 'startDate', {
        transaction,
      });

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'detailsofjointventure',
        { transaction },
      );

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'nameofjointventure',
        { transaction },
      );

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'isjointventure',
        { transaction },
      );

      await queryInterface.removeColumn('anualresearchrevenue', 'detailsofpi', {
        transaction,
      });

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'titleofresearchproposal',
        { transaction },
      );

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'nationalorinternational',
        { transaction },
      );

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'oricoverheadinreleasedfunding',
        { transaction },
      );

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'anexpagerefno',
        { transaction },
      );

      await queryInterface.removeColumn('anualresearchrevenue', 'remarks', {
        transaction,
      });

      await queryInterface.removeColumn(
        'anualresearchrevenue',
        'researchgrantname',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'totalstartupshavingipoacquisition',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'totalstartupsactiveaftergraduation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'survivalrateofgraduatedstartups',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'noofemployeeswithstartup',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'ipoacquisitionamalgamationifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'networthofstartupaverageyearlyrevenue',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'currentstatusactiveregisteredconcernaccelerated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'dateofgraduation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'companybriefidea',
        { transaction },
      );

      await queryInterface.removeColumn(
        'activegraduatedstartupinfo',
        'nameofgraduatedstartup',
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'totalnoeventsheld',
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'noofparticipants',
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'facultystudent', {
        transaction,
      });

      await queryInterface.removeColumn('workshopeventinfo', 'arrangedby', {
        transaction,
      });

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'panelistmentoradvisordesignation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'panelistmentoradvisorname',
        { transaction },
      );

      await queryInterface.removeColumn(
        'workshopeventinfo',
        'fieldthematicarea',
        { transaction },
      );

      await queryInterface.removeColumn('workshopeventinfo', 'venue', {
        transaction,
      });

      await queryInterface.removeColumn('workshopeventinfo', 'dateheld', {
        transaction,
      });

      await queryInterface.removeColumn('workshopeventinfo', 'title', {
        transaction,
      });

      await queryInterface.removeColumn('visits', '', { transaction });

      await queryInterface.removeColumn('visits', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn('visits', 'agendaofvisit', {
        transaction,
      });

      await queryInterface.removeColumn('visits', 'dateofvisit', {
        transaction,
      });

      await queryInterface.removeColumn('visits', 'nameofvisits', {
        transaction,
      });

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'categoryid',
        { transaction },
      );

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'executiondate',
        { transaction },
      );

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'nameofmemberdevelopedwith',
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'totalnumberofvacantfaculityposts',
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'totalnumberofphdfaculity',
        { transaction },
      );

      await queryInterface.removeColumn('university', 'totalnumberoffaculity', {
        transaction,
      });

      await queryInterface.removeColumn(
        'university',
        'totalnumberofsanctionedfaculityposts',
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'registrarpaphonenumber',
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registrarpaemail', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'registrarphonenumber', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'registraremail', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'registrarname', {
        transaction,
      });

      await queryInterface.removeColumn(
        'university',
        'universityheadphonenumber',
        { transaction },
      );

      await queryInterface.removeColumn('university', 'universityheademail', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'universityheadname', {
        transaction,
      });

      await queryInterface.removeColumn(
        'university',
        'universityheadposition',
        { transaction },
      );

      await queryInterface.removeColumn('university', 'postaladdress', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'sector', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'city', { transaction });

      await queryInterface.removeColumn('university', 'province', {
        transaction,
      });

      await queryInterface.removeColumn('university', 'name', { transaction });

      await queryInterface.removeColumn('trainings', 'categoriesid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'trainings',
        'detailsoforicpersonnelattended',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainings',
        'nameoforicpersonalattended',
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'organizer', {
        transaction,
      });

      await queryInterface.removeColumn('trainings', 'audiencetype', {
        transaction,
      });

      await queryInterface.removeColumn(
        'trainings',
        'majorfocusareaandoutcomes',
        { transaction },
      );

      await queryInterface.removeColumn('trainings', 'numberofparticipants', {
        transaction,
      });

      await queryInterface.removeColumn('trainings', 'dateofevent', {
        transaction,
      });

      await queryInterface.removeColumn('trainings', 'titleoftraining', {
        transaction,
      });

      await queryInterface.removeColumn('trainingcourseinfo', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'ifoutsourcednameofcourseofferingbodydetails',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'coursedevelopment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'noofstartupscompletedthecourse',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'keylearningoutcomes',
        { transaction },
      );

      await queryInterface.removeColumn(
        'trainingcourseinfo',
        'majorareascovered',
        { transaction },
      );

      await queryInterface.removeColumn('trainingcourseinfo', 'leveloffered', {
        transaction,
      });

      await queryInterface.removeColumn('trainingcourseinfo', 'typeofcourse', {
        transaction,
      });

      await queryInterface.removeColumn('trainingcourseinfo', 'nameofcourse', {
        transaction,
      });

      await queryInterface.removeColumn('startupsincubated', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupsincubated',
        'totalfacultystartups',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'internshipjobscreated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'incubatedsinceexpectedgraduation',
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'stage', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupsincubated',
        'seedfundingsecuredifany',
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'sectorfield', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymemberdepartment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymemberdesignation',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsincubated',
        'facultymembername',
        { transaction },
      );

      await queryInterface.removeColumn('startupsincubated', 'briefidea', {
        transaction,
      });

      await queryInterface.removeColumn('startupsincubated', 'nameofstartup', {
        transaction,
      });

      await queryInterface.removeColumn('startupsappliedforpitching', '', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'categoryid',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'noofideasapplied',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'dateheld',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'availabilityoffundingseedmoney',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'resultremarksfromcompetition',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'currentstatus',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'teammembers',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'educationalbackground',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'fieldarea',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupsappliedforpitching',
        'entrepreneur',
        { transaction },
      );

      await queryInterface.removeColumn('startupsappliedforpitching', 'idea', {
        transaction,
      });

      await queryInterface.removeColumn('startuprevenue', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startuprevenue',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startuprevenue',
        'sharingmechanismbetweenbicheiandstartup',
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'averagerevenue', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startuprevenue',
        'totalmonthsinincubation',
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'revenuegenerated', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startuprevenue',
        'incubatedsinceandexpectedgraduation',
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'currentstatus', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startuprevenue',
        'facultymembernamedesignationdepartment',
        { transaction },
      );

      await queryInterface.removeColumn('startuprevenue', 'nameofstartup', {
        transaction,
      });

      await queryInterface.removeColumn('startupmentoring', '', {
        transaction,
      });

      await queryInterface.removeColumn('startupmentoring', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupmentoring',
        'totalmentoringsessions',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'costpermentoringhourchargedifany',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'noofstartupsfacilitated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupmentoring',
        'noofmentoringlecturesprovided',
        { transaction },
      );

      await queryInterface.removeColumn('startupmentoring', 'fieldarea', {
        transaction,
      });

      await queryInterface.removeColumn('startupmentoring', 'designation', {
        transaction,
      });

      await queryInterface.removeColumn('startupmentoring', 'nameofmentor', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', '', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'occupiedslots', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'totalslots', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupincubation',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'internshipjobsprovidedviastartup',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupincubation',
        'expectedgraduation',
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'incubatedsince', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupincubation',
        'seedfundingsecuredifany',
        { transaction },
      );

      await queryInterface.removeColumn('startupincubation', 'sectorfield', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'teammembers', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'idea', {
        transaction,
      });

      await queryInterface.removeColumn('startupincubation', 'nameofstartup', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', '', { transaction });

      await queryInterface.removeColumn('startupevents', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupevents',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'noofideasapplied', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupevents',
        'eventfundingsourcessponsors',
        { transaction },
      );

      await queryInterface.removeColumn('startupevents', 'prizefundingamount', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'winnersdetails', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'ideasselected', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'ideasapplied', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'panelistdetails', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'dateheld', {
        transaction,
      });

      await queryInterface.removeColumn('startupevents', 'nameofevent', {
        transaction,
      });

      await queryInterface.removeColumn('startupemploment', 'categoryid', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupemploment',
        'documentaryevidence',
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employeesince', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupemploment',
        'salarystipendhonorarium',
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'employmenttype', {
        transaction,
      });

      await queryInterface.removeColumn('startupemploment', 'employeename', {
        transaction,
      });

      await queryInterface.removeColumn(
        'startupemploment',
        'startupstatusincubatedgraduated',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'designationdepartment',
        { transaction },
      );

      await queryInterface.removeColumn(
        'startupemploment',
        'startupfacultymembername',
        { transaction },
      );

      await queryInterface.removeColumn('startupemploment', 'nameofstartup', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'provider', { transaction });

      await queryInterface.removeColumn(
        'users',
        'passwordResetTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'passwordResetToken', {
        transaction,
      });

      await queryInterface.removeColumn(
        'users',
        'emailVerificationTokenExpiresAt',
        { transaction },
      );

      await queryInterface.removeColumn('users', 'emailVerificationToken', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'emailVerified', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'password', { transaction });

      await queryInterface.removeColumn('users', 'disabled', { transaction });

      await queryInterface.removeColumn('users', 'role', { transaction });

      await queryInterface.removeColumn('users', 'email', { transaction });

      await queryInterface.removeColumn('users', 'phoneNumber', {
        transaction,
      });

      await queryInterface.removeColumn('users', 'lastName', { transaction });

      await queryInterface.removeColumn('users', 'firstName', { transaction });

      await queryInterface.dropTable('workshopeventinfo', { transaction });

      await queryInterface.dropTable('visits', { transaction });

      await queryInterface.dropTable(
        'universityadvancedstudiesandresearchboard',
        { transaction },
      );

      await queryInterface.dropTable('university', { transaction });

      await queryInterface.dropTable('trainings', { transaction });

      await queryInterface.dropTable('trainingcourseinfo', { transaction });

      await queryInterface.dropTable('startupsincubated', { transaction });

      await queryInterface.dropTable('startupsappliedforpitching', {
        transaction,
      });

      await queryInterface.dropTable('startuprevenue', { transaction });

      await queryInterface.dropTable('startupmentoring', { transaction });

      await queryInterface.dropTable('startupincubation', { transaction });

      await queryInterface.dropTable('startupevents', { transaction });

      await queryInterface.dropTable('startupemploment', { transaction });

      await queryInterface.dropTable('spinoffstartups', { transaction });

      await queryInterface.dropTable('researchproposalandgrants', {
        transaction,
      });

      await queryInterface.dropTable('researchpolicy', { transaction });

      await queryInterface.dropTable('researchlinks', { transaction });

      await queryInterface.dropTable('policyadvocacy', { transaction });

      await queryInterface.dropTable('patents', { transaction });

      await queryInterface.dropTable('partnershipinfo', { transaction });

      await queryInterface.dropTable('oricdata', { transaction });

      await queryInterface.dropTable('mentorshipinfo', { transaction });

      await queryInterface.dropTable('humanresource', { transaction });

      await queryInterface.dropTable('honorsandawards', { transaction });

      await queryInterface.dropTable('graduatedstartupfacilitationinfo', {
        transaction,
      });

      await queryInterface.dropTable('engagementevents', { transaction });

      await queryInterface.dropTable('coursedetailsinfo', { transaction });

      await queryInterface.dropTable('commities', { transaction });

      await queryInterface.dropTable('colaborationagreement', { transaction });

      await queryInterface.dropTable('categories', { transaction });

      await queryInterface.dropTable('bicsupportinfo', { transaction });

      await queryInterface.dropTable('bicserviceofferinginfo', { transaction });

      await queryInterface.dropTable('bichumanresource', { transaction });

      await queryInterface.dropTable('bicfundinginfo', { transaction });

      await queryInterface.dropTable('bicdata', { transaction });

      await queryInterface.dropTable('anualresearchrevenue', { transaction });

      await queryInterface.dropTable('activegraduatedstartupinfo', {
        transaction,
      });

      await queryInterface.dropTable('users', { transaction });

      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
};
