const express = require('express');

const ResearchlinksService = require('../services/researchlinks');
const ResearchlinksDBApi = require('../db/api/researchlinks');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Researchlinks:
 *        type: object
 *        properties:

 *          typeoflinkage:
 *            type: string
 *            default: typeoflinkage
 *          region:
 *            type: string
 *            default: region
 *          namehostinstitution:
 *            type: string
 *            default: namehostinstitution
 *          addresshostinstitution:
 *            type: string
 *            default: addresshostinstitution
 *          countryofhostinstitution:
 *            type: string
 *            default: countryofhostinstitution
 *          nameofcollaboratingpartners:
 *            type: string
 *            default: nameofcollaboratingpartners
 *          addressofcollaboratingpartners:
 *            type: string
 *            default: addressofcollaboratingpartners
 *          countryofcollaboratingpartners:
 *            type: string
 *            default: countryofcollaboratingpartners
 *          fieldofstudy:
 *            type: string
 *            default: fieldofstudy
 *          researchborderareas:
 *            type: string
 *            default: researchborderareas
 *          scopeofcollaboration:
 *            type: string
 *            default: scopeofcollaboration
 *          linkageestablishmentdate:
 *            type: string
 *            default: linkageestablishmentdate
 *          salientfeaturesoflinkage:
 *            type: string
 *            default: salientfeaturesoflinkage
 *          anexpagereference:
 *            type: string
 *            default: anexpagereference

 */

/**
 *  @swagger
 * tags:
 *   name: Researchlinks
 *   description: The Researchlinks managing API
 */

/**
 *  @swagger
 *  /api/researchlinks:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
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
 *                  $ref: "#/components/schemas/Researchlinks"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Researchlinks"
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
    await ResearchlinksService.create(
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
    await ResearchlinksService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/researchlinks/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
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
 *                  $ref: "#/components/schemas/Researchlinks"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Researchlinks"
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
    await ResearchlinksService.update(
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
 *  /api/researchlinks/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
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
 *                $ref: "#/components/schemas/Researchlinks"
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
    await ResearchlinksService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/researchlinks:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
 *      summary: Get all researchlinks
 *      description: Get all researchlinks
 *      responses:
 *        200:
 *          description: Researchlinks list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Researchlinks"
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
    const payload = await ResearchlinksDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'typeoflinkage',
        'region',
        'namehostinstitution',
        'addresshostinstitution',
        'countryofhostinstitution',
        'nameofcollaboratingpartners',
        'addressofcollaboratingpartners',
        'countryofcollaboratingpartners',
        'fieldofstudy',
        'researchborderareas',
        'scopeofcollaboration',
        'linkageestablishmentdate',
        'salientfeaturesoflinkage',
        'anexpagereference',
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
 *  /api/researchlinks/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
 *      summary: Count all researchlinks
 *      description: Count all researchlinks
 *      responses:
 *        200:
 *          description: Researchlinks count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Researchlinks"
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
    const payload = await ResearchlinksDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/researchlinks/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
 *      summary: Find all researchlinks that match search criteria
 *      description: Find all researchlinks that match search criteria
 *      responses:
 *        200:
 *          description: Researchlinks list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Researchlinks"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await ResearchlinksDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/researchlinks/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchlinks]
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
 *                $ref: "#/components/schemas/Researchlinks"
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
    const payload = await ResearchlinksDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
