const express = require('express');

const BicdataService = require('../services/bicdata');
const BicdataDBApi = require('../db/api/bicdata');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bicdata:
 *        type: object
 *        properties:

 *          universityname:
 *            type: string
 *            default: universityname
 *          oricbankaccounttitle:
 *            type: string
 *            default: oricbankaccounttitle
 *          oricbankaccountnumber:
 *            type: string
 *            default: oricbankaccountnumber
 *          ORICCentralizedEmailId:
 *            type: string
 *            default: ORICCentralizedEmailId
 *          ORICPostalAddress:
 *            type: string
 *            default: ORICPostalAddress
 *          shortlinkforORICWebsite:
 *            type: string
 *            default: shortlinkforORICWebsite
 *          nameoffocalpersonmanagingwebpage:
 *            type: string
 *            default: nameoffocalpersonmanagingwebpage
 *          phonenumberoffocalpersonmanagingwebpage:
 *            type: string
 *            default: phonenumberoffocalpersonmanagingwebpage
 *          tiscphonenumber:
 *            type: string
 *            default: tiscphonenumber
 *          tiscemailid:
 *            type: string
 *            default: tiscemailid

 */

/**
 *  @swagger
 * tags:
 *   name: Bicdata
 *   description: The Bicdata managing API
 */

/**
 *  @swagger
 *  /api/bicdata:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
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
 *                  $ref: "#/components/schemas/Bicdata"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bicdata"
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
    await BicdataService.create(
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
    await BicdataService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicdata/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
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
 *                  $ref: "#/components/schemas/Bicdata"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bicdata"
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
    await BicdataService.update(req.body.data, req.body.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 * @swagger
 *  /api/bicdata/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
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
 *                $ref: "#/components/schemas/Bicdata"
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
    await BicdataService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicdata:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
 *      summary: Get all bicdata
 *      description: Get all bicdata
 *      responses:
 *        200:
 *          description: Bicdata list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicdata"
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
    const payload = await BicdataDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'universityname',
        'oricbankaccounttitle',
        'oricbankaccountnumber',
        'ORICCentralizedEmailId',
        'ORICPostalAddress',
        'shortlinkforORICWebsite',
        'nameoffocalpersonmanagingwebpage',
        'phonenumberoffocalpersonmanagingwebpage',
        'tiscphonenumber',
        'tiscemailid',
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
 *  /api/bicdata/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
 *      summary: Count all bicdata
 *      description: Count all bicdata
 *      responses:
 *        200:
 *          description: Bicdata count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicdata"
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
    const payload = await BicdataDBApi.findAll(req.query, { countOnly: true });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicdata/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
 *      summary: Find all bicdata that match search criteria
 *      description: Find all bicdata that match search criteria
 *      responses:
 *        200:
 *          description: Bicdata list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicdata"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await BicdataDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/bicdata/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicdata]
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
 *                $ref: "#/components/schemas/Bicdata"
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
    const payload = await BicdataDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
