const express = require('express');

const UniversityService = require('../services/university');
const UniversityDBApi = require('../db/api/university');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      University:
 *        type: object
 *        properties:

 *          name:
 *            type: string
 *            default: name
 *          province:
 *            type: string
 *            default: province
 *          city:
 *            type: string
 *            default: city
 *          sector:
 *            type: string
 *            default: sector
 *          postaladdress:
 *            type: string
 *            default: postaladdress
 *          universityheadposition:
 *            type: string
 *            default: universityheadposition
 *          universityheadname:
 *            type: string
 *            default: universityheadname
 *          universityheademail:
 *            type: string
 *            default: universityheademail
 *          universityheadphonenumber:
 *            type: string
 *            default: universityheadphonenumber
 *          registrarname:
 *            type: string
 *            default: registrarname
 *          registraremail:
 *            type: string
 *            default: registraremail
 *          registrarphonenumber:
 *            type: string
 *            default: registrarphonenumber
 *          registrarpaemail:
 *            type: string
 *            default: registrarpaemail
 *          registrarpaphonenumber:
 *            type: string
 *            default: registrarpaphonenumber
 *          totalnumberofsanctionedfaculityposts:
 *            type: string
 *            default: totalnumberofsanctionedfaculityposts
 *          totalnumberoffaculty:
 *            type: string
 *            default: totalnumberoffaculty
 *          totalnumberofphdfaculty:
 *            type: string
 *            default: totalnumberofphdfaculty
 *          totalnumberofvacantfacultyposts:
 *            type: string
 *            default: totalnumberofvacantfacultyposts

 */

/**
 *  @swagger
 * tags:
 *   name: University
 *   description: The University managing API
 */

/**
 *  @swagger
 *  /api/university:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
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
 *                  $ref: "#/components/schemas/University"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/University"
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
    await UniversityService.create(
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
    await UniversityService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/university/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
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
 *                  $ref: "#/components/schemas/University"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/University"
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
    await UniversityService.update(req.body.data, req.body.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 * @swagger
 *  /api/university/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
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
 *                $ref: "#/components/schemas/University"
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
    await UniversityService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/university:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
 *      summary: Get all university
 *      description: Get all university
 *      responses:
 *        200:
 *          description: University list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/University"
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
    const payload = await UniversityDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'name',
        'province',
        'city',
        'sector',
        'postaladdress',
        'universityheadposition',
        'universityheadname',
        'universityheademail',
        'universityheadphonenumber',
        'registrarname',
        'registraremail',
        'registrarphonenumber',
        'registrarpaemail',
        'registrarpaphonenumber',
        'totalnumberofsanctionedfaculityposts',
        'totalnumberoffaculty',
        'totalnumberofphdfaculty',
        'totalnumberofvacantfacultyposts',
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
 *  /api/university/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
 *      summary: Count all university
 *      description: Count all university
 *      responses:
 *        200:
 *          description: University count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/University"
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
    const payload = await UniversityDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/university/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
 *      summary: Find all university that match search criteria
 *      description: Find all university that match search criteria
 *      responses:
 *        200:
 *          description: University list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/University"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await UniversityDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/university/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [University]
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
 *                $ref: "#/components/schemas/University"
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
    const payload = await UniversityDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
