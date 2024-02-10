const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const bicfundinginfo = sequelize.define(
    'bicfundinginfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofstartup: {
        type: DataTypes.TEXT,
      },

      nameoffundingagency: {
        type: DataTypes.TEXT,
      },

      nationalorinternational: {
        type: DataTypes.TEXT,
      },

      typeoffunding: {
        type: DataTypes.TEXT,
      },

      amountsecured: {
        type: DataTypes.TEXT,
      },

      amountutilizeddistributed: {
        type: DataTypes.TEXT,
      },

      inkindsupportfromfundingagencyifany: {
        type: DataTypes.TEXT,
      },

      agreementsignedwithfundingagencyifany: {
        type: DataTypes.TEXT,
      },

      recurringoronetypesupport: {
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

  bicfundinginfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.bicfundinginfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.bicfundinginfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.bicfundinginfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.bicfundinginfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bicfundinginfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bicfundinginfo;
};
