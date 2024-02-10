const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class PartnershipinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const partnershipinfo = await db.partnershipinfo.create(
      {
        id: data.id || undefined,

        nameofpartneringorganization: data.nameofpartneringorganization || null,
        nationalinternational: data.nationalinternational || null,
        fieldareaofexpertise: data.fieldareaofexpertise || null,
        typeoflink: data.typeoflink || null,
        dateofsigning: data.dateofsigning || null,
        majorareasofcooperationmodalities:
          data.majorareasofcooperationmodalities || null,
        keyoutcomesfromlinks: data.keyoutcomesfromlinks || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await partnershipinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.partnershipinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: partnershipinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return partnershipinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const partnershipinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      nameofpartneringorganization: item.nameofpartneringorganization || null,
      nationalinternational: item.nationalinternational || null,
      fieldareaofexpertise: item.fieldareaofexpertise || null,
      typeoflink: item.typeoflink || null,
      dateofsigning: item.dateofsigning || null,
      majorareasofcooperationmodalities:
        item.majorareasofcooperationmodalities || null,
      keyoutcomesfromlinks: item.keyoutcomesfromlinks || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const partnershipinfo = await db.partnershipinfo.bulkCreate(
      partnershipinfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < partnershipinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.partnershipinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: partnershipinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return partnershipinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const partnershipinfo = await db.partnershipinfo.findByPk(
      id,
      {},
      { transaction },
    );

    await partnershipinfo.update(
      {
        nameofpartneringorganization: data.nameofpartneringorganization || null,
        nationalinternational: data.nationalinternational || null,
        fieldareaofexpertise: data.fieldareaofexpertise || null,
        typeoflink: data.typeoflink || null,
        dateofsigning: data.dateofsigning || null,
        majorareasofcooperationmodalities:
          data.majorareasofcooperationmodalities || null,
        keyoutcomesfromlinks: data.keyoutcomesfromlinks || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await partnershipinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.partnershipinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: partnershipinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return partnershipinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const partnershipinfo = await db.partnershipinfo.findByPk(id, options);

    await partnershipinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await partnershipinfo.destroy({
      transaction,
    });

    return partnershipinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const partnershipinfo = await db.partnershipinfo.findOne(
      { where },
      { transaction },
    );

    if (!partnershipinfo) {
      return partnershipinfo;
    }

    const output = partnershipinfo.get({ plain: true });

    output.categoryId = await partnershipinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await partnershipinfo.getDocumentaryevidence({
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

      if (filter.nameofpartneringorganization) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'partnershipinfo',
            'nameofpartneringorganization',
            filter.nameofpartneringorganization,
          ),
        };
      }

      if (filter.nationalinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'partnershipinfo',
            'nationalinternational',
            filter.nationalinternational,
          ),
        };
      }

      if (filter.fieldareaofexpertise) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'partnershipinfo',
            'fieldareaofexpertise',
            filter.fieldareaofexpertise,
          ),
        };
      }

      if (filter.typeoflink) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'partnershipinfo',
            'typeoflink',
            filter.typeoflink,
          ),
        };
      }

      if (filter.majorareasofcooperationmodalities) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'partnershipinfo',
            'majorareasofcooperationmodalities',
            filter.majorareasofcooperationmodalities,
          ),
        };
      }

      if (filter.keyoutcomesfromlinks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'partnershipinfo',
            'keyoutcomesfromlinks',
            filter.keyoutcomesfromlinks,
          ),
        };
      }

      if (filter.dateofsigningRange) {
        const [start, end] = filter.dateofsigningRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofsigning: {
              ...where.dateofsigning,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofsigning: {
              ...where.dateofsigning,
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
          count: await db.partnershipinfo.count({
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
      : await db.partnershipinfo.findAndCountAll({
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
          Utils.ilike('partnershipinfo', 'id', query),
        ],
      };
    }

    const records = await db.partnershipinfo.findAll({
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
