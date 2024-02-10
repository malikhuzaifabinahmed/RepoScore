const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class UniversityDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const university = await db.university.create(
      {
        id: data.id || undefined,

        name: data.name || null,
        province: data.province || null,
        city: data.city || null,
        sector: data.sector || null,
        postaladdress: data.postaladdress || null,
        universityheadposition: data.universityheadposition || null,
        universityheadname: data.universityheadname || null,
        universityheademail: data.universityheademail || null,
        universityheadphonenumber: data.universityheadphonenumber || null,
        registrarname: data.registrarname || null,
        registraremail: data.registraremail || null,
        registrarphonenumber: data.registrarphonenumber || null,
        registrarpaemail: data.registrarpaemail || null,
        registrarpaphonenumber: data.registrarpaphonenumber || null,
        totalnumberofsanctionedfaculityposts:
          data.totalnumberofsanctionedfaculityposts || null,
        totalnumberoffaculty: data.totalnumberoffaculty || null,
        totalnumberofphdfaculty: data.totalnumberofphdfaculty || null,
        totalnumberofvacantfacultyposts:
          data.totalnumberofvacantfacultyposts || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return university;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const universityData = data.map((item, index) => ({
      id: item.id || undefined,

      name: item.name || null,
      province: item.province || null,
      city: item.city || null,
      sector: item.sector || null,
      postaladdress: item.postaladdress || null,
      universityheadposition: item.universityheadposition || null,
      universityheadname: item.universityheadname || null,
      universityheademail: item.universityheademail || null,
      universityheadphonenumber: item.universityheadphonenumber || null,
      registrarname: item.registrarname || null,
      registraremail: item.registraremail || null,
      registrarphonenumber: item.registrarphonenumber || null,
      registrarpaemail: item.registrarpaemail || null,
      registrarpaphonenumber: item.registrarpaphonenumber || null,
      totalnumberofsanctionedfaculityposts:
        item.totalnumberofsanctionedfaculityposts || null,
      totalnumberoffaculty: item.totalnumberoffaculty || null,
      totalnumberofphdfaculty: item.totalnumberofphdfaculty || null,
      totalnumberofvacantfacultyposts:
        item.totalnumberofvacantfacultyposts || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const university = await db.university.bulkCreate(universityData, {
      transaction,
    });

    // For each item created, replace relation files

    return university;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const university = await db.university.findByPk(id, {}, { transaction });

    await university.update(
      {
        name: data.name || null,
        province: data.province || null,
        city: data.city || null,
        sector: data.sector || null,
        postaladdress: data.postaladdress || null,
        universityheadposition: data.universityheadposition || null,
        universityheadname: data.universityheadname || null,
        universityheademail: data.universityheademail || null,
        universityheadphonenumber: data.universityheadphonenumber || null,
        registrarname: data.registrarname || null,
        registraremail: data.registraremail || null,
        registrarphonenumber: data.registrarphonenumber || null,
        registrarpaemail: data.registrarpaemail || null,
        registrarpaphonenumber: data.registrarpaphonenumber || null,
        totalnumberofsanctionedfaculityposts:
          data.totalnumberofsanctionedfaculityposts || null,
        totalnumberoffaculty: data.totalnumberoffaculty || null,
        totalnumberofphdfaculty: data.totalnumberofphdfaculty || null,
        totalnumberofvacantfacultyposts:
          data.totalnumberofvacantfacultyposts || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    return university;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const university = await db.university.findByPk(id, options);

    await university.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await university.destroy({
      transaction,
    });

    return university;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const university = await db.university.findOne({ where }, { transaction });

    if (!university) {
      return university;
    }

    const output = university.get({ plain: true });

    output.humanresource_universityId =
      await university.getHumanresource_universityId({
        transaction,
      });

    output.oricdata_universityId = await university.getOricdata_universityId({
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

      if (filter.name) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('university', 'name', filter.name),
        };
      }

      if (filter.province) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('university', 'province', filter.province),
        };
      }

      if (filter.city) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('university', 'city', filter.city),
        };
      }

      if (filter.sector) {
        where = {
          ...where,
          [Op.and]: Utils.ilike('university', 'sector', filter.sector),
        };
      }

      if (filter.postaladdress) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'postaladdress',
            filter.postaladdress,
          ),
        };
      }

      if (filter.universityheadposition) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'universityheadposition',
            filter.universityheadposition,
          ),
        };
      }

      if (filter.universityheadname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'universityheadname',
            filter.universityheadname,
          ),
        };
      }

      if (filter.universityheademail) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'universityheademail',
            filter.universityheademail,
          ),
        };
      }

      if (filter.universityheadphonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'universityheadphonenumber',
            filter.universityheadphonenumber,
          ),
        };
      }

      if (filter.registrarname) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'registrarname',
            filter.registrarname,
          ),
        };
      }

      if (filter.registraremail) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'registraremail',
            filter.registraremail,
          ),
        };
      }

      if (filter.registrarphonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'registrarphonenumber',
            filter.registrarphonenumber,
          ),
        };
      }

      if (filter.registrarpaemail) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'registrarpaemail',
            filter.registrarpaemail,
          ),
        };
      }

      if (filter.registrarpaphonenumber) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'registrarpaphonenumber',
            filter.registrarpaphonenumber,
          ),
        };
      }

      if (filter.totalnumberofsanctionedfaculityposts) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'totalnumberofsanctionedfaculityposts',
            filter.totalnumberofsanctionedfaculityposts,
          ),
        };
      }

      if (filter.totalnumberoffaculty) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'totalnumberoffaculty',
            filter.totalnumberoffaculty,
          ),
        };
      }

      if (filter.totalnumberofphdfaculty) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'totalnumberofphdfaculty',
            filter.totalnumberofphdfaculty,
          ),
        };
      }

      if (filter.totalnumberofvacantfacultyposts) {
        where = {
          ...where,
          [Op.and]: Utils.ilike(
            'university',
            'totalnumberofvacantfacultyposts',
            filter.totalnumberofvacantfacultyposts,
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
          count: await db.university.count({
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
      : await db.university.findAndCountAll({
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
          Utils.ilike('university', 'id', query),
        ],
      };
    }

    const records = await db.university.findAll({
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
