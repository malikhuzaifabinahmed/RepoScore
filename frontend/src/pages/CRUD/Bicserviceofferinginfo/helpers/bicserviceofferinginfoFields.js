const bicserviceofferinginfoFields = {
  id: { type: 'id', label: 'ID' },

  natureofserviceofferedsessionheld: {
    type: 'string',
    label: 'Nature of service offered session held',
  },

  nameofserviceprovider: { type: 'string', label: 'Name of service provider' },

  backgroundandexpertise: { type: 'string', label: 'Background and expertise' },

  localinternational: { type: 'string', label: 'local or International' },

  noofstartupsfacilitated: {
    type: 'string',
    label: 'No. of startups facilitated',
  },

  totalnosessionsheld: { type: 'string', label: 'total no. sessions held' },

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

export default bicserviceofferinginfoFields;
