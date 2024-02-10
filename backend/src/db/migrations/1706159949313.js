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
      await queryInterface.removeColumn('university', 'name', { transaction });

      await queryInterface.addColumn(
        'university',
        'name',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'province', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'province',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'city', { transaction });

      await queryInterface.addColumn(
        'university',
        'city',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'sector', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'sector',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'postaladdress', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'postaladdress',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'universityheadposition',
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

      await queryInterface.removeColumn('university', 'universityheadname', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'universityheadname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'universityheademail', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'universityheademail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'universityheadphonenumber',
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

      await queryInterface.removeColumn('university', 'registrarname', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registrarname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registraremail', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registraremail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registrarphonenumber', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registrarphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registrarpaemail', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registrarpaemail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'registrarpaphonenumber',
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

      await queryInterface.removeColumn(
        'university',
        'totalnumberofsanctionedfaculityposts',
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberofsanctionedfaculityposts',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'totalnumberoffaculity', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'totalnumberoffaculty',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'totalnumberofphdfaculity',
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberofphdfaculty',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'totalnumberofvacantfaculityposts',
        { transaction },
      );

      await queryInterface.addColumn(
        'university',
        'totalnumberofvacantfacultyposts',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'nameofmemberdevelopedwith',
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

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'executiondate',
        { transaction },
      );

      await queryInterface.addColumn(
        'universityadvancedstudiesandresearchboard',
        'executiondate',
        {
          type: Sequelize.DataTypes.DATEONLY,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'categoryid',
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
        'universityadvancedstudiesandresearchboard',
        'categoryid',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'executiondate',
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

      await queryInterface.removeColumn(
        'universityadvancedstudiesandresearchboard',
        'nameofmemberdevelopedwith',
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

      await queryInterface.removeColumn(
        'university',
        'totalnumberofvacantfacultyposts',
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

      await queryInterface.removeColumn(
        'university',
        'totalnumberofphdfaculty',
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

      await queryInterface.removeColumn('university', 'totalnumberoffaculty', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'totalnumberoffaculity',
        {
          type: Sequelize.DataTypes.INTEGER,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'totalnumberofsanctionedfaculityposts',
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

      await queryInterface.removeColumn(
        'university',
        'registrarpaphonenumber',
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

      await queryInterface.removeColumn('university', 'registrarpaemail', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registrarpaemail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registrarphonenumber', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registrarphonenumber',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registraremail', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registraremail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'registrarname', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'registrarname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'universityheadphonenumber',
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

      await queryInterface.removeColumn('university', 'universityheademail', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'universityheademail',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'universityheadname', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'universityheadname',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn(
        'university',
        'universityheadposition',
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

      await queryInterface.removeColumn('university', 'postaladdress', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'postaladdress',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'sector', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'sector',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'city', { transaction });

      await queryInterface.addColumn(
        'university',
        'city',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'province', {
        transaction,
      });

      await queryInterface.addColumn(
        'university',
        'province',
        {
          type: Sequelize.DataTypes.TEXT,
        },
        { transaction },
      );

      await queryInterface.removeColumn('university', 'name', { transaction });

      await queryInterface.addColumn(
        'university',
        'name',
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
