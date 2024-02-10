const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const anualresearchrevenue = sequelize.define(
    'anualresearchrevenue',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      researchgrantname: {
        type: DataTypes.TEXT,
      },

      remarks: {
        type: DataTypes.TEXT,
      },

      anexpagerefno: {
        type: DataTypes.INTEGER,
      },

      oricoverheadinreleasedfunding: {
        type: DataTypes.TEXT,
      },

      nationalorinternational: {
        type: DataTypes.TEXT,
      },

      titleofresearchproposal: {
        type: DataTypes.TEXT,
      },

      detailsofpi: {
        type: DataTypes.TEXT,
      },

      isjointventure: {
        type: DataTypes.TEXT,
      },

      nameofjointventure: {
        type: DataTypes.TEXT,
      },

      detailsofjointventure: {
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

      totalfundingapproved: {
        type: DataTypes.TEXT,
      },

      oricoverheadinapprovedfunding: {
        type: DataTypes.TEXT,
      },

      nameofpi: {
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

  anualresearchrevenue.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.anualresearchrevenue.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.anualresearchrevenue.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.anualresearchrevenue.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.anualresearchrevenue.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.anualresearchrevenue.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return anualresearchrevenue;
};
