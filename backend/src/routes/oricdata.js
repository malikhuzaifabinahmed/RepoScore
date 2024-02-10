const express = require('express');

const OricdataService = require('../services/oricdata');
const OricdataDBApi = require('../db/api/oricdata');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Oricdata:
 *        type: object
 *        properties:

 *          oricbankaccounttitle:
 *            type: string
 *            default: oricbankaccounttitle
 *          oricbankaccountnumber:
 *            type: string
 *            default: oricbankaccountnumber
 *          oriccentralizedemailid:
 *            type: string
 *            default: oriccentralizedemailid
 *          oricpostaladdress:
 *            type: string
 *            default: oricpostaladdress
 *          shortlinkfororicwebsite:
 *            type: string
 *            default: shortlinkfororicwebsite
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
 *   name: Oricdata
 *   description: The Oricdata managing API
 */

/**
 *  @swagger
 *  /api/oricdata:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
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
 *                  $ref: "#/components/schemas/Oricdata"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Oricdata"
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
    await OricdataService.create(
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
    await OricdataService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/oricdata/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
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
 *                  $ref: "#/components/schemas/Oricdata"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Oricdata"
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
    await OricdataService.update(req.body.data, req.body.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 * @swagger
 *  /api/oricdata/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
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
 *                $ref: "#/components/schemas/Oricdata"
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
    await OricdataService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/oricdata:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
 *      summary: Get all oricdata
 *      description: Get all oricdata
 *      responses:
 *        200:
 *          description: Oricdata list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Oricdata"
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
    const payload = await OricdataDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'oricbankaccounttitle',
        'oricbankaccountnumber',
        'oriccentralizedemailid',
        'oricpostaladdress',
        'shortlinkfororicwebsite',
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
 *  /api/oricdata/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
 *      summary: Count all oricdata
 *      description: Count all oricdata
 *      responses:
 *        200:
 *          description: Oricdata count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Oricdata"
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
    const payload = await OricdataDBApi.findAll(req.query, { countOnly: true });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/oricdata/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
 *      summary: Find all oricdata that match search criteria
 *      description: Find all oricdata that match search criteria
 *      responses:
 *        200:
 *          description: Oricdata list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Oricdata"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await OricdataDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/oricdata/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Oricdata]
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
 *                $ref: "#/components/schemas/Oricdata"
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
    const payload = await OricdataDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
