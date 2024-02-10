const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class CategoriesDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const categories = await db.categories.create(
      {
        id: data.id || undefined,

        categoryname: data.categoryname || null,
        categorytype: data.categorytype || null,
        organization: data.organization || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return categories;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const categoriesData = data.map((item, index) => ({
      id: item.id || undefined,

      categoryname: item.categoryname || null,
      categorytype: item.categorytype || null,
      organization: item.organization || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const categories = await db.categories.bulkCreate(categoriesData, {
      transaction,
    });

    // For each item created, replace relation files

    return categories;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const categories = await db.categories.findByPk(id, {}, { transaction });

    await categories.update(
      {
        categoryname: data.categoryname || null,
        categorytype: data.categorytype || null,
        organization: data.organization || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return categories;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const categories = await db.categories.findByPk(id, options);

    await categories.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await categories.destroy({
      transaction,
    });

    return categories;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const categories = await db.categories.findOne({ where }, { transaction });

    if (!categories) {
      return categories;
    }

    const output = categories.get({ plain: true });

    output.activegraduatedstartupinfo_categoryId =
      await categories.getActivegraduatedstartupinfo_categoryId({
        transaction,
      });

    output.anualresearchrevenue_categoryId =
      await categories.getAnualresearchrevenue_categoryId({
        transaction,
      });

    output.bicfundinginfo_categoryId =
      await categories.getBicfundinginfo_categoryId({
        transaction,
      });

    output.bichumanresource_categoryId =
      await categories.getBichumanresource_categoryId({
        transaction,
      });

    output.bicserviceofferinginfo_categoryId =
      await categories.getBicserviceofferinginfo_categoryId({
        transaction,
      });

    output.bicsupportinfo_categoryId =
      await categories.getBicsupportinfo_categoryId({
        transaction,
      });

    output.colaborationagreement_categoryId =
      await categories.getColaborationagreement_categoryId({
        transaction,
      });

    output.commities_categoryId = await categories.getCommities_categoryId({
      transaction,
    });

    output.coursedetailsinfo_categoryId =
      await categories.getCoursedetailsinfo_categoryId({
        transaction,
      });

    output.engagementevents_categoryId =
      await categories.getEngagementevents_categoryId({
        transaction,
      });

    output.graduatedstartupfacilitationinfo_categoryId =
      await categories.getGraduatedstartupfacilitationinfo_categoryId({
        transaction,
      });

    output.honorsandawards_categoryId =
      await categories.getHonorsandawards_categoryId({
        transaction,
      });

    output.mentorshipinfo_categoryId =
      await categories.getMentorshipinfo_categoryId({
        transaction,
      });

    output.partnershipinfo_categoryId =
      await categories.getPartnershipinfo_categoryId({
        transaction,
      });

    output.patents_categoryId = await categories.getPatents_categoryId({
      transaction,
    });

    output.policyadvocacy_categoryId =
      await categories.getPolicyadvocacy_categoryId({
        transaction,
      });

    output.researchlinks_categoryId =
      await categories.getResearchlinks_categoryId({
        transaction,
      });

    output.researchpolicy_categoryId =
      await categories.getResearchpolicy_categoryId({
        transaction,
      });

    output.researchproposalandgrants_categoryId =
      await categories.getResearchproposalandgrants_categoryId({
        transaction,
      });

    output.spinoffstartups_categoryId =
      await categories.getSpinoffstartups_categoryId({
        transaction,
      });

    output.startupevents_categoryId =
      await categories.getStartupevents_categoryId({
        transaction,
      });

    output.startupincubation_categoryId =
      await categories.getStartupincubation_categoryId({
        transaction,
      });

    output.startupmentoring_categoryId =
      await categories.getStartupmentoring_categoryId({
        transaction,
      });

    output.startuprevenue_categoryId =
      await categories.getStartuprevenue_categoryId({
        transaction,
      });

    output.startupsappliedforpitching_categoryId =
      await categories.getStartupsappliedforpitching_categoryId({
        transaction,
      });

    output.startupsincubated_categoryId =
      await categories.getStartupsincubated_categoryId({
        transaction,
      });

    output.trainingcourseinfo_categoryId =
      await categories.getTrainingcourseinfo_categoryId({
        transaction,
      });

    output.trainings_categoryId = await categories.getTrainings_categoryId({
      transaction,
    });

    output.universityadvancedstudiesandresearchboard_categoryId =
      await categories.getUniversityadvancedstudiesandresearchboard_categoryId({
        transaction,
      });

    output.visits_categoryId = await categories.getVisits_categoryId({
      transaction,
    });

    output.workshopeventinfo_categoryId =
      await categories.getWorkshopeventinfo_categoryId({
        transaction,
      });

    output.startupemploment_categoryId =
      await categories.getStartupemploment_categoryId({
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
    let include = [];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.categoryname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'categories',
            'categoryname',
            filter.categoryname,
          ),
        };
      }

      if (filter.categorytype) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'categories',
            'categorytype',
            filter.categorytype,
          ),
        };
      }

      if (filter.organization) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'categories',
            'organization',
            filter.organization,
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
          count: await db.categories.count({
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
      : await db.categories.findAndCountAll({
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
          Utils.ilike('categories', 'id', query),
        ],
      };
    }

    const records = await db.categories.findAll({
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
