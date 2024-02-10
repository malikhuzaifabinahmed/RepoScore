const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class MentorshipinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const mentorshipinfo = await db.mentorshipinfo.create(
      {
        id: data.id || undefined,

        nameofmentor: data.nameofmentor || null,
        fieldareasofexpertise: data.fieldareasofexpertise || null,
        nationalinternational: data.nationalinternational || null,
        mentoringsessionsheldatbicduringtheyear:
          data.mentoringsessionsheldatbicduringtheyear || null,
        noofstartupsfacilitatedthroughsessions:
          data.noofstartupsfacilitatedthroughsessions || null,
        ifcorporatebodymousigningdateifany:
          data.ifcorporatebodymousigningdateifany || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await mentorshipinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.mentorshipinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: mentorshipinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return mentorshipinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const mentorshipinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofmentor: item.nameofmentor || null,
      fieldareasofexpertise: item.fieldareasofexpertise || null,
      nationalinternational: item.nationalinternational || null,
      mentoringsessionsheldatbicduringtheyear:
        item.mentoringsessionsheldatbicduringtheyear || null,
      noofstartupsfacilitatedthroughsessions:
        item.noofstartupsfacilitatedthroughsessions || null,
      ifcorporatebodymousigningdateifany:
        item.ifcorporatebodymousigningdateifany || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const mentorshipinfo = await db.mentorshipinfo.bulkCreate(
      mentorshipinfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < mentorshipinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.mentorshipinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: mentorshipinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return mentorshipinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const mentorshipinfo = await db.mentorshipinfo.findByPk(
      id,
      {},
      { transaction },
    );

    await mentorshipinfo.update(
      {
        nameofmentor: data.nameofmentor || null,
        fieldareasofexpertise: data.fieldareasofexpertise || null,
        nationalinternational: data.nationalinternational || null,
        mentoringsessionsheldatbicduringtheyear:
          data.mentoringsessionsheldatbicduringtheyear || null,
        noofstartupsfacilitatedthroughsessions:
          data.noofstartupsfacilitatedthroughsessions || null,
        ifcorporatebodymousigningdateifany:
          data.ifcorporatebodymousigningdateifany || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await mentorshipinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.mentorshipinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: mentorshipinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return mentorshipinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const mentorshipinfo = await db.mentorshipinfo.findByPk(id, options);

    await mentorshipinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await mentorshipinfo.destroy({
      transaction,
    });

    return mentorshipinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const mentorshipinfo = await db.mentorshipinfo.findOne(
      { where },
      { transaction },
    );

    if (!mentorshipinfo) {
      return mentorshipinfo;
    }

    const output = mentorshipinfo.get({ plain: true });

    output.categoryId = await mentorshipinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await mentorshipinfo.getDocumentaryevidence({
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

      if (filter.nameofmentor) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'mentorshipinfo',
            'nameofmentor',
            filter.nameofmentor,
          ),
        };
      }

      if (filter.fieldareasofexpertise) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'mentorshipinfo',
            'fieldareasofexpertise',
            filter.fieldareasofexpertise,
          ),
        };
      }

      if (filter.nationalinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'mentorshipinfo',
            'nationalinternational',
            filter.nationalinternational,
          ),
        };
      }

      if (filter.mentoringsessionsheldatbicduringtheyear) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'mentorshipinfo',
            'mentoringsessionsheldatbicduringtheyear',
            filter.mentoringsessionsheldatbicduringtheyear,
          ),
        };
      }

      if (filter.noofstartupsfacilitatedthroughsessions) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'mentorshipinfo',
            'noofstartupsfacilitatedthroughsessions',
            filter.noofstartupsfacilitatedthroughsessions,
          ),
        };
      }

      if (filter.ifcorporatebodymousigningdateifanyRange) {
        const [start, end] = filter.ifcorporatebodymousigningdateifanyRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ifcorporatebodymousigningdateifany: {
              ...where.ifcorporatebodymousigningdateifany,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ifcorporatebodymousigningdateifany: {
              ...where.ifcorporatebodymousigningdateifany,
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
          count: await db.mentorshipinfo.count({
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
      : await db.mentorshipinfo.findAndCountAll({
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
          Utils.ilike('mentorshipinfo', 'id', query),
        ],
      };
    }

    const records = await db.mentorshipinfo.findAll({
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
