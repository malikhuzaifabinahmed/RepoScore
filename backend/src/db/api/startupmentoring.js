const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartupmentoringDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupmentoring = await db.startupmentoring.create(
      {
        id: data.id || undefined,

        nameofmentor: data.nameofmentor || null,
        designation: data.designation || null,
        fieldarea: data.fieldarea || null,
        noofmentoringlecturesprovided:
          data.noofmentoringlecturesprovided || null,
        noofstartupsfacilitated: data.noofstartupsfacilitated || null,
        costpermentoringhourchargedifany:
          data.costpermentoringhourchargedifany || null,
        totalmentoringsessions: data.totalmentoringsessions || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupmentoring.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupmentoring.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupmentoring.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupmentoring;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startupmentoringData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofmentor: item.nameofmentor || null,
      designation: item.designation || null,
      fieldarea: item.fieldarea || null,
      noofmentoringlecturesprovided: item.noofmentoringlecturesprovided || null,
      noofstartupsfacilitated: item.noofstartupsfacilitated || null,
      costpermentoringhourchargedifany:
        item.costpermentoringhourchargedifany || null,
      totalmentoringsessions: item.totalmentoringsessions || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startupmentoring = await db.startupmentoring.bulkCreate(
      startupmentoringData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < startupmentoring.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startupmentoring.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startupmentoring[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startupmentoring;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupmentoring = await db.startupmentoring.findByPk(
      id,
      {},
      { transaction },
    );

    await startupmentoring.update(
      {
        nameofmentor: data.nameofmentor || null,
        designation: data.designation || null,
        fieldarea: data.fieldarea || null,
        noofmentoringlecturesprovided:
          data.noofmentoringlecturesprovided || null,
        noofstartupsfacilitated: data.noofstartupsfacilitated || null,
        costpermentoringhourchargedifany:
          data.costpermentoringhourchargedifany || null,
        totalmentoringsessions: data.totalmentoringsessions || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupmentoring.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupmentoring.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupmentoring.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupmentoring;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupmentoring = await db.startupmentoring.findByPk(id, options);

    await startupmentoring.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startupmentoring.destroy({
      transaction,
    });

    return startupmentoring;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startupmentoring = await db.startupmentoring.findOne(
      { where },
      { transaction },
    );

    if (!startupmentoring) {
      return startupmentoring;
    }

    const output = startupmentoring.get({ plain: true });

    output.categoryId = await startupmentoring.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await startupmentoring.getDocumentaryevidence({
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

      if (filter.nameofmentor) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'nameofmentor',
            filter.nameofmentor,
          ),
        };
      }

      if (filter.designation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'designation',
            filter.designation,
          ),
        };
      }

      if (filter.fieldarea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'fieldarea',
            filter.fieldarea,
          ),
        };
      }

      if (filter.noofmentoringlecturesprovided) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'noofmentoringlecturesprovided',
            filter.noofmentoringlecturesprovided,
          ),
        };
      }

      if (filter.noofstartupsfacilitated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'noofstartupsfacilitated',
            filter.noofstartupsfacilitated,
          ),
        };
      }

      if (filter.costpermentoringhourchargedifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'costpermentoringhourchargedifany',
            filter.costpermentoringhourchargedifany,
          ),
        };
      }

      if (filter.totalmentoringsessions) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupmentoring',
            'totalmentoringsessions',
            filter.totalmentoringsessions,
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
          count: await db.startupmentoring.count({
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
      : await db.startupmentoring.findAndCountAll({
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
          Utils.ilike('startupmentoring', 'id', query),
        ],
      };
    }

    const records = await db.startupmentoring.findAll({
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
