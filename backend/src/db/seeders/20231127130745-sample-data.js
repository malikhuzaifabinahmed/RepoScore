const db = require('../models');
const Users = db.users;

const Activegraduatedstartupinfo = db.activegraduatedstartupinfo;

const Anualresearchrevenue = db.anualresearchrevenue;

const Bicdata = db.bicdata;

const Bicfundinginfo = db.bicfundinginfo;

const Bichumanresource = db.bichumanresource;

const Bicserviceofferinginfo = db.bicserviceofferinginfo;

const Bicsupportinfo = db.bicsupportinfo;

const Categories = db.categories;

const Colaborationagreement = db.colaborationagreement;

const Commities = db.commities;

const Coursedetailsinfo = db.coursedetailsinfo;

const Engagementevents = db.engagementevents;

const Graduatedstartupfacilitationinfo = db.graduatedstartupfacilitationinfo;

const Honorsandawards = db.honorsandawards;

const Humanresource = db.humanresource;

const Mentorshipinfo = db.mentorshipinfo;

const Oricdata = db.oricdata;

const Partnershipinfo = db.partnershipinfo;

const Patents = db.patents;

const Policyadvocacy = db.policyadvocacy;

const Researchlinks = db.researchlinks;

const Researchpolicy = db.researchpolicy;

const Researchproposalandgrants = db.researchproposalandgrants;

const Spinoffstartups = db.spinoffstartups;

const Startupevents = db.startupevents;

const Startupincubation = db.startupincubation;

const Startupmentoring = db.startupmentoring;

const Startuprevenue = db.startuprevenue;

const Startupsappliedforpitching = db.startupsappliedforpitching;

const Startupsincubated = db.startupsincubated;

const Trainingcourseinfo = db.trainingcourseinfo;

const Trainings = db.trainings;

const University = db.university;

const Universityadvancedstudiesandresearchboard =
  db.universityadvancedstudiesandresearchboard;

const Visits = db.visits;

const Workshopeventinfo = db.workshopeventinfo;

const Startupemploment = db.startupemploment;

