const trainingcourseinfoFields = {
  id: { type: 'id', label: 'ID' },

  nameofcourse: {
    type: 'string',
    label: 'Name of course',

    options: [{ value: 'value', label: 'value' }],
  },

  typeofcourse: {
    type: 'string',
    label: 'Type of course',

    options: [{ value: 'value', label: 'value' }],
  },

  leveloffered: {
    type: 'string',
    label: 'Level offered',

    options: [{ value: 'value', label: 'value' }],
  },

  majorareascovered: {
    type: 'string',
    label: 'Major areas covered',

    options: [{ value: 'value', label: 'value' }],
  },

  keylearningoutcomes: {
    type: 'string',
    label: 'Key learning outcomes',

    options: [{ value: 'value', label: 'value' }],
  },

  noofstartupscompletedthecourse: {
    type: 'string',
    label: 'No of startups completed the course',

    options: [{ value: 'value', label: 'value' }],
  },

  coursedevelopment: {
    type: 'string',
    label: 'Course development',

    options: [{ value: 'value', label: 'value' }],
  },

  ifoutsourcednameofcourseoffered: {
    type: 'string',
    label: 'If outsourced name of course offered',

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

export default trainingcourseinfoFields;
