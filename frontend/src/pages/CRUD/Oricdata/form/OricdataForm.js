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

import oricdataFields from 'pages/CRUD/Oricdata/helpers/oricdataFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import UniversitySelectItem from 'pages/CRUD/University/helpers/UniversitySelectItem';

const OricdataForm = (props) => {
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
    return IniValues(oricdataFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(oricdataFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(oricdataFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Oricdata' : 'Add Oricdata';
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
                  name={'oricbankaccounttitle'}
                  schema={oricdataFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'oricbankaccountnumber'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'oriccentralizedemailid'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'oricpostaladdress'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'shortlinkfororicwebsite'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameoffocalpersonmanagingwebpage'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'phonenumberoffocalpersonmanagingwebpage'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'tiscphonenumber'}
                  schema={oricdataFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem name={'tiscemailid'} schema={oricdataFields} />
              </Grid>

              <Grid item>
                <UniversitySelectItem
                  name={'universityId'}
                  schema={oricdataFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={oricdataFields}
                  path={'oricdata/documentaryevidence'}
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
export default OricdataForm;