const ActivegraduatedstartupinfoData = [
  {
    nameofgraduatedstartup: 'Got depression, Smith and Wessen',

    companybriefidea: 'Like a red-headed stepchild',

    // type code here for "date" field

    currentstatusactiveregisteredconcernaccelerated: "C'mon Naomi",

    networthofstartupaverageyearlyrevenue: 'Got depression, Smith and Wessen',

    ipoacquisitionamalgamationifany: 'No one tells me shit',

    noofemployeeswithstartup: 'My boss gonna fire me',

    survivalrateofgraduatedstartups:
      'Reminds me of my old girlfriend Olga Goodntight',

    totalstartupsactiveaftergraduation: 'Like a red-headed stepchild',

    totalstartupshavingipoacquisition: 'Yup',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgraduatedstartup: 'My boss gonna fire me',

    companybriefidea: 'I want my damn cart back',

    // type code here for "date" field

    currentstatusactiveregisteredconcernaccelerated: 'Yup',

    networthofstartupaverageyearlyrevenue: 'Yup',

    ipoacquisitionamalgamationifany: "That's messed up",

    noofemployeeswithstartup: 'Might be DQ time',

    survivalrateofgraduatedstartups: "I'm washing my hands of it",

    totalstartupsactiveaftergraduation: 'My buddy Harlen',

    totalstartupshavingipoacquisition: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgraduatedstartup: 'Yup',

    companybriefidea: 'Like a red-headed stepchild',

    // type code here for "date" field

    currentstatusactiveregisteredconcernaccelerated: "Y'all never listen to me",

    networthofstartupaverageyearlyrevenue: "Y'all never listen to me",

    ipoacquisitionamalgamationifany: 'That damn diabetes',

    noofemployeeswithstartup: 'Might be DQ time',

    survivalrateofgraduatedstartups:
      "That Barbala couldn't fly his way out of a wet paper bag",

    totalstartupsactiveaftergraduation: 'I want my 5$ back',

    totalstartupshavingipoacquisition: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgraduatedstartup: 'I tell you what',

    companybriefidea: "It's around here somewhere",

    // type code here for "date" field

    currentstatusactiveregisteredconcernaccelerated:
      "It's around here somewhere",

    networthofstartupaverageyearlyrevenue: 'Like a red-headed stepchild',

    ipoacquisitionamalgamationifany: 'That damn diabetes',

    noofemployeeswithstartup: 'Yup',

    survivalrateofgraduatedstartups: 'I tell you what',

    totalstartupsactiveaftergraduation: "I'm washing my hands of it",

    totalstartupshavingipoacquisition:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgraduatedstartup: 'I want my damn cart back',

    companybriefidea: "C'mon Naomi",

    // type code here for "date" field

    currentstatusactiveregisteredconcernaccelerated: 'I want my damn cart back',

    networthofstartupaverageyearlyrevenue: "Goin' hog huntin'",

    ipoacquisitionamalgamationifany: 'Got depression, Smith and Wessen',

    noofemployeeswithstartup: 'I got that scurvy',

    survivalrateofgraduatedstartups: "Goin' hog huntin'",

    totalstartupsactiveaftergraduation: 'Texas!',

    totalstartupshavingipoacquisition: 'I tell you what',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const AnualresearchrevenueData = [
  {
    researchgrantname: "How 'bout them Cowboys",

    remarks: 'Yup',

    anexpagerefno: 5,

    oricoverheadinreleasedfunding:
      "That Barbala couldn't fly his way out of a wet paper bag",

    nationalorinternational: 'My buddy Harlen',

    titleofresearchproposal: 'Let me tell ya',

    detailsofpi: "It's around here somewhere",

    isjointventure: 'Turd gone wrong',

    nameofjointventure: 'Let me tell ya',

    detailsofjointventure: 'Standby',

    // type code here for "date" field

    totalfundingapproved: 'That goddamn Datamate',

    oricoverheadinapprovedfunding: "That's messed up",

    nameofpi: 'Standby',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    researchgrantname: 'Always the last one to the party',

    remarks: "It's around here somewhere",

    anexpagerefno: 2,

    oricoverheadinreleasedfunding: 'That damn diabetes',

    nationalorinternational: "How 'bout them Cowboys",

    titleofresearchproposal: 'I got that scurvy',

    detailsofpi: 'My boss gonna fire me',

    isjointventure: "Y'all never listen to me",

    nameofjointventure: 'Always the last one to the party',

    detailsofjointventure: 'Come on now',

    // type code here for "date" field

    totalfundingapproved: "That's messed up",

    oricoverheadinapprovedfunding: "C'mon Naomi",

    nameofpi: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    researchgrantname: 'Always the last one to the party',

    remarks: 'I want my damn cart back',

    anexpagerefno: 8,

    oricoverheadinreleasedfunding: 'I want my damn cart back',

    nationalorinternational: 'My buddy Harlen',

    titleofresearchproposal: 'My boss gonna fire me',

    detailsofpi: 'I want my 5$ back',

    isjointventure: 'Come on now',

    nameofjointventure: "Goin' hog huntin'",

    detailsofjointventure: 'I got that scurvy',

    // type code here for "date" field

    totalfundingapproved: "It's around here somewhere",

    oricoverheadinapprovedfunding: 'Standby',

    nameofpi: 'Always the last one to the party',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    researchgrantname: 'Got depression, Smith and Wessen',

    remarks: 'That damn diabetes',

    anexpagerefno: 2,

    oricoverheadinreleasedfunding: 'Always the last one to the party',

    nationalorinternational: 'I want my damn cart back',

    titleofresearchproposal: 'My buddy Harlen',

    detailsofpi: 'So I was walking Oscar',

    isjointventure: 'Reminds me of my old girlfriend Olga Goodntight',

    nameofjointventure: 'I want my 5$ back',

    detailsofjointventure: 'My buddy Harlen',

    // type code here for "date" field

    totalfundingapproved: 'I want my damn cart back',

    oricoverheadinapprovedfunding: 'My buddy Harlen',

    nameofpi: 'Texas!',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    researchgrantname: 'My buddy Harlen',

    remarks: 'Always the last one to the party',

    anexpagerefno: 7,

    oricoverheadinreleasedfunding: 'I tell you what',

    nationalorinternational: 'Turd gone wrong',

    titleofresearchproposal:
      "That Barbala couldn't fly his way out of a wet paper bag",

    detailsofpi: 'That damn Bill Stull',

    isjointventure: 'I want my damn cart back',

    nameofjointventure: 'Come on now',

    detailsofjointventure: 'Like a red-headed stepchild',

    // type code here for "date" field

    totalfundingapproved: 'Like a red-headed stepchild',

    oricoverheadinapprovedfunding: 'That damn diabetes',

    nameofpi: 'Yup',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const BicdataData = [
  {
    universityname: "C'mon Naomi",

    oricbankaccounttitle: 'That damn diabetes',

    oricbankaccountnumber:
      "That Barbala couldn't fly his way out of a wet paper bag",

    ORICCentralizedEmailId: 'Always the last one to the party',

    ORICPostalAddress: "C'mon Naomi",

    shortlinkforORICWebsite: 'Might be DQ time',

    nameoffocalpersonmanagingwebpage: 'That goddamn Datamate',

    phonenumberoffocalpersonmanagingwebpage: 'Texas!',

    tiscphonenumber: "It's around here somewhere",

    tiscemailid: "That's messed up",
  },

  {
    universityname: 'My boss gonna fire me',

    oricbankaccounttitle: 'So I was walking Oscar',

    oricbankaccountnumber: 'My boss gonna fire me',

    ORICCentralizedEmailId: "How 'bout them Cowboys",

    ORICPostalAddress: 'That goddamn Datamate',

    shortlinkforORICWebsite: 'Contact the tower',

    nameoffocalpersonmanagingwebpage:
      "That Barbala couldn't fly his way out of a wet paper bag",

    phonenumberoffocalpersonmanagingwebpage: 'No one tells me shit',

    tiscphonenumber: 'Yup',

    tiscemailid: 'Standby',
  },

  {
    universityname: "I'm washing my hands of it",

    oricbankaccounttitle: 'Might be DQ time',

    oricbankaccountnumber: 'Let me tell ya',

    ORICCentralizedEmailId: 'I want my damn cart back',

    ORICPostalAddress: "It's around here somewhere",

    shortlinkforORICWebsite: 'Contact the tower',

    nameoffocalpersonmanagingwebpage: 'That damn diabetes',

    phonenumberoffocalpersonmanagingwebpage: 'Standby',

    tiscphonenumber: 'That damn diabetes',

    tiscemailid: 'Yup',
  },

  {
    universityname: 'Reminds me of my old girlfriend Olga Goodntight',

    oricbankaccounttitle: 'Like a red-headed stepchild',

    oricbankaccountnumber: 'No one tells me shit',

    ORICCentralizedEmailId: 'No one tells me shit',

    ORICPostalAddress: "Goin' hog huntin'",

    shortlinkforORICWebsite: 'I want my damn cart back',

    nameoffocalpersonmanagingwebpage: 'Might be DQ time',

    phonenumberoffocalpersonmanagingwebpage: 'Texas!',

    tiscphonenumber: 'My boss gonna fire me',

    tiscemailid: 'Always the last one to the party',
  },

  {
    universityname: 'Come on now',

    oricbankaccounttitle: 'Always the last one to the party',

    oricbankaccountnumber: 'Like a red-headed stepchild',

    ORICCentralizedEmailId: 'That goddamn Datamate',

    ORICPostalAddress: 'No one tells me shit',

    shortlinkforORICWebsite: 'That damn gimble',

    nameoffocalpersonmanagingwebpage: 'Let me tell ya',

    phonenumberoffocalpersonmanagingwebpage: "C'mon Naomi",

    tiscphonenumber: 'Turd gone wrong',

    tiscemailid: 'That damn Bill Stull',
  },
];

const BicfundinginfoData = [
  {
    nameofstartup: 'Reminds me of my old girlfriend Olga Goodntight',

    nameoffundingagency: 'I got that scurvy',

    nationalorinternational: 'I want my 5$ back',

    typeoffunding: 'Always the last one to the party',

    amountsecured: 'Might be DQ time',

    amountutilizeddistributed: 'That damn Bill Stull',

    inkindsupportfromfundingagencyifany: 'I want my damn cart back',

    agreementsignedwithfundingagencyifany: 'That damn Bill Stull',

    recurringoronetypesupport: 'Yup',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'That damn diabetes',

    nameoffundingagency: 'My buddy Harlen',

    nationalorinternational: 'I want my 5$ back',

    typeoffunding: 'I want my damn cart back',

    amountsecured: "It's around here somewhere",

    amountutilizeddistributed: 'That goddamn Datamate',

    inkindsupportfromfundingagencyifany:
      "That Barbala couldn't fly his way out of a wet paper bag",

    agreementsignedwithfundingagencyifany: 'Come on now',

    recurringoronetypesupport: "Goin' hog huntin'",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'I tell you what',

    nameoffundingagency: 'Let me tell ya',

    nationalorinternational: 'Like a red-headed stepchild',

    typeoffunding: "C'mon Naomi",

    amountsecured: "I'm washing my hands of it",

    amountutilizeddistributed: "Y'all never listen to me",

    inkindsupportfromfundingagencyifany: 'Might be DQ time',

    agreementsignedwithfundingagencyifany: "I'm washing my hands of it",

    recurringoronetypesupport: 'Got depression, Smith and Wessen',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'That damn diabetes',

    nameoffundingagency: 'Turd gone wrong',

    nationalorinternational: 'Got depression, Smith and Wessen',

    typeoffunding: 'Reminds me of my old girlfriend Olga Goodntight',

    amountsecured: 'My buddy Harlen',

    amountutilizeddistributed: 'Contact the tower',

    inkindsupportfromfundingagencyifany: "It's around here somewhere",

    agreementsignedwithfundingagencyifany: "I'm washing my hands of it",

    recurringoronetypesupport: 'I got that scurvy',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: "That's messed up",

    nameoffundingagency: 'Got depression, Smith and Wessen',

    nationalorinternational: 'That damn gimble',

    typeoffunding: 'Yup',

    amountsecured: 'Yup',

    amountutilizeddistributed: 'No one tells me shit',

    inkindsupportfromfundingagencyifany: 'I tell you what',

    agreementsignedwithfundingagencyifany: "That's messed up",

    recurringoronetypesupport: 'Turd gone wrong',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const BichumanresourceData = [
  {
    isbicsupportstaff: true,

    position: 'Turd gone wrong',

    fulltimeparttime: "C'mon Naomi",

    name: 'Edward Teller',

    officephonenumber: 'Might be DQ time',

    mobilenumber: 'That goddamn Datamate',

    emailid: "C'mon Naomi",

    qualificationlevel: "It's around here somewhere",

    qualificationtitle: 'My buddy Harlen',

    fieldofstudy: 'My boss gonna fire me',

    cnic: 'I want my damn cart back',

    // type code here for "date" field

    periodupto: 'Texas!',

    totalexperience: 'Like a red-headed stepchild',

    nonacademiaexperience: 'That goddamn Datamate',

    notificationofficeorderjoiningreportandcv: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    isbicsupportstaff: true,

    position: 'Let me tell ya',

    fulltimeparttime: 'I got that scurvy',

    name: 'James Clerk Maxwell',

    officephonenumber: "Goin' hog huntin'",

    mobilenumber: 'So I was walking Oscar',

    emailid: 'My boss gonna fire me',

    qualificationlevel: 'Turd gone wrong',

    qualificationtitle: 'Might be DQ time',

    fieldofstudy: 'That damn gimble',

    cnic: 'Texas!',

    // type code here for "date" field

    periodupto: "How 'bout them Cowboys",

    totalexperience: 'Got depression, Smith and Wessen',

    nonacademiaexperience: 'Come on now',

    notificationofficeorderjoiningreportandcv: 'That damn Bill Stull',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    isbicsupportstaff: true,

    position: 'Turd gone wrong',

    fulltimeparttime: 'Reminds me of my old girlfriend Olga Goodntight',

    name: 'Hermann von Helmholtz',

    officephonenumber: 'I want my 5$ back',

    mobilenumber: "I'm washing my hands of it",

    emailid: 'Turd gone wrong',

    qualificationlevel: 'Texas!',

    qualificationtitle: 'I tell you what',

    fieldofstudy: "Goin' hog huntin'",

    cnic: 'That damn Bill Stull',

    // type code here for "date" field

    periodupto: 'Might be DQ time',

    totalexperience: 'My buddy Harlen',

    nonacademiaexperience: 'That goddamn Datamate',

    notificationofficeorderjoiningreportandcv: 'That goddamn Datamate',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    isbicsupportstaff: false,

    position: "I'm washing my hands of it",

    fulltimeparttime: 'Contact the tower',

    name: 'Tycho Brahe',

    officephonenumber: 'Turd gone wrong',

    mobilenumber: 'I got that scurvy',

    emailid: 'No one tells me shit',

    qualificationlevel: 'Yup',

    qualificationtitle: 'Reminds me of my old girlfriend Olga Goodntight',

    fieldofstudy: 'Texas!',

    cnic: 'No one tells me shit',

    // type code here for "date" field

    periodupto: 'So I was walking Oscar',

    totalexperience: "It's around here somewhere",

    nonacademiaexperience: "It's around here somewhere",

    notificationofficeorderjoiningreportandcv: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    isbicsupportstaff: false,

    position: "How 'bout them Cowboys",

    fulltimeparttime: 'That goddamn Datamate',

    name: 'B. F. Skinner',

    officephonenumber: 'That damn diabetes',

    mobilenumber: 'I want my damn cart back',

    emailid: 'My boss gonna fire me',

    qualificationlevel: "How 'bout them Cowboys",

    qualificationtitle: "I'm washing my hands of it",

    fieldofstudy: 'I got that scurvy',

    cnic: 'Always the last one to the party',

    // type code here for "date" field

    periodupto: "That's messed up",

    totalexperience: "How 'bout them Cowboys",

    nonacademiaexperience: 'Always the last one to the party',

    notificationofficeorderjoiningreportandcv: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const BicserviceofferinginfoData = [
  {
    natureofserviceofferedsessionheld: 'So I was walking Oscar',

    nameofserviceprovider: "Y'all never listen to me",

    backgroundandexpertise: 'Texas!',

    localinternational: 'That damn diabetes',

    noofstartupsfacilitated: 'Reminds me of my old girlfriend Olga Goodntight',

    totalnosessionsheld: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    natureofserviceofferedsessionheld: 'Yup',

    nameofserviceprovider: 'I want my 5$ back',

    backgroundandexpertise: 'My buddy Harlen',

    localinternational: "That's messed up",

    noofstartupsfacilitated: 'Standby',

    totalnosessionsheld: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    natureofserviceofferedsessionheld: 'Standby',

    nameofserviceprovider: "I'm washing my hands of it",

    backgroundandexpertise: 'No one tells me shit',

    localinternational: 'Like a red-headed stepchild',

    noofstartupsfacilitated: 'Standby',

    totalnosessionsheld: 'I tell you what',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    natureofserviceofferedsessionheld: 'Standby',

    nameofserviceprovider: 'Texas!',

    backgroundandexpertise: 'I want my 5$ back',

    localinternational: 'That damn diabetes',

    noofstartupsfacilitated: "Goin' hog huntin'",

    totalnosessionsheld: 'That damn Bill Stull',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    natureofserviceofferedsessionheld: 'Turd gone wrong',

    nameofserviceprovider: "That's messed up",

    backgroundandexpertise: 'I tell you what',

    localinternational: 'Always the last one to the party',

    noofstartupsfacilitated: "Goin' hog huntin'",

    totalnosessionsheld: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const BicsupportinfoData = [
  {
    levelofsupportfinancialinkind: 'I tell you what',

    areafacilitatedthroughsupport: 'That damn Bill Stull',

    financialinkindsupportextendedforactivity: 'That damn Bill Stull',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    levelofsupportfinancialinkind: 'I got that scurvy',

    areafacilitatedthroughsupport: 'Come on now',

    financialinkindsupportextendedforactivity:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    levelofsupportfinancialinkind: "Y'all never listen to me",

    areafacilitatedthroughsupport: 'That damn diabetes',

    financialinkindsupportextendedforactivity: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    levelofsupportfinancialinkind: 'Contact the tower',

    areafacilitatedthroughsupport: 'That damn diabetes',

    financialinkindsupportextendedforactivity:
      'Got depression, Smith and Wessen',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    levelofsupportfinancialinkind: 'No one tells me shit',

    areafacilitatedthroughsupport: "It's around here somewhere",

    financialinkindsupportextendedforactivity: 'My boss gonna fire me',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const CategoriesData = [
  {
    categoryname: "I'm washing my hands of it",

    categorytype: 'Turd gone wrong',

    organization: 'Turd gone wrong',
  },

  {
    categoryname: "Goin' hog huntin'",

    categorytype: 'Got depression, Smith and Wessen',

    organization: "I'm washing my hands of it",
  },

  {
    categoryname: "Y'all never listen to me",

    categorytype: 'That damn Bill Stull',

    organization: 'That damn gimble',
  },

  {
    categoryname: "How 'bout them Cowboys",

    categorytype: "Y'all never listen to me",

    organization: 'Come on now',
  },

  {
    categoryname: "C'mon Naomi",

    categorytype: 'Texas!',

    organization: 'Always the last one to the party',
  },
];

const ColaborationagreementData = [
  {
    typeoflinkages: 'Texas!',

    nationalinternational: 'Yup',

    hostcountryname: "Y'all never listen to me",

    hostcountryaddress: 'Texas!',

    // type code here for "date" field

    // type code here for "date" field

    keyinitiativestobeundertaken: 'My boss gonna fire me',

    field: "I'm washing my hands of it",

    scopeofcollaboration: 'Come on now',

    // type code here for "date" field

    financialsupport: "It's around here somewhere",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkages: "C'mon Naomi",

    nationalinternational: 'Reminds me of my old girlfriend Olga Goodntight',

    hostcountryname: 'Standby',

    hostcountryaddress: 'I got that scurvy',

    // type code here for "date" field

    // type code here for "date" field

    keyinitiativestobeundertaken: 'So I was walking Oscar',

    field: 'That damn diabetes',

    scopeofcollaboration: 'That goddamn Datamate',

    // type code here for "date" field

    financialsupport:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkages: 'I tell you what',

    nationalinternational: 'My boss gonna fire me',

    hostcountryname: "How 'bout them Cowboys",

    hostcountryaddress: 'Like a red-headed stepchild',

    // type code here for "date" field

    // type code here for "date" field

    keyinitiativestobeundertaken: 'Might be DQ time',

    field: 'I got that scurvy',

    scopeofcollaboration: "Y'all never listen to me",

    // type code here for "date" field

    financialsupport: "I'm washing my hands of it",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkages: 'Always the last one to the party',

    nationalinternational: 'That damn Bill Stull',

    hostcountryname: 'My buddy Harlen',

    hostcountryaddress: "It's around here somewhere",

    // type code here for "date" field

    // type code here for "date" field

    keyinitiativestobeundertaken: 'I got that scurvy',

    field: "Goin' hog huntin'",

    scopeofcollaboration: 'Yup',

    // type code here for "date" field

    financialsupport: 'Like a red-headed stepchild',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkages: "How 'bout them Cowboys",

    nationalinternational: 'I tell you what',

    hostcountryname: 'Standby',

    hostcountryaddress: 'That goddamn Datamate',

    // type code here for "date" field

    // type code here for "date" field

    keyinitiativestobeundertaken: "C'mon Naomi",

    field: "That's messed up",

    scopeofcollaboration: 'Texas!',

    // type code here for "date" field

    financialsupport: 'Standby',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const CommitiesData = [
  {
    name: 'Neils Bohr',

    designation: 'That damn diabetes',

    parentinstitutionorganization: 'That damn gimble',

    sectorfield: 'That damn diabetes',

    rolestatusincommittee: "Y'all never listen to me",

    // type code here for "date" field

    notified: 'Yup',

    noofmembers: 1,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Louis Victor de Broglie',

    designation: 'Reminds me of my old girlfriend Olga Goodntight',

    parentinstitutionorganization: "Y'all never listen to me",

    sectorfield: "That's messed up",

    rolestatusincommittee: 'Come on now',

    // type code here for "date" field

    notified: 'So I was walking Oscar',

    noofmembers: 4,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Max Planck',

    designation: 'That damn diabetes',

    parentinstitutionorganization: 'That damn gimble',

    sectorfield: 'Might be DQ time',

    rolestatusincommittee: 'That damn diabetes',

    // type code here for "date" field

    notified: 'Standby',

    noofmembers: 7,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Edwin Hubble',

    designation: 'Let me tell ya',

    parentinstitutionorganization: 'Got depression, Smith and Wessen',

    sectorfield: 'That damn Bill Stull',

    rolestatusincommittee: 'Always the last one to the party',

    // type code here for "date" field

    notified: 'Yup',

    noofmembers: 9,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Karl Landsteiner',

    designation: "How 'bout them Cowboys",

    parentinstitutionorganization: 'So I was walking Oscar',

    sectorfield: "C'mon Naomi",

    rolestatusincommittee: 'I want my 5$ back',

    // type code here for "date" field

    notified: 'Like a red-headed stepchild',

    noofmembers: 4,

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const CoursedetailsinfoData = [
  {
    titleofcourse: 'Got depression, Smith and Wessen',

    field: 'Come on now',

    level: 'Got depression, Smith and Wessen',

    credithours: "That Barbala couldn't fly his way out of a wet paper bag",

    totalmodules: 'I want my damn cart back',

    optionalcompulsory: 'I want my 5$ back',

    departmentsschoolsofferingthecourse: 'I want my damn cart back',

    learningoutcomes: 'So I was walking Oscar',

    totalnoofcoursesoffered: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofcourse: 'I want my 5$ back',

    field: 'That damn diabetes',

    level: 'That damn Bill Stull',

    credithours: 'Come on now',

    totalmodules: 'So I was walking Oscar',

    optionalcompulsory: 'I tell you what',

    departmentsschoolsofferingthecourse: "Goin' hog huntin'",

    learningoutcomes: 'Texas!',

    totalnoofcoursesoffered: 'That damn gimble',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofcourse: 'That goddamn Datamate',

    field: 'I want my 5$ back',

    level: "I'm washing my hands of it",

    credithours: "I'm washing my hands of it",

    totalmodules: 'My buddy Harlen',

    optionalcompulsory: 'Always the last one to the party',

    departmentsschoolsofferingthecourse: 'Let me tell ya',

    learningoutcomes: 'Come on now',

    totalnoofcoursesoffered: "It's around here somewhere",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofcourse: 'So I was walking Oscar',

    field: 'That damn Bill Stull',

    level: 'Let me tell ya',

    credithours: 'Got depression, Smith and Wessen',

    totalmodules: 'I want my damn cart back',

    optionalcompulsory: "How 'bout them Cowboys",

    departmentsschoolsofferingthecourse: "That's messed up",

    learningoutcomes: 'That damn diabetes',

    totalnoofcoursesoffered: 'Let me tell ya',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofcourse: 'My boss gonna fire me',

    field: 'That damn diabetes',

    level: 'My buddy Harlen',

    credithours: 'So I was walking Oscar',

    totalmodules: 'No one tells me shit',

    optionalcompulsory: "Goin' hog huntin'",

    departmentsschoolsofferingthecourse:
      'Reminds me of my old girlfriend Olga Goodntight',

    learningoutcomes: "I'm washing my hands of it",

    totalnoofcoursesoffered: 'Yup',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const EngagementeventsData = [
  {
    titleofevent: 'Turd gone wrong',

    componentofcommunityinvolved: 'Always the last one to the party',

    audiance: "That's messed up",

    outcome: "That Barbala couldn't fly his way out of a wet paper bag",

    collaborationdeveloped: 'Contact the tower',

    // type code here for "date" field

    nameofcollaboratingpartners: 'Yup',

    nameofsponsoringagency: 'My buddy Harlen',

    willbeparticipatedorarranged: 'Yup',

    remarks: 'I tell you what',

    anexpageno: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofevent: 'Reminds me of my old girlfriend Olga Goodntight',

    componentofcommunityinvolved: 'No one tells me shit',

    audiance: "I'm washing my hands of it",

    outcome: "Y'all never listen to me",

    collaborationdeveloped: "How 'bout them Cowboys",

    // type code here for "date" field

    nameofcollaboratingpartners: "Goin' hog huntin'",

    nameofsponsoringagency: "C'mon Naomi",

    willbeparticipatedorarranged: 'Yup',

    remarks: 'That damn gimble',

    anexpageno: 'I tell you what',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofevent: 'Turd gone wrong',

    componentofcommunityinvolved: 'Let me tell ya',

    audiance: "It's around here somewhere",

    outcome: 'I tell you what',

    collaborationdeveloped: 'Let me tell ya',

    // type code here for "date" field

    nameofcollaboratingpartners: "How 'bout them Cowboys",

    nameofsponsoringagency: "How 'bout them Cowboys",

    willbeparticipatedorarranged: 'Contact the tower',

    remarks: 'I want my 5$ back',

    anexpageno: 'My boss gonna fire me',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofevent: 'Let me tell ya',

    componentofcommunityinvolved: "Y'all never listen to me",

    audiance: 'Yup',

    outcome: "Goin' hog huntin'",

    collaborationdeveloped: "How 'bout them Cowboys",

    // type code here for "date" field

    nameofcollaboratingpartners: "It's around here somewhere",

    nameofsponsoringagency: 'I want my damn cart back',

    willbeparticipatedorarranged: 'Like a red-headed stepchild',

    remarks: 'Turd gone wrong',

    anexpageno: 'Yup',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofevent: 'Let me tell ya',

    componentofcommunityinvolved:
      "That Barbala couldn't fly his way out of a wet paper bag",

    audiance: 'Standby',

    outcome: 'That damn gimble',

    collaborationdeveloped: 'Let me tell ya',

    // type code here for "date" field

    nameofcollaboratingpartners: 'Always the last one to the party',

    nameofsponsoringagency: "That's messed up",

    willbeparticipatedorarranged: 'So I was walking Oscar',

    remarks: 'Like a red-headed stepchild',

    anexpageno: 'No one tells me shit',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const GraduatedstartupfacilitationinfoData = [
  {
    keyareasoffacilitationrequestedbygraduatedstartups:
      'So I was walking Oscar',

    typeoffacilitationmentoringtrainingsprovidedtograduated: 'Texas!',

    noofgraduatedstartupsfacilitated: 'So I was walking Oscar',

    totalstartupsincubatedsincebicsinception: "It's around here somewhere",

    totalstartupsgraduatedsincebicsinception: 'Standby',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    keyareasoffacilitationrequestedbygraduatedstartups:
      "That Barbala couldn't fly his way out of a wet paper bag",

    typeoffacilitationmentoringtrainingsprovidedtograduated:
      'Like a red-headed stepchild',

    noofgraduatedstartupsfacilitated: "Y'all never listen to me",

    totalstartupsincubatedsincebicsinception: 'Contact the tower',

    totalstartupsgraduatedsincebicsinception: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    keyareasoffacilitationrequestedbygraduatedstartups: 'That goddamn Datamate',

    typeoffacilitationmentoringtrainingsprovidedtograduated:
      "I'm washing my hands of it",

    noofgraduatedstartupsfacilitated: 'Let me tell ya',

    totalstartupsincubatedsincebicsinception: "Y'all never listen to me",

    totalstartupsgraduatedsincebicsinception: 'I want my 5$ back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    keyareasoffacilitationrequestedbygraduatedstartups:
      "I'm washing my hands of it",

    typeoffacilitationmentoringtrainingsprovidedtograduated:
      'I want my damn cart back',

    noofgraduatedstartupsfacilitated: "How 'bout them Cowboys",

    totalstartupsincubatedsincebicsinception:
      'Got depression, Smith and Wessen',

    totalstartupsgraduatedsincebicsinception:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    keyareasoffacilitationrequestedbygraduatedstartups:
      "Y'all never listen to me",

    typeoffacilitationmentoringtrainingsprovidedtograduated:
      'Always the last one to the party',

    noofgraduatedstartupsfacilitated: 'Standby',

    totalstartupsincubatedsincebicsinception:
      "That Barbala couldn't fly his way out of a wet paper bag",

    totalstartupsgraduatedsincebicsinception: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const HonorsandawardsData = [
  {
    titleofaward: "Y'all never listen to me",

    nameofawardingorganization: 'Turd gone wrong',

    contactsofawardingorganization:
      "That Barbala couldn't fly his way out of a wet paper bag",

    briefdetailsofworkhonored: "I'm washing my hands of it",

    prizeamount: 'That damn Bill Stull',

    awardwinnername: "It's around here somewhere",

    awardwinnerdesignation: 'I tell you what',

    awardwinnerdepartment: 'Texas!',

    remarks: 'That goddamn Datamate',

    annexpagerefno: 6,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofaward: 'I tell you what',

    nameofawardingorganization: 'No one tells me shit',

    contactsofawardingorganization: 'Got depression, Smith and Wessen',

    briefdetailsofworkhonored: "C'mon Naomi",

    prizeamount: 'I tell you what',

    awardwinnername: 'Like a red-headed stepchild',

    awardwinnerdesignation: 'Might be DQ time',

    awardwinnerdepartment: 'Always the last one to the party',

    remarks: "Y'all never listen to me",

    annexpagerefno: 2,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofaward: 'My buddy Harlen',

    nameofawardingorganization: "Y'all never listen to me",

    contactsofawardingorganization: 'Got depression, Smith and Wessen',

    briefdetailsofworkhonored: 'That damn Bill Stull',

    prizeamount: 'Contact the tower',

    awardwinnername: 'Texas!',

    awardwinnerdesignation: 'I tell you what',

    awardwinnerdepartment: "Y'all never listen to me",

    remarks: 'Come on now',

    annexpagerefno: 5,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofaward: 'Contact the tower',

    nameofawardingorganization: 'Standby',

    contactsofawardingorganization: 'Come on now',

    briefdetailsofworkhonored: "It's around here somewhere",

    prizeamount: "C'mon Naomi",

    awardwinnername: 'I tell you what',

    awardwinnerdesignation: 'Always the last one to the party',

    awardwinnerdepartment: 'I got that scurvy',

    remarks: 'Like a red-headed stepchild',

    annexpagerefno: 3,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofaward: 'That goddamn Datamate',

    nameofawardingorganization:
      "That Barbala couldn't fly his way out of a wet paper bag",

    contactsofawardingorganization: 'Texas!',

    briefdetailsofworkhonored: 'My boss gonna fire me',

    prizeamount: 'I want my damn cart back',

    awardwinnername: 'Contact the tower',

    awardwinnerdesignation: 'So I was walking Oscar',

    awardwinnerdepartment: 'Let me tell ya',

    remarks: 'I want my damn cart back',

    annexpagerefno: 1,

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const HumanresourceData = [
  {
    name: 'Francis Crick',

    position: 'So I was walking Oscar',

    officephonenumber: 'That goddamn Datamate',

    role: 'Turd gone wrong',

    emailid: "That's messed up",

    qualificationlevel: 'That damn Bill Stull',

    qualificationtitle: 'Let me tell ya',

    fieldofstudy: 'I got that scurvy',

    cnic: "Goin' hog huntin'",

    // type code here for "date" field

    periodupto: 8,

    totalexperience: 3,

    nonacademicexperience: 3,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Linus Pauling',

    position: "Goin' hog huntin'",

    officephonenumber: 'Contact the tower',

    role: 'Come on now',

    emailid: 'I got that scurvy',

    qualificationlevel: 'Yup',

    qualificationtitle: 'That damn gimble',

    fieldofstudy: "C'mon Naomi",

    cnic: "It's around here somewhere",

    // type code here for "date" field

    periodupto: 1,

    totalexperience: 2,

    nonacademicexperience: 1,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Jonas Salk',

    position: 'Standby',

    officephonenumber: 'I want my 5$ back',

    role: 'I tell you what',

    emailid: 'Might be DQ time',

    qualificationlevel: 'That damn gimble',

    qualificationtitle: 'Reminds me of my old girlfriend Olga Goodntight',

    fieldofstudy: 'I want my 5$ back',

    cnic: 'Might be DQ time',

    // type code here for "date" field

    periodupto: 2,

    totalexperience: 3,

    nonacademicexperience: 7,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'J. Robert Oppenheimer',

    position: "C'mon Naomi",

    officephonenumber: 'Like a red-headed stepchild',

    role: 'So I was walking Oscar',

    emailid: 'Let me tell ya',

    qualificationlevel: 'That damn diabetes',

    qualificationtitle: 'I want my 5$ back',

    fieldofstudy: "That Barbala couldn't fly his way out of a wet paper bag",

    cnic: 'Let me tell ya',

    // type code here for "date" field

    periodupto: 4,

    totalexperience: 5,

    nonacademicexperience: 1,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    name: 'Lucretius',

    position: 'That damn Bill Stull',

    officephonenumber: "It's around here somewhere",

    role: "I'm washing my hands of it",

    emailid: "That's messed up",

    qualificationlevel: 'No one tells me shit',

    qualificationtitle: "It's around here somewhere",

    fieldofstudy: "I'm washing my hands of it",

    cnic: 'I tell you what',

    // type code here for "date" field

    periodupto: 4,

    totalexperience: 6,

    nonacademicexperience: 7,

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const MentorshipinfoData = [
  {
    nameofmentor: "That Barbala couldn't fly his way out of a wet paper bag",

    fieldareasofexpertise: 'My buddy Harlen',

    nationalinternational: 'Reminds me of my old girlfriend Olga Goodntight',

    mentoringsessionsheldatbicduringtheyear: 'That damn Bill Stull',

    noofstartupsfacilitatedthroughsessions: "How 'bout them Cowboys",

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: 'Reminds me of my old girlfriend Olga Goodntight',

    fieldareasofexpertise: 'That damn gimble',

    nationalinternational: 'Come on now',

    mentoringsessionsheldatbicduringtheyear:
      'Reminds me of my old girlfriend Olga Goodntight',

    noofstartupsfacilitatedthroughsessions: 'Might be DQ time',

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: 'So I was walking Oscar',

    fieldareasofexpertise: "That's messed up",

    nationalinternational: "It's around here somewhere",

    mentoringsessionsheldatbicduringtheyear: 'So I was walking Oscar',

    noofstartupsfacilitatedthroughsessions: 'Turd gone wrong',

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: "C'mon Naomi",

    fieldareasofexpertise: "I'm washing my hands of it",

    nationalinternational: 'Contact the tower',

    mentoringsessionsheldatbicduringtheyear: 'No one tells me shit',

    noofstartupsfacilitatedthroughsessions: 'Yup',

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: "It's around here somewhere",

    fieldareasofexpertise: 'Reminds me of my old girlfriend Olga Goodntight',

    nationalinternational: 'My boss gonna fire me',

    mentoringsessionsheldatbicduringtheyear: "I'm washing my hands of it",

    noofstartupsfacilitatedthroughsessions: "How 'bout them Cowboys",

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const OricdataData = [
  {
    oricbankaccounttitle: 'Got depression, Smith and Wessen',

    oricbankaccountnumber: 'Texas!',

    oriccentralizedemailid: 'I tell you what',

    oricpostaladdress: 'So I was walking Oscar',

    shortlinkfororicwebsite: 'Turd gone wrong',

    nameoffocalpersonmanagingwebpage: 'Standby',

    phonenumberoffocalpersonmanagingwebpage: 'I tell you what',

    tiscphonenumber: 'Contact the tower',

    tiscemailid: 'Standby',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    oricbankaccounttitle: "It's around here somewhere",

    oricbankaccountnumber: 'Contact the tower',

    oriccentralizedemailid: 'No one tells me shit',

    oricpostaladdress: "That's messed up",

    shortlinkfororicwebsite: 'I got that scurvy',

    nameoffocalpersonmanagingwebpage: 'Texas!',

    phonenumberoffocalpersonmanagingwebpage: 'So I was walking Oscar',

    tiscphonenumber: 'Come on now',

    tiscemailid: "It's around here somewhere",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    oricbankaccounttitle: 'So I was walking Oscar',

    oricbankaccountnumber: 'So I was walking Oscar',

    oriccentralizedemailid: "Y'all never listen to me",

    oricpostaladdress: 'I tell you what',

    shortlinkfororicwebsite: "That's messed up",

    nameoffocalpersonmanagingwebpage: 'Always the last one to the party',

    phonenumberoffocalpersonmanagingwebpage: 'I tell you what',

    tiscphonenumber: 'I got that scurvy',

    tiscemailid: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    oricbankaccounttitle:
      "That Barbala couldn't fly his way out of a wet paper bag",

    oricbankaccountnumber: "That's messed up",

    oriccentralizedemailid: 'Turd gone wrong',

    oricpostaladdress: 'Might be DQ time',

    shortlinkfororicwebsite: 'Got depression, Smith and Wessen',

    nameoffocalpersonmanagingwebpage: 'That damn gimble',

    phonenumberoffocalpersonmanagingwebpage: 'Texas!',

    tiscphonenumber: 'That goddamn Datamate',

    tiscemailid: 'That damn diabetes',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    oricbankaccounttitle: "How 'bout them Cowboys",

    oricbankaccountnumber: 'I tell you what',

    oriccentralizedemailid: 'Texas!',

    oricpostaladdress: 'Standby',

    shortlinkfororicwebsite: 'Contact the tower',

    nameoffocalpersonmanagingwebpage: 'Got depression, Smith and Wessen',

    phonenumberoffocalpersonmanagingwebpage: 'My buddy Harlen',

    tiscphonenumber: "That's messed up",

    tiscemailid: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const PartnershipinfoData = [
  {
    nameofpartneringorganization: 'My buddy Harlen',

    nationalinternational: 'My boss gonna fire me',

    fieldareaofexpertise: 'Contact the tower',

    typeoflink: 'Got depression, Smith and Wessen',

    // type code here for "date" field

    majorareasofcooperationmodalities: 'Come on now',

    keyoutcomesfromlinks: 'Always the last one to the party',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofpartneringorganization: 'I got that scurvy',

    nationalinternational: 'Like a red-headed stepchild',

    fieldareaofexpertise: 'So I was walking Oscar',

    typeoflink: 'So I was walking Oscar',

    // type code here for "date" field

    majorareasofcooperationmodalities: 'Come on now',

    keyoutcomesfromlinks:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofpartneringorganization: 'I tell you what',

    nationalinternational: 'I want my 5$ back',

    fieldareaofexpertise: 'So I was walking Oscar',

    typeoflink: 'Texas!',

    // type code here for "date" field

    majorareasofcooperationmodalities:
      'Reminds me of my old girlfriend Olga Goodntight',

    keyoutcomesfromlinks: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofpartneringorganization: 'Standby',

    nationalinternational:
      "That Barbala couldn't fly his way out of a wet paper bag",

    fieldareaofexpertise: 'Yup',

    typeoflink: 'Standby',

    // type code here for "date" field

    majorareasofcooperationmodalities: 'Contact the tower',

    keyoutcomesfromlinks: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofpartneringorganization: 'Contact the tower',

    nationalinternational: "I'm washing my hands of it",

    fieldareaofexpertise: 'Reminds me of my old girlfriend Olga Goodntight',

    typeoflink: 'My buddy Harlen',

    // type code here for "date" field

    majorareasofcooperationmodalities: 'No one tells me shit',

    keyoutcomesfromlinks: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const PatentsData = [
  {
    leadinventorname: 'Got depression, Smith and Wessen',

    leadinventordesignation: 'Let me tell ya',

    leadinventordepartment: 'I want my damn cart back',

    titleofinvention: "That's messed up",

    categoryofip: 'Like a red-headed stepchild',

    developmentstatus: 'Come on now',

    keyscientificaspects: "How 'bout them Cowboys",

    commercialpartner: "C'mon Naomi",

    patentfiledwithname: 'Standby',

    patentfiledwithdate: 'That damn Bill Stull',

    fieldofuse: 'Got depression, Smith and Wessen',

    nationalinternational: 'I want my damn cart back',

    durationofagreement: 'I tell you what',

    financialsupport: "Y'all never listen to me",

    previousdisclosur: 'I want my 5$ back',

    // type code here for "date" field

    statusofnegotiation: "I'm washing my hands of it",

    licenseename: 'That damn Bill Stull',

    licenseeorganization: 'Texas!',

    annexpagerefno: 'I got that scurvy',

    remarks: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    leadinventorname: 'Got depression, Smith and Wessen',

    leadinventordesignation: "That's messed up",

    leadinventordepartment: 'That damn diabetes',

    titleofinvention: 'That goddamn Datamate',

    categoryofip: "That Barbala couldn't fly his way out of a wet paper bag",

    developmentstatus: "How 'bout them Cowboys",

    keyscientificaspects: 'Turd gone wrong',

    commercialpartner: 'Like a red-headed stepchild',

    patentfiledwithname: 'That damn diabetes',

    patentfiledwithdate: "I'm washing my hands of it",

    fieldofuse: 'I want my damn cart back',

    nationalinternational: "C'mon Naomi",

    durationofagreement: 'Got depression, Smith and Wessen',

    financialsupport: 'I tell you what',

    previousdisclosur: "How 'bout them Cowboys",

    // type code here for "date" field

    statusofnegotiation: 'I want my 5$ back',

    licenseename: 'I want my damn cart back',

    licenseeorganization: 'So I was walking Oscar',

    annexpagerefno: 'Always the last one to the party',

    remarks: 'Let me tell ya',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    leadinventorname: "Y'all never listen to me",

    leadinventordesignation: 'That goddamn Datamate',

    leadinventordepartment: 'Turd gone wrong',

    titleofinvention: 'Reminds me of my old girlfriend Olga Goodntight',

    categoryofip: 'My buddy Harlen',

    developmentstatus: 'Standby',

    keyscientificaspects: 'Standby',

    commercialpartner: 'I want my damn cart back',

    patentfiledwithname: 'Turd gone wrong',

    patentfiledwithdate: 'That damn gimble',

    fieldofuse: "That's messed up",

    nationalinternational: "It's around here somewhere",

    durationofagreement: "I'm washing my hands of it",

    financialsupport: 'Contact the tower',

    previousdisclosur: "How 'bout them Cowboys",

    // type code here for "date" field

    statusofnegotiation: 'Might be DQ time',

    licenseename: 'That goddamn Datamate',

    licenseeorganization: 'No one tells me shit',

    annexpagerefno: "That Barbala couldn't fly his way out of a wet paper bag",

    remarks: "That's messed up",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    leadinventorname: 'I want my damn cart back',

    leadinventordesignation: 'I got that scurvy',

    leadinventordepartment: 'That damn gimble',

    titleofinvention:
      "That Barbala couldn't fly his way out of a wet paper bag",

    categoryofip: 'My boss gonna fire me',

    developmentstatus: 'Come on now',

    keyscientificaspects: "Goin' hog huntin'",

    commercialpartner: 'That damn diabetes',

    patentfiledwithname: 'That damn gimble',

    patentfiledwithdate: 'Yup',

    fieldofuse: "Y'all never listen to me",

    nationalinternational: "C'mon Naomi",

    durationofagreement: 'Got depression, Smith and Wessen',

    financialsupport: 'I want my damn cart back',

    previousdisclosur: 'That damn gimble',

    // type code here for "date" field

    statusofnegotiation: 'Standby',

    licenseename: "That Barbala couldn't fly his way out of a wet paper bag",

    licenseeorganization: "Y'all never listen to me",

    annexpagerefno: 'My boss gonna fire me',

    remarks: 'Turd gone wrong',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    leadinventorname: 'Contact the tower',

    leadinventordesignation: "I'm washing my hands of it",

    leadinventordepartment: 'Turd gone wrong',

    titleofinvention: 'Turd gone wrong',

    categoryofip: 'Yup',

    developmentstatus: 'Let me tell ya',

    keyscientificaspects: "How 'bout them Cowboys",

    commercialpartner: "How 'bout them Cowboys",

    patentfiledwithname: 'So I was walking Oscar',

    patentfiledwithdate: "How 'bout them Cowboys",

    fieldofuse: "It's around here somewhere",

    nationalinternational: 'My boss gonna fire me',

    durationofagreement: 'Texas!',

    financialsupport: "It's around here somewhere",

    previousdisclosur: 'My boss gonna fire me',

    // type code here for "date" field

    statusofnegotiation: 'Let me tell ya',

    licenseename: 'I want my damn cart back',

    licenseeorganization: 'That goddamn Datamate',

    annexpagerefno: 'So I was walking Oscar',

    remarks: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const PolicyadvocacyData = [
  {
    nameofgovernmentbodypresented: 'I want my 5$ back',

    // type code here for "date" field

    nameofpi: 'Standby',

    pidesignation: 'Like a red-headed stepchild',

    pidepartment: 'Texas!',

    areaadvocated: 'My buddy Harlen',

    description: 'That damn gimble',

    namecoalitionpartner: 'Standby',

    issueverification: 'I want my 5$ back',

    backingresearchstatus: "Goin' hog huntin'",

    advocacytoolsadopted: "Y'all never listen to me",

    anexpageno: 'Texas!',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgovernmentbodypresented: 'Standby',

    // type code here for "date" field

    nameofpi: 'Reminds me of my old girlfriend Olga Goodntight',

    pidesignation: "Y'all never listen to me",

    pidepartment: 'Yup',

    areaadvocated: 'Let me tell ya',

    description: 'Contact the tower',

    namecoalitionpartner: 'Let me tell ya',

    issueverification: 'So I was walking Oscar',

    backingresearchstatus: 'Like a red-headed stepchild',

    advocacytoolsadopted: 'Come on now',

    anexpageno: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgovernmentbodypresented: 'Standby',

    // type code here for "date" field

    nameofpi: 'I want my 5$ back',

    pidesignation: 'Texas!',

    pidepartment: 'Come on now',

    areaadvocated: 'I want my damn cart back',

    description: 'I want my damn cart back',

    namecoalitionpartner: 'That damn diabetes',

    issueverification: 'My buddy Harlen',

    backingresearchstatus: 'Always the last one to the party',

    advocacytoolsadopted: "It's around here somewhere",

    anexpageno: 'I want my damn cart back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgovernmentbodypresented: 'Standby',

    // type code here for "date" field

    nameofpi: "That's messed up",

    pidesignation: 'My buddy Harlen',

    pidepartment: 'Yup',

    areaadvocated: 'I got that scurvy',

    description: 'Like a red-headed stepchild',

    namecoalitionpartner: "C'mon Naomi",

    issueverification:
      "That Barbala couldn't fly his way out of a wet paper bag",

    backingresearchstatus: 'That goddamn Datamate',

    advocacytoolsadopted: 'My boss gonna fire me',

    anexpageno: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofgovernmentbodypresented: "C'mon Naomi",

    // type code here for "date" field

    nameofpi: 'Come on now',

    pidesignation: "That's messed up",

    pidepartment: 'I want my damn cart back',

    areaadvocated: "That Barbala couldn't fly his way out of a wet paper bag",

    description: "That Barbala couldn't fly his way out of a wet paper bag",

    namecoalitionpartner:
      "That Barbala couldn't fly his way out of a wet paper bag",

    issueverification: "C'mon Naomi",

    backingresearchstatus: 'My boss gonna fire me',

    advocacytoolsadopted: 'Might be DQ time',

    anexpageno: 'That damn Bill Stull',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const ResearchlinksData = [
  {
    typeoflinkage: 'Let me tell ya',

    region: "I'm washing my hands of it",

    namehostinstitution: 'Like a red-headed stepchild',

    addresshostinstitution: "Goin' hog huntin'",

    countryofhostinstitution: 'Like a red-headed stepchild',

    nameofcollaboratingpartners:
      'Reminds me of my old girlfriend Olga Goodntight',

    addressofcollaboratingpartners:
      "That Barbala couldn't fly his way out of a wet paper bag",

    countryofcollaboratingpartners: 'I tell you what',

    fieldofstudy: 'My boss gonna fire me',

    researchborderareas: 'I want my 5$ back',

    scopeofcollaboration: "Goin' hog huntin'",

    linkageestablishmentdate: "How 'bout them Cowboys",

    salientfeaturesoflinkage: 'That goddamn Datamate',

    anexpagereference: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkage: 'I want my damn cart back',

    region: "Goin' hog huntin'",

    namehostinstitution: 'Texas!',

    addresshostinstitution: 'Contact the tower',

    countryofhostinstitution: 'I want my damn cart back',

    nameofcollaboratingpartners: "I'm washing my hands of it",

    addressofcollaboratingpartners: "Goin' hog huntin'",

    countryofcollaboratingpartners: 'My buddy Harlen',

    fieldofstudy: 'That damn Bill Stull',

    researchborderareas: 'I want my damn cart back',

    scopeofcollaboration: "Y'all never listen to me",

    linkageestablishmentdate: 'Come on now',

    salientfeaturesoflinkage: 'I tell you what',

    anexpagereference: "It's around here somewhere",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkage: "C'mon Naomi",

    region: 'Let me tell ya',

    namehostinstitution: "That's messed up",

    addresshostinstitution: 'Like a red-headed stepchild',

    countryofhostinstitution: 'So I was walking Oscar',

    nameofcollaboratingpartners: 'Come on now',

    addressofcollaboratingpartners: 'That damn gimble',

    countryofcollaboratingpartners: "C'mon Naomi",

    fieldofstudy: 'So I was walking Oscar',

    researchborderareas: "It's around here somewhere",

    scopeofcollaboration: 'I want my damn cart back',

    linkageestablishmentdate: 'Might be DQ time',

    salientfeaturesoflinkage: "Y'all never listen to me",

    anexpagereference: 'My buddy Harlen',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkage: 'Got depression, Smith and Wessen',

    region: 'Come on now',

    namehostinstitution:
      "That Barbala couldn't fly his way out of a wet paper bag",

    addresshostinstitution: 'I got that scurvy',

    countryofhostinstitution: 'Got depression, Smith and Wessen',

    nameofcollaboratingpartners: "Y'all never listen to me",

    addressofcollaboratingpartners: 'That damn diabetes',

    countryofcollaboratingpartners: 'That damn diabetes',

    fieldofstudy: 'Turd gone wrong',

    researchborderareas: 'That damn Bill Stull',

    scopeofcollaboration: 'No one tells me shit',

    linkageestablishmentdate: 'Let me tell ya',

    salientfeaturesoflinkage: 'Turd gone wrong',

    anexpagereference: 'Always the last one to the party',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    typeoflinkage: 'Reminds me of my old girlfriend Olga Goodntight',

    region: "C'mon Naomi",

    namehostinstitution: 'Contact the tower',

    addresshostinstitution: 'My buddy Harlen',

    countryofhostinstitution: "How 'bout them Cowboys",

    nameofcollaboratingpartners: 'Standby',

    addressofcollaboratingpartners: 'Might be DQ time',

    countryofcollaboratingpartners: 'I tell you what',

    fieldofstudy: 'Always the last one to the party',

    researchborderareas: 'I tell you what',

    scopeofcollaboration: "Goin' hog huntin'",

    linkageestablishmentdate: "C'mon Naomi",

    salientfeaturesoflinkage: "Y'all never listen to me",

    anexpagereference: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const ResearchpolicyData = [
  {
    titleofresearchpolicy: "C'mon Naomi",

    researchpolicyreferencenumber: 'No one tells me shit',

    // type code here for "date" field

    approvedby: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofresearchpolicy: 'Got depression, Smith and Wessen',

    researchpolicyreferencenumber: 'Texas!',

    // type code here for "date" field

    approvedby: 'I want my 5$ back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofresearchpolicy: 'That damn diabetes',

    researchpolicyreferencenumber: 'That damn gimble',

    // type code here for "date" field

    approvedby: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofresearchpolicy: 'Let me tell ya',

    researchpolicyreferencenumber: 'I got that scurvy',

    // type code here for "date" field

    approvedby: 'That goddamn Datamate',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleofresearchpolicy: "Goin' hog huntin'",

    researchpolicyreferencenumber: 'Contact the tower',

    // type code here for "date" field

    approvedby: "That's messed up",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const ResearchproposalandgrantsData = [
  {
    approvedorrequiredmodificationordifferedordisapproved:
      "It's around here somewhere",

    thematicarea: "It's around here somewhere",

    nameofresearch: 'That damn Bill Stull',

    nameofpi: 'Reminds me of my old girlfriend Olga Goodntight',

    pidesignation: 'My buddy Harlen',

    pidepartment: 'So I was walking Oscar',

    nameofcopi: "How 'bout them Cowboys",

    copidesignation: 'No one tells me shit',

    copidepartment: "That Barbala couldn't fly his way out of a wet paper bag",

    titleofresearchproposal: 'That damn gimble',

    durationstartingandendingdate: "That's messed up",

    totalfundingrequestedrs: 'That damn gimble',

    totalfundingapproved: "C'mon Naomi",

    totalfundingreleased: "Y'all never listen to me",

    collaboratingpartnerdetailsifany: 'I want my 5$ back',

    cofundingpartnerdetailsifany: 'Always the last one to the party',

    nameofsponsringagency: 'I tell you what',

    addressofsponsoringagency: 'I tell you what',

    countryofsponsoringagency: "C'mon Naomi",

    status: "Goin' hog huntin'",

    remarks: "That's messed up",

    relatedinformation: 'So I was walking Oscar',

    keyprojectdeliverables: 'My boss gonna fire me',

    oricoverheadinapprovedfunding: 'Contact the tower',

    // type code here for "date" field

    // type code here for "date" field

    // type code here for "date" field

    totalfundingutilized: 'So I was walking Oscar',

    approved: false,

    // type code here for "date" field

    // type code here for "date" field

    statusofirbmeeting: 'Let me tell ya',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    approvedorrequiredmodificationordifferedordisapproved: 'Contact the tower',

    thematicarea: 'No one tells me shit',

    nameofresearch: 'I tell you what',

    nameofpi: 'My buddy Harlen',

    pidesignation: 'Reminds me of my old girlfriend Olga Goodntight',

    pidepartment: "C'mon Naomi",

    nameofcopi: "How 'bout them Cowboys",

    copidesignation: 'My boss gonna fire me',

    copidepartment: 'Got depression, Smith and Wessen',

    titleofresearchproposal: "How 'bout them Cowboys",

    durationstartingandendingdate: 'Contact the tower',

    totalfundingrequestedrs: 'Come on now',

    totalfundingapproved: 'I want my damn cart back',

    totalfundingreleased: 'Reminds me of my old girlfriend Olga Goodntight',

    collaboratingpartnerdetailsifany: 'Got depression, Smith and Wessen',

    cofundingpartnerdetailsifany: 'That damn gimble',

    nameofsponsringagency: "How 'bout them Cowboys",

    addressofsponsoringagency: 'Let me tell ya',

    countryofsponsoringagency: "How 'bout them Cowboys",

    status: 'So I was walking Oscar',

    remarks: "That Barbala couldn't fly his way out of a wet paper bag",

    relatedinformation: 'Contact the tower',

    keyprojectdeliverables: 'My boss gonna fire me',

    oricoverheadinapprovedfunding: 'My boss gonna fire me',

    // type code here for "date" field

    // type code here for "date" field

    // type code here for "date" field

    totalfundingutilized: 'That damn Bill Stull',

    approved: true,

    // type code here for "date" field

    // type code here for "date" field

    statusofirbmeeting: 'Like a red-headed stepchild',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    approvedorrequiredmodificationordifferedordisapproved: 'Turd gone wrong',

    thematicarea: 'Let me tell ya',

    nameofresearch: "C'mon Naomi",

    nameofpi: "Y'all never listen to me",

    pidesignation: 'I tell you what',

    pidepartment: 'So I was walking Oscar',

    nameofcopi: 'That damn diabetes',

    copidesignation: "Y'all never listen to me",

    copidepartment: 'Texas!',

    titleofresearchproposal: "That's messed up",

    durationstartingandendingdate: 'Yup',

    totalfundingrequestedrs: 'Contact the tower',

    totalfundingapproved: 'Got depression, Smith and Wessen',

    totalfundingreleased: "That's messed up",

    collaboratingpartnerdetailsifany: 'So I was walking Oscar',

    cofundingpartnerdetailsifany: 'Let me tell ya',

    nameofsponsringagency: 'That damn Bill Stull',

    addressofsponsoringagency: "I'm washing my hands of it",

    countryofsponsoringagency: 'I tell you what',

    status: "How 'bout them Cowboys",

    remarks: "That Barbala couldn't fly his way out of a wet paper bag",

    relatedinformation: 'Reminds me of my old girlfriend Olga Goodntight',

    keyprojectdeliverables: 'I got that scurvy',

    oricoverheadinapprovedfunding: 'My buddy Harlen',

    // type code here for "date" field

    // type code here for "date" field

    // type code here for "date" field

    totalfundingutilized: "I'm washing my hands of it",

    approved: false,

    // type code here for "date" field

    // type code here for "date" field

    statusofirbmeeting: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    approvedorrequiredmodificationordifferedordisapproved: 'Contact the tower',

    thematicarea: 'Got depression, Smith and Wessen',

    nameofresearch: "Y'all never listen to me",

    nameofpi: "Goin' hog huntin'",

    pidesignation: 'So I was walking Oscar',

    pidepartment: 'No one tells me shit',

    nameofcopi: 'That damn Bill Stull',

    copidesignation: "It's around here somewhere",

    copidepartment: 'Might be DQ time',

    titleofresearchproposal: 'Always the last one to the party',

    durationstartingandendingdate: 'Contact the tower',

    totalfundingrequestedrs: 'That damn gimble',

    totalfundingapproved: 'I want my 5$ back',

    totalfundingreleased: 'Texas!',

    collaboratingpartnerdetailsifany: 'Got depression, Smith and Wessen',

    cofundingpartnerdetailsifany: 'That damn Bill Stull',

    nameofsponsringagency: 'That goddamn Datamate',

    addressofsponsoringagency:
      'Reminds me of my old girlfriend Olga Goodntight',

    countryofsponsoringagency: 'Let me tell ya',

    status: 'That damn diabetes',

    remarks: 'Standby',

    relatedinformation: 'Come on now',

    keyprojectdeliverables: "I'm washing my hands of it",

    oricoverheadinapprovedfunding:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "date" field

    // type code here for "date" field

    // type code here for "date" field

    totalfundingutilized: 'Always the last one to the party',

    approved: false,

    // type code here for "date" field

    // type code here for "date" field

    statusofirbmeeting: 'Like a red-headed stepchild',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    approvedorrequiredmodificationordifferedordisapproved:
      'Got depression, Smith and Wessen',

    thematicarea: 'That damn diabetes',

    nameofresearch: "That Barbala couldn't fly his way out of a wet paper bag",

    nameofpi: "That's messed up",

    pidesignation: "Y'all never listen to me",

    pidepartment: 'My buddy Harlen',

    nameofcopi: 'That damn Bill Stull',

    copidesignation: "It's around here somewhere",

    copidepartment: 'Texas!',

    titleofresearchproposal: 'Let me tell ya',

    durationstartingandendingdate: 'That goddamn Datamate',

    totalfundingrequestedrs: 'I got that scurvy',

    totalfundingapproved: 'Might be DQ time',

    totalfundingreleased: "C'mon Naomi",

    collaboratingpartnerdetailsifany: 'Yup',

    cofundingpartnerdetailsifany: 'Let me tell ya',

    nameofsponsringagency: 'I got that scurvy',

    addressofsponsoringagency: 'I want my 5$ back',

    countryofsponsoringagency: 'That goddamn Datamate',

    status: 'Yup',

    remarks: 'I want my 5$ back',

    relatedinformation: "Goin' hog huntin'",

    keyprojectdeliverables: 'I got that scurvy',

    oricoverheadinapprovedfunding: 'I tell you what',

    // type code here for "date" field

    // type code here for "date" field

    // type code here for "date" field

    totalfundingutilized: 'I want my damn cart back',

    approved: true,

    // type code here for "date" field

    // type code here for "date" field

    statusofirbmeeting: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const SpinoffstartupsData = [
  {
    nameofstartup: 'Got depression, Smith and Wessen',

    briefideabackingresearchsectorfield:
      "That Barbala couldn't fly his way out of a wet paper bag",

    facultymembernamedesignationdepartment: 'Standby',

    ipstatus: 'I want my 5$ back',

    nameofspinoff: 'I got that scurvy',

    stage: 'So I was walking Oscar',

    licenseagreementsignedifany: 'I got that scurvy',

    fundingsources: 'Let me tell ya',

    totalfacultystartups: 7,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'I want my damn cart back',

    briefideabackingresearchsectorfield: "That's messed up",

    facultymembernamedesignationdepartment: "How 'bout them Cowboys",

    ipstatus: 'Yup',

    nameofspinoff: 'Might be DQ time',

    stage: 'Let me tell ya',

    licenseagreementsignedifany: "It's around here somewhere",

    fundingsources: "I'm washing my hands of it",

    totalfacultystartups: 1,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Like a red-headed stepchild',

    briefideabackingresearchsectorfield: 'Turd gone wrong',

    facultymembernamedesignationdepartment: 'So I was walking Oscar',

    ipstatus: "How 'bout them Cowboys",

    nameofspinoff: 'Texas!',

    stage: 'I got that scurvy',

    licenseagreementsignedifany: "C'mon Naomi",

    fundingsources: 'Always the last one to the party',

    totalfacultystartups: 1,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Like a red-headed stepchild',

    briefideabackingresearchsectorfield: "It's around here somewhere",

    facultymembernamedesignationdepartment: 'Standby',

    ipstatus: 'Turd gone wrong',

    nameofspinoff: 'I want my damn cart back',

    stage: "Goin' hog huntin'",

    licenseagreementsignedifany: 'Let me tell ya',

    fundingsources: 'Texas!',

    totalfacultystartups: 9,

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'My boss gonna fire me',

    briefideabackingresearchsectorfield: 'Got depression, Smith and Wessen',

    facultymembernamedesignationdepartment: 'My buddy Harlen',

    ipstatus: 'My boss gonna fire me',

    nameofspinoff: 'Yup',

    stage: 'So I was walking Oscar',

    licenseagreementsignedifany: 'Let me tell ya',

    fundingsources: 'Standby',

    totalfacultystartups: 7,

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const StartupeventsData = [
  {
    // type code here for "relation_one" field

    nameofevent: 'That damn Bill Stull',

    // type code here for "date" field

    panelistdetails: 'Let me tell ya',

    ideasapplied: 'Got depression, Smith and Wessen',

    ideasselected: 'Texas!',

    winnersdetails: 'Turd gone wrong',

    prizefundingamount: 'Turd gone wrong',

    eventfundingsourcessponsors:
      "That Barbala couldn't fly his way out of a wet paper bag",

    noofideasapplied: "How 'bout them Cowboys",

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofevent: 'Reminds me of my old girlfriend Olga Goodntight',

    // type code here for "date" field

    panelistdetails: 'Might be DQ time',

    ideasapplied: "Y'all never listen to me",

    ideasselected: 'Might be DQ time',

    winnersdetails: 'That damn Bill Stull',

    prizefundingamount: 'Like a red-headed stepchild',

    eventfundingsourcessponsors: 'I want my damn cart back',

    noofideasapplied: 'Like a red-headed stepchild',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofevent: 'Got depression, Smith and Wessen',

    // type code here for "date" field

    panelistdetails: "Goin' hog huntin'",

    ideasapplied: "C'mon Naomi",

    ideasselected: "Y'all never listen to me",

    winnersdetails: "How 'bout them Cowboys",

    prizefundingamount: 'Yup',

    eventfundingsourcessponsors: 'Texas!',

    noofideasapplied: 'Like a red-headed stepchild',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofevent: 'That damn gimble',

    // type code here for "date" field

    panelistdetails: 'Come on now',

    ideasapplied: "That's messed up",

    ideasselected: 'Reminds me of my old girlfriend Olga Goodntight',

    winnersdetails: 'That damn Bill Stull',

    prizefundingamount: "Y'all never listen to me",

    eventfundingsourcessponsors:
      'Reminds me of my old girlfriend Olga Goodntight',

    noofideasapplied: 'I tell you what',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofevent: "Y'all never listen to me",

    // type code here for "date" field

    panelistdetails: 'That damn Bill Stull',

    ideasapplied: "How 'bout them Cowboys",

    ideasselected: 'That damn Bill Stull',

    winnersdetails: 'So I was walking Oscar',

    prizefundingamount: 'Like a red-headed stepchild',

    eventfundingsourcessponsors: 'I tell you what',

    noofideasapplied: 'Come on now',

    // type code here for "files" field
  },
];

const StartupincubationData = [
  {
    nameofstartup: 'Yup',

    idea: 'Reminds me of my old girlfriend Olga Goodntight',

    teammembers: "I'm washing my hands of it",

    sectorfield: "It's around here somewhere",

    seedfundingsecuredifany: 'I want my 5$ back',

    incubatedsince: 'I want my damn cart back',

    expectedgraduation: "Goin' hog huntin'",

    internshipjobsprovidedviastartup:
      "That Barbala couldn't fly his way out of a wet paper bag",

    totalslots: 'So I was walking Oscar',

    occupiedslots: 'Got depression, Smith and Wessen',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Turd gone wrong',

    idea: 'Reminds me of my old girlfriend Olga Goodntight',

    teammembers: 'Let me tell ya',

    sectorfield: "C'mon Naomi",

    seedfundingsecuredifany: 'Always the last one to the party',

    incubatedsince: 'Come on now',

    expectedgraduation: 'I got that scurvy',

    internshipjobsprovidedviastartup: 'That goddamn Datamate',

    totalslots: "How 'bout them Cowboys",

    occupiedslots: "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Standby',

    idea: 'That damn diabetes',

    teammembers: "How 'bout them Cowboys",

    sectorfield: "That Barbala couldn't fly his way out of a wet paper bag",

    seedfundingsecuredifany: 'That goddamn Datamate',

    incubatedsince: "I'm washing my hands of it",

    expectedgraduation: 'So I was walking Oscar',

    internshipjobsprovidedviastartup: 'Come on now',

    totalslots: "That Barbala couldn't fly his way out of a wet paper bag",

    occupiedslots: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Turd gone wrong',

    idea: 'Reminds me of my old girlfriend Olga Goodntight',

    teammembers: 'Standby',

    sectorfield: 'Always the last one to the party',

    seedfundingsecuredifany:
      "That Barbala couldn't fly his way out of a wet paper bag",

    incubatedsince: 'That goddamn Datamate',

    expectedgraduation: 'Reminds me of my old girlfriend Olga Goodntight',

    internshipjobsprovidedviastartup: "I'm washing my hands of it",

    totalslots: "That's messed up",

    occupiedslots: 'Yup',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Reminds me of my old girlfriend Olga Goodntight',

    idea: "Y'all never listen to me",

    teammembers: "I'm washing my hands of it",

    sectorfield: 'Texas!',

    seedfundingsecuredifany: 'Contact the tower',

    incubatedsince: 'Reminds me of my old girlfriend Olga Goodntight',

    expectedgraduation: 'Contact the tower',

    internshipjobsprovidedviastartup: 'I want my 5$ back',

    totalslots: "I'm washing my hands of it",

    occupiedslots: 'No one tells me shit',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const StartupmentoringData = [
  {
    nameofmentor: 'Come on now',

    designation: 'That goddamn Datamate',

    fieldarea: "Y'all never listen to me",

    noofmentoringlecturesprovided:
      'Reminds me of my old girlfriend Olga Goodntight',

    noofstartupsfacilitated: "I'm washing my hands of it",

    costpermentoringhourchargedifany: "C'mon Naomi",

    totalmentoringsessions: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: 'No one tells me shit',

    designation: 'My boss gonna fire me',

    fieldarea: 'Got depression, Smith and Wessen',

    noofmentoringlecturesprovided: "Goin' hog huntin'",

    noofstartupsfacilitated: 'My buddy Harlen',

    costpermentoringhourchargedifany: 'Turd gone wrong',

    totalmentoringsessions: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: "That's messed up",

    designation: 'Got depression, Smith and Wessen',

    fieldarea: 'Might be DQ time',

    noofmentoringlecturesprovided: 'Come on now',

    noofstartupsfacilitated: "How 'bout them Cowboys",

    costpermentoringhourchargedifany: 'That damn diabetes',

    totalmentoringsessions: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: 'That damn gimble',

    designation: 'I want my 5$ back',

    fieldarea: 'Got depression, Smith and Wessen',

    noofmentoringlecturesprovided: "How 'bout them Cowboys",

    noofstartupsfacilitated: 'Let me tell ya',

    costpermentoringhourchargedifany: "I'm washing my hands of it",

    totalmentoringsessions: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmentor: "I'm washing my hands of it",

    designation: 'I got that scurvy',

    fieldarea: 'That goddamn Datamate',

    noofmentoringlecturesprovided: "How 'bout them Cowboys",

    noofstartupsfacilitated:
      "That Barbala couldn't fly his way out of a wet paper bag",

    costpermentoringhourchargedifany: 'That damn gimble',

    totalmentoringsessions: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const StartuprevenueData = [
  {
    nameofstartup: 'No one tells me shit',

    facultymembernamedesignationdepartment: 'My buddy Harlen',

    currentstatus: "C'mon Naomi",

    incubatedsinceandexpectedgraduation: 'So I was walking Oscar',

    revenuegenerated: 'My boss gonna fire me',

    totalmonthsinincubation: "I'm washing my hands of it",

    averagerevenue: 'Let me tell ya',

    sharingmechanismbetweenbicheiandstartup: 'So I was walking Oscar',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'I want my 5$ back',

    facultymembernamedesignationdepartment: 'I tell you what',

    currentstatus: 'My buddy Harlen',

    incubatedsinceandexpectedgraduation: "Goin' hog huntin'",

    revenuegenerated: 'That damn Bill Stull',

    totalmonthsinincubation: "Goin' hog huntin'",

    averagerevenue: 'No one tells me shit',

    sharingmechanismbetweenbicheiandstartup: 'My buddy Harlen',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'That damn gimble',

    facultymembernamedesignationdepartment: "That's messed up",

    currentstatus: 'Contact the tower',

    incubatedsinceandexpectedgraduation: 'I want my damn cart back',

    revenuegenerated:
      "That Barbala couldn't fly his way out of a wet paper bag",

    totalmonthsinincubation: "How 'bout them Cowboys",

    averagerevenue: "Goin' hog huntin'",

    sharingmechanismbetweenbicheiandstartup: 'I want my 5$ back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: "Goin' hog huntin'",

    facultymembernamedesignationdepartment: 'Like a red-headed stepchild',

    currentstatus: "That's messed up",

    incubatedsinceandexpectedgraduation: 'My buddy Harlen',

    revenuegenerated: 'Let me tell ya',

    totalmonthsinincubation: 'Always the last one to the party',

    averagerevenue: 'No one tells me shit',

    sharingmechanismbetweenbicheiandstartup: 'That damn gimble',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'That damn Bill Stull',

    facultymembernamedesignationdepartment: "Goin' hog huntin'",

    currentstatus: 'My boss gonna fire me',

    incubatedsinceandexpectedgraduation: 'Texas!',

    revenuegenerated:
      "That Barbala couldn't fly his way out of a wet paper bag",

    totalmonthsinincubation: 'I got that scurvy',

    averagerevenue: 'So I was walking Oscar',

    sharingmechanismbetweenbicheiandstartup: 'I want my damn cart back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const StartupsappliedforpitchingData = [
  {
    idea: "It's around here somewhere",

    entrepreneur: 'That damn Bill Stull',

    fieldarea: "That Barbala couldn't fly his way out of a wet paper bag",

    educationalbackground: 'Contact the tower',

    teammembers: 'No one tells me shit',

    currentstatus: 'Texas!',

    resultremarksfromcompetition: "I'm washing my hands of it",

    availabilityoffundingseedmoney: 'Might be DQ time',

    dateheld: "That's messed up",

    noofideasapplied: 'I want my damn cart back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    idea: "That Barbala couldn't fly his way out of a wet paper bag",

    entrepreneur: 'Let me tell ya',

    fieldarea: 'Got depression, Smith and Wessen',

    educationalbackground: 'I got that scurvy',

    teammembers: 'Texas!',

    currentstatus: "Y'all never listen to me",

    resultremarksfromcompetition: 'Let me tell ya',

    availabilityoffundingseedmoney:
      "That Barbala couldn't fly his way out of a wet paper bag",

    dateheld: 'That damn diabetes',

    noofideasapplied: 'Contact the tower',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    idea: 'That damn gimble',

    entrepreneur: "Goin' hog huntin'",

    fieldarea: 'That damn Bill Stull',

    educationalbackground: 'I got that scurvy',

    teammembers: 'Texas!',

    currentstatus: 'No one tells me shit',

    resultremarksfromcompetition: "I'm washing my hands of it",

    availabilityoffundingseedmoney:
      'Reminds me of my old girlfriend Olga Goodntight',

    dateheld: 'Might be DQ time',

    noofideasapplied: 'Contact the tower',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    idea: 'I want my damn cart back',

    entrepreneur: "C'mon Naomi",

    fieldarea: 'Got depression, Smith and Wessen',

    educationalbackground: 'Standby',

    teammembers: 'No one tells me shit',

    currentstatus: 'Turd gone wrong',

    resultremarksfromcompetition: 'Standby',

    availabilityoffundingseedmoney:
      "That Barbala couldn't fly his way out of a wet paper bag",

    dateheld: 'Turd gone wrong',

    noofideasapplied: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    idea: "That's messed up",

    entrepreneur: "Y'all never listen to me",

    fieldarea: 'I got that scurvy',

    educationalbackground: 'No one tells me shit',

    teammembers: "That's messed up",

    currentstatus: "I'm washing my hands of it",

    resultremarksfromcompetition: 'I want my 5$ back',

    availabilityoffundingseedmoney: "I'm washing my hands of it",

    dateheld: 'Let me tell ya',

    noofideasapplied: "That's messed up",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const StartupsincubatedData = [
  {
    nameofstartup: "I'm washing my hands of it",

    briefidea: 'That damn diabetes',

    facultymembername: 'Reminds me of my old girlfriend Olga Goodntight',

    facultymemberdesignation: 'Always the last one to the party',

    facultymemberdepartment: 'Texas!',

    sectorfield: 'That damn gimble',

    seedfundingsecuredifany: "C'mon Naomi",

    stage: "How 'bout them Cowboys",

    incubatedsinceexpectedgraduation: 'That goddamn Datamate',

    internshipjobscreated: 'No one tells me shit',

    totalfacultystartups: 'I got that scurvy',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'Contact the tower',

    briefidea: 'That damn Bill Stull',

    facultymembername: "It's around here somewhere",

    facultymemberdesignation: 'That goddamn Datamate',

    facultymemberdepartment: 'Contact the tower',

    sectorfield: 'Got depression, Smith and Wessen',

    seedfundingsecuredifany: 'So I was walking Oscar',

    stage: "Goin' hog huntin'",

    incubatedsinceexpectedgraduation:
      'Reminds me of my old girlfriend Olga Goodntight',

    internshipjobscreated: 'Like a red-headed stepchild',

    totalfacultystartups: 'Always the last one to the party',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: "How 'bout them Cowboys",

    briefidea: 'That damn Bill Stull',

    facultymembername: "C'mon Naomi",

    facultymemberdesignation: 'Let me tell ya',

    facultymemberdepartment: 'I got that scurvy',

    sectorfield: "That's messed up",

    seedfundingsecuredifany: "How 'bout them Cowboys",

    stage: "How 'bout them Cowboys",

    incubatedsinceexpectedgraduation: "That's messed up",

    internshipjobscreated: "That's messed up",

    totalfacultystartups: 'That damn diabetes',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'I want my damn cart back',

    briefidea: "I'm washing my hands of it",

    facultymembername: 'My boss gonna fire me',

    facultymemberdesignation: "C'mon Naomi",

    facultymemberdepartment: 'Like a red-headed stepchild',

    sectorfield: 'I want my 5$ back',

    seedfundingsecuredifany: 'I want my damn cart back',

    stage: 'Reminds me of my old girlfriend Olga Goodntight',

    incubatedsinceexpectedgraduation:
      "That Barbala couldn't fly his way out of a wet paper bag",

    internshipjobscreated: "C'mon Naomi",

    totalfacultystartups: 'Come on now',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofstartup: 'That damn Bill Stull',

    briefidea: 'Reminds me of my old girlfriend Olga Goodntight',

    facultymembername:
      "That Barbala couldn't fly his way out of a wet paper bag",

    facultymemberdesignation: "That's messed up",

    facultymemberdepartment: 'Got depression, Smith and Wessen',

    sectorfield: 'Reminds me of my old girlfriend Olga Goodntight',

    seedfundingsecuredifany: "How 'bout them Cowboys",

    stage: "Goin' hog huntin'",

    incubatedsinceexpectedgraduation: 'Might be DQ time',

    internshipjobscreated: 'Standby',

    totalfacultystartups: 'Standby',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const TrainingcourseinfoData = [
  {
    nameofcourse: 'That goddamn Datamate',

    typeofcourse: 'I want my 5$ back',

    leveloffered: 'No one tells me shit',

    majorareascovered: "How 'bout them Cowboys",

    keylearningoutcomes: 'Always the last one to the party',

    noofstartupscompletedthecourse: 'That damn gimble',

    coursedevelopment: 'I want my damn cart back',

    ifoutsourcednameofcourseoffered: 'That damn Bill Stull',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofcourse: "How 'bout them Cowboys",

    typeofcourse: "Goin' hog huntin'",

    leveloffered: "Goin' hog huntin'",

    majorareascovered: 'Got depression, Smith and Wessen',

    keylearningoutcomes: 'That damn Bill Stull',

    noofstartupscompletedthecourse: 'Might be DQ time',

    coursedevelopment: 'Might be DQ time',

    ifoutsourcednameofcourseoffered: "I'm washing my hands of it",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofcourse: 'Texas!',

    typeofcourse: "That's messed up",

    leveloffered: 'Contact the tower',

    majorareascovered: 'Like a red-headed stepchild',

    keylearningoutcomes: 'Always the last one to the party',

    noofstartupscompletedthecourse: "How 'bout them Cowboys",

    coursedevelopment: 'Let me tell ya',

    ifoutsourcednameofcourseoffered: 'I want my damn cart back',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofcourse: "Goin' hog huntin'",

    typeofcourse: 'That damn gimble',

    leveloffered: 'So I was walking Oscar',

    majorareascovered: 'Like a red-headed stepchild',

    keylearningoutcomes: "How 'bout them Cowboys",

    noofstartupscompletedthecourse: 'Always the last one to the party',

    coursedevelopment: 'Like a red-headed stepchild',

    ifoutsourcednameofcourseoffered: 'Let me tell ya',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofcourse: 'I want my damn cart back',

    typeofcourse: 'Come on now',

    leveloffered: 'That damn gimble',

    majorareascovered: 'That goddamn Datamate',

    keylearningoutcomes:
      "That Barbala couldn't fly his way out of a wet paper bag",

    noofstartupscompletedthecourse: 'I got that scurvy',

    coursedevelopment: 'Like a red-headed stepchild',

    ifoutsourcednameofcourseoffered: 'No one tells me shit',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const TrainingsData = [
  {
    titleoftraining: 'So I was walking Oscar',

    // type code here for "date" field

    numberofparticipants: "Y'all never listen to me",

    majorfocusareaandoutcomes: 'Let me tell ya',

    audiencetype: "That's messed up",

    organizer: 'That goddamn Datamate',

    nameoforicpersonalattended: 'That goddamn Datamate',

    detailsoforicpersonnelattended:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleoftraining: 'Yup',

    // type code here for "date" field

    numberofparticipants: 'I got that scurvy',

    majorfocusareaandoutcomes: 'No one tells me shit',

    audiencetype: 'Got depression, Smith and Wessen',

    organizer: 'So I was walking Oscar',

    nameoforicpersonalattended: 'My boss gonna fire me',

    detailsoforicpersonnelattended: 'Turd gone wrong',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleoftraining: 'Texas!',

    // type code here for "date" field

    numberofparticipants: "C'mon Naomi",

    majorfocusareaandoutcomes: "It's around here somewhere",

    audiencetype: 'I tell you what',

    organizer: "Y'all never listen to me",

    nameoforicpersonalattended: 'That damn diabetes',

    detailsoforicpersonnelattended: 'Texas!',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleoftraining: 'I want my damn cart back',

    // type code here for "date" field

    numberofparticipants: "That's messed up",

    majorfocusareaandoutcomes: 'Yup',

    audiencetype: 'Like a red-headed stepchild',

    organizer: "I'm washing my hands of it",

    nameoforicpersonalattended: 'Got depression, Smith and Wessen',

    detailsoforicpersonnelattended: 'That goddamn Datamate',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    titleoftraining: 'Like a red-headed stepchild',

    // type code here for "date" field

    numberofparticipants:
      "That Barbala couldn't fly his way out of a wet paper bag",

    majorfocusareaandoutcomes: 'I want my 5$ back',

    audiencetype: "It's around here somewhere",

    organizer: 'I got that scurvy',

    nameoforicpersonalattended: 'Yup',

    detailsoforicpersonnelattended: 'That damn gimble',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const UniversityData = [
  {
    name: 'Charles Lyell',

    province: "That's messed up",

    city: 'My buddy Harlen',

    sector: 'I want my damn cart back',

    postaladdress: 'Yup',

    universityheadposition: 'Come on now',

    universityheadname: "I'm washing my hands of it",

    universityheademail:
      "That Barbala couldn't fly his way out of a wet paper bag",

    universityheadphonenumber: 'That goddamn Datamate',

    registrarname: 'Yup',

    registraremail: 'That damn Bill Stull',

    registrarphonenumber: "Y'all never listen to me",

    registrarpaemail: 'Reminds me of my old girlfriend Olga Goodntight',

    registrarpaphonenumber: 'So I was walking Oscar',

    totalnumberofsanctionedfaculityposts: "C'mon Naomi",

    totalnumberoffaculty: 'Contact the tower',

    totalnumberofphdfaculty: 'Always the last one to the party',

    totalnumberofvacantfacultyposts: "Goin' hog huntin'",
  },

  {
    name: 'Willard Libby',

    province: 'Texas!',

    city: "I'm washing my hands of it",

    sector: 'That damn diabetes',

    postaladdress: "Y'all never listen to me",

    universityheadposition: "Goin' hog huntin'",

    universityheadname: "C'mon Naomi",

    universityheademail: 'That goddamn Datamate',

    universityheadphonenumber: 'Turd gone wrong',

    registrarname: "Y'all never listen to me",

    registraremail: 'Got depression, Smith and Wessen',

    registrarphonenumber: 'Come on now',

    registrarpaemail: 'Turd gone wrong',

    registrarpaphonenumber: "That's messed up",

    totalnumberofsanctionedfaculityposts:
      "That Barbala couldn't fly his way out of a wet paper bag",

    totalnumberoffaculty: "That's messed up",

    totalnumberofphdfaculty: 'I tell you what',

    totalnumberofvacantfacultyposts: 'So I was walking Oscar',
  },

  {
    name: 'Paul Ehrlich',

    province: "That's messed up",

    city: 'Let me tell ya',

    sector: 'So I was walking Oscar',

    postaladdress: 'Yup',

    universityheadposition: 'That damn Bill Stull',

    universityheadname: "It's around here somewhere",

    universityheademail: 'That damn Bill Stull',

    universityheadphonenumber: 'I got that scurvy',

    registrarname: 'That damn diabetes',

    registraremail: 'Got depression, Smith and Wessen',

    registrarphonenumber: 'Standby',

    registrarpaemail: 'My buddy Harlen',

    registrarpaphonenumber: "It's around here somewhere",

    totalnumberofsanctionedfaculityposts: 'My boss gonna fire me',

    totalnumberoffaculty: 'Reminds me of my old girlfriend Olga Goodntight',

    totalnumberofphdfaculty: 'That damn diabetes',

    totalnumberofvacantfacultyposts: 'Like a red-headed stepchild',
  },

  {
    name: 'B. F. Skinner',

    province: 'So I was walking Oscar',

    city: 'That damn Bill Stull',

    sector: 'Might be DQ time',

    postaladdress: 'Might be DQ time',

    universityheadposition: 'Got depression, Smith and Wessen',

    universityheadname: 'Reminds me of my old girlfriend Olga Goodntight',

    universityheademail: 'Turd gone wrong',

    universityheadphonenumber:
      "That Barbala couldn't fly his way out of a wet paper bag",

    registrarname: 'Reminds me of my old girlfriend Olga Goodntight',

    registraremail: 'Texas!',

    registrarphonenumber: 'That damn Bill Stull',

    registrarpaemail: 'Standby',

    registrarpaphonenumber: 'So I was walking Oscar',

    totalnumberofsanctionedfaculityposts: 'Turd gone wrong',

    totalnumberoffaculty: 'That damn gimble',

    totalnumberofphdfaculty: 'Might be DQ time',

    totalnumberofvacantfacultyposts: 'Standby',
  },

  {
    name: 'Paul Dirac',

    province: 'I tell you what',

    city: 'That damn gimble',

    sector: "That's messed up",

    postaladdress: 'Got depression, Smith and Wessen',

    universityheadposition: "C'mon Naomi",

    universityheadname: 'Reminds me of my old girlfriend Olga Goodntight',

    universityheademail: "How 'bout them Cowboys",

    universityheadphonenumber: 'Contact the tower',

    registrarname: 'Might be DQ time',

    registraremail: 'I want my damn cart back',

    registrarphonenumber: 'Always the last one to the party',

    registrarpaemail: 'Yup',

    registrarpaphonenumber: 'That damn gimble',

    totalnumberofsanctionedfaculityposts: 'Standby',

    totalnumberoffaculty: 'Contact the tower',

    totalnumberofphdfaculty: 'Got depression, Smith and Wessen',

    totalnumberofvacantfacultyposts: 'My buddy Harlen',
  },
];

const UniversityadvancedstudiesandresearchboardData = [
  {
    nameofmemberdevelopedwith: 'No one tells me shit',

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmemberdevelopedwith: "It's around here somewhere",

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmemberdevelopedwith: 'Standby',

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmemberdevelopedwith: "It's around here somewhere",

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofmemberdevelopedwith: 'Contact the tower',

    // type code here for "date" field

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const VisitsData = [
  {
    nameofvisits: "How 'bout them Cowboys",

    dateofvisit: "That Barbala couldn't fly his way out of a wet paper bag",

    agendaofvisit: 'No one tells me shit',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofvisits: 'Reminds me of my old girlfriend Olga Goodntight',

    dateofvisit: 'Got depression, Smith and Wessen',

    agendaofvisit: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofvisits: 'My buddy Harlen',

    dateofvisit: 'Let me tell ya',

    agendaofvisit: 'Might be DQ time',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofvisits: "That Barbala couldn't fly his way out of a wet paper bag",

    dateofvisit: "Goin' hog huntin'",

    agendaofvisit: 'That damn diabetes',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    nameofvisits: 'Texas!',

    dateofvisit: 'Got depression, Smith and Wessen',

    agendaofvisit: 'Got depression, Smith and Wessen',

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const WorkshopeventinfoData = [
  {
    title: 'Reminds me of my old girlfriend Olga Goodntight',

    // type code here for "date" field

    venue: "How 'bout them Cowboys",

    fieldthematicarea: "I'm washing my hands of it",

    panelistmentoradvisorname: 'I got that scurvy',

    panelistmentoradvisordesignation: 'My boss gonna fire me',

    arrangedby: "That's messed up",

    facultystudent: 'Reminds me of my old girlfriend Olga Goodntight',

    noofparticipants: "Goin' hog huntin'",

    totalnoeventsheld: 'Contact the tower',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    title: 'I tell you what',

    // type code here for "date" field

    venue: 'Standby',

    fieldthematicarea: 'Always the last one to the party',

    panelistmentoradvisorname:
      "That Barbala couldn't fly his way out of a wet paper bag",

    panelistmentoradvisordesignation: "I'm washing my hands of it",

    arrangedby: 'Got depression, Smith and Wessen',

    facultystudent: 'No one tells me shit',

    noofparticipants: 'I want my damn cart back',

    totalnoeventsheld: 'Turd gone wrong',

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    title: 'I want my 5$ back',

    // type code here for "date" field

    venue: 'Turd gone wrong',

    fieldthematicarea: 'I want my damn cart back',

    panelistmentoradvisorname: 'I tell you what',

    panelistmentoradvisordesignation: 'Let me tell ya',

    arrangedby: "Goin' hog huntin'",

    facultystudent: 'That damn Bill Stull',

    noofparticipants: 'I got that scurvy',

    totalnoeventsheld: "It's around here somewhere",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    title: "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "date" field

    venue: 'My buddy Harlen',

    fieldthematicarea: 'Might be DQ time',

    panelistmentoradvisorname: 'Standby',

    panelistmentoradvisordesignation: "Y'all never listen to me",

    arrangedby: 'Come on now',

    facultystudent: 'I got that scurvy',

    noofparticipants: 'Always the last one to the party',

    totalnoeventsheld: "That's messed up",

    // type code here for "relation_one" field

    // type code here for "files" field
  },

  {
    title: 'Turd gone wrong',

    // type code here for "date" field

    venue: 'My boss gonna fire me',

    fieldthematicarea: 'I got that scurvy',

    panelistmentoradvisorname: 'That damn gimble',

    panelistmentoradvisordesignation:
      'Reminds me of my old girlfriend Olga Goodntight',

    arrangedby: 'I tell you what',

    facultystudent: 'That damn gimble',

    noofparticipants: 'Like a red-headed stepchild',

    totalnoeventsheld: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "files" field
  },
];

const StartupemplomentData = [
  {
    // type code here for "relation_one" field

    nameofstartup: 'Texas!',

    startupfacultymembername: 'I want my damn cart back',

    designationdepartment: 'Always the last one to the party',

    startupstatusincubatedgraduated: 'Let me tell ya',

    employeename: "Goin' hog huntin'",

    employmenttype: 'Standby',

    salarystipendhonorarium: 'Might be DQ time',

    employeesince: 'No one tells me shit',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofstartup: 'Come on now',

    startupfacultymembername: 'My buddy Harlen',

    designationdepartment: 'Contact the tower',

    startupstatusincubatedgraduated: "C'mon Naomi",

    employeename: "C'mon Naomi",

    employmenttype: "C'mon Naomi",

    salarystipendhonorarium: 'That damn diabetes',

    employeesince: 'Let me tell ya',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofstartup: 'Like a red-headed stepchild',

    startupfacultymembername:
      "That Barbala couldn't fly his way out of a wet paper bag",

    designationdepartment: 'Reminds me of my old girlfriend Olga Goodntight',

    startupstatusincubatedgraduated: "I'm washing my hands of it",

    employeename: 'That damn Bill Stull',

    employmenttype: 'Like a red-headed stepchild',

    salarystipendhonorarium: 'Texas!',

    employeesince: 'No one tells me shit',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofstartup: 'My boss gonna fire me',

    startupfacultymembername: 'Yup',

    designationdepartment: 'I want my 5$ back',

    startupstatusincubatedgraduated: 'That damn gimble',

    employeename: 'I want my damn cart back',

    employmenttype: 'That damn diabetes',

    salarystipendhonorarium: 'My buddy Harlen',

    employeesince: 'I want my damn cart back',

    // type code here for "files" field
  },

  {
    // type code here for "relation_one" field

    nameofstartup: 'Reminds me of my old girlfriend Olga Goodntight',

    startupfacultymembername: 'Texas!',

    designationdepartment: "Goin' hog huntin'",

    startupstatusincubatedgraduated: 'I want my 5$ back',

    employeename: 'That damn diabetes',

    employmenttype: 'Reminds me of my old girlfriend Olga Goodntight',

    salarystipendhonorarium: 'Reminds me of my old girlfriend Olga Goodntight',

    employeesince: "C'mon Naomi",

    // type code here for "files" field
  },
];

async function associateActivegraduatedstartupinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Activegraduatedstartupinfo0 = await Activegraduatedstartupinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activegraduatedstartupinfo0?.setCategory) {
    await Activegraduatedstartupinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Activegraduatedstartupinfo1 = await Activegraduatedstartupinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activegraduatedstartupinfo1?.setCategory) {
    await Activegraduatedstartupinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Activegraduatedstartupinfo2 = await Activegraduatedstartupinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activegraduatedstartupinfo2?.setCategory) {
    await Activegraduatedstartupinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Activegraduatedstartupinfo3 = await Activegraduatedstartupinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Activegraduatedstartupinfo3?.setCategory) {
    await Activegraduatedstartupinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Activegraduatedstartupinfo4 = await Activegraduatedstartupinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Activegraduatedstartupinfo4?.setCategory) {
    await Activegraduatedstartupinfo4.setCategory(relatedCategory4);
  }
}

async function associateAnualresearchrevenueWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Anualresearchrevenue0 = await Anualresearchrevenue.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Anualresearchrevenue0?.setCategory) {
    await Anualresearchrevenue0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Anualresearchrevenue1 = await Anualresearchrevenue.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Anualresearchrevenue1?.setCategory) {
    await Anualresearchrevenue1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Anualresearchrevenue2 = await Anualresearchrevenue.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Anualresearchrevenue2?.setCategory) {
    await Anualresearchrevenue2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Anualresearchrevenue3 = await Anualresearchrevenue.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Anualresearchrevenue3?.setCategory) {
    await Anualresearchrevenue3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Anualresearchrevenue4 = await Anualresearchrevenue.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Anualresearchrevenue4?.setCategory) {
    await Anualresearchrevenue4.setCategory(relatedCategory4);
  }
}

async function associateBicfundinginfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicfundinginfo0 = await Bicfundinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Bicfundinginfo0?.setCategory) {
    await Bicfundinginfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicfundinginfo1 = await Bicfundinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Bicfundinginfo1?.setCategory) {
    await Bicfundinginfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicfundinginfo2 = await Bicfundinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Bicfundinginfo2?.setCategory) {
    await Bicfundinginfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicfundinginfo3 = await Bicfundinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Bicfundinginfo3?.setCategory) {
    await Bicfundinginfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicfundinginfo4 = await Bicfundinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Bicfundinginfo4?.setCategory) {
    await Bicfundinginfo4.setCategory(relatedCategory4);
  }
}

async function associateBichumanresourceWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bichumanresource0 = await Bichumanresource.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Bichumanresource0?.setCategory) {
    await Bichumanresource0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bichumanresource1 = await Bichumanresource.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Bichumanresource1?.setCategory) {
    await Bichumanresource1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bichumanresource2 = await Bichumanresource.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Bichumanresource2?.setCategory) {
    await Bichumanresource2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bichumanresource3 = await Bichumanresource.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Bichumanresource3?.setCategory) {
    await Bichumanresource3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bichumanresource4 = await Bichumanresource.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Bichumanresource4?.setCategory) {
    await Bichumanresource4.setCategory(relatedCategory4);
  }
}

async function associateBicserviceofferinginfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicserviceofferinginfo0 = await Bicserviceofferinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Bicserviceofferinginfo0?.setCategory) {
    await Bicserviceofferinginfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicserviceofferinginfo1 = await Bicserviceofferinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Bicserviceofferinginfo1?.setCategory) {
    await Bicserviceofferinginfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicserviceofferinginfo2 = await Bicserviceofferinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Bicserviceofferinginfo2?.setCategory) {
    await Bicserviceofferinginfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicserviceofferinginfo3 = await Bicserviceofferinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Bicserviceofferinginfo3?.setCategory) {
    await Bicserviceofferinginfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicserviceofferinginfo4 = await Bicserviceofferinginfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Bicserviceofferinginfo4?.setCategory) {
    await Bicserviceofferinginfo4.setCategory(relatedCategory4);
  }
}

async function associateBicsupportinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicsupportinfo0 = await Bicsupportinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Bicsupportinfo0?.setCategory) {
    await Bicsupportinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicsupportinfo1 = await Bicsupportinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Bicsupportinfo1?.setCategory) {
    await Bicsupportinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicsupportinfo2 = await Bicsupportinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Bicsupportinfo2?.setCategory) {
    await Bicsupportinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicsupportinfo3 = await Bicsupportinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Bicsupportinfo3?.setCategory) {
    await Bicsupportinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Bicsupportinfo4 = await Bicsupportinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Bicsupportinfo4?.setCategory) {
    await Bicsupportinfo4.setCategory(relatedCategory4);
  }
}

async function associateColaborationagreementWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Colaborationagreement0 = await Colaborationagreement.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Colaborationagreement0?.setCategory) {
    await Colaborationagreement0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Colaborationagreement1 = await Colaborationagreement.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Colaborationagreement1?.setCategory) {
    await Colaborationagreement1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Colaborationagreement2 = await Colaborationagreement.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Colaborationagreement2?.setCategory) {
    await Colaborationagreement2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Colaborationagreement3 = await Colaborationagreement.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Colaborationagreement3?.setCategory) {
    await Colaborationagreement3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Colaborationagreement4 = await Colaborationagreement.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Colaborationagreement4?.setCategory) {
    await Colaborationagreement4.setCategory(relatedCategory4);
  }
}

async function associateCommityWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Commity0 = await Commities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Commity0?.setCategory) {
    await Commity0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Commity1 = await Commities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Commity1?.setCategory) {
    await Commity1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Commity2 = await Commities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Commity2?.setCategory) {
    await Commity2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Commity3 = await Commities.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Commity3?.setCategory) {
    await Commity3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Commity4 = await Commities.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Commity4?.setCategory) {
    await Commity4.setCategory(relatedCategory4);
  }
}

async function associateCoursedetailsinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Coursedetailsinfo0 = await Coursedetailsinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Coursedetailsinfo0?.setCategory) {
    await Coursedetailsinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Coursedetailsinfo1 = await Coursedetailsinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Coursedetailsinfo1?.setCategory) {
    await Coursedetailsinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Coursedetailsinfo2 = await Coursedetailsinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Coursedetailsinfo2?.setCategory) {
    await Coursedetailsinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Coursedetailsinfo3 = await Coursedetailsinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Coursedetailsinfo3?.setCategory) {
    await Coursedetailsinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Coursedetailsinfo4 = await Coursedetailsinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Coursedetailsinfo4?.setCategory) {
    await Coursedetailsinfo4.setCategory(relatedCategory4);
  }
}

async function associateEngagementeventWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Engagementevent0 = await Engagementevents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Engagementevent0?.setCategory) {
    await Engagementevent0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Engagementevent1 = await Engagementevents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Engagementevent1?.setCategory) {
    await Engagementevent1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Engagementevent2 = await Engagementevents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Engagementevent2?.setCategory) {
    await Engagementevent2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Engagementevent3 = await Engagementevents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Engagementevent3?.setCategory) {
    await Engagementevent3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Engagementevent4 = await Engagementevents.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Engagementevent4?.setCategory) {
    await Engagementevent4.setCategory(relatedCategory4);
  }
}

async function associateGraduatedstartupfacilitationinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Graduatedstartupfacilitationinfo0 =
    await Graduatedstartupfacilitationinfo.findOne({
      order: [['id', 'ASC']],
      offset: 0,
    });
  if (Graduatedstartupfacilitationinfo0?.setCategory) {
    await Graduatedstartupfacilitationinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Graduatedstartupfacilitationinfo1 =
    await Graduatedstartupfacilitationinfo.findOne({
      order: [['id', 'ASC']],
      offset: 1,
    });
  if (Graduatedstartupfacilitationinfo1?.setCategory) {
    await Graduatedstartupfacilitationinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Graduatedstartupfacilitationinfo2 =
    await Graduatedstartupfacilitationinfo.findOne({
      order: [['id', 'ASC']],
      offset: 2,
    });
  if (Graduatedstartupfacilitationinfo2?.setCategory) {
    await Graduatedstartupfacilitationinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Graduatedstartupfacilitationinfo3 =
    await Graduatedstartupfacilitationinfo.findOne({
      order: [['id', 'ASC']],
      offset: 3,
    });
  if (Graduatedstartupfacilitationinfo3?.setCategory) {
    await Graduatedstartupfacilitationinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Graduatedstartupfacilitationinfo4 =
    await Graduatedstartupfacilitationinfo.findOne({
      order: [['id', 'ASC']],
      offset: 4,
    });
  if (Graduatedstartupfacilitationinfo4?.setCategory) {
    await Graduatedstartupfacilitationinfo4.setCategory(relatedCategory4);
  }
}

async function associateHonorsandawardWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Honorsandaward0 = await Honorsandawards.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Honorsandaward0?.setCategory) {
    await Honorsandaward0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Honorsandaward1 = await Honorsandawards.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Honorsandaward1?.setCategory) {
    await Honorsandaward1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Honorsandaward2 = await Honorsandawards.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Honorsandaward2?.setCategory) {
    await Honorsandaward2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Honorsandaward3 = await Honorsandawards.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Honorsandaward3?.setCategory) {
    await Honorsandaward3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Honorsandaward4 = await Honorsandawards.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Honorsandaward4?.setCategory) {
    await Honorsandaward4.setCategory(relatedCategory4);
  }
}

async function associateHumanresourceWithUniversity() {
  const relatedUniversity0 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Humanresource0 = await Humanresource.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Humanresource0?.setUniversity) {
    await Humanresource0.setUniversity(relatedUniversity0);
  }

  const relatedUniversity1 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Humanresource1 = await Humanresource.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Humanresource1?.setUniversity) {
    await Humanresource1.setUniversity(relatedUniversity1);
  }

  const relatedUniversity2 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Humanresource2 = await Humanresource.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Humanresource2?.setUniversity) {
    await Humanresource2.setUniversity(relatedUniversity2);
  }

  const relatedUniversity3 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Humanresource3 = await Humanresource.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Humanresource3?.setUniversity) {
    await Humanresource3.setUniversity(relatedUniversity3);
  }

  const relatedUniversity4 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Humanresource4 = await Humanresource.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Humanresource4?.setUniversity) {
    await Humanresource4.setUniversity(relatedUniversity4);
  }
}

async function associateMentorshipinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Mentorshipinfo0 = await Mentorshipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Mentorshipinfo0?.setCategory) {
    await Mentorshipinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Mentorshipinfo1 = await Mentorshipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Mentorshipinfo1?.setCategory) {
    await Mentorshipinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Mentorshipinfo2 = await Mentorshipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Mentorshipinfo2?.setCategory) {
    await Mentorshipinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Mentorshipinfo3 = await Mentorshipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Mentorshipinfo3?.setCategory) {
    await Mentorshipinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Mentorshipinfo4 = await Mentorshipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Mentorshipinfo4?.setCategory) {
    await Mentorshipinfo4.setCategory(relatedCategory4);
  }
}

async function associateOricdatumWithUniversity() {
  const relatedUniversity0 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Oricdatum0 = await Oricdata.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Oricdatum0?.setUniversity) {
    await Oricdatum0.setUniversity(relatedUniversity0);
  }

  const relatedUniversity1 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Oricdatum1 = await Oricdata.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Oricdatum1?.setUniversity) {
    await Oricdatum1.setUniversity(relatedUniversity1);
  }

  const relatedUniversity2 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Oricdatum2 = await Oricdata.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Oricdatum2?.setUniversity) {
    await Oricdatum2.setUniversity(relatedUniversity2);
  }

  const relatedUniversity3 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Oricdatum3 = await Oricdata.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Oricdatum3?.setUniversity) {
    await Oricdatum3.setUniversity(relatedUniversity3);
  }

  const relatedUniversity4 = await University.findOne({
    offset: Math.floor(Math.random() * (await University.count())),
  });
  const Oricdatum4 = await Oricdata.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Oricdatum4?.setUniversity) {
    await Oricdatum4.setUniversity(relatedUniversity4);
  }
}

async function associatePartnershipinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Partnershipinfo0 = await Partnershipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Partnershipinfo0?.setCategory) {
    await Partnershipinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Partnershipinfo1 = await Partnershipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Partnershipinfo1?.setCategory) {
    await Partnershipinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Partnershipinfo2 = await Partnershipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Partnershipinfo2?.setCategory) {
    await Partnershipinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Partnershipinfo3 = await Partnershipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Partnershipinfo3?.setCategory) {
    await Partnershipinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Partnershipinfo4 = await Partnershipinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Partnershipinfo4?.setCategory) {
    await Partnershipinfo4.setCategory(relatedCategory4);
  }
}

async function associatePatentWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Patent0 = await Patents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Patent0?.setCategory) {
    await Patent0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Patent1 = await Patents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Patent1?.setCategory) {
    await Patent1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Patent2 = await Patents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Patent2?.setCategory) {
    await Patent2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Patent3 = await Patents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Patent3?.setCategory) {
    await Patent3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Patent4 = await Patents.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Patent4?.setCategory) {
    await Patent4.setCategory(relatedCategory4);
  }
}

async function associatePolicyadvocacyWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Policyadvocacy0 = await Policyadvocacy.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Policyadvocacy0?.setCategory) {
    await Policyadvocacy0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Policyadvocacy1 = await Policyadvocacy.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Policyadvocacy1?.setCategory) {
    await Policyadvocacy1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Policyadvocacy2 = await Policyadvocacy.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Policyadvocacy2?.setCategory) {
    await Policyadvocacy2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Policyadvocacy3 = await Policyadvocacy.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Policyadvocacy3?.setCategory) {
    await Policyadvocacy3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Policyadvocacy4 = await Policyadvocacy.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Policyadvocacy4?.setCategory) {
    await Policyadvocacy4.setCategory(relatedCategory4);
  }
}

async function associateResearchlinkWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchlink0 = await Researchlinks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Researchlink0?.setCategory) {
    await Researchlink0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchlink1 = await Researchlinks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Researchlink1?.setCategory) {
    await Researchlink1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchlink2 = await Researchlinks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Researchlink2?.setCategory) {
    await Researchlink2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchlink3 = await Researchlinks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Researchlink3?.setCategory) {
    await Researchlink3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchlink4 = await Researchlinks.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Researchlink4?.setCategory) {
    await Researchlink4.setCategory(relatedCategory4);
  }
}

async function associateResearchpolicyWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchpolicy0 = await Researchpolicy.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Researchpolicy0?.setCategory) {
    await Researchpolicy0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchpolicy1 = await Researchpolicy.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Researchpolicy1?.setCategory) {
    await Researchpolicy1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchpolicy2 = await Researchpolicy.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Researchpolicy2?.setCategory) {
    await Researchpolicy2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchpolicy3 = await Researchpolicy.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Researchpolicy3?.setCategory) {
    await Researchpolicy3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchpolicy4 = await Researchpolicy.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Researchpolicy4?.setCategory) {
    await Researchpolicy4.setCategory(relatedCategory4);
  }
}

async function associateResearchproposalandgrantWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchproposalandgrant0 = await Researchproposalandgrants.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Researchproposalandgrant0?.setCategory) {
    await Researchproposalandgrant0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchproposalandgrant1 = await Researchproposalandgrants.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Researchproposalandgrant1?.setCategory) {
    await Researchproposalandgrant1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchproposalandgrant2 = await Researchproposalandgrants.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Researchproposalandgrant2?.setCategory) {
    await Researchproposalandgrant2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchproposalandgrant3 = await Researchproposalandgrants.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Researchproposalandgrant3?.setCategory) {
    await Researchproposalandgrant3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Researchproposalandgrant4 = await Researchproposalandgrants.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Researchproposalandgrant4?.setCategory) {
    await Researchproposalandgrant4.setCategory(relatedCategory4);
  }
}

async function associateSpinoffstartupWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Spinoffstartup0 = await Spinoffstartups.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Spinoffstartup0?.setCategory) {
    await Spinoffstartup0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Spinoffstartup1 = await Spinoffstartups.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Spinoffstartup1?.setCategory) {
    await Spinoffstartup1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Spinoffstartup2 = await Spinoffstartups.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Spinoffstartup2?.setCategory) {
    await Spinoffstartup2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Spinoffstartup3 = await Spinoffstartups.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Spinoffstartup3?.setCategory) {
    await Spinoffstartup3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Spinoffstartup4 = await Spinoffstartups.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Spinoffstartup4?.setCategory) {
    await Spinoffstartup4.setCategory(relatedCategory4);
  }
}

async function associateStartupeventWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupevent0 = await Startupevents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startupevent0?.setCategory) {
    await Startupevent0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupevent1 = await Startupevents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startupevent1?.setCategory) {
    await Startupevent1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupevent2 = await Startupevents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startupevent2?.setCategory) {
    await Startupevent2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupevent3 = await Startupevents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startupevent3?.setCategory) {
    await Startupevent3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupevent4 = await Startupevents.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startupevent4?.setCategory) {
    await Startupevent4.setCategory(relatedCategory4);
  }
}

async function associateStartupincubationWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupincubation0 = await Startupincubation.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startupincubation0?.setCategory) {
    await Startupincubation0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupincubation1 = await Startupincubation.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startupincubation1?.setCategory) {
    await Startupincubation1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupincubation2 = await Startupincubation.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startupincubation2?.setCategory) {
    await Startupincubation2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupincubation3 = await Startupincubation.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startupincubation3?.setCategory) {
    await Startupincubation3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupincubation4 = await Startupincubation.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startupincubation4?.setCategory) {
    await Startupincubation4.setCategory(relatedCategory4);
  }
}

async function associateStartupmentoringWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupmentoring0 = await Startupmentoring.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startupmentoring0?.setCategory) {
    await Startupmentoring0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupmentoring1 = await Startupmentoring.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startupmentoring1?.setCategory) {
    await Startupmentoring1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupmentoring2 = await Startupmentoring.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startupmentoring2?.setCategory) {
    await Startupmentoring2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupmentoring3 = await Startupmentoring.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startupmentoring3?.setCategory) {
    await Startupmentoring3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupmentoring4 = await Startupmentoring.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startupmentoring4?.setCategory) {
    await Startupmentoring4.setCategory(relatedCategory4);
  }
}

async function associateStartuprevenueWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startuprevenue0 = await Startuprevenue.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startuprevenue0?.setCategory) {
    await Startuprevenue0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startuprevenue1 = await Startuprevenue.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startuprevenue1?.setCategory) {
    await Startuprevenue1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startuprevenue2 = await Startuprevenue.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startuprevenue2?.setCategory) {
    await Startuprevenue2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startuprevenue3 = await Startuprevenue.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startuprevenue3?.setCategory) {
    await Startuprevenue3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startuprevenue4 = await Startuprevenue.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startuprevenue4?.setCategory) {
    await Startuprevenue4.setCategory(relatedCategory4);
  }
}

async function associateStartupsappliedforpitchingWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsappliedforpitching0 = await Startupsappliedforpitching.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startupsappliedforpitching0?.setCategory) {
    await Startupsappliedforpitching0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsappliedforpitching1 = await Startupsappliedforpitching.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startupsappliedforpitching1?.setCategory) {
    await Startupsappliedforpitching1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsappliedforpitching2 = await Startupsappliedforpitching.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startupsappliedforpitching2?.setCategory) {
    await Startupsappliedforpitching2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsappliedforpitching3 = await Startupsappliedforpitching.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startupsappliedforpitching3?.setCategory) {
    await Startupsappliedforpitching3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsappliedforpitching4 = await Startupsappliedforpitching.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startupsappliedforpitching4?.setCategory) {
    await Startupsappliedforpitching4.setCategory(relatedCategory4);
  }
}

async function associateStartupsincubatedWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsincubated0 = await Startupsincubated.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startupsincubated0?.setCategory) {
    await Startupsincubated0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsincubated1 = await Startupsincubated.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startupsincubated1?.setCategory) {
    await Startupsincubated1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsincubated2 = await Startupsincubated.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startupsincubated2?.setCategory) {
    await Startupsincubated2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsincubated3 = await Startupsincubated.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startupsincubated3?.setCategory) {
    await Startupsincubated3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupsincubated4 = await Startupsincubated.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startupsincubated4?.setCategory) {
    await Startupsincubated4.setCategory(relatedCategory4);
  }
}

async function associateTrainingcourseinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Trainingcourseinfo0 = await Trainingcourseinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Trainingcourseinfo0?.setCategory) {
    await Trainingcourseinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Trainingcourseinfo1 = await Trainingcourseinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Trainingcourseinfo1?.setCategory) {
    await Trainingcourseinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Trainingcourseinfo2 = await Trainingcourseinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Trainingcourseinfo2?.setCategory) {
    await Trainingcourseinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Trainingcourseinfo3 = await Trainingcourseinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Trainingcourseinfo3?.setCategory) {
    await Trainingcourseinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Trainingcourseinfo4 = await Trainingcourseinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Trainingcourseinfo4?.setCategory) {
    await Trainingcourseinfo4.setCategory(relatedCategory4);
  }
}

async function associateTrainingWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Training0 = await Trainings.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Training0?.setCategory) {
    await Training0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Training1 = await Trainings.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Training1?.setCategory) {
    await Training1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Training2 = await Trainings.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Training2?.setCategory) {
    await Training2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Training3 = await Trainings.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Training3?.setCategory) {
    await Training3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Training4 = await Trainings.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Training4?.setCategory) {
    await Training4.setCategory(relatedCategory4);
  }
}

