const startuprevenueFields = {
  id: { type: 'id', label: 'ID' },

  nameofstartup: {
    type: 'string',
    label: 'Name of startup',

    options: [{ value: 'value', label: 'value' }],
  },

  facultymembernamedesignationdepartment: {
    type: 'string',
    label: 'Faculty member name designation department',

    options: [{ value: 'value', label: 'value' }],
  },

  currentstatus: {
    type: 'string',
    label: 'Current status',

    options: [{ value: 'value', label: 'value' }],
  },

  incubatedsinceandexpectedgraduation: {
    type: 'string',
    label: 'Incubated since and expected graduation',

    options: [{ value: 'value', label: 'value' }],
  },

  revenuegenerated: {
    type: 'string',
    label: 'Revenue generated',

    options: [{ value: 'value', label: 'value' }],
  },

  totalmonthsinincubation: {
    type: 'string',
    label: 'Total months in incubation',

    options: [{ value: 'value', label: 'value' }],
  },

  averagerevenue: {
    type: 'string',
    label: 'Average revenue',

    options: [{ value: 'value', label: 'value' }],
  },

  sharingmechanismbetweenbicheiandstartup: {
    type: 'string',
    label: 'Sharing mechanism between BIC, HEC and startup',

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

export default startuprevenueFields;
