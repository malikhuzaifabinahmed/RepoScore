const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class HonorsandawardsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const honorsandawards = await db.honorsandawards.create(
      {
        id: data.id || undefined,

        titleofaward: data.titleofaward || null,
        nameofawardingorganization: data.nameofawardingorganization || null,
        contactsofawardingorganization:
          data.contactsofawardingorganization || null,
        briefdetailsofworkhonored: data.briefdetailsofworkhonored || null,
        prizeamount: data.prizeamount || null,
        awardwinnername: data.awardwinnername || null,
        awardwinnerdesignation: data.awardwinnerdesignation || null,
        awardwinnerdepartment: data.awardwinnerdepartment || null,
        remarks: data.remarks || null,
        annexpagerefno: data.annexpagerefno || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await honorsandawards.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.honorsandawards.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: honorsandawards.id,
      },
      data.documentaryevidence,
      options,
    );

    return honorsandawards;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const honorsandawardsData = data.map((item, index) => ({
      id: item.id || undefined,

      titleofaward: item.titleofaward || null,
      nameofawardingorganization: item.nameofawardingorganization || null,
      contactsofawardingorganization:
        item.contactsofawardingorganization || null,
      briefdetailsofworkhonored: item.briefdetailsofworkhonored || null,
      prizeamount: item.prizeamount || null,
      awardwinnername: item.awardwinnername || null,
      awardwinnerdesignation: item.awardwinnerdesignation || null,
      awardwinnerdepartment: item.awardwinnerdepartment || null,
      remarks: item.remarks || null,
      annexpagerefno: item.annexpagerefno || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const honorsandawards = await db.honorsandawards.bulkCreate(
      honorsandawardsData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < honorsandawards.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.honorsandawards.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: honorsandawards[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return honorsandawards;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const honorsandawards = await db.honorsandawards.findByPk(
      id,
      {},
      { transaction },
    );

    await honorsandawards.update(
      {
        titleofaward: data.titleofaward || null,
        nameofawardingorganization: data.nameofawardingorganization || null,
        contactsofawardingorganization:
          data.contactsofawardingorganization || null,
        briefdetailsofworkhonored: data.briefdetailsofworkhonored || null,
        prizeamount: data.prizeamount || null,
        awardwinnername: data.awardwinnername || null,
        awardwinnerdesignation: data.awardwinnerdesignation || null,
        awardwinnerdepartment: data.awardwinnerdepartment || null,
        remarks: data.remarks || null,
        annexpagerefno: data.annexpagerefno || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await honorsandawards.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.honorsandawards.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: honorsandawards.id,
      },
      data.documentaryevidence,
      options,
    );

    return honorsandawards;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const honorsandawards = await db.honorsandawards.findByPk(id, options);

    await honorsandawards.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await honorsandawards.destroy({
      transaction,
    });

    return honorsandawards;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const honorsandawards = await db.honorsandawards.findOne(
      { where },
      { transaction },
    );

    if (!honorsandawards) {
      return honorsandawards;
    }

    const output = honorsandawards.get({ plain: true });

    output.categoryId = await honorsandawards.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await honorsandawards.getDocumentaryevidence({
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

      if (filter.titleofaward) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'titleofaward',
            filter.titleofaward,
          ),
        };
      }

      if (filter.nameofawardingorganization) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'nameofawardingorganization',
            filter.nameofawardingorganization,
          ),
        };
      }

      if (filter.contactsofawardingorganization) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'contactsofawardingorganization',
            filter.contactsofawardingorganization,
          ),
        };
      }

      if (filter.briefdetailsofworkhonored) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'briefdetailsofworkhonored',
            filter.briefdetailsofworkhonored,
          ),
        };
      }

      if (filter.prizeamount) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'prizeamount',
            filter.prizeamount,
          ),
        };
      }

      if (filter.awardwinnername) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'awardwinnername',
            filter.awardwinnername,
          ),
        };
      }

      if (filter.awardwinnerdesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'awardwinnerdesignation',
            filter.awardwinnerdesignation,
          ),
        };
      }

      if (filter.awardwinnerdepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'honorsandawards',
            'awardwinnerdepartment',
            filter.awardwinnerdepartment,
          ),
        };
      }

      if (filter.remarks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('honorsandawards', 'remarks', filter.remarks),
        };
      }

      if (filter.annexpagerefnoRange) {
        const [start, end] = filter.annexpagerefnoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            annexpagerefno: {
              ...where.annexpagerefno,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            annexpagerefno: {
              ...where.annexpagerefno,
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
          count: await db.honorsandawards.count({
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
      : await db.honorsandawards.findAndCountAll({
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
          Utils.ilike('honorsandawards', 'id', query),
        ],
      };
    }

    const records = await db.honorsandawards.findAll({
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
