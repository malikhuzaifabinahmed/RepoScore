const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CommitiesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const commities = await db.commities.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        designation: data.designation || null,
        parentinstitutionorganization:
          data.parentinstitutionorganization || null,
        sectorfield: data.sectorfield || null,
        rolestatusincommittee: data.rolestatusincommittee || null,
        membersince: data.membersince || null,
        notified: data.notified || null,
        noofmembers: data.noofmembers || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await commities.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.commities.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: commities.id,
      },
      data.documentaryevidence,
      options,
    );

    return commities;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const commitiesData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      designation: item.designation || null,
      parentinstitutionorganization: item.parentinstitutionorganization || null,
      sectorfield: item.sectorfield || null,
      rolestatusincommittee: item.rolestatusincommittee || null,
      membersince: item.membersince || null,
      notified: item.notified || null,
      noofmembers: item.noofmembers || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const commities = await db.commities.bulkCreate(commitiesData, {
      transaction,
    });

    // For each item created, replace relation files

    for (let i = 0; i < commities.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.commities.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: commities[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return commities;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const commities = await db.commities.findByPk(id, {}, { transaction });

    await commities.update(
      {
        name: data.name || null,
        designation: data.designation || null,
        parentinstitutionorganization:
          data.parentinstitutionorganization || null,
        sectorfield: data.sectorfield || null,
        rolestatusincommittee: data.rolestatusincommittee || null,
        membersince: data.membersince || null,
        notified: data.notified || null,
        noofmembers: data.noofmembers || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await commities.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.commities.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: commities.id,
      },
      data.documentaryevidence,
      options,
    );

    return commities;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const commities = await db.commities.findByPk(id, options);

    await commities.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await commities.destroy({
      transaction,
    });

    return commities;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const commities = await db.commities.findOne({ where }, { transaction });

    if (!commities) {
      return commities;
    }

    const output = commities.get({ plain: true });

    output.categoryId = await commities.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await commities.getDocumentaryevidence({
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

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('commities', 'name', filter.name),
        };
      }

      if (filter.designation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('commities', 'designation', filter.designation),
        };
      }

      if (filter.parentinstitutionorganization) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'commities',
            'parentinstitutionorganization',
            filter.parentinstitutionorganization,
          ),
        };
      }

      if (filter.sectorfield) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('commities', 'sectorfield', filter.sectorfield),
        };
      }

      if (filter.rolestatusincommittee) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'commities',
            'rolestatusincommittee',
            filter.rolestatusincommittee,
          ),
        };
      }

      if (filter.notified) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('commities', 'notified', filter.notified),
        };
      }

      if (filter.membersinceRange) {
        const [start, end] = filter.membersinceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            membersince: {
              ...where.membersince,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            membersince: {
              ...where.membersince,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.noofmembersRange) {
        const [start, end] = filter.noofmembersRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            noofmembers: {
              ...where.noofmembers,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            noofmembers: {
              ...where.noofmembers,
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
          count: await db.commities.count({
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
      : await db.commities.findAndCountAll({
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
          Utils.ilike('commities', 'id', query),
        ],
      };
    }

    const records = await db.commities.findAll({
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
