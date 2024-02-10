const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class AnualresearchrevenueDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const anualresearchrevenue = await db.anualresearchrevenue.create(
      {
        id: data.id || undefined,

        researchgrantname: data.researchgrantname || null,
        remarks: data.remarks || null,
        anexpagerefno: data.anexpagerefno || null,
        oricoverheadinreleasedfunding:
          data.oricoverheadinreleasedfunding || null,
        nationalorinternational: data.nationalorinternational || null,
        titleofresearchproposal: data.titleofresearchproposal || null,
        detailsofpi: data.detailsofpi || null,
        isjointventure: data.isjointventure || null,
        nameofjointventure: data.nameofjointventure || null,
        detailsofjointventure: data.detailsofjointventure || null,
        startDate: data.startDate || null,
        totalfundingapproved: data.totalfundingapproved || null,
        oricoverheadinapprovedfunding:
          data.oricoverheadinapprovedfunding || null,
        nameofpi: data.nameofpi || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await anualresearchrevenue.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.anualresearchrevenue.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: anualresearchrevenue.id,
      },
      data.documentaryevidence,
      options,
    );

    return anualresearchrevenue;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const anualresearchrevenueData = data.map((item, index) => ({
      id: item.id || undefined,

      researchgrantname: item.researchgrantname || null,
      remarks: item.remarks || null,
      anexpagerefno: item.anexpagerefno || null,
      oricoverheadinreleasedfunding: item.oricoverheadinreleasedfunding || null,
      nationalorinternational: item.nationalorinternational || null,
      titleofresearchproposal: item.titleofresearchproposal || null,
      detailsofpi: item.detailsofpi || null,
      isjointventure: item.isjointventure || null,
      nameofjointventure: item.nameofjointventure || null,
      detailsofjointventure: item.detailsofjointventure || null,
      startDate: item.startDate || null,
      totalfundingapproved: item.totalfundingapproved || null,
      oricoverheadinapprovedfunding: item.oricoverheadinapprovedfunding || null,
      nameofpi: item.nameofpi || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const anualresearchrevenue = await db.anualresearchrevenue.bulkCreate(
      anualresearchrevenueData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < anualresearchrevenue.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.anualresearchrevenue.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: anualresearchrevenue[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return anualresearchrevenue;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const anualresearchrevenue = await db.anualresearchrevenue.findByPk(
      id,
      {},
      { transaction },
    );

    await anualresearchrevenue.update(
      {
        researchgrantname: data.researchgrantname || null,
        remarks: data.remarks || null,
        anexpagerefno: data.anexpagerefno || null,
        oricoverheadinreleasedfunding:
          data.oricoverheadinreleasedfunding || null,
        nationalorinternational: data.nationalorinternational || null,
        titleofresearchproposal: data.titleofresearchproposal || null,
        detailsofpi: data.detailsofpi || null,
        isjointventure: data.isjointventure || null,
        nameofjointventure: data.nameofjointventure || null,
        detailsofjointventure: data.detailsofjointventure || null,
        startDate: data.startDate || null,
        totalfundingapproved: data.totalfundingapproved || null,
        oricoverheadinapprovedfunding:
          data.oricoverheadinapprovedfunding || null,
        nameofpi: data.nameofpi || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await anualresearchrevenue.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.anualresearchrevenue.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: anualresearchrevenue.id,
      },
      data.documentaryevidence,
      options,
    );

    return anualresearchrevenue;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const anualresearchrevenue = await db.anualresearchrevenue.findByPk(
      id,
      options,
    );

    await anualresearchrevenue.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await anualresearchrevenue.destroy({
      transaction,
    });

    return anualresearchrevenue;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const anualresearchrevenue = await db.anualresearchrevenue.findOne(
      { where },
      { transaction },
    );

    if (!anualresearchrevenue) {
      return anualresearchrevenue;
    }

    const output = anualresearchrevenue.get({ plain: true });

    output.categoryId = await anualresearchrevenue.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await anualresearchrevenue.getDocumentaryevidence({
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

      if (filter.researchgrantname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'researchgrantname',
            filter.researchgrantname,
          ),
        };
      }

      if (filter.remarks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'remarks',
            filter.remarks,
          ),
        };
      }

      if (filter.oricoverheadinreleasedfunding) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'oricoverheadinreleasedfunding',
            filter.oricoverheadinreleasedfunding,
          ),
        };
      }

      if (filter.nationalorinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'nationalorinternational',
            filter.nationalorinternational,
          ),
        };
      }

      if (filter.titleofresearchproposal) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'titleofresearchproposal',
            filter.titleofresearchproposal,
          ),
        };
      }

      if (filter.detailsofpi) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'detailsofpi',
            filter.detailsofpi,
          ),
        };
      }

      if (filter.isjointventure) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'isjointventure',
            filter.isjointventure,
          ),
        };
      }

      if (filter.nameofjointventure) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'nameofjointventure',
            filter.nameofjointventure,
          ),
        };
      }

      if (filter.detailsofjointventure) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'detailsofjointventure',
            filter.detailsofjointventure,
          ),
        };
      }

      if (filter.totalfundingapproved) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'totalfundingapproved',
            filter.totalfundingapproved,
          ),
        };
      }

      if (filter.oricoverheadinapprovedfunding) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'oricoverheadinapprovedfunding',
            filter.oricoverheadinapprovedfunding,
          ),
        };
      }

      if (filter.nameofpi) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'anualresearchrevenue',
            'nameofpi',
            filter.nameofpi,
          ),
        };
      }

      if (filter.anexpagerefnoRange) {
        const [start, end] = filter.anexpagerefnoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            anexpagerefno: {
              ...where.anexpagerefno,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            anexpagerefno: {
              ...where.anexpagerefno,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.startDateRange) {
        const [start, end] = filter.startDateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            startDate: {
              ...where.startDate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            startDate: {
              ...where.startDate,
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
          count: await db.anualresearchrevenue.count({
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
      : await db.anualresearchrevenue.findAndCountAll({
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
          Utils.ilike('anualresearchrevenue', 'id', query),
        ],
      };
    }

    const records = await db.anualresearchrevenue.findAll({
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
