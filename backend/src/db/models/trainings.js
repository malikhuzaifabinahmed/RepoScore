const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const trainings = sequelize.define(
    'trainings',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      titleoftraining: {
        type: DataTypes.TEXT,
      },

      dateofevent: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofevent')
            ? moment.utc(this.getDataValue('dateofevent')).format('YYYY-MM-DD')
            : null;
        },
      },

      numberofparticipants: {
        type: DataTypes.TEXT,
      },

      majorfocusareaandoutcomes: {
        type: DataTypes.TEXT,
      },

      audiencetype: {
        type: DataTypes.TEXT,
      },

      organizer: {
        type: DataTypes.TEXT,
      },

      nameoforicpersonalattended: {
        type: DataTypes.TEXT,
      },

      detailsoforicpersonnelattended: {
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

  trainings.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.trainings.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.trainings.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.trainings.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.trainings.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.trainings.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return trainings;
};
