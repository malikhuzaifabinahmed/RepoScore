const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class SpinoffstartupsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const spinoffstartups = await db.spinoffstartups.create(
      {
        id: data.id || undefined,

        nameofstartup: data.nameofstartup || null,
        briefideabackingresearchsectorfield:
          data.briefideabackingresearchsectorfield || null,
        facultymembernamedesignationdepartment:
          data.facultymembernamedesignationdepartment || null,
        ipstatus: data.ipstatus || null,
        nameofspinoff: data.nameofspinoff || null,
        stage: data.stage || null,
        licenseagreementsignedifany: data.licenseagreementsignedifany || null,
        fundingsources: data.fundingsources || null,
        totalfacultystartups: data.totalfacultystartups || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await spinoffstartups.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.spinoffstartups.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: spinoffstartups.id,
      },
      data.documentaryevidence,
      options,
    );

    return spinoffstartups;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const spinoffstartupsData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofstartup: item.nameofstartup || null,
      briefideabackingresearchsectorfield:
        item.briefideabackingresearchsectorfield || null,
      facultymembernamedesignationdepartment:
        item.facultymembernamedesignationdepartment || null,
      ipstatus: item.ipstatus || null,
      nameofspinoff: item.nameofspinoff || null,
      stage: item.stage || null,
      licenseagreementsignedifany: item.licenseagreementsignedifany || null,
      fundingsources: item.fundingsources || null,
      totalfacultystartups: item.totalfacultystartups || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const spinoffstartups = await db.spinoffstartups.bulkCreate(
      spinoffstartupsData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < spinoffstartups.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.spinoffstartups.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: spinoffstartups[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return spinoffstartups;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const spinoffstartups = await db.spinoffstartups.findByPk(
      id,
      {},
      { transaction },
    );

    await spinoffstartups.update(
      {
        nameofstartup: data.nameofstartup || null,
        briefideabackingresearchsectorfield:
          data.briefideabackingresearchsectorfield || null,
        facultymembernamedesignationdepartment:
          data.facultymembernamedesignationdepartment || null,
        ipstatus: data.ipstatus || null,
        nameofspinoff: data.nameofspinoff || null,
        stage: data.stage || null,
        licenseagreementsignedifany: data.licenseagreementsignedifany || null,
        fundingsources: data.fundingsources || null,
        totalfacultystartups: data.totalfacultystartups || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await spinoffstartups.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.spinoffstartups.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: spinoffstartups.id,
      },
      data.documentaryevidence,
      options,
    );

    return spinoffstartups;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const spinoffstartups = await db.spinoffstartups.findByPk(id, options);

    await spinoffstartups.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await spinoffstartups.destroy({
      transaction,
    });

    return spinoffstartups;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const spinoffstartups = await db.spinoffstartups.findOne(
      { where },
      { transaction },
    );

    if (!spinoffstartups) {
      return spinoffstartups;
    }

    const output = spinoffstartups.get({ plain: true });

    output.categoryId = await spinoffstartups.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await spinoffstartups.getDocumentaryevidence({
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
            'spinoffstartups',
            'nameofstartup',
            filter.nameofstartup,
          ),
        };
      }

      if (filter.briefideabackingresearchsectorfield) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'spinoffstartups',
            'briefideabackingresearchsectorfield',
            filter.briefideabackingresearchsectorfield,
          ),
        };
      }

      if (filter.facultymembernamedesignationdepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'spinoffstartups',
            'facultymembernamedesignationdepartment',
            filter.facultymembernamedesignationdepartment,
          ),
        };
      }

      if (filter.ipstatus) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('spinoffstartups', 'ipstatus', filter.ipstatus),
        };
      }

      if (filter.nameofspinoff) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'spinoffstartups',
            'nameofspinoff',
            filter.nameofspinoff,
          ),
        };
      }

      if (filter.stage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('spinoffstartups', 'stage', filter.stage),
        };
      }

      if (filter.licenseagreementsignedifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'spinoffstartups',
            'licenseagreementsignedifany',
            filter.licenseagreementsignedifany,
          ),
        };
      }

      if (filter.fundingsources) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'spinoffstartups',
            'fundingsources',
            filter.fundingsources,
          ),
        };
      }

      if (filter.totalfacultystartupsRange) {
        const [start, end] = filter.totalfacultystartupsRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalfacultystartups: {
              ...where.totalfacultystartups,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalfacultystartups: {
              ...where.totalfacultystartups,
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
          count: await db.spinoffstartups.count({
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
      : await db.spinoffstartups.findAndCountAll({
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
          Utils.ilike('spinoffstartups', 'id', query),
        ],
      };
    }

    const records = await db.spinoffstartups.findAll({
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
