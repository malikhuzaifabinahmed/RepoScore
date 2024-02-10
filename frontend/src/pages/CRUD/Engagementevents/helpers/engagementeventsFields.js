const engagementeventsFields = {
  id: { type: 'id', label: 'ID' },

  titleofevent: { type: 'string', label: 'Title of event' },

  componentofcommunityinvolved: {
    type: 'string',
    label: 'Component of community involved',
  },

  audiance: { type: 'string', label: 'Audiance' },

  outcome: { type: 'string', label: 'Outcome' },

  collaborationdeveloped: { type: 'string', label: 'Collaboration developed' },

  dateofevent: { type: 'date', label: 'Date of event' },

  nameofcollaboratingpartners: {
    type: 'string',
    label: 'Name of collaborating partners',
  },

  nameofsponsoringagency: {
    type: 'string',
    label: 'Name of sponsoring agency',
  },

  willbeparticipatedorarranged: {
    type: 'string',
    label: 'Will be participated or arranged',
  },

  remarks: { type: 'string', label: 'Remarks' },

  anexpageno: { type: 'string', label: 'Anex page no' },

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

export default engagementeventsFields;
