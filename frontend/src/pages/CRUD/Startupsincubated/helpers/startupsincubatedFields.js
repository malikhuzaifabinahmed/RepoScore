const startupsincubatedFields = {
  id: { type: 'id', label: 'ID' },

  nameofstartup: {
    type: 'string',
    label: 'Name of startup',

    options: [{ value: 'value', label: 'value' }],
  },

  briefidea: {
    type: 'string',
    label: 'Brief idea',

    options: [{ value: 'value', label: 'value' }],
  },

  facultymembername: {
    type: 'string',
    label: 'Faculty member name',

    options: [{ value: 'value', label: 'value' }],
  },

  facultymemberdesignation: {
    type: 'string',
    label: 'Faculty member designation',

    options: [{ value: 'value', label: 'value' }],
  },

  facultymemberdepartment: {
    type: 'string',
    label: 'Faculty member department',

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

  stage: {
    type: 'string',
    label: 'Stage',

    options: [{ value: 'value', label: 'value' }],
  },

  incubatedsinceexpectedgraduation: {
    type: 'string',
    label: 'Incubatedsinceexpectedgraduation',

    options: [{ value: 'value', label: 'value' }],
  },

  internshipjobscreated: {
    type: 'string',
    label: 'Internship / jobs created',

    options: [{ value: 'value', label: 'value' }],
  },

  totalfacultystartups: {
    type: 'string',
    label: 'Total faculty startups',

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

export default startupsincubatedFields;
