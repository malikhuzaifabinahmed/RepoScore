const express = require('express');

const SpinoffstartupsService = require('../services/spinoffstartups');
const SpinoffstartupsDBApi = require('../db/api/spinoffstartups');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Spinoffstartups:
 *        type: object
 *        properties:

 *          nameofstartup:
 *            type: string
 *            default: nameofstartup
 *          briefideabackingresearchsectorfield:
 *            type: string
 *            default: briefideabackingresearchsectorfield
 *          facultymembernamedesignationdepartment:
 *            type: string
 *            default: facultymembernamedesignationdepartment
 *          ipstatus:
 *            type: string
 *            default: ipstatus
 *          nameofspinoff:
 *            type: string
 *            default: nameofspinoff
 *          stage:
 *            type: string
 *            default: stage
 *          licenseagreementsignedifany:
 *            type: string
 *            default: licenseagreementsignedifany
 *          fundingsources:
 *            type: string
 *            default: fundingsources

 *          totalfacultystartups:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Spinoffstartups
 *   description: The Spinoffstartups managing API
 */

/**
 *  @swagger
 *  /api/spinoffstartups:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
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
 *                  $ref: "#/components/schemas/Spinoffstartups"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Spinoffstartups"
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
    await SpinoffstartupsService.create(
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
    await SpinoffstartupsService.bulkImport(
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
 *  /api/spinoffstartups/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
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
 *                  $ref: "#/components/schemas/Spinoffstartups"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Spinoffstartups"
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
    await SpinoffstartupsService.update(
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
 *  /api/spinoffstartups/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
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
 *                $ref: "#/components/schemas/Spinoffstartups"
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
    await SpinoffstartupsService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/spinoffstartups:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
 *      summary: Get all spinoffstartups
 *      description: Get all spinoffstartups
 *      responses:
 *        200:
 *          description: Spinoffstartups list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Spinoffstartups"
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
    const payload = await SpinoffstartupsDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofstartup',
        'briefideabackingresearchsectorfield',
        'facultymembernamedesignationdepartment',
        'ipstatus',
        'nameofspinoff',
        'stage',
        'licenseagreementsignedifany',
        'fundingsources',
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
 *  /api/spinoffstartups/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
 *      summary: Count all spinoffstartups
 *      description: Count all spinoffstartups
 *      responses:
 *        200:
 *          description: Spinoffstartups count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Spinoffstartups"
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
    const payload = await SpinoffstartupsDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/spinoffstartups/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
 *      summary: Find all spinoffstartups that match search criteria
 *      description: Find all spinoffstartups that match search criteria
 *      responses:
 *        200:
 *          description: Spinoffstartups list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Spinoffstartups"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await SpinoffstartupsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/spinoffstartups/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Spinoffstartups]
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
 *                $ref: "#/components/schemas/Spinoffstartups"
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
    const payload = await SpinoffstartupsDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
