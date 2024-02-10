const express = require('express');

const StartupemplomentService = require('../services/startupemploment');
const StartupemplomentDBApi = require('../db/api/startupemploment');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Startupemploment:
 *        type: object
 *        properties:

 *          nameofstartup:
 *            type: string
 *            default: nameofstartup
 *          startupfacultymembername:
 *            type: string
 *            default: startupfacultymembername
 *          designationdepartment:
 *            type: string
 *            default: designationdepartment
 *          startupstatusincubatedgraduated:
 *            type: string
 *            default: startupstatusincubatedgraduated
 *          employeename:
 *            type: string
 *            default: employeename
 *          employmenttype:
 *            type: string
 *            default: employmenttype
 *          salarystipendhonorarium:
 *            type: string
 *            default: salarystipendhonorarium
 *          employeesince:
 *            type: string
 *            default: employeesince

 */

/**
 *  @swagger
 * tags:
 *   name: Startupemploment
 *   description: The Startupemploment managing API
 */

/**
 *  @swagger
 *  /api/startupemploment:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Add new item
 *      description: Add new item
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                data:
 *                  description: Data of the updated item
 *                  type: object
 *                  $ref: "#/components/schemas/Startupemploment"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupemploment"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        405:
 *          description: Invalid input data
 *        500:
 *          description: Some server error
 */

router.post(
  '/',
  wrapAsync(async (req, res) => {
    await StartupemplomentService.create(
      req.body.data,
      req.currentUser,
      true,
      req.headers.referer,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

router.post(
  '/bulk-import',
  wrapAsync(async (req, res) => {
    await StartupemplomentService.bulkImport(
      req,
      res,
      true,
      req.headers.referer,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupemploment/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Update the data of the selected item
 *      description: Update the data of the selected item
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Item ID to update
 *          required: true
 *          schema:
 *            type: string
 *      requestBody:
 *        description: Set new item data
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              properties:
 *                id:
 *                  description: ID of the updated item
 *                  type: string
 *                data:
 *                  description: Data of the updated item
 *                  type: object
 *                  $ref: "#/components/schemas/Startupemploment"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupemploment"
 *        400:
 *          description: Invalid ID supplied
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Item not found
 *        500:
 *          description: Some server error
 */

router.put(
  '/:id',
  wrapAsync(async (req, res) => {
    await StartupemplomentService.update(
      req.body.data,
      req.body.id,
      req.currentUser,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 * @swagger
 *  /api/startupemploment/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Delete the selected item
 *      description: Delete the selected item
 *      parameters:
 *        - in: path
 *          name: id
 *          description: Item ID to delete
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: The item was successfully deleted
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupemploment"
 *        400:
 *          description: Invalid ID supplied
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Item not found
 *        500:
 *          description: Some server error
 */

router.delete(
  '/:id',
  wrapAsync(async (req, res) => {
    await StartupemplomentService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupemploment:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Get all startupemploment
 *      description: Get all startupemploment
 *      responses:
 *        200:
 *          description: Startupemploment list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupemploment"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */

router.get(
  '/',
  wrapAsync(async (req, res) => {
    const filetype = req.query.filetype;
    const payload = await StartupemplomentDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofstartup',
        'startupfacultymembername',
        'designationdepartment',
        'startupstatusincubatedgraduated',
        'employeename',
        'employmenttype',
        'salarystipendhonorarium',
        'employeesince',
      ];
      const opts = { fields };
      try {
        const csv = parse(payload.rows, opts);
        res.status(200).attachment(csv);
        res.send(csv);
      } catch (err) {
        console.error(err);
      }
    } else {
      res.status(200).send(payload);
    }
  }),
);

/**
 *  @swagger
 *  /api/startupemploment/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Count all startupemploment
 *      description: Count all startupemploment
 *      responses:
 *        200:
 *          description: Startupemploment count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupemploment"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get(
  '/count',
  wrapAsync(async (req, res) => {
    const payload = await StartupemplomentDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupemploment/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Find all startupemploment that match search criteria
 *      description: Find all startupemploment that match search criteria
 *      responses:
 *        200:
 *          description: Startupemploment list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupemploment"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await StartupemplomentDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/startupemploment/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupemploment]
 *      summary: Get selected item
 *      description: Get selected item
 *      parameters:
 *        - in: path
 *          name: id
 *          description: ID of item to get
 *          required: true
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Selected item successfully received
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupemploment"
 *        400:
 *          description: Invalid ID supplied
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Item not found
 *        500:
 *          description: Some server error
 */

router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    const payload = await StartupemplomentDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
