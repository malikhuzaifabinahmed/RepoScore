const express = require('express');

const StartuprevenueService = require('../services/startuprevenue');
const StartuprevenueDBApi = require('../db/api/startuprevenue');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Startuprevenue:
 *        type: object
 *        properties:

 *          nameofstartup:
 *            type: string
 *            default: nameofstartup
 *          facultymembernamedesignationdepartment:
 *            type: string
 *            default: facultymembernamedesignationdepartment
 *          currentstatus:
 *            type: string
 *            default: currentstatus
 *          incubatedsinceandexpectedgraduation:
 *            type: string
 *            default: incubatedsinceandexpectedgraduation
 *          revenuegenerated:
 *            type: string
 *            default: revenuegenerated
 *          totalmonthsinincubation:
 *            type: string
 *            default: totalmonthsinincubation
 *          averagerevenue:
 *            type: string
 *            default: averagerevenue
 *          sharingmechanismbetweenbicheiandstartup:
 *            type: string
 *            default: sharingmechanismbetweenbicheiandstartup

 */

/**
 *  @swagger
 * tags:
 *   name: Startuprevenue
 *   description: The Startuprevenue managing API
 */

/**
 *  @swagger
 *  /api/startuprevenue:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
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
 *                  $ref: "#/components/schemas/Startuprevenue"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startuprevenue"
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
    await StartuprevenueService.create(
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
    await StartuprevenueService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startuprevenue/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
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
 *                  $ref: "#/components/schemas/Startuprevenue"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startuprevenue"
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
    await StartuprevenueService.update(
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
 *  /api/startuprevenue/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
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
 *                $ref: "#/components/schemas/Startuprevenue"
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
    await StartuprevenueService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startuprevenue:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
 *      summary: Get all startuprevenue
 *      description: Get all startuprevenue
 *      responses:
 *        200:
 *          description: Startuprevenue list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startuprevenue"
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
    const payload = await StartuprevenueDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofstartup',
        'facultymembernamedesignationdepartment',
        'currentstatus',
        'incubatedsinceandexpectedgraduation',
        'revenuegenerated',
        'totalmonthsinincubation',
        'averagerevenue',
        'sharingmechanismbetweenbicheiandstartup',
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
 *  /api/startuprevenue/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
 *      summary: Count all startuprevenue
 *      description: Count all startuprevenue
 *      responses:
 *        200:
 *          description: Startuprevenue count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startuprevenue"
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
    const payload = await StartuprevenueDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startuprevenue/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
 *      summary: Find all startuprevenue that match search criteria
 *      description: Find all startuprevenue that match search criteria
 *      responses:
 *        200:
 *          description: Startuprevenue list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startuprevenue"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await StartuprevenueDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/startuprevenue/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startuprevenue]
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
 *                $ref: "#/components/schemas/Startuprevenue"
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
    const payload = await StartuprevenueDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
