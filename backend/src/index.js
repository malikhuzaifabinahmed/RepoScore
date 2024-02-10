const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const db = require('./db/models');
const config = require('./config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');

const usersRoutes = require('./routes/users');

const activegraduatedstartupinfoRoutes = require('./routes/activegraduatedstartupinfo');

const anualresearchrevenueRoutes = require('./routes/anualresearchrevenue');

const bicdataRoutes = require('./routes/bicdata');

const bicfundinginfoRoutes = require('./routes/bicfundinginfo');

const bichumanresourceRoutes = require('./routes/bichumanresource');

const bicserviceofferinginfoRoutes = require('./routes/bicserviceofferinginfo');

const bicsupportinfoRoutes = require('./routes/bicsupportinfo');

const categoriesRoutes = require('./routes/categories');

const colaborationagreementRoutes = require('./routes/colaborationagreement');

const commitiesRoutes = require('./routes/commities');

const coursedetailsinfoRoutes = require('./routes/coursedetailsinfo');

const engagementeventsRoutes = require('./routes/engagementevents');

const graduatedstartupfacilitationinfoRoutes = require('./routes/graduatedstartupfacilitationinfo');

const honorsandawardsRoutes = require('./routes/honorsandawards');

const humanresourceRoutes = require('./routes/humanresource');

const mentorshipinfoRoutes = require('./routes/mentorshipinfo');

const oricdataRoutes = require('./routes/oricdata');

const partnershipinfoRoutes = require('./routes/partnershipinfo');

const patentsRoutes = require('./routes/patents');

const policyadvocacyRoutes = require('./routes/policyadvocacy');

const researchlinksRoutes = require('./routes/researchlinks');

const researchpolicyRoutes = require('./routes/researchpolicy');

const researchproposalandgrantsRoutes = require('./routes/researchproposalandgrants');

const spinoffstartupsRoutes = require('./routes/spinoffstartups');

const startupeventsRoutes = require('./routes/startupevents');

const startupincubationRoutes = require('./routes/startupincubation');

const startupmentoringRoutes = require('./routes/startupmentoring');

const startuprevenueRoutes = require('./routes/startuprevenue');

const startupsappliedforpitchingRoutes = require('./routes/startupsappliedforpitching');

const startupsincubatedRoutes = require('./routes/startupsincubated');

const trainingcourseinfoRoutes = require('./routes/trainingcourseinfo');

const trainingsRoutes = require('./routes/trainings');

const universityRoutes = require('./routes/university');

const universityadvancedstudiesandresearchboardRoutes = require('./routes/universityadvancedstudiesandresearchboard');

const visitsRoutes = require('./routes/visits');

const workshopeventinfoRoutes = require('./routes/workshopeventinfo');