async function associateUniversityadvancedstudiesandresearchboardWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Universityadvancedstudiesandresearchboard0 =
    await Universityadvancedstudiesandresearchboard.findOne({
      order: [['id', 'ASC']],
      offset: 0,
    });
  if (Universityadvancedstudiesandresearchboard0?.setCategory) {
    await Universityadvancedstudiesandresearchboard0.setCategory(
      relatedCategory0,
    );
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Universityadvancedstudiesandresearchboard1 =
    await Universityadvancedstudiesandresearchboard.findOne({
      order: [['id', 'ASC']],
      offset: 1,
    });
  if (Universityadvancedstudiesandresearchboard1?.setCategory) {
    await Universityadvancedstudiesandresearchboard1.setCategory(
      relatedCategory1,
    );
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Universityadvancedstudiesandresearchboard2 =
    await Universityadvancedstudiesandresearchboard.findOne({
      order: [['id', 'ASC']],
      offset: 2,
    });
  if (Universityadvancedstudiesandresearchboard2?.setCategory) {
    await Universityadvancedstudiesandresearchboard2.setCategory(
      relatedCategory2,
    );
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Universityadvancedstudiesandresearchboard3 =
    await Universityadvancedstudiesandresearchboard.findOne({
      order: [['id', 'ASC']],
      offset: 3,
    });
  if (Universityadvancedstudiesandresearchboard3?.setCategory) {
    await Universityadvancedstudiesandresearchboard3.setCategory(
      relatedCategory3,
    );
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Universityadvancedstudiesandresearchboard4 =
    await Universityadvancedstudiesandresearchboard.findOne({
      order: [['id', 'ASC']],
      offset: 4,
    });
  if (Universityadvancedstudiesandresearchboard4?.setCategory) {
    await Universityadvancedstudiesandresearchboard4.setCategory(
      relatedCategory4,
    );
  }
}

async function associateVisitWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Visit0 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Visit0?.setCategory) {
    await Visit0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Visit1 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Visit1?.setCategory) {
    await Visit1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Visit2 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Visit2?.setCategory) {
    await Visit2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Visit3 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Visit3?.setCategory) {
    await Visit3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Visit4 = await Visits.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Visit4?.setCategory) {
    await Visit4.setCategory(relatedCategory4);
  }
}

async function associateWorkshopeventinfoWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Workshopeventinfo0 = await Workshopeventinfo.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Workshopeventinfo0?.setCategory) {
    await Workshopeventinfo0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Workshopeventinfo1 = await Workshopeventinfo.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Workshopeventinfo1?.setCategory) {
    await Workshopeventinfo1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Workshopeventinfo2 = await Workshopeventinfo.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Workshopeventinfo2?.setCategory) {
    await Workshopeventinfo2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Workshopeventinfo3 = await Workshopeventinfo.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Workshopeventinfo3?.setCategory) {
    await Workshopeventinfo3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Workshopeventinfo4 = await Workshopeventinfo.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Workshopeventinfo4?.setCategory) {
    await Workshopeventinfo4.setCategory(relatedCategory4);
  }
}

