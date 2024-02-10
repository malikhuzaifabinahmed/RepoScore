const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class StartupemplomentDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupemploment = await db.startupemploment.create(
      {
        id: data.id || undefined,

        nameofstartup: data.nameofstartup || null,
        startupfacultymembername: data.startupfacultymembername || null,
        designationdepartment: data.designationdepartment || null,
        startupstatusincubatedgraduated:
          data.startupstatusincubatedgraduated || null,
        employeename: data.employeename || null,
        employmenttype: data.employmenttype || null,
        salarystipendhonorarium: data.salarystipendhonorarium || null,
        employeesince: data.employeesince || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupemploment.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupemploment.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupemploment.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupemploment;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const startupemplomentData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofstartup: item.nameofstartup || null,
      startupfacultymembername: item.startupfacultymembername || null,
      designationdepartment: item.designationdepartment || null,
      startupstatusincubatedgraduated:
        item.startupstatusincubatedgraduated || null,
      employeename: item.employeename || null,
      employmenttype: item.employmenttype || null,
      salarystipendhonorarium: item.salarystipendhonorarium || null,
      employeesince: item.employeesince || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const startupemploment = await db.startupemploment.bulkCreate(
      startupemplomentData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < startupemploment.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.startupemploment.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: startupemploment[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return startupemploment;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupemploment = await db.startupemploment.findByPk(
      id,
      {},
      { transaction },
    );

    await startupemploment.update(
      {
        nameofstartup: data.nameofstartup || null,
        startupfacultymembername: data.startupfacultymembername || null,
        designationdepartment: data.designationdepartment || null,
        startupstatusincubatedgraduated:
          data.startupstatusincubatedgraduated || null,
        employeename: data.employeename || null,
        employmenttype: data.employmenttype || null,
        salarystipendhonorarium: data.salarystipendhonorarium || null,
        employeesince: data.employeesince || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await startupemploment.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.startupemploment.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: startupemploment.id,
      },
      data.documentaryevidence,
      options,
    );

    return startupemploment;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const startupemploment = await db.startupemploment.findByPk(id, options);

    await startupemploment.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await startupemploment.destroy({
      transaction,
    });

    return startupemploment;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const startupemploment = await db.startupemploment.findOne(
      { where },
      { transaction },
    );

    if (!startupemploment) {
      return startupemploment;
    }

    const output = startupemploment.get({ plain: true });

    output.categoryId = await startupemploment.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await startupemploment.getDocumentaryevidence({
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
            'startupemploment',
            'nameofstartup',
            filter.nameofstartup,
          ),
        };
      }

      if (filter.startupfacultymembername) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'startupfacultymembername',
            filter.startupfacultymembername,
          ),
        };
      }

      if (filter.designationdepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'designationdepartment',
            filter.designationdepartment,
          ),
        };
      }

      if (filter.startupstatusincubatedgraduated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'startupstatusincubatedgraduated',
            filter.startupstatusincubatedgraduated,
          ),
        };
      }

      if (filter.employeename) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'employeename',
            filter.employeename,
          ),
        };
      }

      if (filter.employmenttype) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'employmenttype',
            filter.employmenttype,
          ),
        };
      }

      if (filter.salarystipendhonorarium) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'salarystipendhonorarium',
            filter.salarystipendhonorarium,
          ),
        };
      }

      if (filter.employeesince) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'startupemploment',
            'employeesince',
            filter.employeesince,
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
          count: await db.startupemploment.count({
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
      : await db.startupemploment.findAndCountAll({
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
          Utils.ilike('startupemploment', 'id', query),
        ],
      };
    }

    const records = await db.startupemploment.findAll({
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
