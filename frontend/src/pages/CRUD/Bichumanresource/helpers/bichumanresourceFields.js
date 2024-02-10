const bichumanresourceFields = {
  id: { type: 'id', label: 'ID' },

  isbicsupportstaff: { type: 'boolean', label: 'Is BIC support staff' },

  position: { type: 'string', label: 'Position' },

  fulltimeparttime: { type: 'string', label: 'Full time part time' },

  name: { type: 'string', label: 'Name' },

  officephonenumber: { type: 'string', label: 'Office phone number' },

  mobilenumber: { type: 'string', label: 'Mobile number' },

  emailid: { type: 'string', label: 'Email id' },

  qualificationlevel: { type: 'string', label: 'Qualification level' },

  qualificationtitle: { type: 'string', label: 'Qualification title' },

  fieldofstudy: { type: 'string', label: 'Field of study' },

  cnic: { type: 'string', label: 'CNIC' },

  dateofappointment: { type: 'date', label: 'Date of appointment' },

  periodupto: { type: 'string', label: 'Period up to' },

  totalexperience: { type: 'string', label: 'Total experience' },

  nonacademiaexperience: { type: 'string', label: 'Non academia experience' },

  notificationofficeorderjoiningreportandcv: {
    type: 'string',
    label: 'Notification office order joining report and cv',
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

export default bichumanresourceFields;
