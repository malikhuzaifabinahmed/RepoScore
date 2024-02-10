const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class BicsupportinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicsupportinfo = await db.bicsupportinfo.create(
      {
        id: data.id || undefined,

        levelofsupportfinancialinkind:
          data.levelofsupportfinancialinkind || null,
        areafacilitatedthroughsupport:
          data.areafacilitatedthroughsupport || null,
        financialinkindsupportextendedforactivity:
          data.financialinkindsupportextendedforactivity || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bicsupportinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bicsupportinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bicsupportinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return bicsupportinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const bicsupportinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      levelofsupportfinancialinkind: item.levelofsupportfinancialinkind || null,
      areafacilitatedthroughsupport: item.areafacilitatedthroughsupport || null,
      financialinkindsupportextendedforactivity:
        item.financialinkindsupportextendedforactivity || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const bicsupportinfo = await db.bicsupportinfo.bulkCreate(
      bicsupportinfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < bicsupportinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.bicsupportinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: bicsupportinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return bicsupportinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicsupportinfo = await db.bicsupportinfo.findByPk(
      id,
      {},
      { transaction },
    );

    await bicsupportinfo.update(
      {
        levelofsupportfinancialinkind:
          data.levelofsupportfinancialinkind || null,
        areafacilitatedthroughsupport:
          data.areafacilitatedthroughsupport || null,
        financialinkindsupportextendedforactivity:
          data.financialinkindsupportextendedforactivity || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bicsupportinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bicsupportinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bicsupportinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return bicsupportinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicsupportinfo = await db.bicsupportinfo.findByPk(id, options);

    await bicsupportinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await bicsupportinfo.destroy({
      transaction,
    });

    return bicsupportinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bicsupportinfo = await db.bicsupportinfo.findOne(
      { where },
      { transaction },
    );

    if (!bicsupportinfo) {
      return bicsupportinfo;
    }

    const output = bicsupportinfo.get({ plain: true });

    output.categoryId = await bicsupportinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await bicsupportinfo.getDocumentaryevidence({
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

      if (filter.levelofsupportfinancialinkind) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicsupportinfo',
            'levelofsupportfinancialinkind',
            filter.levelofsupportfinancialinkind,
          ),
        };
      }

      if (filter.areafacilitatedthroughsupport) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicsupportinfo',
            'areafacilitatedthroughsupport',
            filter.areafacilitatedthroughsupport,
          ),
        };
      }

      if (filter.financialinkindsupportextendedforactivity) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicsupportinfo',
            'financialinkindsupportextendedforactivity',
            filter.financialinkindsupportextendedforactivity,
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
          count: await db.bicsupportinfo.count({
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
      : await db.bicsupportinfo.findAndCountAll({
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
          Utils.ilike('bicsupportinfo', 'id', query),
        ],
      };
    }

    const records = await db.bicsupportinfo.findAll({
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
