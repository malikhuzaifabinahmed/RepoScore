const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartupsappliedforpitchingDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupsappliedforpitching =
      await db.startupsappliedforpitching.create(
        {
          id: data.id || undefined,

          idea: data.idea || null,
          entrepreneur: data.entrepreneur || null,
          fieldarea: data.fieldarea || null,
          educationalbackground: data.educationalbackground || null,
          teammembers: data.teammembers || null,
          currentstatus: data.currentstatus || null,
          resultremarksfromcompetition:
            data.resultremarksfromcompetition || null,
          availabilityoffundingseedmoney:
            data.availabilityoffundingseedmoney || null,
          dateheld: data.dateheld || null,
          noofideasapplied: data.noofideasapplied || null,
          importHash: data.importHash || null,
          createdById: currentUser.id,
          updatedById: currentUser.id,
        },
        { transaction },
      );

    await startupsappliedforpitching.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupsappliedforpitching.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupsappliedforpitching.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupsappliedforpitching;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startupsappliedforpitchingData = data.map((item, index) => ({
      id: item.id || undefined,

      idea: item.idea || null,
      entrepreneur: item.entrepreneur || null,
      fieldarea: item.fieldarea || null,
      educationalbackground: item.educationalbackground || null,
      teammembers: item.teammembers || null,
      currentstatus: item.currentstatus || null,
      resultremarksfromcompetition: item.resultremarksfromcompetition || null,
      availabilityoffundingseedmoney:
        item.availabilityoffundingseedmoney || null,
      dateheld: item.dateheld || null,
      noofideasapplied: item.noofideasapplied || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startupsappliedforpitching =
      await db.startupsappliedforpitching.bulkCreate(
        startupsappliedforpitchingData,
        { transaction },
      );

    // For each item created, replace relation files

    for (let i = 0; i < startupsappliedforpitching.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startupsappliedforpitching.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startupsappliedforpitching[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startupsappliedforpitching;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupsappliedforpitching =
      await db.startupsappliedforpitching.findByPk(id, {}, { transaction });

    await startupsappliedforpitching.update(
      {
        idea: data.idea || null,
        entrepreneur: data.entrepreneur || null,
        fieldarea: data.fieldarea || null,
        educationalbackground: data.educationalbackground || null,
        teammembers: data.teammembers || null,
        currentstatus: data.currentstatus || null,
        resultremarksfromcompetition: data.resultremarksfromcompetition || null,
        availabilityoffundingseedmoney:
          data.availabilityoffundingseedmoney || null,
        dateheld: data.dateheld || null,
        noofideasapplied: data.noofideasapplied || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupsappliedforpitching.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupsappliedforpitching.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupsappliedforpitching.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupsappliedforpitching;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupsappliedforpitching =
      await db.startupsappliedforpitching.findByPk(id, options);

    await startupsappliedforpitching.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startupsappliedforpitching.destroy({
      transaction,
    });

    return startupsappliedforpitching;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startupsappliedforpitching =
      await db.startupsappliedforpitching.findOne({ where }, { transaction });

    if (!startupsappliedforpitching) {
      return startupsappliedforpitching;
    }

    const output = startupsappliedforpitching.get({ plain: true });

    output.categoryId = await startupsappliedforpitching.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await startupsappliedforpitching.getDocumentaryevidence({
        transaction,
      });

    return output;
  }

  static async findAll(filter, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.categories,
        as: 'categoryId',
      },

      {
        model: db.file,
        as: 'documentaryevidence',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.idea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'idea',
            filter.idea,
          ),
        };
      }

      if (filter.entrepreneur) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'entrepreneur',
            filter.entrepreneur,
          ),
        };
      }

      if (filter.fieldarea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'fieldarea',
            filter.fieldarea,
          ),
        };
      }

      if (filter.educationalbackground) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'educationalbackground',
            filter.educationalbackground,
          ),
        };
      }

      if (filter.teammembers) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'teammembers',
            filter.teammembers,
          ),
        };
      }

      if (filter.currentstatus) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'currentstatus',
            filter.currentstatus,
          ),
        };
      }

      if (filter.resultremarksfromcompetition) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'resultremarksfromcompetition',
            filter.resultremarksfromcompetition,
          ),
        };
      }

      if (filter.availabilityoffundingseedmoney) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'availabilityoffundingseedmoney',
            filter.availabilityoffundingseedmoney,
          ),
        };
      }

      if (filter.dateheld) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'dateheld',
            filter.dateheld,
          ),
        };
      }

      if (filter.noofideasapplied) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsappliedforpitching',
            'noofideasapplied',
            filter.noofideasapplied,
          ),
        };
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.categoryId) {
        var listItems = filter.categoryId.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          categoryIdId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.startupsappliedforpitching.count({
            where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.startupsappliedforpitching.findAndCountAll({
          where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit) {
    let where = {};

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('startupsappliedforpitching', 'id', query),
        ],
      };
    }

    const records = await db.startupsappliedforpitching.findAll({
      attributes: ['id', 'id'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['id', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }
};
