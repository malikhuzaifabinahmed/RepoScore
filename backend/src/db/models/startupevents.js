const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startupevents = sequelize.define(
    'startupevents',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofevent: {
        type: DataTypes.TEXT,
      },

      dateheld: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateheld')
            ? moment.utc(this.getDataValue('dateheld')).format('YYYY-MM-DD')
            : null;
        },
      },

      panelistdetails: {
        type: DataTypes.TEXT,
      },

      ideasapplied: {
        type: DataTypes.TEXT,
      },

      ideasselected: {
        type: DataTypes.TEXT,
      },

      winnersdetails: {
        type: DataTypes.TEXT,
      },

      prizefundingamount: {
        type: DataTypes.TEXT,
      },

      eventfundingsourcessponsors: {
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

  startupevents.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startupevents.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startupevents.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startupevents.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startupevents.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startupevents.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startupevents;
};
