import { Formik } from 'formik';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';
// eslint-disable-next-line no-unused-vars
import InputFormItem from 'components/FormItems/items/InputFormItem';
// eslint-disable-next-line no-unused-vars
import SwitchFormItem from 'components/FormItems/items/SwitchFormItem';
// eslint-disable-next-line no-unused-vars
import RadioFormItem from 'components/FormItems/items/RadioFormItem';
// eslint-disable-next-line no-unused-vars
import SelectFormItem from 'components/FormItems/items/SelectFormItem';
// eslint-disable-next-line no-unused-vars
import DatePickerFormItem from 'components/FormItems/items/DatePickerFormItem';
// eslint-disable-next-line no-unused-vars
import ImagesFormItem from 'components/FormItems/items/ImagesFormItem';
// eslint-disable-next-line no-unused-vars
import FilesFormItem from 'components/FormItems/items/FilesFormItem';
// eslint-disable-next-line no-unused-vars

import universityFields from 'pages/CRUD/University/helpers/universityFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const UniversityForm = (props) => {
  const {
    isEditing,
    isProfile,
    findLoading,
    saveLoading,
    record,
    onSubmit,
    onCancel,
    modal,
  } = props;

  const iniValues = () => {
    return IniValues(universityFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(universityFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(universityFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit University' : 'Add University';
  };

  const renderForm = () => (
    <Widget title={title()} collapse close>
      <Formik
        onSubmit={handleSubmit}
        initialValues={iniValues()}
        validationSchema={formValidations()}
      >
        {(form) => (
          <form onSubmit={form.handleSubmit}>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <InputFormItem
                  name={'name'}
                  schema={universityFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'province'} schema={universityFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'city'} schema={universityFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'sector'} schema={universityFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'postaladdress'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'universityheadposition'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'universityheadname'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'universityheademail'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'universityheadphonenumber'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'registrarname'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'registraremail'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'registrarphonenumber'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'registrarpaemail'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'registrarpaphonenumber'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalnumberofsanctionedfaculityposts'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalnumberoffaculty'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalnumberofphdfaculty'}
                  schema={universityFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalnumberofvacantfacultyposts'}
                  schema={universityFields}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} mt={2}>
              <Grid item>
                <Button
                  color='primary'
                  variant='contained'
                  onClick={form.handleSubmit}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color='primary'
                  variant='outlined'
                  onClick={form.handleReset}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item>
                <Button
                  color='primary'
                  variant='outlined'
                  onClick={() => onCancel()}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Widget>
  );
  if (findLoading) {
    return <Loader />;
  }
  if (isEditing && !record) {
    return <Loader />;
  }
  return renderForm();
};
export default UniversityForm;
