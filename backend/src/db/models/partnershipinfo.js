const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const partnershipinfo = sequelize.define(
    'partnershipinfo',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofpartneringorganization: {
        type: DataTypes.TEXT,
      },

      nationalinternational: {
        type: DataTypes.TEXT,
      },

      fieldareaofexpertise: {
        type: DataTypes.TEXT,
      },

      typeoflink: {
        type: DataTypes.TEXT,
      },

      dateofsigning: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofsigning')
            ? moment
                .utc(this.getDataValue('dateofsigning'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      majorareasofcooperationmodalities: {
        type: DataTypes.TEXT,
      },

      keyoutcomesfromlinks: {
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

  partnershipinfo.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.partnershipinfo.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.partnershipinfo.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.partnershipinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.partnershipinfo.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.partnershipinfo.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return partnershipinfo;
};
