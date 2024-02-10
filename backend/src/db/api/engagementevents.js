const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class EngagementeventsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const engagementevents = await db.engagementevents.create(
      {
        id: data.id || undefined,

        titleofevent: data.titleofevent || null,
        componentofcommunityinvolved: data.componentofcommunityinvolved || null,
        audiance: data.audiance || null,
        outcome: data.outcome || null,
        collaborationdeveloped: data.collaborationdeveloped || null,
        dateofevent: data.dateofevent || null,
        nameofcollaboratingpartners: data.nameofcollaboratingpartners || null,
        nameofsponsoringagency: data.nameofsponsoringagency || null,
        willbeparticipatedorarranged: data.willbeparticipatedorarranged || null,
        remarks: data.remarks || null,
        anexpageno: data.anexpageno || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await engagementevents.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.engagementevents.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: engagementevents.id,
      },
      data.documentaryevidence,
      options,
    );

    return engagementevents;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const engagementeventsData = data.map((item, index) => ({
      id: item.id || undefined,

      titleofevent: item.titleofevent || null,
      componentofcommunityinvolved: item.componentofcommunityinvolved || null,
      audiance: item.audiance || null,
      outcome: item.outcome || null,
      collaborationdeveloped: item.collaborationdeveloped || null,
      dateofevent: item.dateofevent || null,
      nameofcollaboratingpartners: item.nameofcollaboratingpartners || null,
      nameofsponsoringagency: item.nameofsponsoringagency || null,
      willbeparticipatedorarranged: item.willbeparticipatedorarranged || null,
      remarks: item.remarks || null,
      anexpageno: item.anexpageno || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const engagementevents = await db.engagementevents.bulkCreate(
      engagementeventsData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < engagementevents.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.engagementevents.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: engagementevents[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return engagementevents;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const engagementevents = await db.engagementevents.findByPk(
      id,
      {},
      { transaction },
    );

    await engagementevents.update(
      {
        titleofevent: data.titleofevent || null,
        componentofcommunityinvolved: data.componentofcommunityinvolved || null,
        audiance: data.audiance || null,
        outcome: data.outcome || null,
        collaborationdeveloped: data.collaborationdeveloped || null,
        dateofevent: data.dateofevent || null,
        nameofcollaboratingpartners: data.nameofcollaboratingpartners || null,
        nameofsponsoringagency: data.nameofsponsoringagency || null,
        willbeparticipatedorarranged: data.willbeparticipatedorarranged || null,
        remarks: data.remarks || null,
        anexpageno: data.anexpageno || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await engagementevents.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.engagementevents.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: engagementevents.id,
      },
      data.documentaryevidence,
      options,
    );

    return engagementevents;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const engagementevents = await db.engagementevents.findByPk(id, options);

    await engagementevents.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await engagementevents.destroy({
      transaction,
    });

    return engagementevents;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const engagementevents = await db.engagementevents.findOne(
      { where },
      { transaction },
    );

    if (!engagementevents) {
      return engagementevents;
    }

    const output = engagementevents.get({ plain: true });

    output.categoryId = await engagementevents.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await engagementevents.getDocumentaryevidence({
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

      if (filter.titleofevent) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'titleofevent',
            filter.titleofevent,
          ),
        };
      }

      if (filter.componentofcommunityinvolved) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'componentofcommunityinvolved',
            filter.componentofcommunityinvolved,
          ),
        };
      }

      if (filter.audiance) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'audiance',
            filter.audiance,
          ),
        };
      }

      if (filter.outcome) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('engagementevents', 'outcome', filter.outcome),
        };
      }

      if (filter.collaborationdeveloped) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'collaborationdeveloped',
            filter.collaborationdeveloped,
          ),
        };
      }

      if (filter.nameofcollaboratingpartners) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'nameofcollaboratingpartners',
            filter.nameofcollaboratingpartners,
          ),
        };
      }

      if (filter.nameofsponsoringagency) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'nameofsponsoringagency',
            filter.nameofsponsoringagency,
          ),
        };
      }

      if (filter.willbeparticipatedorarranged) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'willbeparticipatedorarranged',
            filter.willbeparticipatedorarranged,
          ),
        };
      }

      if (filter.remarks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('engagementevents', 'remarks', filter.remarks),
        };
      }

      if (filter.anexpageno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'engagementevents',
            'anexpageno',
            filter.anexpageno,
          ),
        };
      }

      if (filter.dateofeventRange) {
        const [start, end] = filter.dateofeventRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofevent: {
              ...where.dateofevent,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofevent: {
              ...where.dateofevent,
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
          count: await db.engagementevents.count({
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
      : await db.engagementevents.findAndCountAll({
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
          Utils.ilike('engagementevents', 'id', query),
        ],
      };
    }

    const records = await db.engagementevents.findAll({
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
