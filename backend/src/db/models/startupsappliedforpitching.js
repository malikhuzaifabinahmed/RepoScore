const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startupsappliedforpitching = sequelize.define(
    'startupsappliedforpitching',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      idea: {
        type: DataTypes.TEXT,
      },

      entrepreneur: {
        type: DataTypes.TEXT,
      },

      fieldarea: {
        type: DataTypes.TEXT,
      },

      educationalbackground: {
        type: DataTypes.TEXT,
      },

      teammembers: {
        type: DataTypes.TEXT,
      },

      currentstatus: {
        type: DataTypes.TEXT,
      },

      resultremarksfromcompetition: {
        type: DataTypes.TEXT,
      },

      availabilityoffundingseedmoney: {
        type: DataTypes.TEXT,
      },

      dateheld: {
        type: DataTypes.TEXT,
      },

      noofideasapplied: {
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

  startupsappliedforpitching.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startupsappliedforpitching.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startupsappliedforpitching.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startupsappliedforpitching.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startupsappliedforpitching.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startupsappliedforpitching.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startupsappliedforpitching;
};
