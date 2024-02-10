const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ResearchlinksDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchlinks = await db.researchlinks.create(
      {
        id: data.id || undefined,

        typeoflinkage: data.typeoflinkage || null,
        region: data.region || null,
        namehostinstitution: data.namehostinstitution || null,
        addresshostinstitution: data.addresshostinstitution || null,
        countryofhostinstitution: data.countryofhostinstitution || null,
        nameofcollaboratingpartners: data.nameofcollaboratingpartners || null,
        addressofcollaboratingpartners:
          data.addressofcollaboratingpartners || null,
        countryofcollaboratingpartners:
          data.countryofcollaboratingpartners || null,
        fieldofstudy: data.fieldofstudy || null,
        researchborderareas: data.researchborderareas || null,
        scopeofcollaboration: data.scopeofcollaboration || null,
        linkageestablishmentdate: data.linkageestablishmentdate || null,
        salientfeaturesoflinkage: data.salientfeaturesoflinkage || null,
        anexpagereference: data.anexpagereference || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await researchlinks.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.researchlinks.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: researchlinks.id,
      },
      data.documentaryevidence,
      options,
    );

    return researchlinks;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const researchlinksData = data.map((item, index) => ({
      id: item.id || undefined,

      typeoflinkage: item.typeoflinkage || null,
      region: item.region || null,
      namehostinstitution: item.namehostinstitution || null,
      addresshostinstitution: item.addresshostinstitution || null,
      countryofhostinstitution: item.countryofhostinstitution || null,
      nameofcollaboratingpartners: item.nameofcollaboratingpartners || null,
      addressofcollaboratingpartners:
        item.addressofcollaboratingpartners || null,
      countryofcollaboratingpartners:
        item.countryofcollaboratingpartners || null,
      fieldofstudy: item.fieldofstudy || null,
      researchborderareas: item.researchborderareas || null,
      scopeofcollaboration: item.scopeofcollaboration || null,
      linkageestablishmentdate: item.linkageestablishmentdate || null,
      salientfeaturesoflinkage: item.salientfeaturesoflinkage || null,
      anexpagereference: item.anexpagereference || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const researchlinks = await db.researchlinks.bulkCreate(researchlinksData, {
      transaction,
    });

    // For each item created, replace relation files

    for (let i = 0; i < researchlinks.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.researchlinks.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: researchlinks[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return researchlinks;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchlinks = await db.researchlinks.findByPk(
      id,
      {},
      { transaction },
    );

    await researchlinks.update(
      {
        typeoflinkage: data.typeoflinkage || null,
        region: data.region || null,
        namehostinstitution: data.namehostinstitution || null,
        addresshostinstitution: data.addresshostinstitution || null,
        countryofhostinstitution: data.countryofhostinstitution || null,
        nameofcollaboratingpartners: data.nameofcollaboratingpartners || null,
        addressofcollaboratingpartners:
          data.addressofcollaboratingpartners || null,
        countryofcollaboratingpartners:
          data.countryofcollaboratingpartners || null,
        fieldofstudy: data.fieldofstudy || null,
        researchborderareas: data.researchborderareas || null,
        scopeofcollaboration: data.scopeofcollaboration || null,
        linkageestablishmentdate: data.linkageestablishmentdate || null,
        salientfeaturesoflinkage: data.salientfeaturesoflinkage || null,
        anexpagereference: data.anexpagereference || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await researchlinks.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.researchlinks.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: researchlinks.id,
      },
      data.documentaryevidence,
      options,
    );

    return researchlinks;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchlinks = await db.researchlinks.findByPk(id, options);

    await researchlinks.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await researchlinks.destroy({
      transaction,
    });

    return researchlinks;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const researchlinks = await db.researchlinks.findOne(
      { where },
      { transaction },
    );

    if (!researchlinks) {
      return researchlinks;
    }

    const output = researchlinks.get({ plain: true });

    output.categoryId = await researchlinks.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await researchlinks.getDocumentaryevidence({
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

      if (filter.typeoflinkage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'typeoflinkage',
            filter.typeoflinkage,
          ),
        };
      }

      if (filter.region) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('researchlinks', 'region', filter.region),
        };
      }

      if (filter.namehostinstitution) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'namehostinstitution',
            filter.namehostinstitution,
          ),
        };
      }

      if (filter.addresshostinstitution) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'addresshostinstitution',
            filter.addresshostinstitution,
          ),
        };
      }

      if (filter.countryofhostinstitution) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'countryofhostinstitution',
            filter.countryofhostinstitution,
          ),
        };
      }

      if (filter.nameofcollaboratingpartners) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'nameofcollaboratingpartners',
            filter.nameofcollaboratingpartners,
          ),
        };
      }

      if (filter.addressofcollaboratingpartners) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'addressofcollaboratingpartners',
            filter.addressofcollaboratingpartners,
          ),
        };
      }

      if (filter.countryofcollaboratingpartners) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'countryofcollaboratingpartners',
            filter.countryofcollaboratingpartners,
          ),
        };
      }

      if (filter.fieldofstudy) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'fieldofstudy',
            filter.fieldofstudy,
          ),
        };
      }

      if (filter.researchborderareas) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'researchborderareas',
            filter.researchborderareas,
          ),
        };
      }

      if (filter.scopeofcollaboration) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'scopeofcollaboration',
            filter.scopeofcollaboration,
          ),
        };
      }

      if (filter.linkageestablishmentdate) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'linkageestablishmentdate',
            filter.linkageestablishmentdate,
          ),
        };
      }

      if (filter.salientfeaturesoflinkage) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'salientfeaturesoflinkage',
            filter.salientfeaturesoflinkage,
          ),
        };
      }

      if (filter.anexpagereference) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchlinks',
            'anexpagereference',
            filter.anexpagereference,
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
          count: await db.researchlinks.count({
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
      : await db.researchlinks.findAndCountAll({
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
          Utils.ilike('researchlinks', 'id', query),
        ],
      };
    }

    const records = await db.researchlinks.findAll({
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
