const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const bicdata = sequelize.define(
    'bicdata',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      universityname: {
        type: DataTypes.TEXT,
      },

      oricbankaccounttitle: {
        type: DataTypes.TEXT,
      },

      oricbankaccountnumber: {
        type: DataTypes.TEXT,
      },

      ORICCentralizedEmailId: {
        type: DataTypes.TEXT,
      },

      ORICPostalAddress: {
        type: DataTypes.TEXT,
      },

      shortlinkforORICWebsite: {
        type: DataTypes.TEXT,
      },

      nameoffocalpersonmanagingwebpage: {
        type: DataTypes.TEXT,
      },

      phonenumberoffocalpersonmanagingwebpage: {
        type: DataTypes.TEXT,
      },

      tiscphonenumber: {
        type: DataTypes.TEXT,
      },

      tiscemailid: {
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

  bicdata.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.bicdata.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bicdata.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bicdata;
};
