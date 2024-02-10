const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartupincubationDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupincubation = await db.startupincubation.create(
      {
        id: data.id || undefined,

        nameofstartup: data.nameofstartup || null,
        idea: data.idea || null,
        teammembers: data.teammembers || null,
        sectorfield: data.sectorfield || null,
        seedfundingsecuredifany: data.seedfundingsecuredifany || null,
        incubatedsince: data.incubatedsince || null,
        expectedgraduation: data.expectedgraduation || null,
        internshipjobsprovidedviastartup:
          data.internshipjobsprovidedviastartup || null,
        totalslots: data.totalslots || null,
        occupiedslots: data.occupiedslots || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupincubation.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupincubation.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupincubation.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupincubation;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startupincubationData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofstartup: item.nameofstartup || null,
      idea: item.idea || null,
      teammembers: item.teammembers || null,
      sectorfield: item.sectorfield || null,
      seedfundingsecuredifany: item.seedfundingsecuredifany || null,
      incubatedsince: item.incubatedsince || null,
      expectedgraduation: item.expectedgraduation || null,
      internshipjobsprovidedviastartup:
        item.internshipjobsprovidedviastartup || null,
      totalslots: item.totalslots || null,
      occupiedslots: item.occupiedslots || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startupincubation = await db.startupincubation.bulkCreate(
      startupincubationData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < startupincubation.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startupincubation.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startupincubation[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startupincubation;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupincubation = await db.startupincubation.findByPk(
      id,
      {},
      { transaction },
    );

    await startupincubation.update(
      {
        nameofstartup: data.nameofstartup || null,
        idea: data.idea || null,
        teammembers: data.teammembers || null,
        sectorfield: data.sectorfield || null,
        seedfundingsecuredifany: data.seedfundingsecuredifany || null,
        incubatedsince: data.incubatedsince || null,
        expectedgraduation: data.expectedgraduation || null,
        internshipjobsprovidedviastartup:
          data.internshipjobsprovidedviastartup || null,
        totalslots: data.totalslots || null,
        occupiedslots: data.occupiedslots || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupincubation.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupincubation.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupincubation.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupincubation;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupincubation = await db.startupincubation.findByPk(id, options);

    await startupincubation.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startupincubation.destroy({
      transaction,
    });

    return startupincubation;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startupincubation = await db.startupincubation.findOne(
      { where },
      { transaction },
    );

    if (!startupincubation) {
      return startupincubation;
    }

    const output = startupincubation.get({ plain: true });

    output.categoryId = await startupincubation.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await startupincubation.getDocumentaryevidence(
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

      if (filter.nameofstartup) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'nameofstartup',
            filter.nameofstartup,
          ),
        };
      }

      if (filter.idea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('startupincubation', 'idea', filter.idea),
        };
      }

      if (filter.teammembers) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'teammembers',
            filter.teammembers,
          ),
        };
      }

      if (filter.sectorfield) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'sectorfield',
            filter.sectorfield,
          ),
        };
      }

      if (filter.seedfundingsecuredifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'seedfundingsecuredifany',
            filter.seedfundingsecuredifany,
          ),
        };
      }

      if (filter.incubatedsince) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'incubatedsince',
            filter.incubatedsince,
          ),
        };
      }

      if (filter.expectedgraduation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'expectedgraduation',
            filter.expectedgraduation,
          ),
        };
      }

      if (filter.internshipjobsprovidedviastartup) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'internshipjobsprovidedviastartup',
            filter.internshipjobsprovidedviastartup,
          ),
        };
      }

      if (filter.totalslots) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'totalslots',
            filter.totalslots,
          ),
        };
      }

      if (filter.occupiedslots) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupincubation',
            'occupiedslots',
            filter.occupiedslots,
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
          count: await db.startupincubation.count({
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
      : await db.startupincubation.findAndCountAll({
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
          Utils.ilike('startupincubation', 'id', query),
        ],
      };
    }

    const records = await db.startupincubation.findAll({
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
