const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CoursedetailsinfoDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const coursedetailsinfo = await db.coursedetailsinfo.create(
      {
        id: data.id || undefined,

        titleofcourse: data.titleofcourse || null,
        field: data.field || null,
        level: data.level || null,
        credithours: data.credithours || null,
        totalmodules: data.totalmodules || null,
        optionalcompulsory: data.optionalcompulsory || null,
        departmentsschoolsofferingthecourse:
          data.departmentsschoolsofferingthecourse || null,
        learningoutcomes: data.learningoutcomes || null,
        totalnoofcoursesoffered: data.totalnoofcoursesoffered || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await coursedetailsinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.coursedetailsinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: coursedetailsinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return coursedetailsinfo;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const coursedetailsinfoData = data.map((item, index) => ({
      id: item.id || undefined,

      titleofcourse: item.titleofcourse || null,
      field: item.field || null,
      level: item.level || null,
      credithours: item.credithours || null,
      totalmodules: item.totalmodules || null,
      optionalcompulsory: item.optionalcompulsory || null,
      departmentsschoolsofferingthecourse:
        item.departmentsschoolsofferingthecourse || null,
      learningoutcomes: item.learningoutcomes || null,
      totalnoofcoursesoffered: item.totalnoofcoursesoffered || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const coursedetailsinfo = await db.coursedetailsinfo.bulkCreate(
      coursedetailsinfoData,
      { transaction },
    );

    // For each item created, replace relation files

    for (let i = 0; i < coursedetailsinfo.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.coursedetailsinfo.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: coursedetailsinfo[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return coursedetailsinfo;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const coursedetailsinfo = await db.coursedetailsinfo.findByPk(
      id,
      {},
      { transaction },
    );

    await coursedetailsinfo.update(
      {
        titleofcourse: data.titleofcourse || null,
        field: data.field || null,
        level: data.level || null,
        credithours: data.credithours || null,
        totalmodules: data.totalmodules || null,
        optionalcompulsory: data.optionalcompulsory || null,
        departmentsschoolsofferingthecourse:
          data.departmentsschoolsofferingthecourse || null,
        learningoutcomes: data.learningoutcomes || null,
        totalnoofcoursesoffered: data.totalnoofcoursesoffered || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await coursedetailsinfo.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.coursedetailsinfo.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: coursedetailsinfo.id,
      },
      data.documentaryevidence,
      options,
    );

    return coursedetailsinfo;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const coursedetailsinfo = await db.coursedetailsinfo.findByPk(id, options);

    await coursedetailsinfo.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await coursedetailsinfo.destroy({
      transaction,
    });

    return coursedetailsinfo;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const coursedetailsinfo = await db.coursedetailsinfo.findOne(
      { where },
      { transaction },
    );

    if (!coursedetailsinfo) {
      return coursedetailsinfo;
    }

    const output = coursedetailsinfo.get({ plain: true });

    output.categoryId = await coursedetailsinfo.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await coursedetailsinfo.getDocumentaryevidence(
      {
        transaction,
      },
    );

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

      if (filter.titleofcourse) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'titleofcourse',
            filter.titleofcourse,
          ),
        };
      }

      if (filter.field) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('coursedetailsinfo', 'field', filter.field),
        };
      }

      if (filter.level) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('coursedetailsinfo', 'level', filter.level),
        };
      }

      if (filter.credithours) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'credithours',
            filter.credithours,
          ),
        };
      }

      if (filter.totalmodules) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'totalmodules',
            filter.totalmodules,
          ),
        };
      }

      if (filter.optionalcompulsory) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'optionalcompulsory',
            filter.optionalcompulsory,
          ),
        };
      }

      if (filter.departmentsschoolsofferingthecourse) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'departmentsschoolsofferingthecourse',
            filter.departmentsschoolsofferingthecourse,
          ),
        };
      }

      if (filter.learningoutcomes) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'learningoutcomes',
            filter.learningoutcomes,
          ),
        };
      }

      if (filter.totalnoofcoursesoffered) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'coursedetailsinfo',
            'totalnoofcoursesoffered',
            filter.totalnoofcoursesoffered,
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
          count: await db.coursedetailsinfo.count({
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
      : await db.coursedetailsinfo.findAndCountAll({
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
          Utils.ilike('coursedetailsinfo', 'id', query),
        ],
      };
    }

    const records = await db.coursedetailsinfo.findAll({
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
