const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class TrainingcourseinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const trainingcourseinfo = await db.trainingcourseinfo.create(
      {
        id: data.id || undefined,

        nameofcourse: data.nameofcourse || null,
        typeofcourse: data.typeofcourse || null,
        leveloffered: data.leveloffered || null,
        majorareascovered: data.majorareascovered || null,
        keylearningoutcomes: data.keylearningoutcomes || null,
        noofstartupscompletedthecourse:
          data.noofstartupscompletedthecourse || null,
        coursedevelopment: data.coursedevelopment || null,
        ifoutsourcednameofcourseoffered:
          data.ifoutsourcednameofcourseoffered || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await trainingcourseinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.trainingcourseinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: trainingcourseinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return trainingcourseinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const trainingcourseinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofcourse: item.nameofcourse || null,
      typeofcourse: item.typeofcourse || null,
      leveloffered: item.leveloffered || null,
      majorareascovered: item.majorareascovered || null,
      keylearningoutcomes: item.keylearningoutcomes || null,
      noofstartupscompletedthecourse:
        item.noofstartupscompletedthecourse || null,
      coursedevelopment: item.coursedevelopment || null,
      ifoutsourcednameofcourseoffered:
        item.ifoutsourcednameofcourseoffered || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const trainingcourseinfo = await db.trainingcourseinfo.bulkCreate(
      trainingcourseinfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < trainingcourseinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.trainingcourseinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: trainingcourseinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return trainingcourseinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const trainingcourseinfo = await db.trainingcourseinfo.findByPk(
      id,
      {},
      { transaction },
    );

    await trainingcourseinfo.update(
      {
        nameofcourse: data.nameofcourse || null,
        typeofcourse: data.typeofcourse || null,
        leveloffered: data.leveloffered || null,
        majorareascovered: data.majorareascovered || null,
        keylearningoutcomes: data.keylearningoutcomes || null,
        noofstartupscompletedthecourse:
          data.noofstartupscompletedthecourse || null,
        coursedevelopment: data.coursedevelopment || null,
        ifoutsourcednameofcourseoffered:
          data.ifoutsourcednameofcourseoffered || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await trainingcourseinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.trainingcourseinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: trainingcourseinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return trainingcourseinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const trainingcourseinfo = await db.trainingcourseinfo.findByPk(
      id,
      options,
    );

    await trainingcourseinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await trainingcourseinfo.destroy({
      transaction,
    });

    return trainingcourseinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const trainingcourseinfo = await db.trainingcourseinfo.findOne(
      { where },
      { transaction },
    );

    if (!trainingcourseinfo) {
      return trainingcourseinfo;
    }

    const output = trainingcourseinfo.get({ plain: true });

    output.categoryId = await trainingcourseinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await trainingcourseinfo.getDocumentaryevidence({
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

      if (filter.nameofcourse) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'nameofcourse',
            filter.nameofcourse,
          ),
        };
      }

      if (filter.typeofcourse) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'typeofcourse',
            filter.typeofcourse,
          ),
        };
      }

      if (filter.leveloffered) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'leveloffered',
            filter.leveloffered,
          ),
        };
      }

      if (filter.majorareascovered) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'majorareascovered',
            filter.majorareascovered,
          ),
        };
      }

      if (filter.keylearningoutcomes) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'keylearningoutcomes',
            filter.keylearningoutcomes,
          ),
        };
      }

      if (filter.noofstartupscompletedthecourse) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'noofstartupscompletedthecourse',
            filter.noofstartupscompletedthecourse,
          ),
        };
      }

      if (filter.coursedevelopment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'coursedevelopment',
            filter.coursedevelopment,
          ),
        };
      }

      if (filter.ifoutsourcednameofcourseoffered) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainingcourseinfo',
            'ifoutsourcednameofcourseoffered',
            filter.ifoutsourcednameofcourseoffered,
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
          count: await db.trainingcourseinfo.count({
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
      : await db.trainingcourseinfo.findAndCountAll({
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
          Utils.ilike('trainingcourseinfo', 'id', query),
        ],
      };
    }

    const records = await db.trainingcourseinfo.findAll({
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
