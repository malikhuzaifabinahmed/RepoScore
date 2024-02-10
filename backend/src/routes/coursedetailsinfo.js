const express = require('express');

const CoursedetailsinfoService = require('../services/coursedetailsinfo');
const CoursedetailsinfoDBApi = require('../db/api/coursedetailsinfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Coursedetailsinfo:
 *        type: object
 *        properties:

 *          titleofcourse:
 *            type: string
 *            default: titleofcourse
 *          field:
 *            type: string
 *            default: field
 *          level:
 *            type: string
 *            default: level
 *          credithours:
 *            type: string
 *            default: credithours
 *          totalmodules:
 *            type: string
 *            default: totalmodules
 *          optionalcompulsory:
 *            type: string
 *            default: optionalcompulsory
 *          departmentsschoolsofferingthecourse:
 *            type: string
 *            default: departmentsschoolsofferingthecourse
 *          learningoutcomes:
 *            type: string
 *            default: learningoutcomes
 *          totalnoofcoursesoffered:
 *            type: string
 *            default: totalnoofcoursesoffered

 */

/**
 *  @swagger
 * tags:
 *   name: Coursedetailsinfo
 *   description: The Coursedetailsinfo managing API
 */

/**
 *  @swagger
 *  /api/coursedetailsinfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
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
 *                  $ref: "#/components/schemas/Coursedetailsinfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Coursedetailsinfo"
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
    await CoursedetailsinfoService.create(
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
    await CoursedetailsinfoService.bulkImport(
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
 *  /api/coursedetailsinfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
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
 *                  $ref: "#/components/schemas/Coursedetailsinfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Coursedetailsinfo"
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
    await CoursedetailsinfoService.update(
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
 *  /api/coursedetailsinfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
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
 *                $ref: "#/components/schemas/Coursedetailsinfo"
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
    await CoursedetailsinfoService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/coursedetailsinfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
 *      summary: Get all coursedetailsinfo
 *      description: Get all coursedetailsinfo
 *      responses:
 *        200:
 *          description: Coursedetailsinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Coursedetailsinfo"
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
    const payload = await CoursedetailsinfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'titleofcourse',
        'field',
        'level',
        'credithours',
        'totalmodules',
        'optionalcompulsory',
        'departmentsschoolsofferingthecourse',
        'learningoutcomes',
        'totalnoofcoursesoffered',
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
 *  /api/coursedetailsinfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
 *      summary: Count all coursedetailsinfo
 *      description: Count all coursedetailsinfo
 *      responses:
 *        200:
 *          description: Coursedetailsinfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Coursedetailsinfo"
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
    const payload = await CoursedetailsinfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/coursedetailsinfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
 *      summary: Find all coursedetailsinfo that match search criteria
 *      description: Find all coursedetailsinfo that match search criteria
 *      responses:
 *        200:
 *          description: Coursedetailsinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Coursedetailsinfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await CoursedetailsinfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/coursedetailsinfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Coursedetailsinfo]
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
 *                $ref: "#/components/schemas/Coursedetailsinfo"
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
    const payload = await CoursedetailsinfoDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
