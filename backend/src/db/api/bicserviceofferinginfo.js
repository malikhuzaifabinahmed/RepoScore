const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class BicserviceofferinginfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicserviceofferinginfo = await db.bicserviceofferinginfo.create(
      {
        id: data.id || undefined,

        natureofserviceofferedsessionheld:
          data.natureofserviceofferedsessionheld || null,
        nameofserviceprovider: data.nameofserviceprovider || null,
        backgroundandexpertise: data.backgroundandexpertise || null,
        localinternational: data.localinternational || null,
        noofstartupsfacilitated: data.noofstartupsfacilitated || null,
        totalnosessionsheld: data.totalnosessionsheld || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bicserviceofferinginfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bicserviceofferinginfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bicserviceofferinginfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return bicserviceofferinginfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const bicserviceofferinginfoData = data.map((item, index) => ({
      id: item.id || undefined,

      natureofserviceofferedsessionheld:
        item.natureofserviceofferedsessionheld || null,
      nameofserviceprovider: item.nameofserviceprovider || null,
      backgroundandexpertise: item.backgroundandexpertise || null,
      localinternational: item.localinternational || null,
      noofstartupsfacilitated: item.noofstartupsfacilitated || null,
      totalnosessionsheld: item.totalnosessionsheld || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const bicserviceofferinginfo = await db.bicserviceofferinginfo.bulkCreate(
      bicserviceofferinginfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < bicserviceofferinginfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.bicserviceofferinginfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: bicserviceofferinginfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return bicserviceofferinginfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicserviceofferinginfo = await db.bicserviceofferinginfo.findByPk(
      id,
      {},
      { transaction },
    );

    await bicserviceofferinginfo.update(
      {
        natureofserviceofferedsessionheld:
          data.natureofserviceofferedsessionheld || null,
        nameofserviceprovider: data.nameofserviceprovider || null,
        backgroundandexpertise: data.backgroundandexpertise || null,
        localinternational: data.localinternational || null,
        noofstartupsfacilitated: data.noofstartupsfacilitated || null,
        totalnosessionsheld: data.totalnosessionsheld || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bicserviceofferinginfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bicserviceofferinginfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bicserviceofferinginfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return bicserviceofferinginfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bicserviceofferinginfo = await db.bicserviceofferinginfo.findByPk(
      id,
      options,
    );

    await bicserviceofferinginfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await bicserviceofferinginfo.destroy({
      transaction,
    });

    return bicserviceofferinginfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bicserviceofferinginfo = await db.bicserviceofferinginfo.findOne(
      { where },
      { transaction },
    );

    if (!bicserviceofferinginfo) {
      return bicserviceofferinginfo;
    }

    const output = bicserviceofferinginfo.get({ plain: true });

    output.categoryId = await bicserviceofferinginfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await bicserviceofferinginfo.getDocumentaryevidence({
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

      if (filter.natureofserviceofferedsessionheld) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicserviceofferinginfo',
            'natureofserviceofferedsessionheld',
            filter.natureofserviceofferedsessionheld,
          ),
        };
      }

      if (filter.nameofserviceprovider) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicserviceofferinginfo',
            'nameofserviceprovider',
            filter.nameofserviceprovider,
          ),
        };
      }

      if (filter.backgroundandexpertise) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicserviceofferinginfo',
            'backgroundandexpertise',
            filter.backgroundandexpertise,
          ),
        };
      }

      if (filter.localinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicserviceofferinginfo',
            'localinternational',
            filter.localinternational,
          ),
        };
      }

      if (filter.noofstartupsfacilitated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicserviceofferinginfo',
            'noofstartupsfacilitated',
            filter.noofstartupsfacilitated,
          ),
        };
      }

      if (filter.totalnosessionsheld) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bicserviceofferinginfo',
            'totalnosessionsheld',
            filter.totalnosessionsheld,
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
          count: await db.bicserviceofferinginfo.count({
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
      : await db.bicserviceofferinginfo.findAndCountAll({
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
          Utils.ilike('bicserviceofferinginfo', 'id', query),
        ],
      };
    }

    const records = await db.bicserviceofferinginfo.findAll({
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
