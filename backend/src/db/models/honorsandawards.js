const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const honorsandawards = sequelize.define(
    'honorsandawards',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      titleofaward: {
        type: DataTypes.TEXT,
      },

      nameofawardingorganization: {
        type: DataTypes.TEXT,
      },

      contactsofawardingorganization: {
        type: DataTypes.TEXT,
      },

      briefdetailsofworkhonored: {
        type: DataTypes.TEXT,
      },

      prizeamount: {
        type: DataTypes.TEXT,
      },

      awardwinnername: {
        type: DataTypes.TEXT,
      },

      awardwinnerdesignation: {
        type: DataTypes.TEXT,
      },

      awardwinnerdepartment: {
        type: DataTypes.TEXT,
      },

      remarks: {
        type: DataTypes.TEXT,
      },

      annexpagerefno: {
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

  honorsandawards.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.honorsandawards.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.honorsandawards.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.honorsandawards.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.honorsandawards.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.honorsandawards.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return honorsandawards;
};
