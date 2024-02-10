const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startupincubation = sequelize.define(
    'startupincubation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofstartup: {
        type: DataTypes.TEXT,
      },

      idea: {
        type: DataTypes.TEXT,
      },

      teammembers: {
        type: DataTypes.TEXT,
      },

      sectorfield: {
        type: DataTypes.TEXT,
      },

      seedfundingsecuredifany: {
        type: DataTypes.TEXT,
      },

      incubatedsince: {
        type: DataTypes.TEXT,
      },

      expectedgraduation: {
        type: DataTypes.TEXT,
      },

      internshipjobsprovidedviastartup: {
        type: DataTypes.TEXT,
      },

      totalslots: {
        type: DataTypes.TEXT,
      },

      occupiedslots: {
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

  startupincubation.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startupincubation.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startupincubation.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startupincubation.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startupincubation.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startupincubation.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startupincubation;
};
