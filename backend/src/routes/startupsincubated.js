const express = require('express');

const StartupsincubatedService = require('../services/startupsincubated');
const StartupsincubatedDBApi = require('../db/api/startupsincubated');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Startupsincubated:
 *        type: object
 *        properties:

 *          nameofstartup:
 *            type: string
 *            default: nameofstartup
 *          briefidea:
 *            type: string
 *            default: briefidea
 *          facultymembername:
 *            type: string
 *            default: facultymembername
 *          facultymemberdesignation:
 *            type: string
 *            default: facultymemberdesignation
 *          facultymemberdepartment:
 *            type: string
 *            default: facultymemberdepartment
 *          sectorfield:
 *            type: string
 *            default: sectorfield
 *          seedfundingsecuredifany:
 *            type: string
 *            default: seedfundingsecuredifany
 *          stage:
 *            type: string
 *            default: stage
 *          incubatedsinceexpectedgraduation:
 *            type: string
 *            default: incubatedsinceexpectedgraduation
 *          internshipjobscreated:
 *            type: string
 *            default: internshipjobscreated
 *          totalfacultystartups:
 *            type: string
 *            default: totalfacultystartups

 */

/**
 *  @swagger
 * tags:
 *   name: Startupsincubated
 *   description: The Startupsincubated managing API
 */

/**
 *  @swagger
 *  /api/startupsincubated:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
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
 *                  $ref: "#/components/schemas/Startupsincubated"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupsincubated"
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
    await StartupsincubatedService.create(
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
    await StartupsincubatedService.bulkImport(
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
 *  /api/startupsincubated/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
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
 *                  $ref: "#/components/schemas/Startupsincubated"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupsincubated"
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
    await StartupsincubatedService.update(
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
 *  /api/startupsincubated/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
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
 *                $ref: "#/components/schemas/Startupsincubated"
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
    await StartupsincubatedService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupsincubated:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
 *      summary: Get all startupsincubated
 *      description: Get all startupsincubated
 *      responses:
 *        200:
 *          description: Startupsincubated list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupsincubated"
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
    const payload = await StartupsincubatedDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofstartup',
        'briefidea',
        'facultymembername',
        'facultymemberdesignation',
        'facultymemberdepartment',
        'sectorfield',
        'seedfundingsecuredifany',
        'stage',
        'incubatedsinceexpectedgraduation',
        'internshipjobscreated',
        'totalfacultystartups',
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
 *  /api/startupsincubated/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
 *      summary: Count all startupsincubated
 *      description: Count all startupsincubated
 *      responses:
 *        200:
 *          description: Startupsincubated count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupsincubated"
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
    const payload = await StartupsincubatedDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupsincubated/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
 *      summary: Find all startupsincubated that match search criteria
 *      description: Find all startupsincubated that match search criteria
 *      responses:
 *        200:
 *          description: Startupsincubated list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupsincubated"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await StartupsincubatedDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/startupsincubated/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsincubated]
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
 *                $ref: "#/components/schemas/Startupsincubated"
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
    const payload = await StartupsincubatedDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
