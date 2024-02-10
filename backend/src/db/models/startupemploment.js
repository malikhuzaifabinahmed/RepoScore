const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startupemploment = sequelize.define(
    'startupemploment',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofstartup: {
        type: DataTypes.TEXT,
      },

      startupfacultymembername: {
        type: DataTypes.TEXT,
      },

      designationdepartment: {
        type: DataTypes.TEXT,
      },

      startupstatusincubatedgraduated: {
        type: DataTypes.TEXT,
      },

      employeename: {
        type: DataTypes.TEXT,
      },

      employmenttype: {
        type: DataTypes.TEXT,
      },

      salarystipendhonorarium: {
        type: DataTypes.TEXT,
      },

      employeesince: {
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

  startupemploment.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startupemploment.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startupemploment.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startupemploment.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startupemploment.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startupemploment.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startupemploment;
};
