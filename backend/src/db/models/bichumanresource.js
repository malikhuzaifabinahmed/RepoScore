const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const bichumanresource = sequelize.define(
    'bichumanresource',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      isbicsupportstaff: {
        type: DataTypes.BOOLEAN,

        allowNull: false,
        defaultValue: false,
      },

      position: {
        type: DataTypes.TEXT,
      },

      fulltimeparttime: {
        type: DataTypes.TEXT,
      },

      name: {
        type: DataTypes.TEXT,
      },

      officephonenumber: {
        type: DataTypes.TEXT,
      },

      mobilenumber: {
        type: DataTypes.TEXT,
      },

      emailid: {
        type: DataTypes.TEXT,
      },

      qualificationlevel: {
        type: DataTypes.TEXT,
      },

      qualificationtitle: {
        type: DataTypes.TEXT,
      },

      fieldofstudy: {
        type: DataTypes.TEXT,
      },

      cnic: {
        type: DataTypes.TEXT,
      },

      dateofappointment: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofappointment')
            ? moment
                .utc(this.getDataValue('dateofappointment'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      periodupto: {
        type: DataTypes.TEXT,
      },

      totalexperience: {
        type: DataTypes.TEXT,
      },

      nonacademiaexperience: {
        type: DataTypes.TEXT,
      },

      notificationofficeorderjoiningreportandcv: {
        type: DataTypes.TEXT,
      },

      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
      freezeTableName: true,
    },
  );

  bichumanresource.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.bichumanresource.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.bichumanresource.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.bichumanresource.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.bichumanresource.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bichumanresource.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bichumanresource;
};
