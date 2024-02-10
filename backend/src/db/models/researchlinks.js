const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const researchlinks = sequelize.define(
    'researchlinks',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      typeoflinkage: {
        type: DataTypes.TEXT,
      },

      region: {
        type: DataTypes.TEXT,
      },

      namehostinstitution: {
        type: DataTypes.TEXT,
      },

      addresshostinstitution: {
        type: DataTypes.TEXT,
      },

      countryofhostinstitution: {
        type: DataTypes.TEXT,
      },

      nameofcollaboratingpartners: {
        type: DataTypes.TEXT,
      },

      addressofcollaboratingpartners: {
        type: DataTypes.TEXT,
      },

      countryofcollaboratingpartners: {
        type: DataTypes.TEXT,
      },

      fieldofstudy: {
        type: DataTypes.TEXT,
      },

      researchborderareas: {
        type: DataTypes.TEXT,
      },

      scopeofcollaboration: {
        type: DataTypes.TEXT,
      },

      linkageestablishmentdate: {
        type: DataTypes.TEXT,
      },

      salientfeaturesoflinkage: {
        type: DataTypes.TEXT,
      },

      anexpagereference: {
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

  researchlinks.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.researchlinks.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.researchlinks.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.researchlinks.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.researchlinks.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.researchlinks.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return researchlinks;
};
