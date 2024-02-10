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

import patentsFields from 'pages/CRUD/Patents/helpers/patentsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const PatentsForm = (props) => {
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
    return IniValues(patentsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(patentsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(patentsFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Patents' : 'Add Patents';
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
                  name={'leadinventorname'}
                  schema={patentsFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'leadinventordesignation'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'leadinventordepartment'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'titleofinvention'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'categoryofip'} schema={patentsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'developmentstatus'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'keyscientificaspects'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'commercialpartner'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'patentfiledwithname'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'patentfiledwithdate'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'fieldofuse'} schema={patentsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nationalinternational'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'durationofagreement'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'financialsupport'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'previousdisclosur'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateoffilling'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'statusofnegotiation'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'licenseename'} schema={patentsFields} />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'licenseeorganization'}
                  schema={patentsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'annexpagerefno'} schema={patentsFields} />
              </Grid>

              <Grid item>
                <InputFormItem name={'remarks'} schema={patentsFields} />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={patentsFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={patentsFields}
                  path={'patents/documentaryevidence'}
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
export default PatentsForm;
