const policyadvocacyFields = {
  id: { type: 'id', label: 'ID' },

  nameofgovernmentbodypresented: {
    type: 'string',
    label: 'Name of government body presented',
  },

  dateofpresentation: { type: 'date', label: 'Date of presentation' },

  nameofpi: { type: 'string', label: 'Name of PI' },

  pidesignation: { type: 'string', label: 'PI designation' },

  pidepartment: { type: 'string', label: 'PI department' },

  areaadvocated: { type: 'string', label: 'Area advocated' },

  description: { type: 'string', label: 'Description' },

  namecoalitionpartner: { type: 'string', label: 'Name coalition partner' },

  issueverification: { type: 'string', label: 'Issue verification' },

  backingresearchstatus: { type: 'string', label: 'Backing research status' },

  advocacytoolsadopted: { type: 'string', label: 'Advocacy tools adopted' },

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

export default policyadvocacyFields;
