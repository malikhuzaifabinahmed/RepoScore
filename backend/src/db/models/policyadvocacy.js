const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const policyadvocacy = sequelize.define(
    'policyadvocacy',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofgovernmentbodypresented: {
        type: DataTypes.TEXT,
      },

      dateofpresentation: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofpresentation')
            ? moment
                .utc(this.getDataValue('dateofpresentation'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      nameofpi: {
        type: DataTypes.TEXT,
      },

      pidesignation: {
        type: DataTypes.TEXT,
      },

      pidepartment: {
        type: DataTypes.TEXT,
      },

      areaadvocated: {
        type: DataTypes.TEXT,
      },

      description: {
        type: DataTypes.TEXT,
      },

      namecoalitionpartner: {
        type: DataTypes.TEXT,
      },

      issueverification: {
        type: DataTypes.TEXT,
      },

      backingresearchstatus: {
        type: DataTypes.TEXT,
      },

      advocacytoolsadopted: {
        type: DataTypes.TEXT,
      },

      anexpageno: {
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

  policyadvocacy.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.policyadvocacy.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.policyadvocacy.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.policyadvocacy.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.policyadvocacy.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.policyadvocacy.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return policyadvocacy;
};
