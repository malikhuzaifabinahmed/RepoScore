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

import bichumanresourceFields from 'pages/CRUD/Bichumanresource/helpers/bichumanresourceFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const BichumanresourceForm = (props) => {
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
    return IniValues(bichumanresourceFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(bichumanresourceFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      bichumanresourceFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Bichumanresource' : 'Add Bichumanresource';
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
                <SwitchFormItem
                  name={'isbicsupportstaff'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'position'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'fulltimeparttime'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'name'} schema={bichumanresourceFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'officephonenumber'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'mobilenumber'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'emailid'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'qualificationlevel'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'qualificationtitle'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'fieldofstudy'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'cnic'} schema={bichumanresourceFields} />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofappointment'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'periodupto'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalexperience'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nonacademiaexperience'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'notificationofficeorderjoiningreportandcv'}
                  schema={bichumanresourceFields}
                />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={bichumanresourceFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={bichumanresourceFields}
                  path={'bichumanresource/documentaryevidence'}
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
export default BichumanresourceForm;
