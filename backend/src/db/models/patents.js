const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const patents = sequelize.define(
    'patents',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      leadinventorname: {
        type: DataTypes.TEXT,
      },

      leadinventordesignation: {
        type: DataTypes.TEXT,
      },

      leadinventordepartment: {
        type: DataTypes.TEXT,
      },

      titleofinvention: {
        type: DataTypes.TEXT,
      },

      categoryofip: {
        type: DataTypes.TEXT,
      },

      developmentstatus: {
        type: DataTypes.TEXT,
      },

      keyscientificaspects: {
        type: DataTypes.TEXT,
      },

      commercialpartner: {
        type: DataTypes.TEXT,
      },

      patentfiledwithname: {
        type: DataTypes.TEXT,
      },

      patentfiledwithdate: {
        type: DataTypes.TEXT,
      },

      fieldofuse: {
        type: DataTypes.TEXT,
      },

      nationalinternational: {
        type: DataTypes.TEXT,
      },

      durationofagreement: {
        type: DataTypes.TEXT,
      },

      financialsupport: {
        type: DataTypes.TEXT,
      },

      previousdisclosur: {
        type: DataTypes.TEXT,
      },

      dateoffilling: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateoffilling')
            ? moment
                .utc(this.getDataValue('dateoffilling'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      statusofnegotiation: {
        type: DataTypes.TEXT,
      },

      licenseename: {
        type: DataTypes.TEXT,
      },

      licenseeorganization: {
        type: DataTypes.TEXT,
      },

      annexpagerefno: {
        type: DataTypes.TEXT,
      },

      remarks: {
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

  patents.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.patents.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.patents.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.patents.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.patents.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.patents.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return patents;
};