async function associateStartupemplomentWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupemploment0 = await Startupemploment.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Startupemploment0?.setCategory) {
    await Startupemploment0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupemploment1 = await Startupemploment.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Startupemploment1?.setCategory) {
    await Startupemploment1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupemploment2 = await Startupemploment.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Startupemploment2?.setCategory) {
    await Startupemploment2.setCategory(relatedCategory2);
  }

  const relatedCategory3 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupemploment3 = await Startupemploment.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Startupemploment3?.setCategory) {
    await Startupemploment3.setCategory(relatedCategory3);
  }

  const relatedCategory4 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Startupemploment4 = await Startupemploment.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Startupemploment4?.setCategory) {
    await Startupemploment4.setCategory(relatedCategory4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activegraduatedstartupinfo.bulkCreate(ActivegraduatedstartupinfoData);

    await Anualresearchrevenue.bulkCreate(AnualresearchrevenueData);

    await Bicdata.bulkCreate(BicdataData);

    await Bicfundinginfo.bulkCreate(BicfundinginfoData);

    await Bichumanresource.bulkCreate(BichumanresourceData);

    await Bicserviceofferinginfo.bulkCreate(BicserviceofferinginfoData);

    await Bicsupportinfo.bulkCreate(BicsupportinfoData);

    await Categories.bulkCreate(CategoriesData);

    await Colaborationagreement.bulkCreate(ColaborationagreementData);

    await Commities.bulkCreate(CommitiesData);

    await Coursedetailsinfo.bulkCreate(CoursedetailsinfoData);

    await Engagementevents.bulkCreate(EngagementeventsData);

    await Graduatedstartupfacilitationinfo.bulkCreate(
      GraduatedstartupfacilitationinfoData,
    );

    await Honorsandawards.bulkCreate(HonorsandawardsData);

    await Humanresource.bulkCreate(HumanresourceData);

    await Mentorshipinfo.bulkCreate(MentorshipinfoData);

    await Oricdata.bulkCreate(OricdataData);

    await Partnershipinfo.bulkCreate(PartnershipinfoData);

    await Patents.bulkCreate(PatentsData);

    await Policyadvocacy.bulkCreate(PolicyadvocacyData);

    await Researchlinks.bulkCreate(ResearchlinksData);

    await Researchpolicy.bulkCreate(ResearchpolicyData);

    await Researchproposalandgrants.bulkCreate(ResearchproposalandgrantsData);

    await Spinoffstartups.bulkCreate(SpinoffstartupsData);

    await Startupevents.bulkCreate(StartupeventsData);

    await Startupincubation.bulkCreate(StartupincubationData);

    await Startupmentoring.bulkCreate(StartupmentoringData);

    await Startuprevenue.bulkCreate(StartuprevenueData);

    await Startupsappliedforpitching.bulkCreate(StartupsappliedforpitchingData);

    await Startupsincubated.bulkCreate(StartupsincubatedData);

    await Trainingcourseinfo.bulkCreate(TrainingcourseinfoData);

    await Trainings.bulkCreate(TrainingsData);

    await University.bulkCreate(UniversityData);

    await Universityadvancedstudiesandresearchboard.bulkCreate(
      UniversityadvancedstudiesandresearchboardData,
    );

    await Visits.bulkCreate(VisitsData);

    await Workshopeventinfo.bulkCreate(WorkshopeventinfoData);

    await Startupemploment.bulkCreate(StartupemplomentData);

    await associateActivegraduatedstartupinfoWithCategory();

    await associateAnualresearchrevenueWithCategory();

    await associateBicfundinginfoWithCategory();

    await associateBichumanresourceWithCategory();

    await associateBicserviceofferinginfoWithCategory();

    await associateBicsupportinfoWithCategory();

    await associateColaborationagreementWithCategory();

    await associateCommityWithCategory();

    await associateCoursedetailsinfoWithCategory();

    await associateEngagementeventWithCategory();

    await associateGraduatedstartupfacilitationinfoWithCategory();

    await associateHonorsandawardWithCategory();

    await associateHumanresourceWithUniversity();

    await associateMentorshipinfoWithCategory();

    await associateOricdatumWithUniversity();

    await associatePartnershipinfoWithCategory();

    await associatePatentWithCategory();

    await associatePolicyadvocacyWithCategory();

    await associateResearchlinkWithCategory();

    await associateResearchpolicyWithCategory();

    await associateResearchproposalandgrantWithCategory();

    await associateSpinoffstartupWithCategory();

    await associateStartupeventWithCategory();

    await associateStartupincubationWithCategory();

    await associateStartupmentoringWithCategory();

    await associateStartuprevenueWithCategory();

    await associateStartupsappliedforpitchingWithCategory();

    await associateStartupsincubatedWithCategory();

    await associateTrainingcourseinfoWithCategory();

    await associateTrainingWithCategory();

    await associateUniversityadvancedstudiesandresearchboardWithCategory();

    await associateVisitWithCategory();

    await associateWorkshopeventinfoWithCategory();

    await associateStartupemplomentWithCategory();
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activegraduatedstartupinfo', null, {});

    await queryInterface.bulkDelete('anualresearchrevenue', null, {});

    await queryInterface.bulkDelete('bicdata', null, {});

    await queryInterface.bulkDelete('bicfundinginfo', null, {});

    await queryInterface.bulkDelete('bichumanresource', null, {});

    await queryInterface.bulkDelete('bicserviceofferinginfo', null, {});

    await queryInterface.bulkDelete('bicsupportinfo', null, {});

    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('colaborationagreement', null, {});

    await queryInterface.bulkDelete('commities', null, {});

    await queryInterface.bulkDelete('coursedetailsinfo', null, {});

    await queryInterface.bulkDelete('engagementevents', null, {});

    await queryInterface.bulkDelete(
      'graduatedstartupfacilitationinfo',
      null,
      {},
    );

    await queryInterface.bulkDelete('honorsandawards', null, {});

    await queryInterface.bulkDelete('humanresource', null, {});

    await queryInterface.bulkDelete('mentorshipinfo', null, {});

    await queryInterface.bulkDelete('oricdata', null, {});

    await queryInterface.bulkDelete('partnershipinfo', null, {});

    await queryInterface.bulkDelete('patents', null, {});

    await queryInterface.bulkDelete('policyadvocacy', null, {});

    await queryInterface.bulkDelete('researchlinks', null, {});

    await queryInterface.bulkDelete('researchpolicy', null, {});

    await queryInterface.bulkDelete('researchproposalandgrants', null, {});

    await queryInterface.bulkDelete('spinoffstartups', null, {});

    await queryInterface.bulkDelete('startupevents', null, {});

    await queryInterface.bulkDelete('startupincubation', null, {});

    await queryInterface.bulkDelete('startupmentoring', null, {});

    await queryInterface.bulkDelete('startuprevenue', null, {});

    await queryInterface.bulkDelete('startupsappliedforpitching', null, {});

    await queryInterface.bulkDelete('startupsincubated', null, {});

    await queryInterface.bulkDelete('trainingcourseinfo', null, {});

    await queryInterface.bulkDelete('trainings', null, {});

    await queryInterface.bulkDelete('university', null, {});

    await queryInterface.bulkDelete(
      'universityadvancedstudiesandresearchboard',
      null,
      {},
    );

    await queryInterface.bulkDelete('visits', null, {});

    await queryInterface.bulkDelete('workshopeventinfo', null, {});

    await queryInterface.bulkDelete('startupemploment', null, {});
  },
};
