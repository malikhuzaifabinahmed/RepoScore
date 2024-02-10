const patentsFields = {
  id: { type: 'id', label: 'ID' },

  leadinventorname: { type: 'string', label: 'Lead inventor name' },

  leadinventordesignation: {
    type: 'string',
    label: 'Lead inventor designation',
  },

  leadinventordepartment: { type: 'string', label: 'Lead inventor department' },

  titleofinvention: { type: 'string', label: 'Title of invention' },

  categoryofip: { type: 'string', label: 'Category of IP' },

  developmentstatus: { type: 'string', label: 'Development status' },

  keyscientificaspects: { type: 'string', label: 'Key scientific aspects' },

  commercialpartner: { type: 'string', label: 'Commercial partner' },

  patentfiledwithname: { type: 'string', label: 'Patent filed with name' },

  patentfiledwithdate: { type: 'string', label: 'Patent filed with date' },

  fieldofuse: { type: 'string', label: 'Field of use' },

  nationalinternational: { type: 'string', label: 'National or International' },

  durationofagreement: { type: 'string', label: 'Duration of agreement' },

  financialsupport: { type: 'string', label: 'Financial support' },

  previousdisclosur: { type: 'string', label: 'Previous disclosur' },

  dateoffilling: { type: 'date', label: 'Date of filling' },

  statusofnegotiation: { type: 'string', label: 'Status of negotiation' },

  licenseename: { type: 'string', label: 'Licensee name' },

  licenseeorganization: { type: 'string', label: 'Licensee organization' },

  annexpagerefno: { type: 'string', label: 'Annex page ref no' },

  remarks: { type: 'string', label: 'Remarks' },

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

export default patentsFields;
