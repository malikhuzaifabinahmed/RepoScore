const startupincubationFields = {
  id: { type: 'id', label: 'ID' },

  nameofstartup: {
    type: 'string',
    label: 'Name of Startup',

    options: [{ value: 'value', label: 'value' }],
  },

  idea: {
    type: 'string',
    label: 'Idea',

    options: [{ value: 'value', label: 'value' }],
  },

  teammembers: {
    type: 'string',
    label: 'Team members',

    options: [{ value: 'value', label: 'value' }],
  },

  sectorfield: {
    type: 'string',
    label: 'Sector field',

    options: [{ value: 'value', label: 'value' }],
  },

  seedfundingsecuredifany: {
    type: 'string',
    label: 'Seed funding secured (if any)',

    options: [{ value: 'value', label: 'value' }],
  },

  incubatedsince: {
    type: 'string',
    label: 'Incubated since',

    options: [{ value: 'value', label: 'value' }],
  },

  expectedgraduation: {
    type: 'string',
    label: 'Expected Graduation',

    options: [{ value: 'value', label: 'value' }],
  },

  internshipjobsprovidedviastartup: {
    type: 'string',
    label: 'Internship jobs provided via startup',

    options: [{ value: 'value', label: 'value' }],
  },

  totalslots: {
    type: 'string',
    label: 'Total slots',

    options: [{ value: 'value', label: 'value' }],
  },

  occupiedslots: {
    type: 'string',
    label: 'Occupied slots',

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

export default startupincubationFields;
