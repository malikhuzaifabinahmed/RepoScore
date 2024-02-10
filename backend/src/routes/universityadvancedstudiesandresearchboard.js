const express = require('express');

const UniversityadvancedstudiesandresearchboardService = require('../services/universityadvancedstudiesandresearchboard');
const UniversityadvancedstudiesandresearchboardDBApi = require('../db/api/universityadvancedstudiesandresearchboard');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Universityadvancedstudiesandresearchboard:
 *        type: object
 *        properties:

 *          nameofmemberdevelopedwith:
 *            type: string
 *            default: nameofmemberdevelopedwith

 */

/**
 *  @swagger
 * tags:
 *   name: Universityadvancedstudiesandresearchboard
 *   description: The Universityadvancedstudiesandresearchboard managing API
 */

/**
 *  @swagger
 *  /api/universityadvancedstudiesandresearchboard:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
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
 *                  $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
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
    await UniversityadvancedstudiesandresearchboardService.create(
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
    await UniversityadvancedstudiesandresearchboardService.bulkImport(
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
 *  /api/universityadvancedstudiesandresearchboard/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
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
 *                  $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
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
    await UniversityadvancedstudiesandresearchboardService.update(
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
 *  /api/universityadvancedstudiesandresearchboard/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
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
 *                $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
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
    await UniversityadvancedstudiesandresearchboardService.remove(
      req.params.id,
      req.currentUser,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/universityadvancedstudiesandresearchboard:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
 *      summary: Get all universityadvancedstudiesandresearchboard
 *      description: Get all universityadvancedstudiesandresearchboard
 *      responses:
 *        200:
 *          description: Universityadvancedstudiesandresearchboard list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
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
    const payload =
      await UniversityadvancedstudiesandresearchboardDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = ['id', 'nameofmemberdevelopedwith', 'executiondate'];
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
 *  /api/universityadvancedstudiesandresearchboard/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
 *      summary: Count all universityadvancedstudiesandresearchboard
 *      description: Count all universityadvancedstudiesandresearchboard
 *      responses:
 *        200:
 *          description: Universityadvancedstudiesandresearchboard count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
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
    const payload =
      await UniversityadvancedstudiesandresearchboardDBApi.findAll(req.query, {
        countOnly: true,
      });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/universityadvancedstudiesandresearchboard/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
 *      summary: Find all universityadvancedstudiesandresearchboard that match search criteria
 *      description: Find all universityadvancedstudiesandresearchboard that match search criteria
 *      responses:
 *        200:
 *          description: Universityadvancedstudiesandresearchboard list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload =
    await UniversityadvancedstudiesandresearchboardDBApi.findAllAutocomplete(
      req.query.query,
      req.query.limit,
    );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/universityadvancedstudiesandresearchboard/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Universityadvancedstudiesandresearchboard]
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
 *                $ref: "#/components/schemas/Universityadvancedstudiesandresearchboard"
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
    const payload = await UniversityadvancedstudiesandresearchboardDBApi.findBy(
      { id: req.params.id },
    );

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
