const researchlinksFields = {
  id: { type: 'id', label: 'ID' },

  typeoflinkage: { type: 'string', label: 'Type of linkage' },

  region: { type: 'string', label: 'Region' },

  namehostinstitution: { type: 'string', label: 'Name host institution' },

  addresshostinstitution: { type: 'string', label: 'Address host institution' },

  countryofhostinstitution: {
    type: 'string',
    label: 'Country of host institution',
  },

  nameofcollaboratingpartners: {
    type: 'string',
    label: 'Name of collaborating partners',
  },

  addressofcollaboratingpartners: {
    type: 'string',
    label: 'Address of collaborating partners',
  },

  countryofcollaboratingpartners: {
    type: 'string',
    label: 'Country of collaborating partners',
  },

  fieldofstudy: { type: 'string', label: 'Field of study' },

  researchborderareas: { type: 'string', label: 'Research border areas' },

  scopeofcollaboration: { type: 'string', label: 'Scope of collaboration' },

  linkageestablishmentdate: {
    type: 'string',
    label: 'Linkage establishment date',
  },

  salientfeaturesoflinkage: {
    type: 'string',
    label: 'Salient features of linkage',
  },

  anexpagereference: { type: 'string', label: 'Anex page reference' },

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

export default researchlinksFields;
