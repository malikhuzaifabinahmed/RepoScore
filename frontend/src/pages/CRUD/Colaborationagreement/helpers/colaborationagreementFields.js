const colaborationagreementFields = {
  id: { type: 'id', label: 'ID' },

  typeoflinkages: { type: 'string', label: 'Type of linkages' },

  nationalinternational: { type: 'string', label: 'National or International' },

  hostcountryname: { type: 'string', label: 'Host country name' },

  hostcountryaddress: { type: 'string', label: 'Host country address' },

  startDate: { type: 'date', label: 'Start Date' },

  endDate: {
    type: 'date',
    label: 'End Date',

    options: [{ value: 'value', label: 'value' }],
  },

  keyinitiativestobeundertaken: {
    type: 'string',
    label: 'Key initiatives to be undertaken',
  },

  field: { type: 'string', label: 'Field' },

  scopeofcollaboration: { type: 'string', label: 'Scope of collaboration' },

  dateoflinkageestablishment: {
    type: 'date',
    label: 'Date of linkage establishment',
  },

  financialsupport: { type: 'string', label: 'Financial support' },

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

export default colaborationagreementFields;
