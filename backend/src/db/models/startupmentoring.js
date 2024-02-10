const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startupmentoring = sequelize.define(
    'startupmentoring',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofmentor: {
        type: DataTypes.TEXT,
      },

      designation: {
        type: DataTypes.TEXT,
      },

      fieldarea: {
        type: DataTypes.TEXT,
      },

      noofmentoringlecturesprovided: {
        type: DataTypes.TEXT,
      },

      noofstartupsfacilitated: {
        type: DataTypes.TEXT,
      },

      costpermentoringhourchargedifany: {
        type: DataTypes.TEXT,
      },

      totalmentoringsessions: {
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

  startupmentoring.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startupmentoring.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startupmentoring.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startupmentoring.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startupmentoring.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startupmentoring.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startupmentoring;
};
