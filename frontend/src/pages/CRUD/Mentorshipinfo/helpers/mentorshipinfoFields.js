const mentorshipinfoFields = {
  id: { type: 'id', label: 'ID' },

  nameofmentor: { type: 'string', label: 'Name of mentor' },

  fieldareasofexpertise: { type: 'string', label: 'Field areas of expertise' },

  nationalinternational: { type: 'string', label: 'National or international' },

  mentoringsessionsheldatbicduringtheyear: {
    type: 'string',
    label: 'Mentoring sessions held at BIC during the year',
  },

  noofstartupsfacilitatedthroughsessions: {
    type: 'string',
    label: 'No of startups facilitated through sessions',
  },

  ifcorporatebodymousigningdateifany: {
    type: 'date',
    label: 'if corporate body mou signing date (ifany)',
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

export default mentorshipinfoFields;
