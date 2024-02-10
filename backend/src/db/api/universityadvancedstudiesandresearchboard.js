const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class UniversityadvancedstudiesandresearchboardDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const universityadvancedstudiesandresearchboard =
      await db.universityadvancedstudiesandresearchboard.create(
        {
          id: data.id || undefined,

          nameofmemberdevelopedwith: data.nameofmemberdevelopedwith || null,
          executiondate: data.executiondate || null,
          importHash: data.importHash || null,
          createdById: currentUser.id,
          updatedById: currentUser.id,
        },
        { transaction },
      );

    await universityadvancedstudiesandresearchboard.setCategoryId(
      data.categoryId || null,
      {
        transaction,
      },
    );

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.universityadvancedstudiesandresearchboard.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: universityadvancedstudiesandresearchboard.id,
      },
      data.documentaryevidence,
      options,
    );

    return universityadvancedstudiesandresearchboard;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const universityadvancedstudiesandresearchboardData = data.map(
      (item, index) => ({
        id: item.id || undefined,

        nameofmemberdevelopedwith: item.nameofmemberdevelopedwith || null,
        executiondate: item.executiondate || null,
        importHash: item.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
        createdAt: new Date(Date.now() + index * 1000),
      }),
    );

    // Bulk create items
    const universityadvancedstudiesandresearchboard =
      await db.universityadvancedstudiesandresearchboard.bulkCreate(
        universityadvancedstudiesandresearchboardData,
        { transaction },
      );

    // For each item created, replace relation files

    for (let i = 0; i < universityadvancedstudiesandresearchboard.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo:
            db.universityadvancedstudiesandresearchboard.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: universityadvancedstudiesandresearchboard[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return universityadvancedstudiesandresearchboard;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const universityadvancedstudiesandresearchboard =
      await db.universityadvancedstudiesandresearchboard.findByPk(
        id,
        {},
        { transaction },
      );

    await universityadvancedstudiesandresearchboard.update(
      {
        nameofmemberdevelopedwith: data.nameofmemberdevelopedwith || null,
        executiondate: data.executiondate || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await universityadvancedstudiesandresearchboard.setCategoryId(
      data.categoryId || null,
      {
        transaction,
      },
    );

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.universityadvancedstudiesandresearchboard.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: universityadvancedstudiesandresearchboard.id,
      },
      data.documentaryevidence,
      options,
    );

    return universityadvancedstudiesandresearchboard;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const universityadvancedstudiesandresearchboard =
      await db.universityadvancedstudiesandresearchboard.findByPk(id, options);

    await universityadvancedstudiesandresearchboard.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await universityadvancedstudiesandresearchboard.destroy({
      transaction,
    });

    return universityadvancedstudiesandresearchboard;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const universityadvancedstudiesandresearchboard =
      await db.universityadvancedstudiesandresearchboard.findOne(
        { where },
        { transaction },
      );

    if (!universityadvancedstudiesandresearchboard) {
      return universityadvancedstudiesandresearchboard;
    }

    const output = universityadvancedstudiesandresearchboard.get({
      plain: true,
    });

    output.categoryId =
      await universityadvancedstudiesandresearchboard.getCategoryId({
        transaction,
      });

    output.documentaryevidence =
      await universityadvancedstudiesandresearchboard.getDocumentaryevidence({
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

      if (filter.nameofmemberdevelopedwith) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'universityadvancedstudiesandresearchboard',
            'nameofmemberdevelopedwith',
            filter.nameofmemberdevelopedwith,
          ),
        };
      }

      if (filter.executiondateRange) {
        const [start, end] = filter.executiondateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            executiondate: {
              ...where.executiondate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            executiondate: {
              ...where.executiondate,
              [Op.lte]: end,
            },
          };
        }
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
          count: await db.universityadvancedstudiesandresearchboard.count({
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
      : await db.universityadvancedstudiesandresearchboard.findAndCountAll({
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
          Utils.ilike('universityadvancedstudiesandresearchboard', 'id', query),
        ],
      };
    }

    const records = await db.universityadvancedstudiesandresearchboard.findAll({
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
