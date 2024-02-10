const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class BicfundinginfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicfundinginfo = await db.bicfundinginfo.create(
      {
        id: data.id || undefined,

        nameofstartup: data.nameofstartup || null,
        nameoffundingagency: data.nameoffundingagency || null,
        nationalorinternational: data.nationalorinternational || null,
        typeoffunding: data.typeoffunding || null,
        amountsecured: data.amountsecured || null,
        amountutilizeddistributed: data.amountutilizeddistributed || null,
        inkindsupportfromfundingagencyifany:
          data.inkindsupportfromfundingagencyifany || null,
        agreementsignedwithfundingagencyifany:
          data.agreementsignedwithfundingagencyifany || null,
        recurringoronetypesupport: data.recurringoronetypesupport || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bicfundinginfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bicfundinginfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bicfundinginfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return bicfundinginfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const bicfundinginfoData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofstartup: item.nameofstartup || null,
      nameoffundingagency: item.nameoffundingagency || null,
      nationalorinternational: item.nationalorinternational || null,
      typeoffunding: item.typeoffunding || null,
      amountsecured: item.amountsecured || null,
      amountutilizeddistributed: item.amountutilizeddistributed || null,
      inkindsupportfromfundingagencyifany:
        item.inkindsupportfromfundingagencyifany || null,
      agreementsignedwithfundingagencyifany:
        item.agreementsignedwithfundingagencyifany || null,
      recurringoronetypesupport: item.recurringoronetypesupport || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const bicfundinginfo = await db.bicfundinginfo.bulkCreate(
      bicfundinginfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < bicfundinginfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.bicfundinginfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: bicfundinginfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return bicfundinginfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicfundinginfo = await db.bicfundinginfo.findByPk(
      id,
      {},
      { transaction },
    );

    await bicfundinginfo.update(
      {
        nameofstartup: data.nameofstartup || null,
        nameoffundingagency: data.nameoffundingagency || null,
        nationalorinternational: data.nationalorinternational || null,
        typeoffunding: data.typeoffunding || null,
        amountsecured: data.amountsecured || null,
        amountutilizeddistributed: data.amountutilizeddistributed || null,
        inkindsupportfromfundingagencyifany:
          data.inkindsupportfromfundingagencyifany || null,
        agreementsignedwithfundingagencyifany:
          data.agreementsignedwithfundingagencyifany || null,
        recurringoronetypesupport: data.recurringoronetypesupport || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bicfundinginfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bicfundinginfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bicfundinginfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return bicfundinginfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicfundinginfo = await db.bicfundinginfo.findByPk(id, options);

    await bicfundinginfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await bicfundinginfo.destroy({
      transaction,
    });

    return bicfundinginfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bicfundinginfo = await db.bicfundinginfo.findOne(
      { where },
      { transaction },
    );

    if (!bicfundinginfo) {
      return bicfundinginfo;
    }

    const output = bicfundinginfo.get({ plain: true });

    output.categoryId = await bicfundinginfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await bicfundinginfo.getDocumentaryevidence({
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
            'bicfundinginfo',
            'nameofstartup',
            filter.nameofstartup,
          ),
        };
      }

      if (filter.nameoffundingagency) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'nameoffundingagency',
            filter.nameoffundingagency,
          ),
        };
      }

      if (filter.nationalorinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'nationalorinternational',
            filter.nationalorinternational,
          ),
        };
      }

      if (filter.typeoffunding) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'typeoffunding',
            filter.typeoffunding,
          ),
        };
      }

      if (filter.amountsecured) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'amountsecured',
            filter.amountsecured,
          ),
        };
      }

      if (filter.amountutilizeddistributed) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'amountutilizeddistributed',
            filter.amountutilizeddistributed,
          ),
        };
      }

      if (filter.inkindsupportfromfundingagencyifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'inkindsupportfromfundingagencyifany',
            filter.inkindsupportfromfundingagencyifany,
          ),
        };
      }

      if (filter.agreementsignedwithfundingagencyifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'agreementsignedwithfundingagencyifany',
            filter.agreementsignedwithfundingagencyifany,
          ),
        };
      }

      if (filter.recurringoronetypesupport) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicfundinginfo',
            'recurringoronetypesupport',
            filter.recurringoronetypesupport,
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
          count: await db.bicfundinginfo.count({
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
      : await db.bicfundinginfo.findAndCountAll({
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
          Utils.ilike('bicfundinginfo', 'id', query),
        ],
      };
    }

    const records = await db.bicfundinginfo.findAll({
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
