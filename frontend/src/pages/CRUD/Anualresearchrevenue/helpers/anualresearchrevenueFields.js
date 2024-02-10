const anualresearchrevenueFields = {
  id: { type: 'id', label: 'ID' },

  researchgrantname: { type: 'string', label: 'Research grant name' },

  remarks: { type: 'string', label: 'Remarks' },

  anexpagerefno: { type: 'int', label: 'Anex page ref no.' },

  oricoverheadinreleasedfunding: {
    type: 'string',
    label: 'ORIC overhead in released funding',
  },

  nationalorinternational: {
    type: 'string',
    label: 'National or international',
  },

  titleofresearchproposal: {
    type: 'string',
    label: 'Title of research proposal',
  },

  detailsofpi: { type: 'string', label: 'Details of PI' },

  isjointventure: { type: 'string', label: 'Is joint venture' },

  nameofjointventure: { type: 'string', label: 'Name of joint venture' },

  detailsofjointventure: { type: 'string', label: 'Details of joint venture' },

  startDate: { type: 'date', label: 'Start Date' },

  totalfundingapproved: { type: 'string', label: 'Total funding approved' },

  oricoverheadinapprovedfunding: {
    type: 'string',
    label: 'ORIC overhead in approved funding',
  },

  nameofpi: { type: 'string', label: 'Name of PI' },

  categoryId: {
    type: 'relation_one',
    label: 'Category Id',

    options: [{ value: 'value', label: 'value' }],
  },

  documentaryevidence: {
    type: 'files',
    label: 'Documentary Evidence',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default anualresearchrevenueFields;
