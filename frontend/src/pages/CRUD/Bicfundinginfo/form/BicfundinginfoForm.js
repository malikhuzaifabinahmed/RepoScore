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

import bicfundinginfoFields from 'pages/CRUD/Bicfundinginfo/helpers/bicfundinginfoFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const BicfundinginfoForm = (props) => {
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
    return IniValues(bicfundinginfoFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(bicfundinginfoFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(bicfundinginfoFields, values || {});
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing ? 'Edit Bicfundinginfo' : 'Add Bicfundinginfo';
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
                  schema={bicfundinginfoFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameoffundingagency'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nationalorinternational'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'typeoffunding'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'amountsecured'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'amountutilizeddistributed'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'inkindsupportfromfundingagencyifany'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'agreementsignedwithfundingagencyifany'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'recurringoronetypesupport'}
                  schema={bicfundinginfoFields}
                />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={bicfundinginfoFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={bicfundinginfoFields}
                  path={'bicfundinginfo/documentaryevidence'}
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
export default BicfundinginfoForm;
