const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const activegraduatedstartupinfo = sequelize.define(
    'activegraduatedstartupinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofgraduatedstartup: {
        type: DataTypes.TEXT,
      },

      companybriefidea: {
        type: DataTypes.TEXT,
      },

      dateofgraduation: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofgraduation')
            ? moment
                .utc(this.getDataValue('dateofgraduation'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      currentstatusactiveregisteredconcernaccelerated: {
        type: DataTypes.TEXT,
      },

      networthofstartupaverageyearlyrevenue: {
        type: DataTypes.TEXT,
      },

      ipoacquisitionamalgamationifany: {
        type: DataTypes.TEXT,
      },

      noofemployeeswithstartup: {
        type: DataTypes.TEXT,
      },

      survivalrateofgraduatedstartups: {
        type: DataTypes.TEXT,
      },

      totalstartupsactiveaftergraduation: {
        type: DataTypes.TEXT,
      },

      totalstartupshavingipoacquisition: {
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

  activegraduatedstartupinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.activegraduatedstartupinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.activegraduatedstartupinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.activegraduatedstartupinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.activegraduatedstartupinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.activegraduatedstartupinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return activegraduatedstartupinfo;
};
