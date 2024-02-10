const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class ResearchproposalandgrantsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchproposalandgrants = await db.researchproposalandgrants.create(
      {
        id: data.id || undefined,

        approvedorrequiredmodificationordifferedordisapproved:
          data.approvedorrequiredmodificationordifferedordisapproved || null,
        thematicarea: data.thematicarea || null,
        nameofresearch: data.nameofresearch || null,
        nameofpi: data.nameofpi || null,
        pidesignation: data.pidesignation || null,
        pidepartment: data.pidepartment || null,
        nameofcopi: data.nameofcopi || null,
        copidesignation: data.copidesignation || null,
        copidepartment: data.copidepartment || null,
        titleofresearchproposal: data.titleofresearchproposal || null,
        durationstartingandendingdate:
          data.durationstartingandendingdate || null,
        totalfundingrequestedrs: data.totalfundingrequestedrs || null,
        totalfundingapproved: data.totalfundingapproved || null,
        totalfundingreleased: data.totalfundingreleased || null,
        collaboratingpartnerdetailsifany:
          data.collaboratingpartnerdetailsifany || null,
        cofundingpartnerdetailsifany: data.cofundingpartnerdetailsifany || null,
        nameofsponsringagency: data.nameofsponsringagency || null,
        addressofsponsoringagency: data.addressofsponsoringagency || null,
        countryofsponsoringagency: data.countryofsponsoringagency || null,
        status: data.status || null,
        remarks: data.remarks || null,
        relatedinformation: data.relatedinformation || null,
        keyprojectdeliverables: data.keyprojectdeliverables || null,
        oricoverheadinapprovedfunding:
          data.oricoverheadinapprovedfunding || null,
        dateofcontract: data.dateofcontract || null,
        dateofapproval: data.dateofapproval || null,
        dateofprojectcompletion: data.dateofprojectcompletion || null,
        totalfundingutilized: data.totalfundingutilized || null,
        approved: data.approved || false,

        dateofproposalsubmission: data.dateofproposalsubmission || null,
        dateofreview: data.dateofreview || null,
        statusofirbmeeting: data.statusofirbmeeting || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await researchproposalandgrants.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.researchproposalandgrants.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: researchproposalandgrants.id,
      },
      data.documentaryevidence,
      options,
    );

    return researchproposalandgrants;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const researchproposalandgrantsData = data.map((item, index) => ({
      id: item.id || undefined,

      approvedorrequiredmodificationordifferedordisapproved:
        item.approvedorrequiredmodificationordifferedordisapproved || null,
      thematicarea: item.thematicarea || null,
      nameofresearch: item.nameofresearch || null,
      nameofpi: item.nameofpi || null,
      pidesignation: item.pidesignation || null,
      pidepartment: item.pidepartment || null,
      nameofcopi: item.nameofcopi || null,
      copidesignation: item.copidesignation || null,
      copidepartment: item.copidepartment || null,
      titleofresearchproposal: item.titleofresearchproposal || null,
      durationstartingandendingdate: item.durationstartingandendingdate || null,
      totalfundingrequestedrs: item.totalfundingrequestedrs || null,
      totalfundingapproved: item.totalfundingapproved || null,
      totalfundingreleased: item.totalfundingreleased || null,
      collaboratingpartnerdetailsifany:
        item.collaboratingpartnerdetailsifany || null,
      cofundingpartnerdetailsifany: item.cofundingpartnerdetailsifany || null,
      nameofsponsringagency: item.nameofsponsringagency || null,
      addressofsponsoringagency: item.addressofsponsoringagency || null,
      countryofsponsoringagency: item.countryofsponsoringagency || null,
      status: item.status || null,
      remarks: item.remarks || null,
      relatedinformation: item.relatedinformation || null,
      keyprojectdeliverables: item.keyprojectdeliverables || null,
      oricoverheadinapprovedfunding: item.oricoverheadinapprovedfunding || null,
      dateofcontract: item.dateofcontract || null,
      dateofapproval: item.dateofapproval || null,
      dateofprojectcompletion: item.dateofprojectcompletion || null,
      totalfundingutilized: item.totalfundingutilized || null,
      approved: item.approved || false,

      dateofproposalsubmission: item.dateofproposalsubmission || null,
      dateofreview: item.dateofreview || null,
      statusofirbmeeting: item.statusofirbmeeting || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const researchproposalandgrants =
      await db.researchproposalandgrants.bulkCreate(
        researchproposalandgrantsData,
        { transaction },
      );

    // For each item created, replace relation files

    for (let i = 0; i < researchproposalandgrants.length; i++) {
      await FileDBApi.replaceRelationFiles(
        {
          belongsTo: db.researchproposalandgrants.getTableName(),
          belongsToColumn: 'documentaryevidence',
          belongsToId: researchproposalandgrants[i].id,
        },
        data[i].documentaryevidence,
        options,
      );
    }

    return researchproposalandgrants;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchproposalandgrants =
      await db.researchproposalandgrants.findByPk(id, {}, { transaction });

    await researchproposalandgrants.update(
      {
        approvedorrequiredmodificationordifferedordisapproved:
          data.approvedorrequiredmodificationordifferedordisapproved || null,
        thematicarea: data.thematicarea || null,
        nameofresearch: data.nameofresearch || null,
        nameofpi: data.nameofpi || null,
        pidesignation: data.pidesignation || null,
        pidepartment: data.pidepartment || null,
        nameofcopi: data.nameofcopi || null,
        copidesignation: data.copidesignation || null,
        copidepartment: data.copidepartment || null,
        titleofresearchproposal: data.titleofresearchproposal || null,
        durationstartingandendingdate:
          data.durationstartingandendingdate || null,
        totalfundingrequestedrs: data.totalfundingrequestedrs || null,
        totalfundingapproved: data.totalfundingapproved || null,
        totalfundingreleased: data.totalfundingreleased || null,
        collaboratingpartnerdetailsifany:
          data.collaboratingpartnerdetailsifany || null,
        cofundingpartnerdetailsifany: data.cofundingpartnerdetailsifany || null,
        nameofsponsringagency: data.nameofsponsringagency || null,
        addressofsponsoringagency: data.addressofsponsoringagency || null,
        countryofsponsoringagency: data.countryofsponsoringagency || null,
        status: data.status || null,
        remarks: data.remarks || null,
        relatedinformation: data.relatedinformation || null,
        keyprojectdeliverables: data.keyprojectdeliverables || null,
        oricoverheadinapprovedfunding:
          data.oricoverheadinapprovedfunding || null,
        dateofcontract: data.dateofcontract || null,
        dateofapproval: data.dateofapproval || null,
        dateofprojectcompletion: data.dateofprojectcompletion || null,
        totalfundingutilized: data.totalfundingutilized || null,
        approved: data.approved || false,

        dateofproposalsubmission: data.dateofproposalsubmission || null,
        dateofreview: data.dateofreview || null,
        statusofirbmeeting: data.statusofirbmeeting || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await researchproposalandgrants.setCategoryId(data.categoryId || null, {
      transaction,
    });

    await FileDBApi.replaceRelationFiles(
      {
        belongsTo: db.researchproposalandgrants.getTableName(),
        belongsToColumn: 'documentaryevidence',
        belongsToId: researchproposalandgrants.id,
      },
      data.documentaryevidence,
      options,
    );

    return researchproposalandgrants;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const researchproposalandgrants =
      await db.researchproposalandgrants.findByPk(id, options);

    await researchproposalandgrants.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await researchproposalandgrants.destroy({
      transaction,
    });

    return researchproposalandgrants;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const researchproposalandgrants =
      await db.researchproposalandgrants.findOne({ where }, { transaction });

    if (!researchproposalandgrants) {
      return researchproposalandgrants;
    }

    const output = researchproposalandgrants.get({ plain: true });

    output.categoryId = await researchproposalandgrants.getCategoryId({
      transaction,
    });

    output.documentaryevidence =
      await researchproposalandgrants.getDocumentaryevidence({
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

      if (filter.approvedorrequiredmodificationordifferedordisapproved) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'approvedorrequiredmodificationordifferedordisapproved',
            filter.approvedorrequiredmodificationordifferedordisapproved,
          ),
        };
      }

      if (filter.thematicarea) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'thematicarea',
            filter.thematicarea,
          ),
        };
      }

      if (filter.nameofresearch) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'nameofresearch',
            filter.nameofresearch,
          ),
        };
      }

      if (filter.nameofpi) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'nameofpi',
            filter.nameofpi,
          ),
        };
      }

      if (filter.pidesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'pidesignation',
            filter.pidesignation,
          ),
        };
      }

      if (filter.pidepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'pidepartment',
            filter.pidepartment,
          ),
        };
      }

      if (filter.nameofcopi) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'nameofcopi',
            filter.nameofcopi,
          ),
        };
      }

      if (filter.copidesignation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'copidesignation',
            filter.copidesignation,
          ),
        };
      }

      if (filter.copidepartment) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'copidepartment',
            filter.copidepartment,
          ),
        };
      }

      if (filter.titleofresearchproposal) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'titleofresearchproposal',
            filter.titleofresearchproposal,
          ),
        };
      }

      if (filter.durationstartingandendingdate) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'durationstartingandendingdate',
            filter.durationstartingandendingdate,
          ),
        };
      }

      if (filter.totalfundingrequestedrs) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'totalfundingrequestedrs',
            filter.totalfundingrequestedrs,
          ),
        };
      }

      if (filter.totalfundingapproved) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'totalfundingapproved',
            filter.totalfundingapproved,
          ),
        };
      }

      if (filter.totalfundingreleased) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'totalfundingreleased',
            filter.totalfundingreleased,
          ),
        };
      }

      if (filter.collaboratingpartnerdetailsifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'collaboratingpartnerdetailsifany',
            filter.collaboratingpartnerdetailsifany,
          ),
        };
      }

      if (filter.cofundingpartnerdetailsifany) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'cofundingpartnerdetailsifany',
            filter.cofundingpartnerdetailsifany,
          ),
        };
      }

      if (filter.nameofsponsringagency) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'nameofsponsringagency',
            filter.nameofsponsringagency,
          ),
        };
      }

      if (filter.addressofsponsoringagency) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'addressofsponsoringagency',
            filter.addressofsponsoringagency,
          ),
        };
      }

      if (filter.countryofsponsoringagency) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'countryofsponsoringagency',
            filter.countryofsponsoringagency,
          ),
        };
      }

      if (filter.status) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'status',
            filter.status,
          ),
        };
      }

      if (filter.remarks) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'remarks',
            filter.remarks,
          ),
        };
      }

      if (filter.relatedinformation) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'relatedinformation',
            filter.relatedinformation,
          ),
        };
      }

      if (filter.keyprojectdeliverables) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'keyprojectdeliverables',
            filter.keyprojectdeliverables,
          ),
        };
      }

      if (filter.oricoverheadinapprovedfunding) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'oricoverheadinapprovedfunding',
            filter.oricoverheadinapprovedfunding,
          ),
        };
      }

      if (filter.totalfundingutilized) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'totalfundingutilized',
            filter.totalfundingutilized,
          ),
        };
      }

      if (filter.statusofirbmeeting) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'researchproposalandgrants',
            'statusofirbmeeting',
            filter.statusofirbmeeting,
          ),
        };
      }

      if (filter.dateofcontractRange) {
        const [start, end] = filter.dateofcontractRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofcontract: {
              ...where.dateofcontract,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofcontract: {
              ...where.dateofcontract,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateofapprovalRange) {
        const [start, end] = filter.dateofapprovalRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofapproval: {
              ...where.dateofapproval,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofapproval: {
              ...where.dateofapproval,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateofprojectcompletionRange) {
        const [start, end] = filter.dateofprojectcompletionRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofprojectcompletion: {
              ...where.dateofprojectcompletion,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofprojectcompletion: {
              ...where.dateofprojectcompletion,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateofproposalsubmissionRange) {
        const [start, end] = filter.dateofproposalsubmissionRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofproposalsubmission: {
              ...where.dateofproposalsubmission,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofproposalsubmission: {
              ...where.dateofproposalsubmission,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.dateofreviewRange) {
        const [start, end] = filter.dateofreviewRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            dateofreview: {
              ...where.dateofreview,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            dateofreview: {
              ...where.dateofreview,
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

      if (filter.approved) {
        where = {
          ...where,
          approved: filter.approved,
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
          count: await db.researchproposalandgrants.count({
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
      : await db.researchproposalandgrants.findAndCountAll({
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
          Utils.ilike('researchproposalandgrants', 'id', query),
        ],
      };
    }

    const records = await db.researchproposalandgrants.findAll({
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
