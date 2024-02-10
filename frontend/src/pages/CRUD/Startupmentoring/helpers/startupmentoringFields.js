const startupmentoringFields = {
  id: { type: 'id', label: 'ID' },

  nameofmentor: {
    type: 'string',
    label: 'Name of mentor',

    options: [{ value: 'value', label: 'value' }],
  },

  designation: {
    type: 'string',
    label: 'Designation',

    options: [{ value: 'value', label: 'value' }],
  },

  fieldarea: {
    type: 'string',
    label: 'Field area',

    options: [{ value: 'value', label: 'value' }],
  },

  noofmentoringlecturesprovided: {
    type: 'string',
    label: 'No. of mentoring lectures provided',

    options: [{ value: 'value', label: 'value' }],
  },

  noofstartupsfacilitated: {
    type: 'string',
    label: 'No of startups facilitated',

    options: [{ value: 'value', label: 'value' }],
  },

  costpermentoringhourchargedifany: {
    type: 'string',
    label: 'Cost per mentoring hour charged (if any)',

    options: [{ value: 'value', label: 'value' }],
  },

  totalmentoringsessions: {
    type: 'string',
    label: 'Total mentoring sessions',

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

export default startupmentoringFields;