const startupemplomentRoutes = require('./routes/startupemploment');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'temp score 1',
      description:
        'temp score 1 Online REST API for Testing and Prototyping application. You can perform all major operations with your entities - create, delete and etc.',
    },
    servers: [
      {
        url: config.swaggerUrl,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      responses: {
        UnauthorizedError: {
          description: 'Access token is missing or invalid',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsDoc(options);
app.use(
  '/api-docs',
  function (req, res, next) {
    swaggerUI.host = req.get('host');
    next();
  },
  swaggerUI.serve,
  swaggerUI.setup(specs),
);

app.use(cors({ origin: true }));
require('./auth/auth');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);

app.use(
  '/api/users',
  passport.authenticate('jwt', { session: false }),
  usersRoutes,
);

app.use(
  '/api/activegraduatedstartupinfo',
  passport.authenticate('jwt', { session: false }),
  activegraduatedstartupinfoRoutes,
);

app.use(
  '/api/anualresearchrevenue',
  passport.authenticate('jwt', { session: false }),
  anualresearchrevenueRoutes,
);

app.use(
  '/api/bicdata',
  passport.authenticate('jwt', { session: false }),
  bicdataRoutes,
);

app.use(
  '/api/bicfundinginfo',
  passport.authenticate('jwt', { session: false }),
  bicfundinginfoRoutes,
);

app.use(
  '/api/bichumanresource',
  passport.authenticate('jwt', { session: false }),
  bichumanresourceRoutes,
);

app.use(
  '/api/bicserviceofferinginfo',
  passport.authenticate('jwt', { session: false }),
  bicserviceofferinginfoRoutes,
);

app.use(
  '/api/bicsupportinfo',
  passport.authenticate('jwt', { session: false }),
  bicsupportinfoRoutes,
);

app.use(
  '/api/categories',
  passport.authenticate('jwt', { session: false }),
  categoriesRoutes,
);

app.use(
  '/api/colaborationagreement',
  passport.authenticate('jwt', { session: false }),
  colaborationagreementRoutes,
);

app.use(
  '/api/commities',
  passport.authenticate('jwt', { session: false }),
  commitiesRoutes,
);

app.use(
  '/api/coursedetailsinfo',
  passport.authenticate('jwt', { session: false }),
  coursedetailsinfoRoutes,
);

app.use(
  '/api/engagementevents',
  passport.authenticate('jwt', { session: false }),
  engagementeventsRoutes,
);

app.use(
  '/api/graduatedstartupfacilitationinfo',
  passport.authenticate('jwt', { session: false }),
  graduatedstartupfacilitationinfoRoutes,
);

app.use(
  '/api/honorsandawards',
  passport.authenticate('jwt', { session: false }),
  honorsandawardsRoutes,
);

app.use(
  '/api/humanresource',
  passport.authenticate('jwt', { session: false }),
  humanresourceRoutes,
);

app.use(
  '/api/mentorshipinfo',
  passport.authenticate('jwt', { session: false }),
  mentorshipinfoRoutes,
);

app.use(
  '/api/oricdata',
  passport.authenticate('jwt', { session: false }),
  oricdataRoutes,
);

app.use(
  '/api/partnershipinfo',
  passport.authenticate('jwt', { session: false }),
  partnershipinfoRoutes,
);

app.use(
  '/api/patents',
  passport.authenticate('jwt', { session: false }),
  patentsRoutes,
);

app.use(
  '/api/policyadvocacy',
  passport.authenticate('jwt', { session: false }),
  policyadvocacyRoutes,
);

app.use(
  '/api/researchlinks',
  passport.authenticate('jwt', { session: false }),
  researchlinksRoutes,
);

app.use(
  '/api/researchpolicy',
  passport.authenticate('jwt', { session: false }),
  researchpolicyRoutes,
);

app.use(
  '/api/researchproposalandgrants',
  passport.authenticate('jwt', { session: false }),
  researchproposalandgrantsRoutes,
);

app.use(
  '/api/spinoffstartups',
  passport.authenticate('jwt', { session: false }),
  spinoffstartupsRoutes,
);

app.use(
  '/api/startupevents',
  passport.authenticate('jwt', { session: false }),
  startupeventsRoutes,
);

app.use(
  '/api/startupincubation',
  passport.authenticate('jwt', { session: false }),
  startupincubationRoutes,
);

app.use(
  '/api/startupmentoring',
  passport.authenticate('jwt', { session: false }),
  startupmentoringRoutes,
);

app.use(
  '/api/startuprevenue',
  passport.authenticate('jwt', { session: false }),
  startuprevenueRoutes,
);

app.use(
  '/api/startupsappliedforpitching',
  passport.authenticate('jwt', { session: false }),
  startupsappliedforpitchingRoutes,
);

app.use(
  '/api/startupsincubated',
  passport.authenticate('jwt', { session: false }),
  startupsincubatedRoutes,
);

app.use(
  '/api/trainingcourseinfo',
  passport.authenticate('jwt', { session: false }),
  trainingcourseinfoRoutes,
);

app.use(
  '/api/trainings',
  passport.authenticate('jwt', { session: false }),
  trainingsRoutes,
);

app.use(
  '/api/university',
  passport.authenticate('jwt', { session: false }),
  universityRoutes,
);

app.use(
  '/api/universityadvancedstudiesandresearchboard',
  passport.authenticate('jwt', { session: false }),
  universityadvancedstudiesandresearchboardRoutes,
);

app.use(
  '/api/visits',
  passport.authenticate('jwt', { session: false }),
  visitsRoutes,
);

app.use(
  '/api/workshopeventinfo',
  passport.authenticate('jwt', { session: false }),
  workshopeventinfoRoutes,
);

app.use(
  '/api/startupemploment',
  passport.authenticate('jwt', { session: false }),
  startupemplomentRoutes,
);

const publicDir = path.join(__dirname, '../public');

if (fs.existsSync(publicDir)) {
  app.use('/', express.static(publicDir));

  app.get('*', function (request, response) {
    response.sendFile(path.resolve(publicDir, 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

module.exports = app;
