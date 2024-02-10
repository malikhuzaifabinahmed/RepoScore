const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const universityadvancedstudiesandresearchboard = sequelize.define(
    'universityadvancedstudiesandresearchboard',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofmemberdevelopedwith: {
        type: DataTypes.TEXT,
      },

      executiondate: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('executiondate')
            ? moment
                .utc(this.getDataValue('executiondate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  universityadvancedstudiesandresearchboard.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.universityadvancedstudiesandresearchboard.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.universityadvancedstudiesandresearchboard.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.universityadvancedstudiesandresearchboard.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.universityadvancedstudiesandresearchboard.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.universityadvancedstudiesandresearchboard.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return universityadvancedstudiesandresearchboard;
};
