const commitiesFields = {
  id: { type: 'id', label: 'ID' },

  name: { type: 'string', label: 'Name' },

  designation: { type: 'string', label: 'Designation' },

  parentinstitutionorganization: {
    type: 'string',
    label: 'Parent institution organization',
  },

  sectorfield: { type: 'string', label: 'Sector field' },

  rolestatusincommittee: { type: 'string', label: 'Role status in committee' },

  membersince: { type: 'date', label: 'Member since' },

  notified: { type: 'string', label: 'Notified' },

  noofmembers: { type: 'int', label: 'No. of members' },

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

export default commitiesFields;
