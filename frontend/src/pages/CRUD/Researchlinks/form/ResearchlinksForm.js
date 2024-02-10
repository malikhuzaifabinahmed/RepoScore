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

import researchlinksFields from 'pages/CRUD/Researchlinks/helpers/researchlinksFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const ResearchlinksForm = (props) => {
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
    return IniValues(researchlinksFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(researchlinksFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(researchlinksFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Researchlinks' : 'Add Researchlinks';
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
                  name={'typeoflinkage'}
                  schema={researchlinksFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'region'} schema={researchlinksFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'namehostinstitution'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'addresshostinstitution'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'countryofhostinstitution'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameofcollaboratingpartners'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'addressofcollaboratingpartners'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'countryofcollaboratingpartners'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'fieldofstudy'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'researchborderareas'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'scopeofcollaboration'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'linkageestablishmentdate'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'salientfeaturesoflinkage'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'anexpagereference'}
                  schema={researchlinksFields}
                />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={researchlinksFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={researchlinksFields}
                  path={'researchlinks/documentaryevidence'}
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
export default ResearchlinksForm;
