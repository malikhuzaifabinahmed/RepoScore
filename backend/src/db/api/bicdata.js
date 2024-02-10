const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class BicdataDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicdata = await db.bicdata.create(
      {
        id: data.id || undefined,

        universityname: data.universityname || null,
        oricbankaccounttitle: data.oricbankaccounttitle || null,
        oricbankaccountnumber: data.oricbankaccountnumber || null,
        ORICCentralizedEmailId: data.ORICCentralizedEmailId || null,
        ORICPostalAddress: data.ORICPostalAddress || null,
        shortlinkforORICWebsite: data.shortlinkforORICWebsite || null,
        nameoffocalpersonmanagingwebpage:
          data.nameoffocalpersonmanagingwebpage || null,
        phonenumberoffocalpersonmanagingwebpage:
          data.phonenumberoffocalpersonmanagingwebpage || null,
        tiscphonenumber: data.tiscphonenumber || null,
        tiscemailid: data.tiscemailid || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return bicdata;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const bicdataData = data.map((item, index) => ({
      id: item.id || undefined,

      universityname: item.universityname || null,
      oricbankaccounttitle: item.oricbankaccounttitle || null,
      oricbankaccountnumber: item.oricbankaccountnumber || null,
      ORICCentralizedEmailId: item.ORICCentralizedEmailId || null,
      ORICPostalAddress: item.ORICPostalAddress || null,
      shortlinkforORICWebsite: item.shortlinkforORICWebsite || null,
      nameoffocalpersonmanagingwebpage:
        item.nameoffocalpersonmanagingwebpage || null,
      phonenumberoffocalpersonmanagingwebpage:
        item.phonenumberoffocalpersonmanagingwebpage || null,
      tiscphonenumber: item.tiscphonenumber || null,
      tiscemailid: item.tiscemailid || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const bicdata = await db.bicdata.bulkCreate(bicdataData, { transaction });

    // For each item created, replace relation files

    return bicdata;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicdata = await db.bicdata.findByPk(id, {}, { transaction });

    await bicdata.update(
      {
        universityname: data.universityname || null,
        oricbankaccounttitle: data.oricbankaccounttitle || null,
        oricbankaccountnumber: data.oricbankaccountnumber || null,
        ORICCentralizedEmailId: data.ORICCentralizedEmailId || null,
        ORICPostalAddress: data.ORICPostalAddress || null,
        shortlinkforORICWebsite: data.shortlinkforORICWebsite || null,
        nameoffocalpersonmanagingwebpage:
          data.nameoffocalpersonmanagingwebpage || null,
        phonenumberoffocalpersonmanagingwebpage:
          data.phonenumberoffocalpersonmanagingwebpage || null,
        tiscphonenumber: data.tiscphonenumber || null,
        tiscemailid: data.tiscemailid || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return bicdata;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicdata = await db.bicdata.findByPk(id, options);

    await bicdata.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await bicdata.destroy({
      transaction,
    });

    return bicdata;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bicdata = await db.bicdata.findOne({ where }, { transaction });

    if (!bicdata) {
      return bicdata;
    }

    const output = bicdata.get({ plain: true });

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
    let include = [];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.universityname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'universityname',
            filter.universityname,
          ),
        };
      }

      if (filter.oricbankaccounttitle) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'oricbankaccounttitle',
            filter.oricbankaccounttitle,
          ),
        };
      }

      if (filter.oricbankaccountnumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'oricbankaccountnumber',
            filter.oricbankaccountnumber,
          ),
        };
      }

      if (filter.ORICCentralizedEmailId) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'ORICCentralizedEmailId',
            filter.ORICCentralizedEmailId,
          ),
        };
      }

      if (filter.ORICPostalAddress) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'ORICPostalAddress',
            filter.ORICPostalAddress,
          ),
        };
      }

      if (filter.shortlinkforORICWebsite) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'shortlinkforORICWebsite',
            filter.shortlinkforORICWebsite,
          ),
        };
      }

      if (filter.nameoffocalpersonmanagingwebpage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'nameoffocalpersonmanagingwebpage',
            filter.nameoffocalpersonmanagingwebpage,
          ),
        };
      }

      if (filter.phonenumberoffocalpersonmanagingwebpage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'phonenumberoffocalpersonmanagingwebpage',
            filter.phonenumberoffocalpersonmanagingwebpage,
          ),
        };
      }

      if (filter.tiscphonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicdata',
            'tiscphonenumber',
            filter.tiscphonenumber,
          ),
        };
      }

      if (filter.tiscemailid) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('bicdata', 'tiscemailid', filter.tiscemailid),
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
          count: await db.bicdata.count({
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
      : await db.bicdata.findAndCountAll({
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
          Utils.ilike('bicdata', 'id', query),
        ],
      };
    }

    const records = await db.bicdata.findAll({
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
