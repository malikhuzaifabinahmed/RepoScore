const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const university = sequelize.define(
    'university',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      province: {
        type: DataTypes.TEXT,
      },

      city: {
        type: DataTypes.TEXT,
      },

      sector: {
        type: DataTypes.TEXT,
      },

      postaladdress: {
        type: DataTypes.TEXT,
      },

      universityheadposition: {
        type: DataTypes.TEXT,
      },

      universityheadname: {
        type: DataTypes.TEXT,
      },

      universityheademail: {
        type: DataTypes.TEXT,
      },

      universityheadphonenumber: {
        type: DataTypes.TEXT,
      },

      registrarname: {
        type: DataTypes.TEXT,
      },

      registraremail: {
        type: DataTypes.TEXT,
      },

      registrarphonenumber: {
        type: DataTypes.TEXT,
      },

      registrarpaemail: {
        type: DataTypes.TEXT,
      },

      registrarpaphonenumber: {
        type: DataTypes.TEXT,
      },

      totalnumberofsanctionedfaculityposts: {
        type: DataTypes.TEXT,
      },

      totalnumberoffaculty: {
        type: DataTypes.TEXT,
      },

      totalnumberofphdfaculty: {
        type: DataTypes.TEXT,
      },

      totalnumberofvacantfacultyposts: {
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

  university.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.university.hasMany(db.humanresource, {
      as: 'humanresource_universityId',
      foreignKey: {
        name: 'universityIdId',
      },
      constraints: false,
    });

    db.university.hasMany(db.oricdata, {
      as: 'oricdata_universityId',
      foreignKey: {
        name: 'universityIdId',
      },
      constraints: false,
    });

    //end loop

    db.university.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.university.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return university;
};
