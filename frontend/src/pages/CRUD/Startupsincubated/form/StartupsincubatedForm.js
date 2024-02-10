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

import startupsincubatedFields from 'pages/CRUD/Startupsincubated/helpers/startupsincubatedFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const StartupsincubatedForm = (props) => {
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
    return IniValues(startupsincubatedFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(startupsincubatedFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      startupsincubatedFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Startupsincubated' : 'Add Startupsincubated';
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
                  name={'nameofstartup'}
                  schema={startupsincubatedFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'briefidea'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'facultymembername'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'facultymemberdesignation'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'facultymemberdepartment'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'sectorfield'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'seedfundingsecuredifany'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'stage'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'incubatedsinceexpectedgraduation'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'internshipjobscreated'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalfacultystartups'}
                  schema={startupsincubatedFields}
                />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={startupsincubatedFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={startupsincubatedFields}
                  path={'startupsincubated/documentaryevidence'}
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
export default StartupsincubatedForm;
