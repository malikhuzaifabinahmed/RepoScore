const express = require('express');

const PolicyadvocacyService = require('../services/policyadvocacy');
const PolicyadvocacyDBApi = require('../db/api/policyadvocacy');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Policyadvocacy:
 *        type: object
 *        properties:

 *          nameofgovernmentbodypresented:
 *            type: string
 *            default: nameofgovernmentbodypresented
 *          nameofpi:
 *            type: string
 *            default: nameofpi
 *          pidesignation:
 *            type: string
 *            default: pidesignation
 *          pidepartment:
 *            type: string
 *            default: pidepartment
 *          areaadvocated:
 *            type: string
 *            default: areaadvocated
 *          description:
 *            type: string
 *            default: description
 *          namecoalitionpartner:
 *            type: string
 *            default: namecoalitionpartner
 *          issueverification:
 *            type: string
 *            default: issueverification
 *          backingresearchstatus:
 *            type: string
 *            default: backingresearchstatus
 *          advocacytoolsadopted:
 *            type: string
 *            default: advocacytoolsadopted
 *          anexpageno:
 *            type: string
 *            default: anexpageno

 */

/**
 *  @swagger
 * tags:
 *   name: Policyadvocacy
 *   description: The Policyadvocacy managing API
 */

/**
 *  @swagger
 *  /api/policyadvocacy:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
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
 *                  $ref: "#/components/schemas/Policyadvocacy"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Policyadvocacy"
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
    await PolicyadvocacyService.create(
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
    await PolicyadvocacyService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/policyadvocacy/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
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
 *                  $ref: "#/components/schemas/Policyadvocacy"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Policyadvocacy"
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
    await PolicyadvocacyService.update(
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
 *  /api/policyadvocacy/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
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
 *                $ref: "#/components/schemas/Policyadvocacy"
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
    await PolicyadvocacyService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/policyadvocacy:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
 *      summary: Get all policyadvocacy
 *      description: Get all policyadvocacy
 *      responses:
 *        200:
 *          description: Policyadvocacy list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Policyadvocacy"
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
    const payload = await PolicyadvocacyDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofgovernmentbodypresented',
        'nameofpi',
        'pidesignation',
        'pidepartment',
        'areaadvocated',
        'description',
        'namecoalitionpartner',
        'issueverification',
        'backingresearchstatus',
        'advocacytoolsadopted',
        'anexpageno',

        'dateofpresentation',
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
 *  /api/policyadvocacy/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
 *      summary: Count all policyadvocacy
 *      description: Count all policyadvocacy
 *      responses:
 *        200:
 *          description: Policyadvocacy count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Policyadvocacy"
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
    const payload = await PolicyadvocacyDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/policyadvocacy/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
 *      summary: Find all policyadvocacy that match search criteria
 *      description: Find all policyadvocacy that match search criteria
 *      responses:
 *        200:
 *          description: Policyadvocacy list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Policyadvocacy"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await PolicyadvocacyDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/policyadvocacy/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Policyadvocacy]
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
 *                $ref: "#/components/schemas/Policyadvocacy"
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
    const payload = await PolicyadvocacyDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
