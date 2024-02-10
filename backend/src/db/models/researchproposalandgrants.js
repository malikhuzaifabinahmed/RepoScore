const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const researchproposalandgrants = sequelize.define(
    'researchproposalandgrants',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      approvedorrequiredmodificationordifferedordisapproved: {
        type: DataTypes.TEXT,
      },

      thematicarea: {
        type: DataTypes.TEXT,
      },

      nameofresearch: {
        type: DataTypes.TEXT,
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

      nameofcopi: {
        type: DataTypes.TEXT,
      },

      copidesignation: {
        type: DataTypes.TEXT,
      },

      copidepartment: {
        type: DataTypes.TEXT,
      },

      titleofresearchproposal: {
        type: DataTypes.TEXT,
      },

      durationstartingandendingdate: {
        type: DataTypes.TEXT,
      },

      totalfundingrequestedrs: {
        type: DataTypes.TEXT,
      },

      totalfundingapproved: {
        type: DataTypes.TEXT,
      },

      totalfundingreleased: {
        type: DataTypes.TEXT,
      },

      collaboratingpartnerdetailsifany: {
        type: DataTypes.TEXT,
      },

      cofundingpartnerdetailsifany: {
        type: DataTypes.TEXT,
      },

      nameofsponsringagency: {
        type: DataTypes.TEXT,
      },

      addressofsponsoringagency: {
        type: DataTypes.TEXT,
      },

      countryofsponsoringagency: {
        type: DataTypes.TEXT,
      },

      status: {
        type: DataTypes.TEXT,
      },

      remarks: {
        type: DataTypes.TEXT,
      },

      relatedinformation: {
        type: DataTypes.TEXT,
      },

      keyprojectdeliverables: {
        type: DataTypes.TEXT,
      },

      oricoverheadinapprovedfunding: {
        type: DataTypes.TEXT,
      },

      dateofcontract: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofcontract')
            ? moment
                .utc(this.getDataValue('dateofcontract'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      dateofapproval: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofapproval')
            ? moment
                .utc(this.getDataValue('dateofapproval'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      dateofprojectcompletion: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofprojectcompletion')
            ? moment
                .utc(this.getDataValue('dateofprojectcompletion'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      totalfundingutilized: {
        type: DataTypes.TEXT,
      },

      approved: {
        type: DataTypes.BOOLEAN,

        allowNull: false,
        defaultValue: false,
      },

      dateofproposalsubmission: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofproposalsubmission')
            ? moment
                .utc(this.getDataValue('dateofproposalsubmission'))
                .format('YYYY-MM-DD')
            : null;
        },
      },

      dateofreview: {
        type: DataTypes.DATEONLY,

        get: function () {
          return this.getDataValue('dateofreview')
            ? moment.utc(this.getDataValue('dateofreview')).format('YYYY-MM-DD')
            : null;
        },
      },

      statusofirbmeeting: {
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

  researchproposalandgrants.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.researchproposalandgrants.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.researchproposalandgrants.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.researchproposalandgrants.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.researchproposalandgrants.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.researchproposalandgrants.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return researchproposalandgrants;
};
