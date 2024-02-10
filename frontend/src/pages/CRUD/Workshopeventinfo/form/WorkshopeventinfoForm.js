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

import workshopeventinfoFields from 'pages/CRUD/Workshopeventinfo/helpers/workshopeventinfoFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const WorkshopeventinfoForm = (props) => {
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
    return IniValues(workshopeventinfoFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(workshopeventinfoFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      workshopeventinfoFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Workshopeventinfo' : 'Add Workshopeventinfo';
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
                  name={'title'}
                  schema={workshopeventinfoFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateheld'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'venue'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'fieldthematicarea'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'panelistmentoradvisorname'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'panelistmentoradvisordesignation'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'arrangedby'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'facultystudent'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'noofparticipants'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalnoeventsheld'}
                  schema={workshopeventinfoFields}
                />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={workshopeventinfoFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={workshopeventinfoFields}
                  path={'workshopeventinfo/documentaryevidence'}
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
export default WorkshopeventinfoForm;
