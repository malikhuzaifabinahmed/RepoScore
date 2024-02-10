const startupeventsFields = {
  id: { type: 'id', label: 'ID' },

  categoryId: {
    type: 'relation_one',
    label: 'Category Id',

    options: [{ value: 'value', label: 'value' }],
  },

  nameofevent: {
    type: 'string',
    label: 'Name of event',

    options: [{ value: 'value', label: 'value' }],
  },

  dateheld: {
    type: 'date',
    label: 'Date held',

    options: [{ value: 'value', label: 'value' }],
  },

  panelistdetails: {
    type: 'string',
    label: 'Panelist details',

    options: [{ value: 'value', label: 'value' }],
  },

  ideasapplied: {
    type: 'string',
    label: 'Ideas applied',

    options: [{ value: 'value', label: 'value' }],
  },

  ideasselected: {
    type: 'string',
    label: 'Ideas selected',

    options: [{ value: 'value', label: 'value' }],
  },

  winnersdetails: {
    type: 'string',
    label: 'Winners details',

    options: [{ value: 'value', label: 'value' }],
  },

  prizefundingamount: {
    type: 'string',
    label: 'Prize funding amount',

    options: [{ value: 'value', label: 'value' }],
  },

  eventfundingsourcessponsors: {
    type: 'string',
    label: 'Event funding sources sponsors',

    options: [{ value: 'value', label: 'value' }],
  },

  noofideasapplied: {
    type: 'string',
    label: 'No. of ideas applied',

    options: [{ value: 'value', label: 'value' }],
  },

  documentaryevidence: {
    type: 'files',
    label: 'Documentaryevidence',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default startupeventsFields;
