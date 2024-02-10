const workshopeventinfoFields = {
  id: { type: 'id', label: 'ID' },

  title: {
    type: 'string',
    label: 'Title',

    options: [{ value: 'value', label: 'value' }],
  },

  dateheld: {
    type: 'date',
    label: 'Date held',

    options: [{ value: 'value', label: 'value' }],
  },

  venue: {
    type: 'string',
    label: 'Venue',

    options: [{ value: 'value', label: 'value' }],
  },

  fieldthematicarea: {
    type: 'string',
    label: 'Field thematic area',

    options: [{ value: 'value', label: 'value' }],
  },

  panelistmentoradvisorname: {
    type: 'string',
    label: 'Panelist mentor advisor name',

    options: [{ value: 'value', label: 'value' }],
  },

  panelistmentoradvisordesignation: {
    type: 'string',
    label: 'Panelist mentor advisor designation',

    options: [{ value: 'value', label: 'value' }],
  },

  arrangedby: {
    type: 'string',
    label: 'Arranged by',

    options: [{ value: 'value', label: 'value' }],
  },

  facultystudent: {
    type: 'string',
    label: 'Faculty student',

    options: [{ value: 'value', label: 'value' }],
  },

  noofparticipants: {
    type: 'string',
    label: 'No of participants',

    options: [{ value: 'value', label: 'value' }],
  },

  totalnoeventsheld: {
    type: 'string',
    label: 'Total no events held',

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

export default workshopeventinfoFields;
