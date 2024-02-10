const partnershipinfoFields = {
  id: { type: 'id', label: 'ID' },

  nameofpartneringorganization: {
    type: 'string',
    label: 'Name of partnering organization',
  },

  nationalinternational: { type: 'string', label: 'National or International' },

  fieldareaofexpertise: { type: 'string', label: 'Field area of expertise' },

  typeoflink: { type: 'string', label: 'Type of link' },

  dateofsigning: { type: 'date', label: 'Date of signing' },

  majorareasofcooperationmodalities: {
    type: 'string',
    label: 'Major areas of cooperation modalities',
  },

  keyoutcomesfromlinks: { type: 'string', label: 'Key outcomes from links' },

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

export default partnershipinfoFields;
