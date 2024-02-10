const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const researchpolicy = sequelize.define(
    'researchpolicy',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      titleofresearchpolicy: {
        type: DataTypes.TEXT,
      },

      researchpolicyreferencenumber: {
        type: DataTypes.TEXT,
      },

      dateofapproval: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofapproval')
            ? moment
                .utc(this.getDataValue('dateofapproval'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      approvedby: {
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

  researchpolicy.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.researchpolicy.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.researchpolicy.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.researchpolicy.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.researchpolicy.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.researchpolicy.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return researchpolicy;
};
