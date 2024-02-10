import auth from 'reducers/auth';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import activegraduatedstartupinfo from 'reducers/activegraduatedstartupinfo/activegraduatedstartupinfoReducers';

import anualresearchrevenue from 'reducers/anualresearchrevenue/anualresearchrevenueReducers';

import bicdata from 'reducers/bicdata/bicdataReducers';

import bicfundinginfo from 'reducers/bicfundinginfo/bicfundinginfoReducers';

import bichumanresource from 'reducers/bichumanresource/bichumanresourceReducers';

import bicserviceofferinginfo from 'reducers/bicserviceofferinginfo/bicserviceofferinginfoReducers';

import bicsupportinfo from 'reducers/bicsupportinfo/bicsupportinfoReducers';

import categories from 'reducers/categories/categoriesReducers';

import colaborationagreement from 'reducers/colaborationagreement/colaborationagreementReducers';

import commities from 'reducers/commities/commitiesReducers';

import coursedetailsinfo from 'reducers/coursedetailsinfo/coursedetailsinfoReducers';

import engagementevents from 'reducers/engagementevents/engagementeventsReducers';

import graduatedstartupfacilitationinfo from 'reducers/graduatedstartupfacilitationinfo/graduatedstartupfacilitationinfoReducers';

import honorsandawards from 'reducers/honorsandawards/honorsandawardsReducers';

import humanresource from 'reducers/humanresource/humanresourceReducers';

import mentorshipinfo from 'reducers/mentorshipinfo/mentorshipinfoReducers';

import oricdata from 'reducers/oricdata/oricdataReducers';

import partnershipinfo from 'reducers/partnershipinfo/partnershipinfoReducers';

import patents from 'reducers/patents/patentsReducers';

import policyadvocacy from 'reducers/policyadvocacy/policyadvocacyReducers';

import researchlinks from 'reducers/researchlinks/researchlinksReducers';

import researchpolicy from 'reducers/researchpolicy/researchpolicyReducers';

import researchproposalandgrants from 'reducers/researchproposalandgrants/researchproposalandgrantsReducers';

import spinoffstartups from 'reducers/spinoffstartups/spinoffstartupsReducers';

import startupevents from 'reducers/startupevents/startupeventsReducers';

import startupincubation from 'reducers/startupincubation/startupincubationReducers';

import startupmentoring from 'reducers/startupmentoring/startupmentoringReducers';

import startuprevenue from 'reducers/startuprevenue/startuprevenueReducers';

import startupsappliedforpitching from 'reducers/startupsappliedforpitching/startupsappliedforpitchingReducers';

import startupsincubated from 'reducers/startupsincubated/startupsincubatedReducers';

import trainingcourseinfo from 'reducers/trainingcourseinfo/trainingcourseinfoReducers';

import trainings from 'reducers/trainings/trainingsReducers';

import university from 'reducers/university/universityReducers';

import universityadvancedstudiesandresearchboard from 'reducers/universityadvancedstudiesandresearchboard/universityadvancedstudiesandresearchboardReducers';

import visits from 'reducers/visits/visitsReducers';

import workshopeventinfo from 'reducers/workshopeventinfo/workshopeventinfoReducers';

import startupemploment from 'reducers/startupemploment/startupemplomentReducers';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,

    users,

    activegraduatedstartupinfo,

    anualresearchrevenue,

    bicdata,

    bicfundinginfo,

    bichumanresource,

    bicserviceofferinginfo,

    bicsupportinfo,

    categories,

    colaborationagreement,

    commities,

    coursedetailsinfo,

    engagementevents,

    graduatedstartupfacilitationinfo,

    honorsandawards,

    humanresource,

    mentorshipinfo,

    oricdata,

    partnershipinfo,

    patents,

    policyadvocacy,

    researchlinks,

    researchpolicy,

    researchproposalandgrants,

    spinoffstartups,

    startupevents,

    startupincubation,

    startupmentoring,

    startuprevenue,

    startupsappliedforpitching,

    startupsincubated,

    trainingcourseinfo,

    trainings,

    university,

    universityadvancedstudiesandresearchboard,

    visits,

    workshopeventinfo,

    startupemploment,
  });
