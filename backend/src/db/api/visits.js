const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class VisitsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const visits = await db.visits.create(
      {
        id: data.id || undefined,

        nameofvisits: data.nameofvisits || null,
        dateofvisit: data.dateofvisit || null,
        agendaofvisit: data.agendaofvisit || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await visits.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.visits.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: visits.id,
      },
      data.documentaryevidence,
      options,
    );

    return visits;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const visitsData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofvisits: item.nameofvisits || null,
      dateofvisit: item.dateofvisit || null,
      agendaofvisit: item.agendaofvisit || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const visits = await db.visits.bulkCreate(visitsData, { transaction });

    // For each item created, replace relation files

    for (let i = 0; i < visits.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.visits.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: visits[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return visits;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const visits = await db.visits.findByPk(id, {}, { transaction });

    await visits.update(
      {
        nameofvisits: data.nameofvisits || null,
        dateofvisit: data.dateofvisit || null,
        agendaofvisit: data.agendaofvisit || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await visits.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.visits.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: visits.id,
      },
      data.documentaryevidence,
      options,
    );

    return visits;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const visits = await db.visits.findByPk(id, options);

    await visits.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await visits.destroy({
      transaction,
    });

    return visits;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const visits = await db.visits.findOne({ where }, { transaction });

    if (!visits) {
      return visits;
    }

    const output = visits.get({ plain: true });

    output.categoryId = await visits.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await visits.getDocumentaryevidence({
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

      if (filter.nameofvisits) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('visits', 'nameofvisits', filter.nameofvisits),
        };
      }

      if (filter.dateofvisit) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('visits', 'dateofvisit', filter.dateofvisit),
        };
      }

      if (filter.agendaofvisit) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'visits',
            'agendaofvisit',
            filter.agendaofvisit,
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
          count: await db.visits.count({
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
      : await db.visits.findAndCountAll({
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
          Utils.ilike('visits', 'id', query),
        ],
      };
    }

    const records = await db.visits.findAll({
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
