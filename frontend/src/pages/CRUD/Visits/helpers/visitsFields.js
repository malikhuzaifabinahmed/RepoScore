const visitsFields = {
  id: { type: 'id', label: 'ID' },

  nameofvisits: {
    type: 'string',
    label: 'Name of visits',

    options: [{ value: 'value', label: 'value' }],
  },

  dateofvisit: {
    type: 'string',
    label: 'Date of visit',

    options: [{ value: 'value', label: 'value' }],
  },

  agendaofvisit: {
    type: 'string',
    label: 'Agenda of visit',

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

export default visitsFields;
