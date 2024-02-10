const researchpolicyFields = {
  id: { type: 'id', label: 'ID' },

  titleofresearchpolicy: { type: 'string', label: 'Title of research policy' },

  researchpolicyreferencenumber: {
    type: 'string',
    label: 'Research policy reference number',
  },

  dateofapproval: { type: 'date', label: 'Date of approval' },

  approvedby: { type: 'string', label: 'Approved by' },

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

export default researchpolicyFields;
