const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const humanresource = sequelize.define(
    'humanresource',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      position: {
        type: DataTypes.TEXT,
      },

      officephonenumber: {
        type: DataTypes.TEXT,
      },

      role: {
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
        type: DataTypes.INTEGER,
      },

      totalexperience: {
        type: DataTypes.INTEGER,
      },

      nonacademicexperience: {
        type: DataTypes.INTEGER,
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

  humanresource.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.humanresource.belongsTo(db.university, {
      as: 'universityId',
      foreignKey: {
        name: 'universityIdId',
      },
      constraints: false,
    });

    db.humanresource.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.humanresource.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.humanresource.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.humanresource.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return humanresource;
};
