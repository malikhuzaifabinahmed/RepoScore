const researchproposalandgrantsFields = {
  id: { type: 'id', label: 'ID' },

  approvedorrequiredmodificationordifferedordisapproved: {
    type: 'string',
    label: 'Approved or required modification or differed or disapproved',
  },

  thematicarea: { type: 'string', label: 'Thematic area' },

  nameofresearch: { type: 'string', label: 'Name of research' },

  nameofpi: { type: 'string', label: 'name of PI' },

  pidesignation: { type: 'string', label: 'PI designation' },

  pidepartment: { type: 'string', label: 'PI department' },

  nameofcopi: { type: 'string', label: 'name of co PI' },

  copidesignation: { type: 'string', label: 'co PI designation' },

  copidepartment: { type: 'string', label: 'co PI department' },

  titleofresearchproposal: {
    type: 'string',
    label: 'Title of research proposal',
  },

  durationstartingandendingdate: {
    type: 'string',
    label: 'Duration starting and ending date',
  },

  totalfundingrequestedrs: {
    type: 'string',
    label: 'Total funding requested RS',
  },

  totalfundingapproved: { type: 'string', label: 'Total funding approved' },

  totalfundingreleased: { type: 'string', label: 'Total funding released' },

  collaboratingpartnerdetailsifany: {
    type: 'string',
    label: 'Collaborating partner details (if any)',
  },

  cofundingpartnerdetailsifany: {
    type: 'string',
    label: 'cofounding partner details (if any)',
  },

  nameofsponsringagency: { type: 'string', label: 'Name of sponsoring agency' },

  addressofsponsoringagency: {
    type: 'string',
    label: 'Address of sponsoring agency',
  },

  countryofsponsoringagency: {
    type: 'string',
    label: 'Country of sponsoring agency',
  },

  status: { type: 'string', label: 'Status' },

  remarks: { type: 'string', label: 'Remarks' },

  relatedinformation: { type: 'string', label: 'Related information' },

  keyprojectdeliverables: { type: 'string', label: 'Key project deliverables' },

  oricoverheadinapprovedfunding: {
    type: 'string',
    label: 'ORIC overhead in approved funding',
  },

  dateofcontract: { type: 'date', label: 'Date of contract' },

  dateofapproval: { type: 'date', label: 'Date of approval' },

  dateofprojectcompletion: {
    type: 'date',
    label: 'Date of project completion',
  },

  totalfundingutilized: { type: 'string', label: 'Total funding utilized' },

  approved: { type: 'boolean', label: 'Approved' },

  dateofproposalsubmission: {
    type: 'date',
    label: 'Date of proposal submission',
  },

  dateofreview: { type: 'date', label: 'Date of review' },

  statusofirbmeeting: { type: 'string', label: 'Status of IRB meeting' },

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

export default researchproposalandgrantsFields;
