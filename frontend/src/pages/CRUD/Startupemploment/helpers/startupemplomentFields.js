const startupemplomentFields = {
  id: { type: 'id', label: 'ID' },

  categoryId: {
    type: 'relation_one',
    label: 'Category Id',

    options: [{ value: 'value', label: 'value' }],
  },

  nameofstartup: {
    type: 'string',
    label: 'Name of startup',

    options: [{ value: 'value', label: 'value' }],
  },

  startupfacultymembername: {
    type: 'string',
    label: 'Startup faculty member name',

    options: [{ value: 'value', label: 'value' }],
  },

  designationdepartment: {
    type: 'string',
    label: 'Designation department',

    options: [{ value: 'value', label: 'value' }],
  },

  startupstatusincubatedgraduated: {
    type: 'string',
    label: 'Startup status incubated graduated',

    options: [{ value: 'value', label: 'value' }],
  },

  employeename: {
    type: 'string',
    label: 'Employee name',

    options: [{ value: 'value', label: 'value' }],
  },

  employmenttype: {
    type: 'string',
    label: 'Employment type',

    options: [{ value: 'value', label: 'value' }],
  },

  salarystipendhonorarium: {
    type: 'string',
    label: 'Salary stipend honorarium',

    options: [{ value: 'value', label: 'value' }],
  },

  employeesince: {
    type: 'string',
    label: 'Employee since',

    options: [{ value: 'value', label: 'value' }],
  },

  documentaryevidence: {
    type: 'files',
    label: 'Documentary evidence',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default startupemplomentFields;
