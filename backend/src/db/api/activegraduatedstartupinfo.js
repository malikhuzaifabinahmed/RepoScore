const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ActivegraduatedstartupinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const activegraduatedstartupinfo =
      await db.activegraduatedstartupinfo.create(
        {
          id: data.id || undefined,

          nameofgraduatedstartup: data.nameofgraduatedstartup || null,
          companybriefidea: data.companybriefidea || null,
          dateofgraduation: data.dateofgraduation || null,
          currentstatusactiveregisteredconcernaccelerated:
            data.currentstatusactiveregisteredconcernaccelerated || null,
          networthofstartupaverageyearlyrevenue:
            data.networthofstartupaverageyearlyrevenue || null,
          ipoacquisitionamalgamationifany:
            data.ipoacquisitionamalgamationifany || null,
          noofemployeeswithstartup: data.noofemployeeswithstartup || null,
          survivalrateofgraduatedstartups:
            data.survivalrateofgraduatedstartups || null,
          totalstartupsactiveaftergraduation:
            data.totalstartupsactiveaftergraduation || null,
          totalstartupshavingipoacquisition:
            data.totalstartupshavingipoacquisition || null,
          importHash: data.importHash || null,
          createdById: currentUser.id,
          updatedById: currentUser.id,
        },
        { transaction },
      );

    await activegraduatedstartupinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.activegraduatedstartupinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: activegraduatedstartupinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return activegraduatedstartupinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const activegraduatedstartupinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofgraduatedstartup: item.nameofgraduatedstartup || null,
      companybriefidea: item.companybriefidea || null,
      dateofgraduation: item.dateofgraduation || null,
      currentstatusactiveregisteredconcernaccelerated:
        item.currentstatusactiveregisteredconcernaccelerated || null,
      networthofstartupaverageyearlyrevenue:
        item.networthofstartupaverageyearlyrevenue || null,
      ipoacquisitionamalgamationifany:
        item.ipoacquisitionamalgamationifany || null,
      noofemployeeswithstartup: item.noofemployeeswithstartup || null,
      survivalrateofgraduatedstartups:
        item.survivalrateofgraduatedstartups || null,
      totalstartupsactiveaftergraduation:
        item.totalstartupsactiveaftergraduation || null,
      totalstartupshavingipoacquisition:
        item.totalstartupshavingipoacquisition || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const activegraduatedstartupinfo =
      await db.activegraduatedstartupinfo.bulkCreate(
        activegraduatedstartupinfoData,
        { transaction },
      );

    // For each item created, replace relation files

    for (let i = 0; i < activegraduatedstartupinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.activegraduatedstartupinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: activegraduatedstartupinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return activegraduatedstartupinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const activegraduatedstartupinfo =
      await db.activegraduatedstartupinfo.findByPk(id, {}, { transaction });

    await activegraduatedstartupinfo.update(
      {
        nameofgraduatedstartup: data.nameofgraduatedstartup || null,
        companybriefidea: data.companybriefidea || null,
        dateofgraduation: data.dateofgraduation || null,
        currentstatusactiveregisteredconcernaccelerated:
          data.currentstatusactiveregisteredconcernaccelerated || null,
        networthofstartupaverageyearlyrevenue:
          data.networthofstartupaverageyearlyrevenue || null,
        ipoacquisitionamalgamationifany:
          data.ipoacquisitionamalgamationifany || null,
        noofemployeeswithstartup: data.noofemployeeswithstartup || null,
        survivalrateofgraduatedstartups:
          data.survivalrateofgraduatedstartups || null,
        totalstartupsactiveaftergraduation:
          data.totalstartupsactiveaftergraduation || null,
        totalstartupshavingipoacquisition:
          data.totalstartupshavingipoacquisition || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await activegraduatedstartupinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.activegraduatedstartupinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: activegraduatedstartupinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return activegraduatedstartupinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const activegraduatedstartupinfo =
      await db.activegraduatedstartupinfo.findByPk(id, options);

    await activegraduatedstartupinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await activegraduatedstartupinfo.destroy({
      transaction,
    });

    return activegraduatedstartupinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const activegraduatedstartupinfo =
      await db.activegraduatedstartupinfo.findOne({ where }, { transaction });

    if (!activegraduatedstartupinfo) {
      return activegraduatedstartupinfo;
    }

    const output = activegraduatedstartupinfo.get({ plain: true });

    output.categoryId = await activegraduatedstartupinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await activegraduatedstartupinfo.getDocumentaryevidence({
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

      if (filter.nameofgraduatedstartup) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'nameofgraduatedstartup',
            filter.nameofgraduatedstartup,
          ),
        };
      }

      if (filter.companybriefidea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'companybriefidea',
            filter.companybriefidea,
          ),
        };
      }

      if (filter.currentstatusactiveregisteredconcernaccelerated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'currentstatusactiveregisteredconcernaccelerated',
            filter.currentstatusactiveregisteredconcernaccelerated,
          ),
        };
      }

      if (filter.networthofstartupaverageyearlyrevenue) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'networthofstartupaverageyearlyrevenue',
            filter.networthofstartupaverageyearlyrevenue,
          ),
        };
      }

      if (filter.ipoacquisitionamalgamationifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'ipoacquisitionamalgamationifany',
            filter.ipoacquisitionamalgamationifany,
          ),
        };
      }

      if (filter.noofemployeeswithstartup) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'noofemployeeswithstartup',
            filter.noofemployeeswithstartup,
          ),
        };
      }

      if (filter.survivalrateofgraduatedstartups) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'survivalrateofgraduatedstartups',
            filter.survivalrateofgraduatedstartups,
          ),
        };
      }

      if (filter.totalstartupsactiveaftergraduation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'totalstartupsactiveaftergraduation',
            filter.totalstartupsactiveaftergraduation,
          ),
        };
      }

      if (filter.totalstartupshavingipoacquisition) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'activegraduatedstartupinfo',
            'totalstartupshavingipoacquisition',
            filter.totalstartupshavingipoacquisition,
          ),
        };
      }

      if (filter.dateofgraduationRange) {
        const [start, end] = filter.dateofgraduationRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofgraduation: {
              ...where.dateofgraduation,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofgraduation: {
              ...where.dateofgraduation,
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
          count: await db.activegraduatedstartupinfo.count({
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
      : await db.activegraduatedstartupinfo.findAndCountAll({
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
          Utils.ilike('activegraduatedstartupinfo', 'id', query),
        ],
      };
    }

    const records = await db.activegraduatedstartupinfo.findAll({
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
