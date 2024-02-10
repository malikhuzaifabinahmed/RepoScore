const honorsandawardsFields = {
  id: { type: 'id', label: 'ID' },

  titleofaward: { type: 'string', label: 'Title of award' },

  nameofawardingorganization: {
    type: 'string',
    label: 'Name of awarding organization',
  },

  contactsofawardingorganization: {
    type: 'string',
    label: 'Contacts of awarding organization',
  },

  briefdetailsofworkhonored: {
    type: 'string',
    label: 'Brief details of work honored',
  },

  prizeamount: { type: 'string', label: 'Prize amount' },

  awardwinnername: { type: 'string', label: 'Award winner name' },

  awardwinnerdesignation: { type: 'string', label: 'Award winner designation' },

  awardwinnerdepartment: { type: 'string', label: 'Award winner department' },

  remarks: { type: 'string', label: 'Remarks' },

  annexpagerefno: { type: 'int', label: 'Annex page ref no' },

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

export default honorsandawardsFields;
