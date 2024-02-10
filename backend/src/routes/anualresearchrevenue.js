const express = require('express');

const AnualresearchrevenueService = require('../services/anualresearchrevenue');
const AnualresearchrevenueDBApi = require('../db/api/anualresearchrevenue');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Anualresearchrevenue:
 *        type: object
 *        properties:

 *          researchgrantname:
 *            type: string
 *            default: researchgrantname
 *          remarks:
 *            type: string
 *            default: remarks
 *          oricoverheadinreleasedfunding:
 *            type: string
 *            default: oricoverheadinreleasedfunding
 *          nationalorinternational:
 *            type: string
 *            default: nationalorinternational
 *          titleofresearchproposal:
 *            type: string
 *            default: titleofresearchproposal
 *          detailsofpi:
 *            type: string
 *            default: detailsofpi
 *          isjointventure:
 *            type: string
 *            default: isjointventure
 *          nameofjointventure:
 *            type: string
 *            default: nameofjointventure
 *          detailsofjointventure:
 *            type: string
 *            default: detailsofjointventure
 *          totalfundingapproved:
 *            type: string
 *            default: totalfundingapproved
 *          oricoverheadinapprovedfunding:
 *            type: string
 *            default: oricoverheadinapprovedfunding
 *          nameofpi:
 *            type: string
 *            default: nameofpi

 *          anexpagerefno:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Anualresearchrevenue
 *   description: The Anualresearchrevenue managing API
 */

/**
 *  @swagger
 *  /api/anualresearchrevenue:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
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
 *                  $ref: "#/components/schemas/Anualresearchrevenue"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Anualresearchrevenue"
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
    await AnualresearchrevenueService.create(
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
    await AnualresearchrevenueService.bulkImport(
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
 *  /api/anualresearchrevenue/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
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
 *                  $ref: "#/components/schemas/Anualresearchrevenue"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Anualresearchrevenue"
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
    await AnualresearchrevenueService.update(
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
 *  /api/anualresearchrevenue/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
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
 *                $ref: "#/components/schemas/Anualresearchrevenue"
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
    await AnualresearchrevenueService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/anualresearchrevenue:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
 *      summary: Get all anualresearchrevenue
 *      description: Get all anualresearchrevenue
 *      responses:
 *        200:
 *          description: Anualresearchrevenue list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Anualresearchrevenue"
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
    const payload = await AnualresearchrevenueDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'researchgrantname',
        'remarks',
        'oricoverheadinreleasedfunding',
        'nationalorinternational',
        'titleofresearchproposal',
        'detailsofpi',
        'isjointventure',
        'nameofjointventure',
        'detailsofjointventure',
        'totalfundingapproved',
        'oricoverheadinapprovedfunding',
        'nameofpi',
        'anexpagerefno',

        'startDate',
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
 *  /api/anualresearchrevenue/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
 *      summary: Count all anualresearchrevenue
 *      description: Count all anualresearchrevenue
 *      responses:
 *        200:
 *          description: Anualresearchrevenue count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Anualresearchrevenue"
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
    const payload = await AnualresearchrevenueDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/anualresearchrevenue/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
 *      summary: Find all anualresearchrevenue that match search criteria
 *      description: Find all anualresearchrevenue that match search criteria
 *      responses:
 *        200:
 *          description: Anualresearchrevenue list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Anualresearchrevenue"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await AnualresearchrevenueDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/anualresearchrevenue/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Anualresearchrevenue]
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
 *                $ref: "#/components/schemas/Anualresearchrevenue"
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
    const payload = await AnualresearchrevenueDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
