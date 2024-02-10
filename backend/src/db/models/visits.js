const config = require('../../config');
const providers = config.providers;
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const visits = sequelize.define(
    'visits',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      nameofvisits: {
        type: DataTypes.TEXT,
      },

      dateofvisit: {
        type: DataTypes.TEXT,
      },

      agendaofvisit: {
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

  visits.associate = (db) => {
    /// loop through entities and it's fields, and if ref === current e[name] and create relation has many on parent entity

    //end loop

    db.visits.belongsTo(db.categories, {
      as: 'categoryId',
      foreignKey: {
        name: 'categoryIdId',
      },
      constraints: false,
    });

    db.visits.hasMany(db.file, {
      as: 'documentaryevidence',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: db.visits.getTableName(),
        belongsToColumn: 'documentaryevidence',
      },
    });

    db.visits.belongsTo(db.users, {
      as: 'createdBy',
    });

    db.visits.belongsTo(db.users, {
      as: 'updatedBy',
    });
  };

  return visits;
};
