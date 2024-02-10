const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class PolicyadvocacyDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const policyadvocacy = await db.policyadvocacy.create(
      {
        id: data.id || undefined,

        nameofgovernmentbodypresented:
          data.nameofgovernmentbodypresented || null,
        dateofpresentation: data.dateofpresentation || null,
        nameofpi: data.nameofpi || null,
        pidesignation: data.pidesignation || null,
        pidepartment: data.pidepartment || null,
        areaadvocated: data.areaadvocated || null,
        description: data.description || null,
        namecoalitionpartner: data.namecoalitionpartner || null,
        issueverification: data.issueverification || null,
        backingresearchstatus: data.backingresearchstatus || null,
        advocacytoolsadopted: data.advocacytoolsadopted || null,
        anexpageno: data.anexpageno || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await policyadvocacy.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.policyadvocacy.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: policyadvocacy.id,
      },
      data.documentaryevidence,
      options,
    );

    return policyadvocacy;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const policyadvocacyData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofgovernmentbodypresented: item.nameofgovernmentbodypresented || null,
      dateofpresentation: item.dateofpresentation || null,
      nameofpi: item.nameofpi || null,
      pidesignation: item.pidesignation || null,
      pidepartment: item.pidepartment || null,
      areaadvocated: item.areaadvocated || null,
      description: item.description || null,
      namecoalitionpartner: item.namecoalitionpartner || null,
      issueverification: item.issueverification || null,
      backingresearchstatus: item.backingresearchstatus || null,
      advocacytoolsadopted: item.advocacytoolsadopted || null,
      anexpageno: item.anexpageno || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const policyadvocacy = await db.policyadvocacy.bulkCreate(
      policyadvocacyData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < policyadvocacy.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.policyadvocacy.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: policyadvocacy[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return policyadvocacy;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const policyadvocacy = await db.policyadvocacy.findByPk(
      id,
      {},
      { transaction },
    );

    await policyadvocacy.update(
      {
        nameofgovernmentbodypresented:
          data.nameofgovernmentbodypresented || null,
        dateofpresentation: data.dateofpresentation || null,
        nameofpi: data.nameofpi || null,
        pidesignation: data.pidesignation || null,
        pidepartment: data.pidepartment || null,
        areaadvocated: data.areaadvocated || null,
        description: data.description || null,
        namecoalitionpartner: data.namecoalitionpartner || null,
        issueverification: data.issueverification || null,
        backingresearchstatus: data.backingresearchstatus || null,
        advocacytoolsadopted: data.advocacytoolsadopted || null,
        anexpageno: data.anexpageno || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await policyadvocacy.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.policyadvocacy.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: policyadvocacy.id,
      },
      data.documentaryevidence,
      options,
    );

    return policyadvocacy;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const policyadvocacy = await db.policyadvocacy.findByPk(id, options);

    await policyadvocacy.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await policyadvocacy.destroy({
      transaction,
    });

    return policyadvocacy;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const policyadvocacy = await db.policyadvocacy.findOne(
      { where },
      { transaction },
    );

    if (!policyadvocacy) {
      return policyadvocacy;
    }

    const output = policyadvocacy.get({ plain: true });

    output.categoryId = await policyadvocacy.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await policyadvocacy.getDocumentaryevidence({
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

      if (filter.nameofgovernmentbodypresented) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'nameofgovernmentbodypresented',
            filter.nameofgovernmentbodypresented,
          ),
        };
      }

      if (filter.nameofpi) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('policyadvocacy', 'nameofpi', filter.nameofpi),
        };
      }

      if (filter.pidesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'pidesignation',
            filter.pidesignation,
          ),
        };
      }

      if (filter.pidepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'pidepartment',
            filter.pidepartment,
          ),
        };
      }

      if (filter.areaadvocated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'areaadvocated',
            filter.areaadvocated,
          ),
        };
      }

      if (filter.description) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'description',
            filter.description,
          ),
        };
      }

      if (filter.namecoalitionpartner) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'namecoalitionpartner',
            filter.namecoalitionpartner,
          ),
        };
      }

      if (filter.issueverification) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'issueverification',
            filter.issueverification,
          ),
        };
      }

      if (filter.backingresearchstatus) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'backingresearchstatus',
            filter.backingresearchstatus,
          ),
        };
      }

      if (filter.advocacytoolsadopted) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'advocacytoolsadopted',
            filter.advocacytoolsadopted,
          ),
        };
      }

      if (filter.anexpageno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'policyadvocacy',
            'anexpageno',
            filter.anexpageno,
          ),
        };
      }

      if (filter.dateofpresentationRange) {
        const [start, end] = filter.dateofpresentationRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofpresentation: {
              ...where.dateofpresentation,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofpresentation: {
              ...where.dateofpresentation,
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
          count: await db.policyadvocacy.count({
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
      : await db.policyadvocacy.findAndCountAll({
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
          Utils.ilike('policyadvocacy', 'id', query),
        ],
      };
    }

    const records = await db.policyadvocacy.findAll({
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
