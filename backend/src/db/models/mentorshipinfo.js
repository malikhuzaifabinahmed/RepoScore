const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const mentorshipinfo = sequelize.define(
    'mentorshipinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofmentor: {
        type: DataTypes.TEXT,
      },

      fieldareasofexpertise: {
        type: DataTypes.TEXT,
      },

      nationalinternational: {
        type: DataTypes.TEXT,
      },

      mentoringsessionsheldatbicduringtheyear: {
        type: DataTypes.TEXT,
      },

      noofstartupsfacilitatedthroughsessions: {
        type: DataTypes.TEXT,
      },

      ifcorporatebodymousigningdateifany: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('ifcorporatebodymousigningdateifany')
            ? moment
                .utc(this.getDataValue('ifcorporatebodymousigningdateifany'))
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

  mentorshipinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.mentorshipinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.mentorshipinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.mentorshipinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.mentorshipinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.mentorshipinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return mentorshipinfo;
};
