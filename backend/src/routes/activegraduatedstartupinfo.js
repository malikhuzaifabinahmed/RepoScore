const express = require('express');

const ActivegraduatedstartupinfoService = require('../services/activegraduatedstartupinfo');
const ActivegraduatedstartupinfoDBApi = require('../db/api/activegraduatedstartupinfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Activegraduatedstartupinfo:
 *        type: object
 *        properties:

 *          nameofgraduatedstartup:
 *            type: string
 *            default: nameofgraduatedstartup
 *          companybriefidea:
 *            type: string
 *            default: companybriefidea
 *          currentstatusactiveregisteredconcernaccelerated:
 *            type: string
 *            default: currentstatusactiveregisteredconcernaccelerated
 *          networthofstartupaverageyearlyrevenue:
 *            type: string
 *            default: networthofstartupaverageyearlyrevenue
 *          ipoacquisitionamalgamationifany:
 *            type: string
 *            default: ipoacquisitionamalgamationifany
 *          noofemployeeswithstartup:
 *            type: string
 *            default: noofemployeeswithstartup
 *          survivalrateofgraduatedstartups:
 *            type: string
 *            default: survivalrateofgraduatedstartups
 *          totalstartupsactiveaftergraduation:
 *            type: string
 *            default: totalstartupsactiveaftergraduation
 *          totalstartupshavingipoacquisition:
 *            type: string
 *            default: totalstartupshavingipoacquisition

 */

/**
 *  @swagger
 * tags:
 *   name: Activegraduatedstartupinfo
 *   description: The Activegraduatedstartupinfo managing API
 */

/**
 *  @swagger
 *  /api/activegraduatedstartupinfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
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
 *                  $ref: "#/components/schemas/Activegraduatedstartupinfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Activegraduatedstartupinfo"
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
    await ActivegraduatedstartupinfoService.create(
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
    await ActivegraduatedstartupinfoService.bulkImport(
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
 *  /api/activegraduatedstartupinfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
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
 *                  $ref: "#/components/schemas/Activegraduatedstartupinfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Activegraduatedstartupinfo"
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
    await ActivegraduatedstartupinfoService.update(
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
 *  /api/activegraduatedstartupinfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
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
 *                $ref: "#/components/schemas/Activegraduatedstartupinfo"
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
    await ActivegraduatedstartupinfoService.remove(
      req.params.id,
      req.currentUser,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/activegraduatedstartupinfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
 *      summary: Get all activegraduatedstartupinfo
 *      description: Get all activegraduatedstartupinfo
 *      responses:
 *        200:
 *          description: Activegraduatedstartupinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Activegraduatedstartupinfo"
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
    const payload = await ActivegraduatedstartupinfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofgraduatedstartup',
        'companybriefidea',
        'currentstatusactiveregisteredconcernaccelerated',
        'networthofstartupaverageyearlyrevenue',
        'ipoacquisitionamalgamationifany',
        'noofemployeeswithstartup',
        'survivalrateofgraduatedstartups',
        'totalstartupsactiveaftergraduation',
        'totalstartupshavingipoacquisition',

        'dateofgraduation',
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
 *  /api/activegraduatedstartupinfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
 *      summary: Count all activegraduatedstartupinfo
 *      description: Count all activegraduatedstartupinfo
 *      responses:
 *        200:
 *          description: Activegraduatedstartupinfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Activegraduatedstartupinfo"
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
    const payload = await ActivegraduatedstartupinfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/activegraduatedstartupinfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
 *      summary: Find all activegraduatedstartupinfo that match search criteria
 *      description: Find all activegraduatedstartupinfo that match search criteria
 *      responses:
 *        200:
 *          description: Activegraduatedstartupinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Activegraduatedstartupinfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await ActivegraduatedstartupinfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/activegraduatedstartupinfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Activegraduatedstartupinfo]
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
 *                $ref: "#/components/schemas/Activegraduatedstartupinfo"
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
    const payload = await ActivegraduatedstartupinfoDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
