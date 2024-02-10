const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class TrainingsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const trainings = await db.trainings.create(
      {
        id: data.id || undefined,

        titleoftraining: data.titleoftraining || null,
        dateofevent: data.dateofevent || null,
        numberofparticipants: data.numberofparticipants || null,
        majorfocusareaandoutcomes: data.majorfocusareaandoutcomes || null,
        audiencetype: data.audiencetype || null,
        organizer: data.organizer || null,
        nameoforicpersonalattended: data.nameoforicpersonalattended || null,
        detailsoforicpersonnelattended:
          data.detailsoforicpersonnelattended || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await trainings.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.trainings.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: trainings.id,
      },
      data.documentaryevidence,
      options,
    );

    return trainings;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const trainingsData = data.map((item, index) => ({
      id: item.id || undefined,

      titleoftraining: item.titleoftraining || null,
      dateofevent: item.dateofevent || null,
      numberofparticipants: item.numberofparticipants || null,
      majorfocusareaandoutcomes: item.majorfocusareaandoutcomes || null,
      audiencetype: item.audiencetype || null,
      organizer: item.organizer || null,
      nameoforicpersonalattended: item.nameoforicpersonalattended || null,
      detailsoforicpersonnelattended:
        item.detailsoforicpersonnelattended || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const trainings = await db.trainings.bulkCreate(trainingsData, {
      transaction,
    });

    // For each item created, replace relation files

    for (let i = 0; i < trainings.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.trainings.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: trainings[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return trainings;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const trainings = await db.trainings.findByPk(id, {}, { transaction });

    await trainings.update(
      {
        titleoftraining: data.titleoftraining || null,
        dateofevent: data.dateofevent || null,
        numberofparticipants: data.numberofparticipants || null,
        majorfocusareaandoutcomes: data.majorfocusareaandoutcomes || null,
        audiencetype: data.audiencetype || null,
        organizer: data.organizer || null,
        nameoforicpersonalattended: data.nameoforicpersonalattended || null,
        detailsoforicpersonnelattended:
          data.detailsoforicpersonnelattended || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await trainings.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.trainings.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: trainings.id,
      },
      data.documentaryevidence,
      options,
    );

    return trainings;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const trainings = await db.trainings.findByPk(id, options);

    await trainings.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await trainings.destroy({
      transaction,
    });

    return trainings;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const trainings = await db.trainings.findOne({ where }, { transaction });

    if (!trainings) {
      return trainings;
    }

    const output = trainings.get({ plain: true });

    output.categoryId = await trainings.getCategoryId({
      transaction,
    });

    output.documentaryevidence = await trainings.getDocumentaryevidence({
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

      if (filter.titleoftraining) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainings',
            'titleoftraining',
            filter.titleoftraining,
          ),
        };
      }

      if (filter.numberofparticipants) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainings',
            'numberofparticipants',
            filter.numberofparticipants,
          ),
        };
      }

      if (filter.majorfocusareaandoutcomes) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainings',
            'majorfocusareaandoutcomes',
            filter.majorfocusareaandoutcomes,
          ),
        };
      }

      if (filter.audiencetype) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainings',
            'audiencetype',
            filter.audiencetype,
          ),
        };
      }

      if (filter.organizer) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('trainings', 'organizer', filter.organizer),
        };
      }

      if (filter.nameoforicpersonalattended) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainings',
            'nameoforicpersonalattended',
            filter.nameoforicpersonalattended,
          ),
        };
      }

      if (filter.detailsoforicpersonnelattended) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'trainings',
            'detailsoforicpersonnelattended',
            filter.detailsoforicpersonnelattended,
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
          count: await db.trainings.count({
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
      : await db.trainings.findAndCountAll({
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
          Utils.ilike('trainings', 'id', query),
        ],
      };
    }

    const records = await db.trainings.findAll({
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
