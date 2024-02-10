const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const colaborationagreement = sequelize.define(
    'colaborationagreement',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      typeoflinkages: {
        type: DataTypes.TEXT,
      },

      nationalinternational: {
        type: DataTypes.TEXT,
      },

      hostcountryname: {
        type: DataTypes.TEXT,
      },

      hostcountryaddress: {
        type: DataTypes.TEXT,
      },

      startDate: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('startDate')
            ? moment.utc(this.getDataValue('startDate')).format('YYYY-MM-DD')
            : null;
        },
      },

      endDate: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('endDate')
            ? moment.utc(this.getDataValue('endDate')).format('YYYY-MM-DD')
            : null;
        },
      },

      keyinitiativestobeundertaken: {
        type: DataTypes.TEXT,
      },

      field: {
        type: DataTypes.TEXT,
      },

      scopeofcollaboration: {
        type: DataTypes.TEXT,
      },

      dateoflinkageestablishment: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateoflinkageestablishment')
            ? moment
                .utc(this.getDataValue('dateoflinkageestablishment'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      financialsupport: {
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

  colaborationagreement.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.colaborationagreement.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.colaborationagreement.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.colaborationagreement.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.colaborationagreement.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.colaborationagreement.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return colaborationagreement;
};
