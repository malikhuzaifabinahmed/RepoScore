const spinoffstartupsFields = {
  id: { type: 'id', label: 'ID' },

  nameofstartup: { type: 'string', label: 'Name of startup' },

  briefideabackingresearchsectorfield: {
    type: 'string',
    label: 'Brief idea backing research sector field',
  },

  facultymembernamedesignationdepartment: {
    type: 'string',
    label: 'faculty member name designation department',
  },

  ipstatus: { type: 'string', label: 'IP status' },

  nameofspinoff: { type: 'string', label: 'Name of spinoff' },

  stage: { type: 'string', label: 'Stage' },

  licenseagreementsignedifany: {
    type: 'string',
    label: 'license agreement signed (if any)',
  },

  fundingsources: { type: 'string', label: 'Funding sources' },

  totalfacultystartups: { type: 'int', label: 'total Faculty startups' },

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

export default spinoffstartupsFields;
