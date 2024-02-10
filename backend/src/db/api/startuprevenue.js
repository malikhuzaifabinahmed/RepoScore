const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartuprevenueDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startuprevenue = await db.startuprevenue.create(
      {
        id: data.id || undefined,

        nameofstartup: data.nameofstartup || null,
        facultymembernamedesignationdepartment:
          data.facultymembernamedesignationdepartment || null,
        currentstatus: data.currentstatus || null,
        incubatedsinceandexpectedgraduation:
          data.incubatedsinceandexpectedgraduation || null,
        revenuegenerated: data.revenuegenerated || null,
        totalmonthsinincubation: data.totalmonthsinincubation || null,
        averagerevenue: data.averagerevenue || null,
        sharingmechanismbetweenbicheiandstartup:
          data.sharingmechanismbetweenbicheiandstartup || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startuprevenue.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startuprevenue.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startuprevenue.id,
      },
      data.documentaryevidence,
      options,
    );

    return startuprevenue;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startuprevenueData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofstartup: item.nameofstartup || null,
      facultymembernamedesignationdepartment:
        item.facultymembernamedesignationdepartment || null,
      currentstatus: item.currentstatus || null,
      incubatedsinceandexpectedgraduation:
        item.incubatedsinceandexpectedgraduation || null,
      revenuegenerated: item.revenuegenerated || null,
      totalmonthsinincubation: item.totalmonthsinincubation || null,
      averagerevenue: item.averagerevenue || null,
      sharingmechanismbetweenbicheiandstartup:
        item.sharingmechanismbetweenbicheiandstartup || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startuprevenue = await db.startuprevenue.bulkCreate(
      startuprevenueData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < startuprevenue.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startuprevenue.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startuprevenue[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startuprevenue;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startuprevenue = await db.startuprevenue.findByPk(
      id,
      {},
      { transaction },
    );

    await startuprevenue.update(
      {
        nameofstartup: data.nameofstartup || null,
        facultymembernamedesignationdepartment:
          data.facultymembernamedesignationdepartment || null,
        currentstatus: data.currentstatus || null,
        incubatedsinceandexpectedgraduation:
          data.incubatedsinceandexpectedgraduation || null,
        revenuegenerated: data.revenuegenerated || null,
        totalmonthsinincubation: data.totalmonthsinincubation || null,
        averagerevenue: data.averagerevenue || null,
        sharingmechanismbetweenbicheiandstartup:
          data.sharingmechanismbetweenbicheiandstartup || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startuprevenue.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startuprevenue.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startuprevenue.id,
      },
      data.documentaryevidence,
      options,
    );

    return startuprevenue;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startuprevenue = await db.startuprevenue.findByPk(id, options);

    await startuprevenue.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startuprevenue.destroy({
      transaction,
    });

    return startuprevenue;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startuprevenue = await db.startuprevenue.findOne(
      { where },
      { transaction },
    );

    if (!startuprevenue) {
      return startuprevenue;
    }

    const output = startuprevenue.get({ plain: true });

    output.categoryId = await startuprevenue.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await startuprevenue.getDocumentaryevidence({
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

      if (filter.nameofstartup) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'nameofstartup',
            filter.nameofstartup,
          ),
        };
      }

      if (filter.facultymembernamedesignationdepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'facultymembernamedesignationdepartment',
            filter.facultymembernamedesignationdepartment,
          ),
        };
      }

      if (filter.currentstatus) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'currentstatus',
            filter.currentstatus,
          ),
        };
      }

      if (filter.incubatedsinceandexpectedgraduation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'incubatedsinceandexpectedgraduation',
            filter.incubatedsinceandexpectedgraduation,
          ),
        };
      }

      if (filter.revenuegenerated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'revenuegenerated',
            filter.revenuegenerated,
          ),
        };
      }

      if (filter.totalmonthsinincubation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'totalmonthsinincubation',
            filter.totalmonthsinincubation,
          ),
        };
      }

      if (filter.averagerevenue) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'averagerevenue',
            filter.averagerevenue,
          ),
        };
      }

      if (filter.sharingmechanismbetweenbicheiandstartup) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startuprevenue',
            'sharingmechanismbetweenbicheiandstartup',
            filter.sharingmechanismbetweenbicheiandstartup,
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
          count: await db.startuprevenue.count({
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
      : await db.startuprevenue.findAndCountAll({
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
          Utils.ilike('startuprevenue', 'id', query),
        ],
      };
    }

    const records = await db.startuprevenue.findAll({
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
