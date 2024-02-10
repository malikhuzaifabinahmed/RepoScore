const express = require('express');

const MentorshipinfoService = require('../services/mentorshipinfo');
const MentorshipinfoDBApi = require('../db/api/mentorshipinfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Mentorshipinfo:
 *        type: object
 *        properties:

 *          nameofmentor:
 *            type: string
 *            default: nameofmentor
 *          fieldareasofexpertise:
 *            type: string
 *            default: fieldareasofexpertise
 *          nationalinternational:
 *            type: string
 *            default: nationalinternational
 *          mentoringsessionsheldatbicduringtheyear:
 *            type: string
 *            default: mentoringsessionsheldatbicduringtheyear
 *          noofstartupsfacilitatedthroughsessions:
 *            type: string
 *            default: noofstartupsfacilitatedthroughsessions

 */

/**
 *  @swagger
 * tags:
 *   name: Mentorshipinfo
 *   description: The Mentorshipinfo managing API
 */

/**
 *  @swagger
 *  /api/mentorshipinfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
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
 *                  $ref: "#/components/schemas/Mentorshipinfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Mentorshipinfo"
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
    await MentorshipinfoService.create(
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
    await MentorshipinfoService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/mentorshipinfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
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
 *                  $ref: "#/components/schemas/Mentorshipinfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Mentorshipinfo"
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
    await MentorshipinfoService.update(
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
 *  /api/mentorshipinfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
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
 *                $ref: "#/components/schemas/Mentorshipinfo"
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
    await MentorshipinfoService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/mentorshipinfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
 *      summary: Get all mentorshipinfo
 *      description: Get all mentorshipinfo
 *      responses:
 *        200:
 *          description: Mentorshipinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Mentorshipinfo"
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
    const payload = await MentorshipinfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'nameofmentor',
        'fieldareasofexpertise',
        'nationalinternational',
        'mentoringsessionsheldatbicduringtheyear',
        'noofstartupsfacilitatedthroughsessions',

        'ifcorporatebodymousigningdateifany',
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
 *  /api/mentorshipinfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
 *      summary: Count all mentorshipinfo
 *      description: Count all mentorshipinfo
 *      responses:
 *        200:
 *          description: Mentorshipinfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Mentorshipinfo"
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
    const payload = await MentorshipinfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/mentorshipinfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
 *      summary: Find all mentorshipinfo that match search criteria
 *      description: Find all mentorshipinfo that match search criteria
 *      responses:
 *        200:
 *          description: Mentorshipinfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Mentorshipinfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await MentorshipinfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/mentorshipinfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Mentorshipinfo]
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
 *                $ref: "#/components/schemas/Mentorshipinfo"
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
    const payload = await MentorshipinfoDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
