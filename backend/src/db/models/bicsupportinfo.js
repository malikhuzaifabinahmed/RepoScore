const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const bicsupportinfo = sequelize.define(
    'bicsupportinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      levelofsupportfinancialinkind: {
        type: DataTypes.TEXT,
      },

      areafacilitatedthroughsupport: {
        type: DataTypes.TEXT,
      },

      financialinkindsupportextendedforactivity: {
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

  bicsupportinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.bicsupportinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.bicsupportinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.bicsupportinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.bicsupportinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.bicsupportinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return bicsupportinfo;
};
