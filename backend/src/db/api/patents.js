const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class PatentsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const patents = await db.patents.create(
      {
        id: data.id || undefined,

        leadinventorname: data.leadinventorname || null,
        leadinventordesignation: data.leadinventordesignation || null,
        leadinventordepartment: data.leadinventordepartment || null,
        titleofinvention: data.titleofinvention || null,
        categoryofip: data.categoryofip || null,
        developmentstatus: data.developmentstatus || null,
        keyscientificaspects: data.keyscientificaspects || null,
        commercialpartner: data.commercialpartner || null,
        patentfiledwithname: data.patentfiledwithname || null,
        patentfiledwithdate: data.patentfiledwithdate || null,
        fieldofuse: data.fieldofuse || null,
        nationalinternational: data.nationalinternational || null,
        durationofagreement: data.durationofagreement || null,
        financialsupport: data.financialsupport || null,
        previousdisclosur: data.previousdisclosur || null,
        dateoffilling: data.dateoffilling || null,
        statusofnegotiation: data.statusofnegotiation || null,
        licenseename: data.licenseename || null,
        licenseeorganization: data.licenseeorganization || null,
        annexpagerefno: data.annexpagerefno || null,
        remarks: data.remarks || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await patents.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.patents.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: patents.id,
      },
      data.documentaryevidence,
      options,
    );

    return patents;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const patentsData = data.map((item, index) => ({
      id: item.id || undefined,

      leadinventorname: item.leadinventorname || null,
      leadinventordesignation: item.leadinventordesignation || null,
      leadinventordepartment: item.leadinventordepartment || null,
      titleofinvention: item.titleofinvention || null,
      categoryofip: item.categoryofip || null,
      developmentstatus: item.developmentstatus || null,
      keyscientificaspects: item.keyscientificaspects || null,
      commercialpartner: item.commercialpartner || null,
      patentfiledwithname: item.patentfiledwithname || null,
      patentfiledwithdate: item.patentfiledwithdate || null,
      fieldofuse: item.fieldofuse || null,
      nationalinternational: item.nationalinternational || null,
      durationofagreement: item.durationofagreement || null,
      financialsupport: item.financialsupport || null,
      previousdisclosur: item.previousdisclosur || null,
      dateoffilling: item.dateoffilling || null,
      statusofnegotiation: item.statusofnegotiation || null,
      licenseename: item.licenseename || null,
      licenseeorganization: item.licenseeorganization || null,
      annexpagerefno: item.annexpagerefno || null,
      remarks: item.remarks || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const patents = await db.patents.bulkCreate(patentsData, { transaction });

    // For each item created, replace relation files

    for (let i = 0; i < patents.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.patents.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: patents[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return patents;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const patents = await db.patents.findByPk(id, {}, { transaction });

    await patents.update(
      {
        leadinventorname: data.leadinventorname || null,
        leadinventordesignation: data.leadinventordesignation || null,
        leadinventordepartment: data.leadinventordepartment || null,
        titleofinvention: data.titleofinvention || null,
        categoryofip: data.categoryofip || null,
        developmentstatus: data.developmentstatus || null,
        keyscientificaspects: data.keyscientificaspects || null,
        commercialpartner: data.commercialpartner || null,
        patentfiledwithname: data.patentfiledwithname || null,
        patentfiledwithdate: data.patentfiledwithdate || null,
        fieldofuse: data.fieldofuse || null,
        nationalinternational: data.nationalinternational || null,
        durationofagreement: data.durationofagreement || null,
        financialsupport: data.financialsupport || null,
        previousdisclosur: data.previousdisclosur || null,
        dateoffilling: data.dateoffilling || null,
        statusofnegotiation: data.statusofnegotiation || null,
        licenseename: data.licenseename || null,
        licenseeorganization: data.licenseeorganization || null,
        annexpagerefno: data.annexpagerefno || null,
        remarks: data.remarks || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await patents.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.patents.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: patents.id,
      },
      data.documentaryevidence,
      options,
    );

    return patents;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const patents = await db.patents.findByPk(id, options);

    await patents.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await patents.destroy({
      transaction,
    });

    return patents;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const patents = await db.patents.findOne({ where }, { transaction });

    if (!patents) {
      return patents;
    }

    const output = patents.get({ plain: true });

    output.categoryId = await patents.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await patents.getDocumentaryevidence({
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

      if (filter.leadinventorname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'leadinventorname',
            filter.leadinventorname,
          ),
        };
      }

      if (filter.leadinventordesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'leadinventordesignation',
            filter.leadinventordesignation,
          ),
        };
      }

      if (filter.leadinventordepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'leadinventordepartment',
            filter.leadinventordepartment,
          ),
        };
      }

      if (filter.titleofinvention) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'titleofinvention',
            filter.titleofinvention,
          ),
        };
      }

      if (filter.categoryofip) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('patents', 'categoryofip', filter.categoryofip),
        };
      }

      if (filter.developmentstatus) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'developmentstatus',
            filter.developmentstatus,
          ),
        };
      }

      if (filter.keyscientificaspects) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'keyscientificaspects',
            filter.keyscientificaspects,
          ),
        };
      }

      if (filter.commercialpartner) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'commercialpartner',
            filter.commercialpartner,
          ),
        };
      }

      if (filter.patentfiledwithname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'patentfiledwithname',
            filter.patentfiledwithname,
          ),
        };
      }

      if (filter.patentfiledwithdate) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'patentfiledwithdate',
            filter.patentfiledwithdate,
          ),
        };
      }

      if (filter.fieldofuse) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('patents', 'fieldofuse', filter.fieldofuse),
        };
      }

      if (filter.nationalinternational) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'nationalinternational',
            filter.nationalinternational,
          ),
        };
      }

      if (filter.durationofagreement) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'durationofagreement',
            filter.durationofagreement,
          ),
        };
      }

      if (filter.financialsupport) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'financialsupport',
            filter.financialsupport,
          ),
        };
      }

      if (filter.previousdisclosur) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'previousdisclosur',
            filter.previousdisclosur,
          ),
        };
      }

      if (filter.statusofnegotiation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'statusofnegotiation',
            filter.statusofnegotiation,
          ),
        };
      }

      if (filter.licenseename) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('patents', 'licenseename', filter.licenseename),
        };
      }

      if (filter.licenseeorganization) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'licenseeorganization',
            filter.licenseeorganization,
          ),
        };
      }

      if (filter.annexpagerefno) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'patents',
            'annexpagerefno',
            filter.annexpagerefno,
          ),
        };
      }

      if (filter.remarks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('patents', 'remarks', filter.remarks),
        };
      }

      if (filter.dateoffillingRange) {
        const [start, end] = filter.dateoffillingRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateoffilling: {
              ...where.dateoffilling,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateoffilling: {
              ...where.dateoffilling,
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
          count: await db.patents.count({
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
      : await db.patents.findAndCountAll({
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
          Utils.ilike('patents', 'id', query),
        ],
      };
    }

    const records = await db.patents.findAll({
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
