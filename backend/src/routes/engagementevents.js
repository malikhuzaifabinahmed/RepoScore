const express = require('express');

const EngagementeventsService = require('../services/engagementevents');
const EngagementeventsDBApi = require('../db/api/engagementevents');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Engagementevents:
 *        type: object
 *        properties:

 *          titleofevent:
 *            type: string
 *            default: titleofevent
 *          componentofcommunityinvolved:
 *            type: string
 *            default: componentofcommunityinvolved
 *          audiance:
 *            type: string
 *            default: audiance
 *          outcome:
 *            type: string
 *            default: outcome
 *          collaborationdeveloped:
 *            type: string
 *            default: collaborationdeveloped
 *          nameofcollaboratingpartners:
 *            type: string
 *            default: nameofcollaboratingpartners
 *          nameofsponsoringagency:
 *            type: string
 *            default: nameofsponsoringagency
 *          willbeparticipatedorarranged:
 *            type: string
 *            default: willbeparticipatedorarranged
 *          remarks:
 *            type: string
 *            default: remarks
 *          anexpageno:
 *            type: string
 *            default: anexpageno

 */

/**
 *  @swagger
 * tags:
 *   name: Engagementevents
 *   description: The Engagementevents managing API
 */

/**
 *  @swagger
 *  /api/engagementevents:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
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
 *                  $ref: "#/components/schemas/Engagementevents"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Engagementevents"
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
    await EngagementeventsService.create(
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
    await EngagementeventsService.bulkImport(
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
 *  /api/engagementevents/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
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
 *                  $ref: "#/components/schemas/Engagementevents"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Engagementevents"
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
    await EngagementeventsService.update(
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
 *  /api/engagementevents/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
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
 *                $ref: "#/components/schemas/Engagementevents"
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
    await EngagementeventsService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/engagementevents:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
 *      summary: Get all engagementevents
 *      description: Get all engagementevents
 *      responses:
 *        200:
 *          description: Engagementevents list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Engagementevents"
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
    const payload = await EngagementeventsDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'titleofevent',
        'componentofcommunityinvolved',
        'audiance',
        'outcome',
        'collaborationdeveloped',
        'nameofcollaboratingpartners',
        'nameofsponsoringagency',
        'willbeparticipatedorarranged',
        'remarks',
        'anexpageno',

        'dateofevent',
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
 *  /api/engagementevents/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
 *      summary: Count all engagementevents
 *      description: Count all engagementevents
 *      responses:
 *        200:
 *          description: Engagementevents count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Engagementevents"
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
    const payload = await EngagementeventsDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/engagementevents/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
 *      summary: Find all engagementevents that match search criteria
 *      description: Find all engagementevents that match search criteria
 *      responses:
 *        200:
 *          description: Engagementevents list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Engagementevents"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await EngagementeventsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/engagementevents/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Engagementevents]
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
 *                $ref: "#/components/schemas/Engagementevents"
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
    const payload = await EngagementeventsDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
