const express = require('express');

const StartupmentoringService = require('../services/startupmentoring');
const StartupmentoringDBApi = require('../db/api/startupmentoring');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Startupmentoring:
 *        type: object
 *        properties:

 *          nameofmentor:
 *            type: string
 *            default: nameofmentor
 *          designation:
 *            type: string
 *            default: designation
 *          fieldarea:
 *            type: string
 *            default: fieldarea
 *          noofmentoringlecturesprovided:
 *            type: string
 *            default: noofmentoringlecturesprovided
 *          noofstartupsfacilitated:
 *            type: string
 *            default: noofstartupsfacilitated
 *          costpermentoringhourchargedifany:
 *            type: string
 *            default: costpermentoringhourchargedifany
 *          totalmentoringsessions:
 *            type: string
 *            default: totalmentoringsessions

 */

/**
 *  @swagger
 * tags:
 *   name: Startupmentoring
 *   description: The Startupmentoring managing API
 */

/**
 *  @swagger
 *  /api/startupmentoring:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
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
 *                  $ref: "#/components/schemas/Startupmentoring"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupmentoring"
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
    await StartupmentoringService.create(
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
    await StartupmentoringService.bulkImport(
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
 *  /api/startupmentoring/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
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
 *                  $ref: "#/components/schemas/Startupmentoring"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupmentoring"
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
    await StartupmentoringService.update(
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
 *  /api/startupmentoring/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
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
 *                $ref: "#/components/schemas/Startupmentoring"
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
    await StartupmentoringService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupmentoring:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
 *      summary: Get all startupmentoring
 *      description: Get all startupmentoring
 *      responses:
 *        200:
 *          description: Startupmentoring list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupmentoring"
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
    const payload = await StartupmentoringDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofmentor',
        'designation',
        'fieldarea',
        'noofmentoringlecturesprovided',
        'noofstartupsfacilitated',
        'costpermentoringhourchargedifany',
        'totalmentoringsessions',
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
 *  /api/startupmentoring/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
 *      summary: Count all startupmentoring
 *      description: Count all startupmentoring
 *      responses:
 *        200:
 *          description: Startupmentoring count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupmentoring"
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
    const payload = await StartupmentoringDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupmentoring/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
 *      summary: Find all startupmentoring that match search criteria
 *      description: Find all startupmentoring that match search criteria
 *      responses:
 *        200:
 *          description: Startupmentoring list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupmentoring"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await StartupmentoringDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/startupmentoring/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupmentoring]
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
 *                $ref: "#/components/schemas/Startupmentoring"
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
    const payload = await StartupmentoringDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
