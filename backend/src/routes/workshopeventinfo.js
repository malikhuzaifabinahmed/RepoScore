const express = require('express');

const WorkshopeventinfoService = require('../services/workshopeventinfo');
const WorkshopeventinfoDBApi = require('../db/api/workshopeventinfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Workshopeventinfo:
 *        type: object
 *        properties:

 *          title:
 *            type: string
 *            default: title
 *          venue:
 *            type: string
 *            default: venue
 *          fieldthematicarea:
 *            type: string
 *            default: fieldthematicarea
 *          panelistmentoradvisorname:
 *            type: string
 *            default: panelistmentoradvisorname
 *          panelistmentoradvisordesignation:
 *            type: string
 *            default: panelistmentoradvisordesignation
 *          arrangedby:
 *            type: string
 *            default: arrangedby
 *          facultystudent:
 *            type: string
 *            default: facultystudent
 *          noofparticipants:
 *            type: string
 *            default: noofparticipants
 *          totalnoeventsheld:
 *            type: string
 *            default: totalnoeventsheld

 */

/**
 *  @swagger
 * tags:
 *   name: Workshopeventinfo
 *   description: The Workshopeventinfo managing API
 */

/**
 *  @swagger
 *  /api/workshopeventinfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
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
 *                  $ref: "#/components/schemas/Workshopeventinfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Workshopeventinfo"
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
    await WorkshopeventinfoService.create(
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
    await WorkshopeventinfoService.bulkImport(
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
 *  /api/workshopeventinfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
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
 *                  $ref: "#/components/schemas/Workshopeventinfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Workshopeventinfo"
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
    await WorkshopeventinfoService.update(
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
 *  /api/workshopeventinfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
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
 *                $ref: "#/components/schemas/Workshopeventinfo"
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
    await WorkshopeventinfoService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/workshopeventinfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
 *      summary: Get all workshopeventinfo
 *      description: Get all workshopeventinfo
 *      responses:
 *        200:
 *          description: Workshopeventinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Workshopeventinfo"
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
    const payload = await WorkshopeventinfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'title',
        'venue',
        'fieldthematicarea',
        'panelistmentoradvisorname',
        'panelistmentoradvisordesignation',
        'arrangedby',
        'facultystudent',
        'noofparticipants',
        'totalnoeventsheld',

        'dateheld',
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
 *  /api/workshopeventinfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
 *      summary: Count all workshopeventinfo
 *      description: Count all workshopeventinfo
 *      responses:
 *        200:
 *          description: Workshopeventinfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Workshopeventinfo"
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
    const payload = await WorkshopeventinfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/workshopeventinfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
 *      summary: Find all workshopeventinfo that match search criteria
 *      description: Find all workshopeventinfo that match search criteria
 *      responses:
 *        200:
 *          description: Workshopeventinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Workshopeventinfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await WorkshopeventinfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/workshopeventinfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Workshopeventinfo]
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
 *                $ref: "#/components/schemas/Workshopeventinfo"
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
    const payload = await WorkshopeventinfoDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
