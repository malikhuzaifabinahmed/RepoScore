const coursedetailsinfoFields = {
  id: { type: 'id', label: 'ID' },

  titleofcourse: { type: 'string', label: 'Title of course' },

  field: { type: 'string', label: 'Field' },

  level: { type: 'string', label: 'Level' },

  credithours: { type: 'string', label: 'Credit hours.' },

  totalmodules: { type: 'string', label: 'Total modules' },

  optionalcompulsory: { type: 'string', label: 'Optional compulsory' },

  departmentsschoolsofferingthecourse: {
    type: 'string',
    label: 'Departments schools offering the course',
  },

  learningoutcomes: { type: 'string', label: 'Learning outcomes' },

  totalnoofcoursesoffered: {
    type: 'string',
    label: 'Total no. of courses offered',
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

export default coursedetailsinfoFields;
