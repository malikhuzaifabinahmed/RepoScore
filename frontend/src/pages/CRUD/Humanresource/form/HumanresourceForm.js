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

import humanresourceFields from 'pages/CRUD/Humanresource/helpers/humanresourceFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import UniversitySelectItem from 'pages/CRUD/University/helpers/UniversitySelectItem';

const HumanresourceForm = (props) => {
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
    return IniValues(humanresourceFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(humanresourceFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(humanresourceFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Humanresource' : 'Add Humanresource';
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
                  schema={humanresourceFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'position'} schema={humanresourceFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'officephonenumber'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'role'} schema={humanresourceFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'emailid'} schema={humanresourceFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'qualificationlevel'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'qualificationtitle'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'fieldofstudy'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'cnic'} schema={humanresourceFields} />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofappointment'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'periodupto'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalexperience'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nonacademicexperience'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <UniversitySelectItem
                  name={'universityId'}
                  schema={humanresourceFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={humanresourceFields}
                  path={'humanresource/documentaryevidence'}
                  fileProps={{
                    size: undefined,
                    formats: undefined,
                  }}
                  max={undefined}
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
export default HumanresourceForm;
