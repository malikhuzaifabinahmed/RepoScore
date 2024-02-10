const express = require('express');

const TrainingcourseinfoService = require('../services/trainingcourseinfo');
const TrainingcourseinfoDBApi = require('../db/api/trainingcourseinfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Trainingcourseinfo:
 *        type: object
 *        properties:

 *          nameofcourse:
 *            type: string
 *            default: nameofcourse
 *          typeofcourse:
 *            type: string
 *            default: typeofcourse
 *          leveloffered:
 *            type: string
 *            default: leveloffered
 *          majorareascovered:
 *            type: string
 *            default: majorareascovered
 *          keylearningoutcomes:
 *            type: string
 *            default: keylearningoutcomes
 *          noofstartupscompletedthecourse:
 *            type: string
 *            default: noofstartupscompletedthecourse
 *          coursedevelopment:
 *            type: string
 *            default: coursedevelopment
 *          ifoutsourcednameofcourseoffered:
 *            type: string
 *            default: ifoutsourcednameofcourseoffered

 */

/**
 *  @swagger
 * tags:
 *   name: Trainingcourseinfo
 *   description: The Trainingcourseinfo managing API
 */

/**
 *  @swagger
 *  /api/trainingcourseinfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
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
 *                  $ref: "#/components/schemas/Trainingcourseinfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Trainingcourseinfo"
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
    await TrainingcourseinfoService.create(
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
    await TrainingcourseinfoService.bulkImport(
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
 *  /api/trainingcourseinfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
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
 *                  $ref: "#/components/schemas/Trainingcourseinfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Trainingcourseinfo"
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
    await TrainingcourseinfoService.update(
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
 *  /api/trainingcourseinfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
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
 *                $ref: "#/components/schemas/Trainingcourseinfo"
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
    await TrainingcourseinfoService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/trainingcourseinfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
 *      summary: Get all trainingcourseinfo
 *      description: Get all trainingcourseinfo
 *      responses:
 *        200:
 *          description: Trainingcourseinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Trainingcourseinfo"
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
    const payload = await TrainingcourseinfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofcourse',
        'typeofcourse',
        'leveloffered',
        'majorareascovered',
        'keylearningoutcomes',
        'noofstartupscompletedthecourse',
        'coursedevelopment',
        'ifoutsourcednameofcourseoffered',
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
 *  /api/trainingcourseinfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
 *      summary: Count all trainingcourseinfo
 *      description: Count all trainingcourseinfo
 *      responses:
 *        200:
 *          description: Trainingcourseinfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Trainingcourseinfo"
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
    const payload = await TrainingcourseinfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/trainingcourseinfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
 *      summary: Find all trainingcourseinfo that match search criteria
 *      description: Find all trainingcourseinfo that match search criteria
 *      responses:
 *        200:
 *          description: Trainingcourseinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Trainingcourseinfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await TrainingcourseinfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/trainingcourseinfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Trainingcourseinfo]
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
 *                $ref: "#/components/schemas/Trainingcourseinfo"
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
    const payload = await TrainingcourseinfoDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
