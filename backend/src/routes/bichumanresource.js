const express = require('express');

const BichumanresourceService = require('../services/bichumanresource');
const BichumanresourceDBApi = require('../db/api/bichumanresource');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bichumanresource:
 *        type: object
 *        properties:

 *          position:
 *            type: string
 *            default: position
 *          fulltimeparttime:
 *            type: string
 *            default: fulltimeparttime
 *          name:
 *            type: string
 *            default: name
 *          officephonenumber:
 *            type: string
 *            default: officephonenumber
 *          mobilenumber:
 *            type: string
 *            default: mobilenumber
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
 *            type: string
 *            default: periodupto
 *          totalexperience:
 *            type: string
 *            default: totalexperience
 *          nonacademiaexperience:
 *            type: string
 *            default: nonacademiaexperience
 *          notificationofficeorderjoiningreportandcv:
 *            type: string
 *            default: notificationofficeorderjoiningreportandcv

 */

/**
 *  @swagger
 * tags:
 *   name: Bichumanresource
 *   description: The Bichumanresource managing API
 */

/**
 *  @swagger
 *  /api/bichumanresource:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
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
 *                  $ref: "#/components/schemas/Bichumanresource"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bichumanresource"
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
    await BichumanresourceService.create(
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
    await BichumanresourceService.bulkImport(
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
 *  /api/bichumanresource/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
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
 *                  $ref: "#/components/schemas/Bichumanresource"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bichumanresource"
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
    await BichumanresourceService.update(
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
 *  /api/bichumanresource/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
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
 *                $ref: "#/components/schemas/Bichumanresource"
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
    await BichumanresourceService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bichumanresource:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
 *      summary: Get all bichumanresource
 *      description: Get all bichumanresource
 *      responses:
 *        200:
 *          description: Bichumanresource list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bichumanresource"
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
    const payload = await BichumanresourceDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'position',
        'fulltimeparttime',
        'name',
        'officephonenumber',
        'mobilenumber',
        'emailid',
        'qualificationlevel',
        'qualificationtitle',
        'fieldofstudy',
        'cnic',
        'periodupto',
        'totalexperience',
        'nonacademiaexperience',
        'notificationofficeorderjoiningreportandcv',

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
 *  /api/bichumanresource/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
 *      summary: Count all bichumanresource
 *      description: Count all bichumanresource
 *      responses:
 *        200:
 *          description: Bichumanresource count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bichumanresource"
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
    const payload = await BichumanresourceDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bichumanresource/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
 *      summary: Find all bichumanresource that match search criteria
 *      description: Find all bichumanresource that match search criteria
 *      responses:
 *        200:
 *          description: Bichumanresource list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bichumanresource"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await BichumanresourceDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/bichumanresource/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bichumanresource]
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
 *                $ref: "#/components/schemas/Bichumanresource"
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
    const payload = await BichumanresourceDBApi.findBy({ id: req.params.id });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
