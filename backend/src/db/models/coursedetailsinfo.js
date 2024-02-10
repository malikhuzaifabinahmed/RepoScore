const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const coursedetailsinfo = sequelize.define(
    'coursedetailsinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      titleofcourse: {
        type: DataTypes.TEXT,
      },

      field: {
        type: DataTypes.TEXT,
      },

      level: {
        type: DataTypes.TEXT,
      },

      credithours: {
        type: DataTypes.TEXT,
      },

      totalmodules: {
        type: DataTypes.TEXT,
      },

      optionalcompulsory: {
        type: DataTypes.TEXT,
      },

      departmentsschoolsofferingthecourse: {
        type: DataTypes.TEXT,
      },

      learningoutcomes: {
        type: DataTypes.TEXT,
      },

      totalnoofcoursesoffered: {
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

  coursedetailsinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.coursedetailsinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.coursedetailsinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.coursedetailsinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.coursedetailsinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.coursedetailsinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return coursedetailsinfo;
};
