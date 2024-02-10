const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartupeventsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupevents = await db.startupevents.create(
      {
        id: data.id || undefined,

        nameofevent: data.nameofevent || null,
        dateheld: data.dateheld || null,
        panelistdetails: data.panelistdetails || null,
        ideasapplied: data.ideasapplied || null,
        ideasselected: data.ideasselected || null,
        winnersdetails: data.winnersdetails || null,
        prizefundingamount: data.prizefundingamount || null,
        eventfundingsourcessponsors: data.eventfundingsourcessponsors || null,
        noofideasapplied: data.noofideasapplied || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupevents.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupevents.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupevents.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupevents;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startupeventsData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofevent: item.nameofevent || null,
      dateheld: item.dateheld || null,
      panelistdetails: item.panelistdetails || null,
      ideasapplied: item.ideasapplied || null,
      ideasselected: item.ideasselected || null,
      winnersdetails: item.winnersdetails || null,
      prizefundingamount: item.prizefundingamount || null,
      eventfundingsourcessponsors: item.eventfundingsourcessponsors || null,
      noofideasapplied: item.noofideasapplied || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startupevents = await db.startupevents.bulkCreate(startupeventsData, {
      transaction,
    });

    // For each item created, replace relation files

    for (let i = 0; i < startupevents.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startupevents.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startupevents[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startupevents;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupevents = await db.startupevents.findByPk(
      id,
      {},
      { transaction },
    );

    await startupevents.update(
      {
        nameofevent: data.nameofevent || null,
        dateheld: data.dateheld || null,
        panelistdetails: data.panelistdetails || null,
        ideasapplied: data.ideasapplied || null,
        ideasselected: data.ideasselected || null,
        winnersdetails: data.winnersdetails || null,
        prizefundingamount: data.prizefundingamount || null,
        eventfundingsourcessponsors: data.eventfundingsourcessponsors || null,
        noofideasapplied: data.noofideasapplied || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupevents.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupevents.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupevents.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupevents;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupevents = await db.startupevents.findByPk(id, options);

    await startupevents.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startupevents.destroy({
      transaction,
    });

    return startupevents;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startupevents = await db.startupevents.findOne(
      { where },
      { transaction },
    );

    if (!startupevents) {
      return startupevents;
    }

    const output = startupevents.get({ plain: true });

    output.categoryId = await startupevents.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await startupevents.getDocumentaryevidence({
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

      if (filter.nameofevent) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'nameofevent',
            filter.nameofevent,
          ),
        };
      }

      if (filter.panelistdetails) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'panelistdetails',
            filter.panelistdetails,
          ),
        };
      }

      if (filter.ideasapplied) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'ideasapplied',
            filter.ideasapplied,
          ),
        };
      }

      if (filter.ideasselected) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'ideasselected',
            filter.ideasselected,
          ),
        };
      }

      if (filter.winnersdetails) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'winnersdetails',
            filter.winnersdetails,
          ),
        };
      }

      if (filter.prizefundingamount) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'prizefundingamount',
            filter.prizefundingamount,
          ),
        };
      }

      if (filter.eventfundingsourcessponsors) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'eventfundingsourcessponsors',
            filter.eventfundingsourcessponsors,
          ),
        };
      }

      if (filter.noofideasapplied) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupevents',
            'noofideasapplied',
            filter.noofideasapplied,
          ),
        };
      }

      if (filter.dateheldRange) {
        const [start, end] = filter.dateheldRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateheld: {
              ...where.dateheld,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateheld: {
              ...where.dateheld,
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
          count: await db.startupevents.count({
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
      : await db.startupevents.findAndCountAll({
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
          Utils.ilike('startupevents', 'id', query),
        ],
      };
    }

    const records = await db.startupevents.findAll({
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
