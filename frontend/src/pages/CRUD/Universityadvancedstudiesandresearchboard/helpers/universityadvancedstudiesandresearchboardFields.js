const universityadvancedstudiesandresearchboardFields = {
  id: { type: 'id', label: 'ID' },

  nameofmemberdevelopedwith: {
    type: 'string',
    label: 'Name of member developed with',

    options: [{ value: 'value', label: 'value' }],
  },

  executiondate: {
    type: 'date',
    label: 'Execution date',

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

export default universityadvancedstudiesandresearchboardFields;
