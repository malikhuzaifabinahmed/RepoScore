const humanresourceFields = {
  id: { type: 'id', label: 'ID' },

  name: { type: 'string', label: 'Name' },

  position: { type: 'string', label: 'Position' },

  officephonenumber: { type: 'string', label: 'Office phone number' },

  role: { type: 'string', label: 'Role' },

  emailid: { type: 'string', label: 'email id' },

  qualificationlevel: { type: 'string', label: 'Qualification level' },

  qualificationtitle: { type: 'string', label: 'Qualification title' },

  fieldofstudy: { type: 'string', label: 'Field of study' },

  cnic: { type: 'string', label: 'CNIC' },

  dateofappointment: { type: 'date', label: 'Date of appointment' },

  periodupto: { type: 'int', label: 'period up to' },

  totalexperience: { type: 'int', label: 'Total experience' },

  nonacademicexperience: { type: 'int', label: 'Nonacademic experience' },

  universityId: {
    type: 'relation_one',
    label: 'University Id',

    options: [{ value: 'value', label: 'value' }],
  },

  documentaryevidence: {
    type: 'files',
    label: 'Documentary evidence',

    options: [{ value: 'value', label: 'value' }],
  },
};

export default humanresourceFields;
