const express = require('express');

const HumanresourceService = require('../services/humanresource');
const HumanresourceDBApi = require('../db/api/humanresource');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Humanresource:
 *        type: object
 *        properties:

 *          name:
 *            type: string
 *            default: name
 *          position:
 *            type: string
 *            default: position
 *          officephonenumber:
 *            type: string
 *            default: officephonenumber
 *          role:
 *            type: string
 *            default: role
 *          emailid:
 *            type: string
 *            default: emailid
 *          qualificationlevel:
 *            type: string
 *            default: qualificationlevel
 *          qualificationtitle:
 *            type: string
 *            default: qualificationtitle
 *          fieldofstudy:
 *            type: string
 *            default: fieldofstudy
 *          cnic:
 *            type: string
 *            default: cnic

 *          periodupto:
 *            type: integer
 *            format: int64
 *          totalexperience:
 *            type: integer
 *            format: int64
 *          nonacademicexperience:
 *            type: integer
 *            format: int64

 */

/**
 *  @swagger
 * tags:
 *   name: Humanresource
 *   description: The Humanresource managing API
 */

/**
 *  @swagger
 *  /api/humanresource:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
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
 *                  $ref: "#/components/schemas/Humanresource"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Humanresource"
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
    await HumanresourceService.create(
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
    await HumanresourceService.bulkImport(req, res, true, req.headers.referer);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/humanresource/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
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
 *                  $ref: "#/components/schemas/Humanresource"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Humanresource"
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
    await HumanresourceService.update(
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
 *  /api/humanresource/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
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
 *                $ref: "#/components/schemas/Humanresource"
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
    await HumanresourceService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/humanresource:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
 *      summary: Get all humanresource
 *      description: Get all humanresource
 *      responses:
 *        200:
 *          description: Humanresource list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Humanresource"
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
    const payload = await HumanresourceDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'name',
        'position',
        'officephonenumber',
        'role',
        'emailid',
        'qualificationlevel',
        'qualificationtitle',
        'fieldofstudy',
        'cnic',
        'periodupto',
        'totalexperience',
        'nonacademicexperience',

        'dateofappointment',
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
 *  /api/humanresource/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
 *      summary: Count all humanresource
 *      description: Count all humanresource
 *      responses:
 *        200:
 *          description: Humanresource count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Humanresource"
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
    const payload = await HumanresourceDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/humanresource/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
 *      summary: Find all humanresource that match search criteria
 *      description: Find all humanresource that match search criteria
 *      responses:
 *        200:
 *          description: Humanresource list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Humanresource"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await HumanresourceDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/humanresource/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Humanresource]
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
 *                $ref: "#/components/schemas/Humanresource"
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
    const payload = await HumanresourceDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
