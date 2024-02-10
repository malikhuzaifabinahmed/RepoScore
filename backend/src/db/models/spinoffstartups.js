const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const spinoffstartups = sequelize.define(
    'spinoffstartups',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofstartup: {
        type: DataTypes.TEXT,
      },

      briefideabackingresearchsectorfield: {
        type: DataTypes.TEXT,
      },

      facultymembernamedesignationdepartment: {
        type: DataTypes.TEXT,
      },

      ipstatus: {
        type: DataTypes.TEXT,
      },

      nameofspinoff: {
        type: DataTypes.TEXT,
      },

      stage: {
        type: DataTypes.TEXT,
      },

      licenseagreementsignedifany: {
        type: DataTypes.TEXT,
      },

      fundingsources: {
        type: DataTypes.TEXT,
      },

      totalfacultystartups: {
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

  spinoffstartups.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.spinoffstartups.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.spinoffstartups.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.spinoffstartups.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.spinoffstartups.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.spinoffstartups.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return spinoffstartups;
};
