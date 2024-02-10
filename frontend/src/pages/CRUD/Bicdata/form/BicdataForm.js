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

import bicdataFields from 'pages/CRUD/Bicdata/helpers/bicdataFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const BicdataForm = (props) => {
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
    return IniValues(bicdataFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(bicdataFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(bicdataFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Bicdata' : 'Add Bicdata';
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
                  name={'universityname'}
                  schema={bicdataFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'oricbankaccounttitle'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'oricbankaccountnumber'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'ORICCentralizedEmailId'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'ORICPostalAddress'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'shortlinkforORICWebsite'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameoffocalpersonmanagingwebpage'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'phonenumberoffocalpersonmanagingwebpage'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'tiscphonenumber'}
                  schema={bicdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'tiscemailid'} schema={bicdataFields} />
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
export default BicdataForm;
