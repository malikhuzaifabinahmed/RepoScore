const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const engagementevents = sequelize.define(
    'engagementevents',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      titleofevent: {
        type: DataTypes.TEXT,
      },

      componentofcommunityinvolved: {
        type: DataTypes.TEXT,
      },

      audiance: {
        type: DataTypes.TEXT,
      },

      outcome: {
        type: DataTypes.TEXT,
      },

      collaborationdeveloped: {
        type: DataTypes.TEXT,
      },

      dateofevent: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofevent')
            ? moment.utc(this.getDataValue('dateofevent')).format('YYYY-MM-DD')
            : null;
        },
      },

      nameofcollaboratingpartners: {
        type: DataTypes.TEXT,
      },

      nameofsponsoringagency: {
        type: DataTypes.TEXT,
      },

      willbeparticipatedorarranged: {
        type: DataTypes.TEXT,
      },

      remarks: {
        type: DataTypes.TEXT,
      },

      anexpageno: {
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

  engagementevents.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.engagementevents.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.engagementevents.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.engagementevents.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.engagementevents.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.engagementevents.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return engagementevents;
};
