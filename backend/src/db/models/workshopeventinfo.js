const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const workshopeventinfo = sequelize.define(
    'workshopeventinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      title: {
        type: DataTypes.TEXT,
      },

      dateheld: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateheld')
            ? moment.utc(this.getDataValue('dateheld')).format('YYYY-MM-DD')
            : null;
        },
      },

      venue: {
        type: DataTypes.TEXT,
      },

      fieldthematicarea: {
        type: DataTypes.TEXT,
      },

      panelistmentoradvisorname: {
        type: DataTypes.TEXT,
      },

      panelistmentoradvisordesignation: {
        type: DataTypes.TEXT,
      },

      arrangedby: {
        type: DataTypes.TEXT,
      },

      facultystudent: {
        type: DataTypes.TEXT,
      },

      noofparticipants: {
        type: DataTypes.TEXT,
      },

      totalnoeventsheld: {
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

  workshopeventinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.workshopeventinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.workshopeventinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.workshopeventinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.workshopeventinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.workshopeventinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return workshopeventinfo;
};
