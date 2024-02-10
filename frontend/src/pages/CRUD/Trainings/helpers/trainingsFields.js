const trainingsFields = {
  id: { type: 'id', label: 'ID' },

  titleoftraining: {
    type: 'string',
    label: 'Title of training',

    options: [{ value: 'value', label: 'value' }],
  },

  dateofevent: {
    type: 'date',
    label: 'Date of event',

    options: [{ value: 'value', label: 'value' }],
  },

  numberofparticipants: {
    type: 'string',
    label: 'Number of participants',

    options: [{ value: 'value', label: 'value' }],
  },

  majorfocusareaandoutcomes: {
    type: 'string',
    label: 'Major focus area and outcomes',

    options: [{ value: 'value', label: 'value' }],
  },

  audiencetype: {
    type: 'string',
    label: 'Audience type',

    options: [{ value: 'value', label: 'value' }],
  },

  organizer: {
    type: 'string',
    label: 'Organizer',

    options: [{ value: 'value', label: 'value' }],
  },

  nameoforicpersonalattended: {
    type: 'string',
    label: 'Name of ORIC personal attended',

    options: [{ value: 'value', label: 'value' }],
  },

  detailsoforicpersonnelattended: {
    type: 'string',
    label: 'Details of ORIC personnel attended',

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

export default trainingsFields;
