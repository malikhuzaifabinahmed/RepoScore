const bicfundinginfoFields = {
  id: { type: 'id', label: 'ID' },

  nameofstartup: { type: 'string', label: 'Name of startup' },

  nameoffundingagency: { type: 'string', label: 'Name of funding agency' },

  nationalorinternational: {
    type: 'string',
    label: 'National or International',
  },

  typeoffunding: { type: 'string', label: 'Type of funding' },

  amountsecured: { type: 'string', label: 'Amount secured' },

  amountutilizeddistributed: {
    type: 'string',
    label: 'Amount utilized distributed',
  },

  inkindsupportfromfundingagencyifany: {
    type: 'string',
    label: 'In kind support from funding agency (if any)',
  },

  agreementsignedwithfundingagencyifany: {
    type: 'string',
    label: 'Agreement signed with funding agency (if any) ',
  },

  recurringoronetypesupport: {
    type: 'string',
    label: 'Recurring or one type support',
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

export default bicfundinginfoFields;
