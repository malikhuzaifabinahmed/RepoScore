const express = require('express');

const StartupsappliedforpitchingService = require('../services/startupsappliedforpitching');
const StartupsappliedforpitchingDBApi = require('../db/api/startupsappliedforpitching');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Startupsappliedforpitching:
 *        type: object
 *        properties:

 *          idea:
 *            type: string
 *            default: idea
 *          entrepreneur:
 *            type: string
 *            default: entrepreneur
 *          fieldarea:
 *            type: string
 *            default: fieldarea
 *          educationalbackground:
 *            type: string
 *            default: educationalbackground
 *          teammembers:
 *            type: string
 *            default: teammembers
 *          currentstatus:
 *            type: string
 *            default: currentstatus
 *          resultremarksfromcompetition:
 *            type: string
 *            default: resultremarksfromcompetition
 *          availabilityoffundingseedmoney:
 *            type: string
 *            default: availabilityoffundingseedmoney
 *          dateheld:
 *            type: string
 *            default: dateheld
 *          noofideasapplied:
 *            type: string
 *            default: noofideasapplied

 */

/**
 *  @swagger
 * tags:
 *   name: Startupsappliedforpitching
 *   description: The Startupsappliedforpitching managing API
 */

/**
 *  @swagger
 *  /api/startupsappliedforpitching:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
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
 *                  $ref: "#/components/schemas/Startupsappliedforpitching"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupsappliedforpitching"
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
    await StartupsappliedforpitchingService.create(
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
    await StartupsappliedforpitchingService.bulkImport(
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
 *  /api/startupsappliedforpitching/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
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
 *                  $ref: "#/components/schemas/Startupsappliedforpitching"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Startupsappliedforpitching"
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
    await StartupsappliedforpitchingService.update(
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
 *  /api/startupsappliedforpitching/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
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
 *                $ref: "#/components/schemas/Startupsappliedforpitching"
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
    await StartupsappliedforpitchingService.remove(
      req.params.id,
      req.currentUser,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupsappliedforpitching:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
 *      summary: Get all startupsappliedforpitching
 *      description: Get all startupsappliedforpitching
 *      responses:
 *        200:
 *          description: Startupsappliedforpitching list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupsappliedforpitching"
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
    const payload = await StartupsappliedforpitchingDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'idea',
        'entrepreneur',
        'fieldarea',
        'educationalbackground',
        'teammembers',
        'currentstatus',
        'resultremarksfromcompetition',
        'availabilityoffundingseedmoney',
        'dateheld',
        'noofideasapplied',
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
 *  /api/startupsappliedforpitching/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
 *      summary: Count all startupsappliedforpitching
 *      description: Count all startupsappliedforpitching
 *      responses:
 *        200:
 *          description: Startupsappliedforpitching count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupsappliedforpitching"
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
    const payload = await StartupsappliedforpitchingDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/startupsappliedforpitching/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
 *      summary: Find all startupsappliedforpitching that match search criteria
 *      description: Find all startupsappliedforpitching that match search criteria
 *      responses:
 *        200:
 *          description: Startupsappliedforpitching list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Startupsappliedforpitching"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await StartupsappliedforpitchingDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/startupsappliedforpitching/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Startupsappliedforpitching]
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
 *                $ref: "#/components/schemas/Startupsappliedforpitching"
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
    const payload = await StartupsappliedforpitchingDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
