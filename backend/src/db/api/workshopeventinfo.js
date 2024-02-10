const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class WorkshopeventinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const workshopeventinfo = await db.workshopeventinfo.create(
      {
        id: data.id || undefined,

        title: data.title || null,
        dateheld: data.dateheld || null,
        venue: data.venue || null,
        fieldthematicarea: data.fieldthematicarea || null,
        panelistmentoradvisorname: data.panelistmentoradvisorname || null,
        panelistmentoradvisordesignation:
          data.panelistmentoradvisordesignation || null,
        arrangedby: data.arrangedby || null,
        facultystudent: data.facultystudent || null,
        noofparticipants: data.noofparticipants || null,
        totalnoeventsheld: data.totalnoeventsheld || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await workshopeventinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.workshopeventinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: workshopeventinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return workshopeventinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const workshopeventinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      title: item.title || null,
      dateheld: item.dateheld || null,
      venue: item.venue || null,
      fieldthematicarea: item.fieldthematicarea || null,
      panelistmentoradvisorname: item.panelistmentoradvisorname || null,
      panelistmentoradvisordesignation:
        item.panelistmentoradvisordesignation || null,
      arrangedby: item.arrangedby || null,
      facultystudent: item.facultystudent || null,
      noofparticipants: item.noofparticipants || null,
      totalnoeventsheld: item.totalnoeventsheld || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const workshopeventinfo = await db.workshopeventinfo.bulkCreate(
      workshopeventinfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < workshopeventinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.workshopeventinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: workshopeventinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return workshopeventinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const workshopeventinfo = await db.workshopeventinfo.findByPk(
      id,
      {},
      { transaction },
    );

    await workshopeventinfo.update(
      {
        title: data.title || null,
        dateheld: data.dateheld || null,
        venue: data.venue || null,
        fieldthematicarea: data.fieldthematicarea || null,
        panelistmentoradvisorname: data.panelistmentoradvisorname || null,
        panelistmentoradvisordesignation:
          data.panelistmentoradvisordesignation || null,
        arrangedby: data.arrangedby || null,
        facultystudent: data.facultystudent || null,
        noofparticipants: data.noofparticipants || null,
        totalnoeventsheld: data.totalnoeventsheld || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await workshopeventinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.workshopeventinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: workshopeventinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return workshopeventinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const workshopeventinfo = await db.workshopeventinfo.findByPk(id, options);

    await workshopeventinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await workshopeventinfo.destroy({
      transaction,
    });

    return workshopeventinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const workshopeventinfo = await db.workshopeventinfo.findOne(
      { where },
      { transaction },
    );

    if (!workshopeventinfo) {
      return workshopeventinfo;
    }

    const output = workshopeventinfo.get({ plain: true });

    output.categoryId = await workshopeventinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await workshopeventinfo.getDocumentaryevidence(
      {
        transaction,
      },
    );

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

      if (filter.title) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('workshopeventinfo', 'title', filter.title),
        };
      }

      if (filter.venue) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('workshopeventinfo', 'venue', filter.venue),
        };
      }

      if (filter.fieldthematicarea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'fieldthematicarea',
            filter.fieldthematicarea,
          ),
        };
      }

      if (filter.panelistmentoradvisorname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'panelistmentoradvisorname',
            filter.panelistmentoradvisorname,
          ),
        };
      }

      if (filter.panelistmentoradvisordesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'panelistmentoradvisordesignation',
            filter.panelistmentoradvisordesignation,
          ),
        };
      }

      if (filter.arrangedby) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'arrangedby',
            filter.arrangedby,
          ),
        };
      }

      if (filter.facultystudent) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'facultystudent',
            filter.facultystudent,
          ),
        };
      }

      if (filter.noofparticipants) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'noofparticipants',
            filter.noofparticipants,
          ),
        };
      }

      if (filter.totalnoeventsheld) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'workshopeventinfo',
            'totalnoeventsheld',
            filter.totalnoeventsheld,
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
          count: await db.workshopeventinfo.count({
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
      : await db.workshopeventinfo.findAndCountAll({
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
          Utils.ilike('workshopeventinfo', 'id', query),
        ],
      };
    }

    const records = await db.workshopeventinfo.findAll({
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
