const express = require('express');

const ResearchproposalandgrantsService = require('../services/researchproposalandgrants');
const ResearchproposalandgrantsDBApi = require('../db/api/researchproposalandgrants');
const wrapAsync = require('../helpers').wrapAsync;

const router = express.Router();

const { parse } = require('json2csv');

/**
 *  @swagger
 *  components:
 *    schemas:
 *      Researchproposalandgrants:
 *        type: object
 *        properties:

 *          approvedorrequiredmodificationordifferedordisapproved:
 *            type: string
 *            default: approvedorrequiredmodificationordifferedordisapproved
 *          thematicarea:
 *            type: string
 *            default: thematicarea
 *          nameofresearch:
 *            type: string
 *            default: nameofresearch
 *          nameofpi:
 *            type: string
 *            default: nameofpi
 *          pidesignation:
 *            type: string
 *            default: pidesignation
 *          pidepartment:
 *            type: string
 *            default: pidepartment
 *          nameofcopi:
 *            type: string
 *            default: nameofcopi
 *          copidesignation:
 *            type: string
 *            default: copidesignation
 *          copidepartment:
 *            type: string
 *            default: copidepartment
 *          titleofresearchproposal:
 *            type: string
 *            default: titleofresearchproposal
 *          durationstartingandendingdate:
 *            type: string
 *            default: durationstartingandendingdate
 *          totalfundingrequestedrs:
 *            type: string
 *            default: totalfundingrequestedrs
 *          totalfundingapproved:
 *            type: string
 *            default: totalfundingapproved
 *          totalfundingreleased:
 *            type: string
 *            default: totalfundingreleased
 *          collaboratingpartnerdetailsifany:
 *            type: string
 *            default: collaboratingpartnerdetailsifany
 *          cofundingpartnerdetailsifany:
 *            type: string
 *            default: cofundingpartnerdetailsifany
 *          nameofsponsringagency:
 *            type: string
 *            default: nameofsponsringagency
 *          addressofsponsoringagency:
 *            type: string
 *            default: addressofsponsoringagency
 *          countryofsponsoringagency:
 *            type: string
 *            default: countryofsponsoringagency
 *          status:
 *            type: string
 *            default: status
 *          remarks:
 *            type: string
 *            default: remarks
 *          relatedinformation:
 *            type: string
 *            default: relatedinformation
 *          keyprojectdeliverables:
 *            type: string
 *            default: keyprojectdeliverables
 *          oricoverheadinapprovedfunding:
 *            type: string
 *            default: oricoverheadinapprovedfunding
 *          totalfundingutilized:
 *            type: string
 *            default: totalfundingutilized
 *          statusofirbmeeting:
 *            type: string
 *            default: statusofirbmeeting

 */

/**
 *  @swagger
 * tags:
 *   name: Researchproposalandgrants
 *   description: The Researchproposalandgrants managing API
 */

/**
 *  @swagger
 *  /api/researchproposalandgrants:
 *    post:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
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
 *                  $ref: "#/components/schemas/Researchproposalandgrants"
 *      responses:
 *        200:
 *          description: The item was successfully added
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Researchproposalandgrants"
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
    await ResearchproposalandgrantsService.create(
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
    await ResearchproposalandgrantsService.bulkImport(
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
 *  /api/researchproposalandgrants/{id}:
 *    put:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
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
 *                  $ref: "#/components/schemas/Researchproposalandgrants"
 *              required:
 *                - id
 *      responses:
 *        200:
 *          description: The item data was successfully updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Researchproposalandgrants"
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
    await ResearchproposalandgrantsService.update(
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
 *  /api/researchproposalandgrants/{id}:
 *    delete:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
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
 *                $ref: "#/components/schemas/Researchproposalandgrants"
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
    await ResearchproposalandgrantsService.remove(
      req.params.id,
      req.currentUser,
    );
    const payload = true;
    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/researchproposalandgrants:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
 *      summary: Get all researchproposalandgrants
 *      description: Get all researchproposalandgrants
 *      responses:
 *        200:
 *          description: Researchproposalandgrants list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Researchproposalandgrants"
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
    const payload = await ResearchproposalandgrantsDBApi.findAll(req.query);
    if (filetype && filetype === 'csv') {
      const fields = [
        'id',
        'approvedorrequiredmodificationordifferedordisapproved',
        'thematicarea',
        'nameofresearch',
        'nameofpi',
        'pidesignation',
        'pidepartment',
        'nameofcopi',
        'copidesignation',
        'copidepartment',
        'titleofresearchproposal',
        'durationstartingandendingdate',
        'totalfundingrequestedrs',
        'totalfundingapproved',
        'totalfundingreleased',
        'collaboratingpartnerdetailsifany',
        'cofundingpartnerdetailsifany',
        'nameofsponsringagency',
        'addressofsponsoringagency',
        'countryofsponsoringagency',
        'status',
        'remarks',
        'relatedinformation',
        'keyprojectdeliverables',
        'oricoverheadinapprovedfunding',
        'totalfundingutilized',
        'statusofirbmeeting',

        'dateofcontract',
        'dateofapproval',
        'dateofprojectcompletion',
        'dateofproposalsubmission',
        'dateofreview',
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
 *  /api/researchproposalandgrants/count:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
 *      summary: Count all researchproposalandgrants
 *      description: Count all researchproposalandgrants
 *      responses:
 *        200:
 *          description: Researchproposalandgrants count successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Researchproposalandgrants"
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
    const payload = await ResearchproposalandgrantsDBApi.findAll(req.query, {
      countOnly: true,
    });

    res.status(200).send(payload);
  }),
);

/**
 *  @swagger
 *  /api/researchproposalandgrants/autocomplete:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
 *      summary: Find all researchproposalandgrants that match search criteria
 *      description: Find all researchproposalandgrants that match search criteria
 *      responses:
 *        200:
 *          description: Researchproposalandgrants list successfully received
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: "#/components/schemas/Researchproposalandgrants"
 *        401:
 *          $ref: "#/components/responses/UnauthorizedError"
 *        404:
 *          description: Data not found
 *        500:
 *          description: Some server error
 */
router.get('/autocomplete', async (req, res) => {
  const payload = await ResearchproposalandgrantsDBApi.findAllAutocomplete(
    req.query.query,
    req.query.limit,
  );

  res.status(200).send(payload);
});

/**
 * @swagger
 *  /api/researchproposalandgrants/{id}:
 *    get:
 *      security:
 *        - bearerAuth: []
 *      tags: [Researchproposalandgrants]
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
 *                $ref: "#/components/schemas/Researchproposalandgrants"
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
    const payload = await ResearchproposalandgrantsDBApi.findBy({
      id: req.params.id,
    });

    res.status(200).send(payload);
  }),
);

router.use('/', require('../helpers').commonErrorHandler);

module.exports = router;
