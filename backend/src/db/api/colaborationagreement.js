const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ColaborationagreementDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const colaborationagreement = await db.colaborationagreement.create(
      {
        id: data.id || undefined,

        typeoflinkages: data.typeoflinkages || null,
        nationalinternational: data.nationalinternational || null,
        hostcountryname: data.hostcountryname || null,
        hostcountryaddress: data.hostcountryaddress || null,
        startDate: data.startDate || null,
        endDate: data.endDate || null,
        keyinitiativestobeundertaken: data.keyinitiativestobeundertaken || null,
        field: data.field || null,
        scopeofcollaboration: data.scopeofcollaboration || null,
        dateoflinkageestablishment: data.dateoflinkageestablishment || null,
        financialsupport: data.financialsupport || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await colaborationagreement.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.colaborationagreement.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: colaborationagreement.id,
      },
      data.documentaryevidence,
      options,
    );

    return colaborationagreement;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const colaborationagreementData = data.map((item, index) => ({
      id: item.id || undefined,

      typeoflinkages: item.typeoflinkages || null,
      nationalinternational: item.nationalinternational || null,
      hostcountryname: item.hostcountryname || null,
      hostcountryaddress: item.hostcountryaddress || null,
      startDate: item.startDate || null,
      endDate: item.endDate || null,
      keyinitiativestobeundertaken: item.keyinitiativestobeundertaken || null,
      field: item.field || null,
      scopeofcollaboration: item.scopeofcollaboration || null,
      dateoflinkageestablishment: item.dateoflinkageestablishment || null,
      financialsupport: item.financialsupport || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const colaborationagreement = await db.colaborationagreement.bulkCreate(
      colaborationagreementData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < colaborationagreement.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.colaborationagreement.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: colaborationagreement[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return colaborationagreement;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const colaborationagreement = await db.colaborationagreement.findByPk(
      id,
      {},
      { transaction },
    );

    await colaborationagreement.update(
      {
        typeoflinkages: data.typeoflinkages || null,
        nationalinternational: data.nationalinternational || null,
        hostcountryname: data.hostcountryname || null,
        hostcountryaddress: data.hostcountryaddress || null,
        startDate: data.startDate || null,
        endDate: data.endDate || null,
        keyinitiativestobeundertaken: data.keyinitiativestobeundertaken || null,
        field: data.field || null,
        scopeofcollaboration: data.scopeofcollaboration || null,
        dateoflinkageestablishment: data.dateoflinkageestablishment || null,
        financialsupport: data.financialsupport || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await colaborationagreement.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.colaborationagreement.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: colaborationagreement.id,
      },
      data.documentaryevidence,
      options,
    );

    return colaborationagreement;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const colaborationagreement = await db.colaborationagreement.findByPk(
      id,
      options,
    );

    await colaborationagreement.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await colaborationagreement.destroy({
      transaction,
    });

    return colaborationagreement;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const colaborationagreement = await db.colaborationagreement.findOne(
      { where },
      { transaction },
    );

    if (!colaborationagreement) {
      return colaborationagreement;
    }

    const output = colaborationagreement.get({ plain: true });

    output.categoryId = await colaborationagreement.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await colaborationagreement.getDocumentaryevidence({
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

      if (filter.typeoflinkages) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'typeoflinkages',
            filter.typeoflinkages,
          ),
        };
      }

      if (filter.nationalinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'nationalinternational',
            filter.nationalinternational,
          ),
        };
      }

      if (filter.hostcountryname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'hostcountryname',
            filter.hostcountryname,
          ),
        };
      }

      if (filter.hostcountryaddress) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'hostcountryaddress',
            filter.hostcountryaddress,
          ),
        };
      }

      if (filter.keyinitiativestobeundertaken) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'keyinitiativestobeundertaken',
            filter.keyinitiativestobeundertaken,
          ),
        };
      }

      if (filter.field) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('colaborationagreement', 'field', filter.field),
        };
      }

      if (filter.scopeofcollaboration) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'scopeofcollaboration',
            filter.scopeofcollaboration,
          ),
        };
      }

      if (filter.financialsupport) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'colaborationagreement',
            'financialsupport',
            filter.financialsupport,
          ),
        };
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

      if (filter.endDateRange) {
        const [start, end] = filter.endDateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            endDate: {
              ...where.endDate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            endDate: {
              ...where.endDate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateoflinkageestablishmentRange) {
        const [start, end] = filter.dateoflinkageestablishmentRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateoflinkageestablishment: {
              ...where.dateoflinkageestablishment,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateoflinkageestablishment: {
              ...where.dateoflinkageestablishment,
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
          count: await db.colaborationagreement.count({
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
      : await db.colaborationagreement.findAndCountAll({
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
          Utils.ilike('colaborationagreement', 'id', query),
        ],
      };
    }

    const records = await db.colaborationagreement.findAll({
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
