const express = require('express');

const GraduatedstartupfacilitationinfoService = require('../services/graduatedstartupfacilitationinfo');
const GraduatedstartupfacilitationinfoDBApi = require('../db/api/graduatedstartupfacilitationinfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Graduatedstartupfacilitationinfo:
 *        type: object
 *        properties:

 *          keyareasoffacilitationrequestedbygraduatedstartups:
 *            type: string
 *            default: keyareasoffacilitationrequestedbygraduatedstartups
 *          typeoffacilitationmentoringtrainingsprovidedtograduated:
 *            type: string
 *            default: typeoffacilitationmentoringtrainingsprovidedtograduated
 *          noofgraduatedstartupsfacilitated:
 *            type: string
 *            default: noofgraduatedstartupsfacilitated
 *          totalstartupsincubatedsincebicsinception:
 *            type: string
 *            default: totalstartupsincubatedsincebicsinception
 *          totalstartupsgraduatedsincebicsinception:
 *            type: string
 *            default: totalstartupsgraduatedsincebicsinception

 */

/**
 *  @swagger
 * tags:
 *   name: Graduatedstartupfacilitationinfo
 *   description: The Graduatedstartupfacilitationinfo managing API
 */

/**
 *  @swagger
 *  /api/graduatedstartupfacilitationinfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
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
 *                  $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
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
    await GraduatedstartupfacilitationinfoService.create(
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
    await GraduatedstartupfacilitationinfoService.bulkImport(
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
 *  /api/graduatedstartupfacilitationinfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
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
 *                  $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
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
    await GraduatedstartupfacilitationinfoService.update(
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
 *  /api/graduatedstartupfacilitationinfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
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
 *                $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
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
    await GraduatedstartupfacilitationinfoService.remove(
      req.params.id,
      req.currentUser,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/graduatedstartupfacilitationinfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
 *      summary: Get all graduatedstartupfacilitationinfo
 *      description: Get all graduatedstartupfacilitationinfo
 *      responses:
 *        200:
 *          description: Graduatedstartupfacilitationinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
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
    const payload = await GraduatedstartupfacilitationinfoDBApi.findAll(
      req.query,
    );
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'keyareasoffacilitationrequestedbygraduatedstartups',
        'typeoffacilitationmentoringtrainingsprovidedtograduated',
        'noofgraduatedstartupsfacilitated',
        'totalstartupsincubatedsincebicsinception',
        'totalstartupsgraduatedsincebicsinception',
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
 *  /api/graduatedstartupfacilitationinfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
 *      summary: Count all graduatedstartupfacilitationinfo
 *      description: Count all graduatedstartupfacilitationinfo
 *      responses:
 *        200:
 *          description: Graduatedstartupfacilitationinfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
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
    const payload = await GraduatedstartupfacilitationinfoDBApi.findAll(
      req.query,
      { countOnly: true },
    );

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/graduatedstartupfacilitationinfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
 *      summary: Find all graduatedstartupfacilitationinfo that match search criteria
 *      description: Find all graduatedstartupfacilitationinfo that match search criteria
 *      responses:
 *        200:
 *          description: Graduatedstartupfacilitationinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload =
    await GraduatedstartupfacilitationinfoDBApi.findAllAutocomplete(
      req.query.query,
      req.query.limit,
    );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/graduatedstartupfacilitationinfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Graduatedstartupfacilitationinfo]
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
 *                $ref: "#/components/schemas/Graduatedstartupfacilitationinfo"
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
    const payload = await GraduatedstartupfacilitationinfoDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
