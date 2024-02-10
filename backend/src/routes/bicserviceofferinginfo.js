const express = require('express');

const BicserviceofferinginfoService = require('../services/bicserviceofferinginfo');
const BicserviceofferinginfoDBApi = require('../db/api/bicserviceofferinginfo');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Bicserviceofferinginfo:
 *        type: object
 *        properties:

 *          natureofserviceofferedsessionheld:
 *            type: string
 *            default: natureofserviceofferedsessionheld
 *          nameofserviceprovider:
 *            type: string
 *            default: nameofserviceprovider
 *          backgroundandexpertise:
 *            type: string
 *            default: backgroundandexpertise
 *          localinternational:
 *            type: string
 *            default: localinternational
 *          noofstartupsfacilitated:
 *            type: string
 *            default: noofstartupsfacilitated
 *          totalnosessionsheld:
 *            type: string
 *            default: totalnosessionsheld

 */

/**
 *  @swagger
 * tags:
 *   name: Bicserviceofferinginfo
 *   description: The Bicserviceofferinginfo managing API
 */

/**
 *  @swagger
 *  /api/bicserviceofferinginfo:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
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
 *                  $ref: "#/components/schemas/Bicserviceofferinginfo"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bicserviceofferinginfo"
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
    await BicserviceofferinginfoService.create(
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
    await BicserviceofferinginfoService.bulkImport(
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
 *  /api/bicserviceofferinginfo/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
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
 *                  $ref: "#/components/schemas/Bicserviceofferinginfo"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Bicserviceofferinginfo"
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
    await BicserviceofferinginfoService.update(
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
 *  /api/bicserviceofferinginfo/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
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
 *                $ref: "#/components/schemas/Bicserviceofferinginfo"
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
    await BicserviceofferinginfoService.remove(req.params.id, req.currentUser);
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicserviceofferinginfo:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
 *      summary: Get all bicserviceofferinginfo
 *      description: Get all bicserviceofferinginfo
 *      responses:
 *        200:
 *          description: Bicserviceofferinginfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicserviceofferinginfo"
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
    const payload = await BicserviceofferinginfoDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'natureofserviceofferedsessionheld',
        'nameofserviceprovider',
        'backgroundandexpertise',
        'localinternational',
        'noofstartupsfacilitated',
        'totalnosessionsheld',
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
 *  /api/bicserviceofferinginfo/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
 *      summary: Count all bicserviceofferinginfo
 *      description: Count all bicserviceofferinginfo
 *      responses:
 *        200:
 *          description: Bicserviceofferinginfo count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicserviceofferinginfo"
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
    const payload = await BicserviceofferinginfoDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/bicserviceofferinginfo/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
 *      summary: Find all bicserviceofferinginfo that match search criteria
 *      description: Find all bicserviceofferinginfo that match search criteria
 *      responses:
 *        200:
 *          description: Bicserviceofferinginfo list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Bicserviceofferinginfo"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await BicserviceofferinginfoDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/bicserviceofferinginfo/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Bicserviceofferinginfo]
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
 *                $ref: "#/components/schemas/Bicserviceofferinginfo"
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
    const payload = await BicserviceofferinginfoDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
