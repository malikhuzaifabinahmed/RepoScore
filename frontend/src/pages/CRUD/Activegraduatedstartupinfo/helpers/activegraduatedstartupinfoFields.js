const activegraduatedstartupinfoFields = {
  id: { type: 'id', label: 'ID' },

  nameofgraduatedstartup: {
    type: 'string',
    label: 'Name of graduated startup',
  },

  companybriefidea: { type: 'string', label: 'Company brief idea' },

  dateofgraduation: { type: 'date', label: 'Date of graduation' },

  currentstatusactiveregisteredconcernaccelerated: {
    type: 'string',
    label: 'Current status active registered concern accelerated',
  },

  networthofstartupaverageyearlyrevenue: {
    type: 'string',
    label: 'Net worth of startup average yearly revenue',
  },

  ipoacquisitionamalgamationifany: {
    type: 'string',
    label: 'IPO acquisition amalgamation (if any)',
  },

  noofemployeeswithstartup: {
    type: 'string',
    label: 'No. of employees with startup',
  },

  survivalrateofgraduatedstartups: {
    type: 'string',
    label: 'Survival rate of graduated startups',
  },

  totalstartupsactiveaftergraduation: {
    type: 'string',
    label: 'total startups active after graduation',
  },

  totalstartupshavingipoacquisition: {
    type: 'string',
    label: 'total startups having IPO acquisition',
  },

  categoryId: {
    type: 'relation_one',
    label: 'Category Id',

    options: [{ value: 'value', label: 'value' }],
  },

  documentaryevidence: {
    type: 'files',
    label: 'Documentary evidence',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default activegraduatedstartupinfoFields;
