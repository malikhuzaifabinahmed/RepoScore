const express = require('express');

const HonorsandawardsService = require('../services/honorsandawards');
const HonorsandawardsDBApi = require('../db/api/honorsandawards');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Honorsandawards:
 *        type: object
 *        properties:

 *          titleofaward:
 *            type: string
 *            default: titleofaward
 *          nameofawardingorganization:
 *            type: string
 *            default: nameofawardingorganization
 *          contactsofawardingorganization:
 *            type: string
 *            default: contactsofawardingorganization
 *          briefdetailsofworkhonored:
 *            type: string
 *            default: briefdetailsofworkhonored
 *          prizeamount:
 *            type: string
 *            default: prizeamount
 *          awardwinnername:
 *            type: string
 *            default: awardwinnername
 *          awardwinnerdesignation:
 *            type: string
 *            default: awardwinnerdesignation
 *          awardwinnerdepartment:
 *            type: string
 *            default: awardwinnerdepartment
 *          remarks:
 *            type: string
 *            default: remarks

 *          annexpagerefno:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Honorsandawards
 *   description: The Honorsandawards managing API
 */

/**
 *  @swagger
 *  /api/honorsandawards:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
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
 *                  $ref: "#/components/schemas/Honorsandawards"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Honorsandawards"
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
    await HonorsandawardsService.create(
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
    await HonorsandawardsService.bulkImport(
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
 *  /api/honorsandawards/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
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
 *                  $ref: "#/components/schemas/Honorsandawards"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Honorsandawards"
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
    await HonorsandawardsService.update(
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
 *  /api/honorsandawards/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
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
 *                $ref: "#/components/schemas/Honorsandawards"
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
    await HonorsandawardsService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/honorsandawards:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
 *      summary: Get all honorsandawards
 *      description: Get all honorsandawards
 *      responses:
 *        200:
 *          description: Honorsandawards list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Honorsandawards"
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
    const payload = await HonorsandawardsDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'titleofaward',
        'nameofawardingorganization',
        'contactsofawardingorganization',
        'briefdetailsofworkhonored',
        'prizeamount',
        'awardwinnername',
        'awardwinnerdesignation',
        'awardwinnerdepartment',
        'remarks',
        'annexpagerefno',
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
 *  /api/honorsandawards/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
 *      summary: Count all honorsandawards
 *      description: Count all honorsandawards
 *      responses:
 *        200:
 *          description: Honorsandawards count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Honorsandawards"
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
    const payload = await HonorsandawardsDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/honorsandawards/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
 *      summary: Find all honorsandawards that match search criteria
 *      description: Find all honorsandawards that match search criteria
 *      responses:
 *        200:
 *          description: Honorsandawards list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Honorsandawards"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await HonorsandawardsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/honorsandawards/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Honorsandawards]
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
 *                $ref: "#/components/schemas/Honorsandawards"
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
    const payload = await HonorsandawardsDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
