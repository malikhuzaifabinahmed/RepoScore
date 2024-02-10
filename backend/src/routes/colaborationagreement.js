const express = require('express');

const ColaborationagreementService = require('../services/colaborationagreement');
const ColaborationagreementDBApi = require('../db/api/colaborationagreement');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Colaborationagreement:
 *        type: object
 *        properties:

 *          typeoflinkages:
 *            type: string
 *            default: typeoflinkages
 *          nationalinternational:
 *            type: string
 *            default: nationalinternational
 *          hostcountryname:
 *            type: string
 *            default: hostcountryname
 *          hostcountryaddress:
 *            type: string
 *            default: hostcountryaddress
 *          keyinitiativestobeundertaken:
 *            type: string
 *            default: keyinitiativestobeundertaken
 *          field:
 *            type: string
 *            default: field
 *          scopeofcollaboration:
 *            type: string
 *            default: scopeofcollaboration
 *          financialsupport:
 *            type: string
 *            default: financialsupport

 */

/**
 *  @swagger
 * tags:
 *   name: Colaborationagreement
 *   description: The Colaborationagreement managing API
 */

/**
 *  @swagger
 *  /api/colaborationagreement:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
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
 *                  $ref: "#/components/schemas/Colaborationagreement"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Colaborationagreement"
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
    await ColaborationagreementService.create(
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
    await ColaborationagreementService.bulkImport(
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
 *  /api/colaborationagreement/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
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
 *                  $ref: "#/components/schemas/Colaborationagreement"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Colaborationagreement"
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
    await ColaborationagreementService.update(
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
 *  /api/colaborationagreement/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
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
 *                $ref: "#/components/schemas/Colaborationagreement"
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
    await ColaborationagreementService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/colaborationagreement:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
 *      summary: Get all colaborationagreement
 *      description: Get all colaborationagreement
 *      responses:
 *        200:
 *          description: Colaborationagreement list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Colaborationagreement"
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
    const payload = await ColaborationagreementDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'typeoflinkages',
        'nationalinternational',
        'hostcountryname',
        'hostcountryaddress',
        'keyinitiativestobeundertaken',
        'field',
        'scopeofcollaboration',
        'financialsupport',

        'startDate',
        'endDate',
        'dateoflinkageestablishment',
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
 *  /api/colaborationagreement/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
 *      summary: Count all colaborationagreement
 *      description: Count all colaborationagreement
 *      responses:
 *        200:
 *          description: Colaborationagreement count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Colaborationagreement"
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
    const payload = await ColaborationagreementDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/colaborationagreement/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
 *      summary: Find all colaborationagreement that match search criteria
 *      description: Find all colaborationagreement that match search criteria
 *      responses:
 *        200:
 *          description: Colaborationagreement list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Colaborationagreement"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await ColaborationagreementDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/colaborationagreement/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Colaborationagreement]
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
 *                $ref: "#/components/schemas/Colaborationagreement"
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
    const payload = await ColaborationagreementDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
