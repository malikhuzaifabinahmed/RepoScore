const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const startupsincubated = sequelize.define(
    'startupsincubated',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofstartup: {
        type: DataTypes.TEXT,
      },

      briefidea: {
        type: DataTypes.TEXT,
      },

      facultymembername: {
        type: DataTypes.TEXT,
      },

      facultymemberdesignation: {
        type: DataTypes.TEXT,
      },

      facultymemberdepartment: {
        type: DataTypes.TEXT,
      },

      sectorfield: {
        type: DataTypes.TEXT,
      },

      seedfundingsecuredifany: {
        type: DataTypes.TEXT,
      },

      stage: {
        type: DataTypes.TEXT,
      },

      incubatedsinceexpectedgraduation: {
        type: DataTypes.TEXT,
      },

      internshipjobscreated: {
        type: DataTypes.TEXT,
      },

      totalfacultystartups: {
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

  startupsincubated.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.startupsincubated.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.startupsincubated.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.startupsincubated.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.startupsincubated.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.startupsincubated.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return startupsincubated;
};
