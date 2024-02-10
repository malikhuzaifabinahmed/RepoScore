const bicsupportinfoFields = {
  id: { type: 'id', label: 'ID' },

  levelofsupportfinancialinkind: {
    type: 'string',
    label: 'Level of support financial in kind',
  },

  areafacilitatedthroughsupport: {
    type: 'string',
    label: 'Area facilitated through support',
  },

  financialinkindsupportextendedforactivity: {
    type: 'string',
    label: 'Financial in kind support extended for activity',
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

export default bicsupportinfoFields;
