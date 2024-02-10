const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartupsincubatedDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupsincubated = await db.startupsincubated.create(
      {
        id: data.id || undefined,

        nameofstartup: data.nameofstartup || null,
        briefidea: data.briefidea || null,
        facultymembername: data.facultymembername || null,
        facultymemberdesignation: data.facultymemberdesignation || null,
        facultymemberdepartment: data.facultymemberdepartment || null,
        sectorfield: data.sectorfield || null,
        seedfundingsecuredifany: data.seedfundingsecuredifany || null,
        stage: data.stage || null,
        incubatedsinceexpectedgraduation:
          data.incubatedsinceexpectedgraduation || null,
        internshipjobscreated: data.internshipjobscreated || null,
        totalfacultystartups: data.totalfacultystartups || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupsincubated.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupsincubated.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupsincubated.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupsincubated;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startupsincubatedData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofstartup: item.nameofstartup || null,
      briefidea: item.briefidea || null,
      facultymembername: item.facultymembername || null,
      facultymemberdesignation: item.facultymemberdesignation || null,
      facultymemberdepartment: item.facultymemberdepartment || null,
      sectorfield: item.sectorfield || null,
      seedfundingsecuredifany: item.seedfundingsecuredifany || null,
      stage: item.stage || null,
      incubatedsinceexpectedgraduation:
        item.incubatedsinceexpectedgraduation || null,
      internshipjobscreated: item.internshipjobscreated || null,
      totalfacultystartups: item.totalfacultystartups || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startupsincubated = await db.startupsincubated.bulkCreate(
      startupsincubatedData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < startupsincubated.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startupsincubated.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startupsincubated[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startupsincubated;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupsincubated = await db.startupsincubated.findByPk(
      id,
      {},
      { transaction },
    );

    await startupsincubated.update(
      {
        nameofstartup: data.nameofstartup || null,
        briefidea: data.briefidea || null,
        facultymembername: data.facultymembername || null,
        facultymemberdesignation: data.facultymemberdesignation || null,
        facultymemberdepartment: data.facultymemberdepartment || null,
        sectorfield: data.sectorfield || null,
        seedfundingsecuredifany: data.seedfundingsecuredifany || null,
        stage: data.stage || null,
        incubatedsinceexpectedgraduation:
          data.incubatedsinceexpectedgraduation || null,
        internshipjobscreated: data.internshipjobscreated || null,
        totalfacultystartups: data.totalfacultystartups || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupsincubated.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupsincubated.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupsincubated.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupsincubated;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupsincubated = await db.startupsincubated.findByPk(id, options);

    await startupsincubated.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startupsincubated.destroy({
      transaction,
    });

    return startupsincubated;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startupsincubated = await db.startupsincubated.findOne(
      { where },
      { transaction },
    );

    if (!startupsincubated) {
      return startupsincubated;
    }

    const output = startupsincubated.get({ plain: true });

    output.categoryId = await startupsincubated.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await startupsincubated.getDocumentaryevidence(
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
            'startupsincubated',
            'nameofstartup',
            filter.nameofstartup,
          ),
        };
      }

      if (filter.briefidea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'briefidea',
            filter.briefidea,
          ),
        };
      }

      if (filter.facultymembername) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'facultymembername',
            filter.facultymembername,
          ),
        };
      }

      if (filter.facultymemberdesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'facultymemberdesignation',
            filter.facultymemberdesignation,
          ),
        };
      }

      if (filter.facultymemberdepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'facultymemberdepartment',
            filter.facultymemberdepartment,
          ),
        };
      }

      if (filter.sectorfield) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'sectorfield',
            filter.sectorfield,
          ),
        };
      }

      if (filter.seedfundingsecuredifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'seedfundingsecuredifany',
            filter.seedfundingsecuredifany,
          ),
        };
      }

      if (filter.stage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('startupsincubated', 'stage', filter.stage),
        };
      }

      if (filter.incubatedsinceexpectedgraduation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'incubatedsinceexpectedgraduation',
            filter.incubatedsinceexpectedgraduation,
          ),
        };
      }

      if (filter.internshipjobscreated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'internshipjobscreated',
            filter.internshipjobscreated,
          ),
        };
      }

      if (filter.totalfacultystartups) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupsincubated',
            'totalfacultystartups',
            filter.totalfacultystartups,
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
          count: await db.startupsincubated.count({
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
      : await db.startupsincubated.findAndCountAll({
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
          Utils.ilike('startupsincubated', 'id', query),
        ],
      };
    }

    const records = await db.startupsincubated.findAll({
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
