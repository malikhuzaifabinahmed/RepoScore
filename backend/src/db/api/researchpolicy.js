const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ResearchpolicyDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchpolicy = await db.researchpolicy.create(
      {
        id: data.id || undefined,

        titleofresearchpolicy: data.titleofresearchpolicy || null,
        researchpolicyreferencenumber:
          data.researchpolicyreferencenumber || null,
        dateofapproval: data.dateofapproval || null,
        approvedby: data.approvedby || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await researchpolicy.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.researchpolicy.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: researchpolicy.id,
      },
      data.documentaryevidence,
      options,
    );

    return researchpolicy;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const researchpolicyData = data.map((item, index) => ({
      id: item.id || undefined,

      titleofresearchpolicy: item.titleofresearchpolicy || null,
      researchpolicyreferencenumber: item.researchpolicyreferencenumber || null,
      dateofapproval: item.dateofapproval || null,
      approvedby: item.approvedby || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const researchpolicy = await db.researchpolicy.bulkCreate(
      researchpolicyData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < researchpolicy.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.researchpolicy.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: researchpolicy[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return researchpolicy;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchpolicy = await db.researchpolicy.findByPk(
      id,
      {},
      { transaction },
    );

    await researchpolicy.update(
      {
        titleofresearchpolicy: data.titleofresearchpolicy || null,
        researchpolicyreferencenumber:
          data.researchpolicyreferencenumber || null,
        dateofapproval: data.dateofapproval || null,
        approvedby: data.approvedby || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await researchpolicy.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.researchpolicy.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: researchpolicy.id,
      },
      data.documentaryevidence,
      options,
    );

    return researchpolicy;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchpolicy = await db.researchpolicy.findByPk(id, options);

    await researchpolicy.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await researchpolicy.destroy({
      transaction,
    });

    return researchpolicy;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const researchpolicy = await db.researchpolicy.findOne(
      { where },
      { transaction },
    );

    if (!researchpolicy) {
      return researchpolicy;
    }

    const output = researchpolicy.get({ plain: true });

    output.categoryId = await researchpolicy.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await researchpolicy.getDocumentaryevidence({
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

      if (filter.titleofresearchpolicy) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchpolicy',
            'titleofresearchpolicy',
            filter.titleofresearchpolicy,
          ),
        };
      }

      if (filter.researchpolicyreferencenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchpolicy',
            'researchpolicyreferencenumber',
            filter.researchpolicyreferencenumber,
          ),
        };
      }

      if (filter.approvedby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchpolicy',
            'approvedby',
            filter.approvedby,
          ),
        };
      }

      if (filter.dateofapprovalRange) {
        const [start, end] = filter.dateofapprovalRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofapproval: {
              ...where.dateofapproval,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofapproval: {
              ...where.dateofapproval,
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
          count: await db.researchpolicy.count({
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
      : await db.researchpolicy.findAndCountAll({
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
          Utils.ilike('researchpolicy', 'id', query),
        ],
      };
    }

    const records = await db.researchpolicy.findAll({
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
