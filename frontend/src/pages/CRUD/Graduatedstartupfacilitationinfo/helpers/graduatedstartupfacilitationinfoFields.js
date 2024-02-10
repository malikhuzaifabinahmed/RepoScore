const graduatedstartupfacilitationinfoFields = {
  id: { type: 'id', label: 'ID' },

  keyareasoffacilitationrequestedbygraduatedstartups: {
    type: 'string',
    label: 'Key Areas of facilitation requested by graduated startups',
  },

  typeoffacilitationmentoringtrainingsprovidedtograduated: {
    type: 'string',
    label: 'Type of facilitation mentoring trainings provided to graduated',
  },

  noofgraduatedstartupsfacilitated: {
    type: 'string',
    label: 'No of graduated startups facilitated',
  },

  totalstartupsincubatedsincebicsinception: {
    type: 'string',
    label: 'Total startups incubated since BICs inception',
  },

  totalstartupsgraduatedsincebicsinception: {
    type: 'string',
    label: 'Total startups graduated since BICs inception',
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

export default graduatedstartupfacilitationinfoFields;
