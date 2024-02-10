const db = require('../db/models');
const GraduatedstartupfacilitationinfoDBApi = require('../db/api/graduatedstartupfacilitationinfo');
const processFile = require('../middlewares/upload');
const csv = require('csv-parser');
const axios = require('axios');
const config = require('../config');
const stream = require('stream');

module.exports = class GraduatedstartupfacilitationinfoService {
  static async create(data, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      await GraduatedstartupfacilitationinfoDBApi.create(data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async bulkImport(req, res, sendInvitationEmails = true, host) {
    const transaction = await db.sequelize.transaction();

    try {
      await processFile(req, res);
      const bufferStream = new stream.PassThrough();
      const results = [];

      await bufferStream.end(Buffer.from(req.file.buffer, 'utf-8')); // convert Buffer to Stream

      await new Promise((resolve, reject) => {
        bufferStream
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', async () => {
            console.log('CSV results', results);
            resolve();
          })
          .on('error', (error) => reject(error));
      });

      await GraduatedstartupfacilitationinfoDBApi.bulkImport(results, {
        transaction,
        ignoreDuplicates: true,
        validate: true,
        currentUser: req.currentUser,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async update(data, id, currentUser) {
    const transaction = await db.sequelize.transaction();
    try {
      let graduatedstartupfacilitationinfo =
        await GraduatedstartupfacilitationinfoDBApi.findBy(
          { id },
          { transaction },
        );

      if (!graduatedstartupfacilitationinfo) {
        throw new ValidationError('graduatedstartupfacilitationinfoNotFound');
      }

      await GraduatedstartupfacilitationinfoDBApi.update(id, data, {
        currentUser,
        transaction,
      });

      await transaction.commit();
      return graduatedstartupfacilitationinfo;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  static async remove(id, currentUser) {
    const transaction = await db.sequelize.transaction();

    try {
      if (currentUser.app_role?.name !== config.roles.admin) {
        throw new ValidationError('errors.forbidden.message');
      }

      await GraduatedstartupfacilitationinfoDBApi.remove(id, {
        currentUser,
        transaction,
      });

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
