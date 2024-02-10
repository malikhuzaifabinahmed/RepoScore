const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const commities = sequelize.define(
    'commities',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.TEXT,
      },

      designation: {
        type: DataTypes.TEXT,
      },

      parentinstitutionorganization: {
        type: DataTypes.TEXT,
      },

      sectorfield: {
        type: DataTypes.TEXT,
      },

      rolestatusincommittee: {
        type: DataTypes.TEXT,
      },

      membersince: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('membersince')
            ? moment.utc(this.getDataValue('membersince')).format('YYYY-MM-DD')
            : null;
        },
      },

      notified: {
        type: DataTypes.TEXT,
      },

      noofmembers: {
        type: DataTypes.INTEGER,
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

  commities.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.commities.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.commities.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.commities.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.commities.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.commities.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return commities;
};
