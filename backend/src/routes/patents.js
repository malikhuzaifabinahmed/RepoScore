const express = require('express');

const PatentsService = require('../services/patents');
const PatentsDBApi = require('../db/api/patents');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Patents:
 *        type: object
 *        properties:

 *          leadinventorname:
 *            type: string
 *            default: leadinventorname
 *          leadinventordesignation:
 *            type: string
 *            default: leadinventordesignation
 *          leadinventordepartment:
 *            type: string
 *            default: leadinventordepartment
 *          titleofinvention:
 *            type: string
 *            default: titleofinvention
 *          categoryofip:
 *            type: string
 *            default: categoryofip
 *          developmentstatus:
 *            type: string
 *            default: developmentstatus
 *          keyscientificaspects:
 *            type: string
 *            default: keyscientificaspects
 *          commercialpartner:
 *            type: string
 *            default: commercialpartner
 *          patentfiledwithname:
 *            type: string
 *            default: patentfiledwithname
 *          patentfiledwithdate:
 *            type: string
 *            default: patentfiledwithdate
 *          fieldofuse:
 *            type: string
 *            default: fieldofuse
 *          nationalinternational:
 *            type: string
 *            default: nationalinternational
 *          durationofagreement:
 *            type: string
 *            default: durationofagreement
 *          financialsupport:
 *            type: string
 *            default: financialsupport
 *          previousdisclosur:
 *            type: string
 *            default: previousdisclosur
 *          statusofnegotiation:
 *            type: string
 *            default: statusofnegotiation
 *          licenseename:
 *            type: string
 *            default: licenseename
 *          licenseeorganization:
 *            type: string
 *            default: licenseeorganization
 *          annexpagerefno:
 *            type: string
 *            default: annexpagerefno
 *          remarks:
 *            type: string
 *            default: remarks

 */

/**
 *  @swagger
 * tags:
 *   name: Patents
 *   description: The Patents managing API
 */

/**
 *  @swagger
 *  /api/patents:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
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
 *                  $ref: "#/components/schemas/Patents"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Patents"
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
    await PatentsService.create(
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
    await PatentsService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/patents/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
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
 *                  $ref: "#/components/schemas/Patents"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Patents"
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
    await PatentsService.update(req.body.data, req.body.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 * @swagger
 *  /api/patents/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
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
 *                $ref: "#/components/schemas/Patents"
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
    await PatentsService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/patents:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
 *      summary: Get all patents
 *      description: Get all patents
 *      responses:
 *        200:
 *          description: Patents list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Patents"
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
    const payload = await PatentsDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'leadinventorname',
        'leadinventordesignation',
        'leadinventordepartment',
        'titleofinvention',
        'categoryofip',
        'developmentstatus',
        'keyscientificaspects',
        'commercialpartner',
        'patentfiledwithname',
        'patentfiledwithdate',
        'fieldofuse',
        'nationalinternational',
        'durationofagreement',
        'financialsupport',
        'previousdisclosur',
        'statusofnegotiation',
        'licenseename',
        'licenseeorganization',
        'annexpagerefno',
        'remarks',

        'dateoffilling',
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
 *  /api/patents/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
 *      summary: Count all patents
 *      description: Count all patents
 *      responses:
 *        200:
 *          description: Patents count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Patents"
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
    const payload = await PatentsDBApi.findAll(req.query, { countOnly: true });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/patents/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
 *      summary: Find all patents that match search criteria
 *      description: Find all patents that match search criteria
 *      responses:
 *        200:
 *          description: Patents list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Patents"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await PatentsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/patents/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Patents]
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
 *                $ref: "#/components/schemas/Patents"
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
    const payload = await PatentsDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
