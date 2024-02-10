const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startuprevenue = sequelize.define(
    'startuprevenue',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofstartup: {
        type: DataTypes.TEXT,
      },

      facultymembernamedesignationdepartment: {
        type: DataTypes.TEXT,
      },

      currentstatus: {
        type: DataTypes.TEXT,
      },

      incubatedsinceandexpectedgraduation: {
        type: DataTypes.TEXT,
      },

      revenuegenerated: {
        type: DataTypes.TEXT,
      },

      totalmonthsinincubation: {
        type: DataTypes.TEXT,
      },

      averagerevenue: {
        type: DataTypes.TEXT,
      },

      sharingmechanismbetweenbicheiandstartup: {
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

  startuprevenue.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startuprevenue.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startuprevenue.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startuprevenue.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startuprevenue.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startuprevenue.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startuprevenue;
};
