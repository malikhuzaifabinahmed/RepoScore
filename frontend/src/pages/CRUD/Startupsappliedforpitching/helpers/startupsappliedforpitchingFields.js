const startupsappliedforpitchingFields = {
  id: { type: 'id', label: 'ID' },

  idea: {
    type: 'string',
    label: 'Idea',

    options: [{ value: 'value', label: 'value' }],
  },

  entrepreneur: {
    type: 'string',
    label: 'Entrepreneur',

    options: [{ value: 'value', label: 'value' }],
  },

  fieldarea: {
    type: 'string',
    label: 'Field area',

    options: [{ value: 'value', label: 'value' }],
  },

  educationalbackground: {
    type: 'string',
    label: 'Educational background',

    options: [{ value: 'value', label: 'value' }],
  },

  teammembers: {
    type: 'string',
    label: 'Team members',

    options: [{ value: 'value', label: 'value' }],
  },

  currentstatus: {
    type: 'string',
    label: 'Current status',

    options: [{ value: 'value', label: 'value' }],
  },

  resultremarksfromcompetition: {
    type: 'string',
    label: 'Result remarks from competition',

    options: [{ value: 'value', label: 'value' }],
  },

  availabilityoffundingseedmoney: {
    type: 'string',
    label: 'Availability of funding seed money',

    options: [{ value: 'value', label: 'value' }],
  },

  dateheld: {
    type: 'string',
    label: 'Date held',

    options: [{ value: 'value', label: 'value' }],
  },

  noofideasapplied: {
    type: 'string',
    label: 'No of ideas applied',

    options: [{ value: 'value', label: 'value' }],
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

export default startupsappliedforpitchingFields;
