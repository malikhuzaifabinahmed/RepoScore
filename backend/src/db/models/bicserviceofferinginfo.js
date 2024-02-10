const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const bicserviceofferinginfo = sequelize.define(
    'bicserviceofferinginfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      natureofserviceofferedsessionheld: {
        type: DataTypes.TEXT,
      },

      nameofserviceprovider: {
        type: DataTypes.TEXT,
      },

      backgroundandexpertise: {
        type: DataTypes.TEXT,
      },

      localinternational: {
        type: DataTypes.TEXT,
      },

      noofstartupsfacilitated: {
        type: DataTypes.TEXT,
      },

      totalnosessionsheld: {
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

  bicserviceofferinginfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.bicserviceofferinginfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.bicserviceofferinginfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.bicserviceofferinginfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.bicserviceofferinginfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bicserviceofferinginfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bicserviceofferinginfo;
};
