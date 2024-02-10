const express = require('express');

const BicfundinginfoService = require('../services/bicfundinginfo');
const BicfundinginfoDBApi = require('../db/api/bicfundinginfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bicfundinginfo:
 *        type: object
 *        properties:

 *          nameofstartup:
 *            type: string
 *            default: nameofstartup
 *          nameoffundingagency:
 *            type: string
 *            default: nameoffundingagency
 *          nationalorinternational:
 *            type: string
 *            default: nationalorinternational
 *          typeoffunding:
 *            type: string
 *            default: typeoffunding
 *          amountsecured:
 *            type: string
 *            default: amountsecured
 *          amountutilizeddistributed:
 *            type: string
 *            default: amountutilizeddistributed
 *          inkindsupportfromfundingagencyifany:
 *            type: string
 *            default: inkindsupportfromfundingagencyifany
 *          agreementsignedwithfundingagencyifany:
 *            type: string
 *            default: agreementsignedwithfundingagencyifany
 *          recurringoronetypesupport:
 *            type: string
 *            default: recurringoronetypesupport

 */

/**
 *  @swagger
 * tags:
 *   name: Bicfundinginfo
 *   description: The Bicfundinginfo managing API
 */

/**
 *  @swagger
 *  /api/bicfundinginfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
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
 *                  $ref: "#/components/schemas/Bicfundinginfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bicfundinginfo"
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
    await BicfundinginfoService.create(
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
    await BicfundinginfoService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicfundinginfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
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
 *                  $ref: "#/components/schemas/Bicfundinginfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bicfundinginfo"
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
    await BicfundinginfoService.update(
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
 *  /api/bicfundinginfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
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
 *                $ref: "#/components/schemas/Bicfundinginfo"
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
    await BicfundinginfoService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicfundinginfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
 *      summary: Get all bicfundinginfo
 *      description: Get all bicfundinginfo
 *      responses:
 *        200:
 *          description: Bicfundinginfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicfundinginfo"
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
    const payload = await BicfundinginfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofstartup',
        'nameoffundingagency',
        'nationalorinternational',
        'typeoffunding',
        'amountsecured',
        'amountutilizeddistributed',
        'inkindsupportfromfundingagencyifany',
        'agreementsignedwithfundingagencyifany',
        'recurringoronetypesupport',
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
 *  /api/bicfundinginfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
 *      summary: Count all bicfundinginfo
 *      description: Count all bicfundinginfo
 *      responses:
 *        200:
 *          description: Bicfundinginfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicfundinginfo"
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
    const payload = await BicfundinginfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicfundinginfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
 *      summary: Find all bicfundinginfo that match search criteria
 *      description: Find all bicfundinginfo that match search criteria
 *      responses:
 *        200:
 *          description: Bicfundinginfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicfundinginfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await BicfundinginfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/bicfundinginfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicfundinginfo]
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
 *                $ref: "#/components/schemas/Bicfundinginfo"
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
    const payload = await BicfundinginfoDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
