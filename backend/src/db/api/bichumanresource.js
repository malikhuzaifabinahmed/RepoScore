const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class BichumanresourceDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bichumanresource = await db.bichumanresource.create(
      {
        id: data.id || undefined,

        isbicsupportstaff: data.isbicsupportstaff || false,

        position: data.position || null,
        fulltimeparttime: data.fulltimeparttime || null,
        name: data.name || null,
        officephonenumber: data.officephonenumber || null,
        mobilenumber: data.mobilenumber || null,
        emailid: data.emailid || null,
        qualificationlevel: data.qualificationlevel || null,
        qualificationtitle: data.qualificationtitle || null,
        fieldofstudy: data.fieldofstudy || null,
        cnic: data.cnic || null,
        dateofappointment: data.dateofappointment || null,
        periodupto: data.periodupto || null,
        totalexperience: data.totalexperience || null,
        nonacademiaexperience: data.nonacademiaexperience || null,
        notificationofficeorderjoiningreportandcv:
          data.notificationofficeorderjoiningreportandcv || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bichumanresource.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bichumanresource.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bichumanresource.id,
      },
      data.documentaryevidence,
      options,
    );

    return bichumanresource;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const bichumanresourceData = data.map((item, index) => ({
      id: item.id || undefined,

      isbicsupportstaff: item.isbicsupportstaff || false,

      position: item.position || null,
      fulltimeparttime: item.fulltimeparttime || null,
      name: item.name || null,
      officephonenumber: item.officephonenumber || null,
      mobilenumber: item.mobilenumber || null,
      emailid: item.emailid || null,
      qualificationlevel: item.qualificationlevel || null,
      qualificationtitle: item.qualificationtitle || null,
      fieldofstudy: item.fieldofstudy || null,
      cnic: item.cnic || null,
      dateofappointment: item.dateofappointment || null,
      periodupto: item.periodupto || null,
      totalexperience: item.totalexperience || null,
      nonacademiaexperience: item.nonacademiaexperience || null,
      notificationofficeorderjoiningreportandcv:
        item.notificationofficeorderjoiningreportandcv || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const bichumanresource = await db.bichumanresource.bulkCreate(
      bichumanresourceData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < bichumanresource.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.bichumanresource.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: bichumanresource[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return bichumanresource;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bichumanresource = await db.bichumanresource.findByPk(
      id,
      {},
      { transaction },
    );

    await bichumanresource.update(
      {
        isbicsupportstaff: data.isbicsupportstaff || false,

        position: data.position || null,
        fulltimeparttime: data.fulltimeparttime || null,
        name: data.name || null,
        officephonenumber: data.officephonenumber || null,
        mobilenumber: data.mobilenumber || null,
        emailid: data.emailid || null,
        qualificationlevel: data.qualificationlevel || null,
        qualificationtitle: data.qualificationtitle || null,
        fieldofstudy: data.fieldofstudy || null,
        cnic: data.cnic || null,
        dateofappointment: data.dateofappointment || null,
        periodupto: data.periodupto || null,
        totalexperience: data.totalexperience || null,
        nonacademiaexperience: data.nonacademiaexperience || null,
        notificationofficeorderjoiningreportandcv:
          data.notificationofficeorderjoiningreportandcv || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await bichumanresource.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.bichumanresource.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: bichumanresource.id,
      },
      data.documentaryevidence,
      options,
    );

    return bichumanresource;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const bichumanresource = await db.bichumanresource.findByPk(id, options);

    await bichumanresource.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await bichumanresource.destroy({
      transaction,
    });

    return bichumanresource;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const bichumanresource = await db.bichumanresource.findOne(
      { where },
      { transaction },
    );

    if (!bichumanresource) {
      return bichumanresource;
    }

    const output = bichumanresource.get({ plain: true });

    output.categoryId = await bichumanresource.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await bichumanresource.getDocumentaryevidence({
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

      if (filter.position) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'position',
            filter.position,
          ),
        };
      }

      if (filter.fulltimeparttime) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'fulltimeparttime',
            filter.fulltimeparttime,
          ),
        };
      }

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('bichumanresource', 'name', filter.name),
        };
      }

      if (filter.officephonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'officephonenumber',
            filter.officephonenumber,
          ),
        };
      }

      if (filter.mobilenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'mobilenumber',
            filter.mobilenumber,
          ),
        };
      }

      if (filter.emailid) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('bichumanresource', 'emailid', filter.emailid),
        };
      }

      if (filter.qualificationlevel) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'qualificationlevel',
            filter.qualificationlevel,
          ),
        };
      }

      if (filter.qualificationtitle) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'qualificationtitle',
            filter.qualificationtitle,
          ),
        };
      }

      if (filter.fieldofstudy) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'fieldofstudy',
            filter.fieldofstudy,
          ),
        };
      }

      if (filter.cnic) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('bichumanresource', 'cnic', filter.cnic),
        };
      }

      if (filter.periodupto) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'periodupto',
            filter.periodupto,
          ),
        };
      }

      if (filter.totalexperience) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'totalexperience',
            filter.totalexperience,
          ),
        };
      }

      if (filter.nonacademiaexperience) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'nonacademiaexperience',
            filter.nonacademiaexperience,
          ),
        };
      }

      if (filter.notificationofficeorderjoiningreportandcv) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'bichumanresource',
            'notificationofficeorderjoiningreportandcv',
            filter.notificationofficeorderjoiningreportandcv,
          ),
        };
      }

      if (filter.dateofappointmentRange) {
        const [start, end] = filter.dateofappointmentRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofappointment: {
              ...where.dateofappointment,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofappointment: {
              ...where.dateofappointment,
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

      if (filter.isbicsupportstaff) {
        where = {
          ...where,
          isbicsupportstaff: filter.isbicsupportstaff,
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
          count: await db.bichumanresource.count({
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
      : await db.bichumanresource.findAndCountAll({
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
          Utils.ilike('bichumanresource', 'id', query),
        ],
      };
    }

    const records = await db.bichumanresource.findAll({
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
