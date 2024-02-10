const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class OricdataDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const oricdata = await db.oricdata.create(
      {
        id: data.id || undefined,

        oricbankaccounttitle: data.oricbankaccounttitle || null,
        oricbankaccountnumber: data.oricbankaccountnumber || null,
        oriccentralizedemailid: data.oriccentralizedemailid || null,
        oricpostaladdress: data.oricpostaladdress || null,
        shortlinkfororicwebsite: data.shortlinkfororicwebsite || null,
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

    await oricdata.setUniversityId(data.universityId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.oricdata.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: oricdata.id,
      },
      data.documentaryevidence,
      options,
    );

    return oricdata;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const oricdataData = data.map((item, index) => ({
      id: item.id || undefined,

      oricbankaccounttitle: item.oricbankaccounttitle || null,
      oricbankaccountnumber: item.oricbankaccountnumber || null,
      oriccentralizedemailid: item.oriccentralizedemailid || null,
      oricpostaladdress: item.oricpostaladdress || null,
      shortlinkfororicwebsite: item.shortlinkfororicwebsite || null,
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
    const oricdata = await db.oricdata.bulkCreate(oricdataData, {
      transaction,
    });

    // For each item created, replace relation files

    for (let i = 0; i < oricdata.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.oricdata.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: oricdata[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return oricdata;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const oricdata = await db.oricdata.findByPk(id, {}, { transaction });

    await oricdata.update(
      {
        oricbankaccounttitle: data.oricbankaccounttitle || null,
        oricbankaccountnumber: data.oricbankaccountnumber || null,
        oriccentralizedemailid: data.oriccentralizedemailid || null,
        oricpostaladdress: data.oricpostaladdress || null,
        shortlinkfororicwebsite: data.shortlinkfororicwebsite || null,
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

    await oricdata.setUniversityId(data.universityId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.oricdata.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: oricdata.id,
      },
      data.documentaryevidence,
      options,
    );

    return oricdata;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const oricdata = await db.oricdata.findByPk(id, options);

    await oricdata.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await oricdata.destroy({
      transaction,
    });

    return oricdata;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const oricdata = await db.oricdata.findOne({ where }, { transaction });

    if (!oricdata) {
      return oricdata;
    }

    const output = oricdata.get({ plain: true });

    output.universityId = await oricdata.getUniversityId({
      transaction,
    });

    output.documentaryevidence = await oricdata.getDocumentaryevidence({
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
        model: db.university,
        as: 'universityId',
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

      if (filter.oricbankaccounttitle) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'oricbankaccounttitle',
            filter.oricbankaccounttitle,
          ),
        };
      }

      if (filter.oricbankaccountnumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'oricbankaccountnumber',
            filter.oricbankaccountnumber,
          ),
        };
      }

      if (filter.oriccentralizedemailid) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'oriccentralizedemailid',
            filter.oriccentralizedemailid,
          ),
        };
      }

      if (filter.oricpostaladdress) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'oricpostaladdress',
            filter.oricpostaladdress,
          ),
        };
      }

      if (filter.shortlinkfororicwebsite) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'shortlinkfororicwebsite',
            filter.shortlinkfororicwebsite,
          ),
        };
      }

      if (filter.nameoffocalpersonmanagingwebpage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'nameoffocalpersonmanagingwebpage',
            filter.nameoffocalpersonmanagingwebpage,
          ),
        };
      }

      if (filter.phonenumberoffocalpersonmanagingwebpage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'phonenumberoffocalpersonmanagingwebpage',
            filter.phonenumberoffocalpersonmanagingwebpage,
          ),
        };
      }

      if (filter.tiscphonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'oricdata',
            'tiscphonenumber',
            filter.tiscphonenumber,
          ),
        };
      }

      if (filter.tiscemailid) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('oricdata', 'tiscemailid', filter.tiscemailid),
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

      if (filter.universityId) {
        var listItems = filter.universityId.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          universityIdId: { [Op.or]: listItems },
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
          count: await db.oricdata.count({
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
      : await db.oricdata.findAndCountAll({
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
          Utils.ilike('oricdata', 'id', query),
        ],
      };
    }

    const records = await db.oricdata.findAll({
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
