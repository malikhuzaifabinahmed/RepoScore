const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const trainingcourseinfo = sequelize.define(
    'trainingcourseinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofcourse: {
        type: DataTypes.TEXT,
      },

      typeofcourse: {
        type: DataTypes.TEXT,
      },

      leveloffered: {
        type: DataTypes.TEXT,
      },

      majorareascovered: {
        type: DataTypes.TEXT,
      },

      keylearningoutcomes: {
        type: DataTypes.TEXT,
      },

      noofstartupscompletedthecourse: {
        type: DataTypes.TEXT,
      },

      coursedevelopment: {
        type: DataTypes.TEXT,
      },

      ifoutsourcednameofcourseoffered: {
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

  trainingcourseinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.trainingcourseinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.trainingcourseinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.trainingcourseinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.trainingcourseinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.trainingcourseinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return trainingcourseinfo;
};
