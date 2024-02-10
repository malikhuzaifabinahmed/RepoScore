const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const categories = sequelize.define(
    'categories',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      categoryname: {
        type: DataTypes.TEXT,
      },

      categorytype: {
        type: DataTypes.TEXT,
      },

      organization: {
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

  categories.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    db.categories.hasMany(db.activegraduatedstartupinfo, {
      as: 'activegraduatedstartupinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.anualresearchrevenue, {
      as: 'anualresearchrevenue_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.bicfundinginfo, {
      as: 'bicfundinginfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.bichumanresource, {
      as: 'bichumanresource_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.bicserviceofferinginfo, {
      as: 'bicserviceofferinginfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.bicsupportinfo, {
      as: 'bicsupportinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.colaborationagreement, {
      as: 'colaborationagreement_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.commities, {
      as: 'commities_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.coursedetailsinfo, {
      as: 'coursedetailsinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.engagementevents, {
      as: 'engagementevents_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.graduatedstartupfacilitationinfo, {
      as: 'graduatedstartupfacilitationinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.honorsandawards, {
      as: 'honorsandawards_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.mentorshipinfo, {
      as: 'mentorshipinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.partnershipinfo, {
      as: 'partnershipinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.patents, {
      as: 'patents_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.policyadvocacy, {
      as: 'policyadvocacy_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.researchlinks, {
      as: 'researchlinks_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.researchpolicy, {
      as: 'researchpolicy_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.researchproposalandgrants, {
      as: 'researchproposalandgrants_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.spinoffstartups, {
      as: 'spinoffstartups_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startupevents, {
      as: 'startupevents_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startupincubation, {
      as: 'startupincubation_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startupmentoring, {
      as: 'startupmentoring_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startuprevenue, {
      as: 'startuprevenue_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startupsappliedforpitching, {
      as: 'startupsappliedforpitching_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startupsincubated, {
      as: 'startupsincubated_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.trainingcourseinfo, {
      as: 'trainingcourseinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.trainings, {
      as: 'trainings_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.universityadvancedstudiesandresearchboard, {
      as: 'universityadvancedstudiesandresearchboard_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.visits, {
      as: 'visits_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.workshopeventinfo, {
      as: 'workshopeventinfo_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.categories.hasMany(db.startupemploment, {
      as: 'startupemploment_categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    //end loop

    db.categories.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.categories.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return categories;
};
