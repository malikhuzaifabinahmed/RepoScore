const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const oricdata = sequelize.define(
    'oricdata',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      oricbankaccounttitle: {
        type: DataTypes.TEXT,
      },

      oricbankaccountnumber: {
        type: DataTypes.TEXT,
      },

      oriccentralizedemailid: {
        type: DataTypes.TEXT,
      },

      oricpostaladdress: {
        type: DataTypes.TEXT,
      },

      shortlinkfororicwebsite: {
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

  oricdata.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.oricdata.belongsTo(db.university, {
      as: 'universityId',
      foreignKey: {
        name: 'universityIdId',
      },
      constraints: false,
    });

    db.oricdata.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.oricdata.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.oricdata.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.oricdata.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return oricdata;
};
