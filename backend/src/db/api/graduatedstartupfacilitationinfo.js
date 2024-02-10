const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class GraduatedstartupfacilitationinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const graduatedstartupfacilitationinfo =
      await db.graduatedstartupfacilitationinfo.create(
        {
          id: data.id || undefined,

          keyareasoffacilitationrequestedbygraduatedstartups:
            data.keyareasoffacilitationrequestedbygraduatedstartups || null,
          typeoffacilitationmentoringtrainingsprovidedtograduated:
            data.typeoffacilitationmentoringtrainingsprovidedtograduated ||
            null,
          noofgraduatedstartupsfacilitated:
            data.noofgraduatedstartupsfacilitated || null,
          totalstartupsincubatedsincebicsinception:
            data.totalstartupsincubatedsincebicsinception || null,
          totalstartupsgraduatedsincebicsinception:
            data.totalstartupsgraduatedsincebicsinception || null,
          importHash: data.importHash || null,
          createdById: currentUser.id,
          updatedById: currentUser.id,
        },
        { transaction },
      );

    await graduatedstartupfacilitationinfo.setCategoryId(
      data.categoryId || null,
      {
        transaction,
      },
    );

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.graduatedstartupfacilitationinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: graduatedstartupfacilitationinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return graduatedstartupfacilitationinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const graduatedstartupfacilitationinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      keyareasoffacilitationrequestedbygraduatedstartups:
        item.keyareasoffacilitationrequestedbygraduatedstartups || null,
      typeoffacilitationmentoringtrainingsprovidedtograduated:
        item.typeoffacilitationmentoringtrainingsprovidedtograduated || null,
      noofgraduatedstartupsfacilitated:
        item.noofgraduatedstartupsfacilitated || null,
      totalstartupsincubatedsincebicsinception:
        item.totalstartupsincubatedsincebicsinception || null,
      totalstartupsgraduatedsincebicsinception:
        item.totalstartupsgraduatedsincebicsinception || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const graduatedstartupfacilitationinfo =
      await db.graduatedstartupfacilitationinfo.bulkCreate(
        graduatedstartupfacilitationinfoData,
        { transaction },
      );

    // For each item created, replace relation files

    for (let i = 0; i < graduatedstartupfacilitationinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.graduatedstartupfacilitationinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: graduatedstartupfacilitationinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return graduatedstartupfacilitationinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const graduatedstartupfacilitationinfo =
      await db.graduatedstartupfacilitationinfo.findByPk(
        id,
        {},
        { transaction },
      );

    await graduatedstartupfacilitationinfo.update(
      {
        keyareasoffacilitationrequestedbygraduatedstartups:
          data.keyareasoffacilitationrequestedbygraduatedstartups || null,
        typeoffacilitationmentoringtrainingsprovidedtograduated:
          data.typeoffacilitationmentoringtrainingsprovidedtograduated || null,
        noofgraduatedstartupsfacilitated:
          data.noofgraduatedstartupsfacilitated || null,
        totalstartupsincubatedsincebicsinception:
          data.totalstartupsincubatedsincebicsinception || null,
        totalstartupsgraduatedsincebicsinception:
          data.totalstartupsgraduatedsincebicsinception || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await graduatedstartupfacilitationinfo.setCategoryId(
      data.categoryId || null,
      {
        transaction,
      },
    );

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.graduatedstartupfacilitationinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: graduatedstartupfacilitationinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return graduatedstartupfacilitationinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const graduatedstartupfacilitationinfo =
      await db.graduatedstartupfacilitationinfo.findByPk(id, options);

    await graduatedstartupfacilitationinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await graduatedstartupfacilitationinfo.destroy({
      transaction,
    });

    return graduatedstartupfacilitationinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const graduatedstartupfacilitationinfo =
      await db.graduatedstartupfacilitationinfo.findOne(
        { where },
        { transaction },
      );

    if (!graduatedstartupfacilitationinfo) {
      return graduatedstartupfacilitationinfo;
    }

    const output = graduatedstartupfacilitationinfo.get({ plain: true });

    output.categoryId = await graduatedstartupfacilitationinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await graduatedstartupfacilitationinfo.getDocumentaryevidence({
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

      if (filter.keyareasoffacilitationrequestedbygraduatedstartups) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'graduatedstartupfacilitationinfo',
            'keyareasoffacilitationrequestedbygraduatedstartups',
            filter.keyareasoffacilitationrequestedbygraduatedstartups,
          ),
        };
      }

      if (filter.typeoffacilitationmentoringtrainingsprovidedtograduated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'graduatedstartupfacilitationinfo',
            'typeoffacilitationmentoringtrainingsprovidedtograduated',
            filter.typeoffacilitationmentoringtrainingsprovidedtograduated,
          ),
        };
      }

      if (filter.noofgraduatedstartupsfacilitated) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'graduatedstartupfacilitationinfo',
            'noofgraduatedstartupsfacilitated',
            filter.noofgraduatedstartupsfacilitated,
          ),
        };
      }

      if (filter.totalstartupsincubatedsincebicsinception) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'graduatedstartupfacilitationinfo',
            'totalstartupsincubatedsincebicsinception',
            filter.totalstartupsincubatedsincebicsinception,
          ),
        };
      }

      if (filter.totalstartupsgraduatedsincebicsinception) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'graduatedstartupfacilitationinfo',
            'totalstartupsgraduatedsincebicsinception',
            filter.totalstartupsgraduatedsincebicsinception,
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
          count: await db.graduatedstartupfacilitationinfo.count({
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
      : await db.graduatedstartupfacilitationinfo.findAndCountAll({
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
          Utils.ilike('graduatedstartupfacilitationinfo', 'id', query),
        ],
      };
    }

    const records = await db.graduatedstartupfacilitationinfo.findAll({
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
