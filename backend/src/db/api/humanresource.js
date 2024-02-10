const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class HumanresourceDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const humanresource = await db.humanresource.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        position: data.position || null,
        officephonenumber: data.officephonenumber || null,
        role: data.role || null,
        emailid: data.emailid || null,
        qualificationlevel: data.qualificationlevel || null,
        qualificationtitle: data.qualificationtitle || null,
        fieldofstudy: data.fieldofstudy || null,
        cnic: data.cnic || null,
        dateofappointment: data.dateofappointment || null,
        periodupto: data.periodupto || null,
        totalexperience: data.totalexperience || null,
        nonacademicexperience: data.nonacademicexperience || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await humanresource.setUniversityId(data.universityId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.humanresource.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: humanresource.id,
      },
      data.documentaryevidence,
      options,
    );

    return humanresource;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const humanresourceData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      position: item.position || null,
      officephonenumber: item.officephonenumber || null,
      role: item.role || null,
      emailid: item.emailid || null,
      qualificationlevel: item.qualificationlevel || null,
      qualificationtitle: item.qualificationtitle || null,
      fieldofstudy: item.fieldofstudy || null,
      cnic: item.cnic || null,
      dateofappointment: item.dateofappointment || null,
      periodupto: item.periodupto || null,
      totalexperience: item.totalexperience || null,
      nonacademicexperience: item.nonacademicexperience || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const humanresource = await db.humanresource.bulkCreate(humanresourceData, {
      transaction,
    });

    // For each item created, replace relation files

    for (let i = 0; i < humanresource.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.humanresource.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: humanresource[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return humanresource;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const humanresource = await db.humanresource.findByPk(
      id,
      {},
      { transaction },
    );

    await humanresource.update(
      {
        name: data.name || null,
        position: data.position || null,
        officephonenumber: data.officephonenumber || null,
        role: data.role || null,
        emailid: data.emailid || null,
        qualificationlevel: data.qualificationlevel || null,
        qualificationtitle: data.qualificationtitle || null,
        fieldofstudy: data.fieldofstudy || null,
        cnic: data.cnic || null,
        dateofappointment: data.dateofappointment || null,
        periodupto: data.periodupto || null,
        totalexperience: data.totalexperience || null,
        nonacademicexperience: data.nonacademicexperience || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await humanresource.setUniversityId(data.universityId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.humanresource.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: humanresource.id,
      },
      data.documentaryevidence,
      options,
    );

    return humanresource;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const humanresource = await db.humanresource.findByPk(id, options);

    await humanresource.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await humanresource.destroy({
      transaction,
    });

    return humanresource;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const humanresource = await db.humanresource.findOne(
      { where },
      { transaction },
    );

    if (!humanresource) {
      return humanresource;
    }

    const output = humanresource.get({ plain: true });

    output.universityId = await humanresource.getUniversityId({
      transaction,
    });

    output.documentaryevidence = await humanresource.getDocumentaryevidence({
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
        model: db.university,
        as: 'universityId',
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
          [Op.and]: Utils.ilike('humanresource', 'name', filter.name),
        };
      }

      if (filter.position) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('humanresource', 'position', filter.position),
        };
      }

      if (filter.officephonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'humanresource',
            'officephonenumber',
            filter.officephonenumber,
          ),
        };
      }

      if (filter.role) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('humanresource', 'role', filter.role),
        };
      }

      if (filter.emailid) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('humanresource', 'emailid', filter.emailid),
        };
      }

      if (filter.qualificationlevel) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'humanresource',
            'qualificationlevel',
            filter.qualificationlevel,
          ),
        };
      }

      if (filter.qualificationtitle) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'humanresource',
            'qualificationtitle',
            filter.qualificationtitle,
          ),
        };
      }

      if (filter.fieldofstudy) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'humanresource',
            'fieldofstudy',
            filter.fieldofstudy,
          ),
        };
      }

      if (filter.cnic) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('humanresource', 'cnic', filter.cnic),
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

      if (filter.perioduptoRange) {
        const [start, end] = filter.perioduptoRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            periodupto: {
              ...where.periodupto,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            periodupto: {
              ...where.periodupto,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.totalexperienceRange) {
        const [start, end] = filter.totalexperienceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            totalexperience: {
              ...where.totalexperience,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            totalexperience: {
              ...where.totalexperience,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.nonacademicexperienceRange) {
        const [start, end] = filter.nonacademicexperienceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            nonacademicexperience: {
              ...where.nonacademicexperience,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            nonacademicexperience: {
              ...where.nonacademicexperience,
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

      if (filter.universityId) {
        var listItems = filter.universityId.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          universityIdId: { [Op.or]: listItems },
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
          count: await db.humanresource.count({
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
      : await db.humanresource.findAndCountAll({
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
          Utils.ilike('humanresource', 'id', query),
        ],
      };
    }

    const records = await db.humanresource.findAll({
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
