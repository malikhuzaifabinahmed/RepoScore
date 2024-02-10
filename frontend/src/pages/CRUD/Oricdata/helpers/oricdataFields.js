const oricdataFields = {
  id: { type: 'id', label: 'ID' },

  oricbankaccounttitle: { type: 'string', label: 'ORIC bank account title' },

  oricbankaccountnumber: { type: 'string', label: 'ORIC bank account number' },

  oriccentralizedemailid: {
    type: 'string',
    label: 'ORIC centralized email id',
  },

  oricpostaladdress: { type: 'string', label: 'ORIC postal address' },

  shortlinkfororicwebsite: {
    type: 'string',
    label: 'Short link for ORIC website',
  },

  nameoffocalpersonmanagingwebpage: {
    type: 'string',
    label: 'Name of focal person managing webpage',
  },

  phonenumberoffocalpersonmanagingwebpage: {
    type: 'string',
    label: 'Phone number of focal person managing webpage',
  },

  tiscphonenumber: { type: 'string', label: 'TISC phone number' },

  tiscemailid: { type: 'string', label: 'TISC email id' },

  universityId: { type: 'relation_one', label: 'University Id' },

  documentaryevidence: {
    type: 'files',
    label: 'Documentary evidence',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default oricdataFields;
