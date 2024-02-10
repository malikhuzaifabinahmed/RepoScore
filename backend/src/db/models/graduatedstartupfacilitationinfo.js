const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const graduatedstartupfacilitationinfo = sequelize.define(
    'graduatedstartupfacilitationinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      keyareasoffacilitationrequestedbygraduatedstartups: {
        type: DataTypes.TEXT,
      },

      typeoffacilitationmentoringtrainingsprovidedtograduated: {
        type: DataTypes.TEXT,
      },

      noofgraduatedstartupsfacilitated: {
        type: DataTypes.TEXT,
      },

      totalstartupsincubatedsincebicsinception: {
        type: DataTypes.TEXT,
      },

      totalstartupsgraduatedsincebicsinception: {
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

  graduatedstartupfacilitationinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.graduatedstartupfacilitationinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.graduatedstartupfacilitationinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.graduatedstartupfacilitationinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.graduatedstartupfacilitationinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.graduatedstartupfacilitationinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return graduatedstartupfacilitationinfo;
};
