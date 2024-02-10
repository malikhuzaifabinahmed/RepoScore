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

import researchproposalandgrantsFields from 'pages/CRUD/Researchproposalandgrants/helpers/researchproposalandgrantsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const ResearchproposalandgrantsForm = (props) => {
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
    return IniValues(researchproposalandgrantsFields, record || {});
  };

  const formValidations = () => {
    return FormValidations(researchproposalandgrantsFields, record || {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(
      researchproposalandgrantsFields,
      values || {},
    );
    onSubmit(id, data);
  };

  const title = () => {
    if (isProfile) {
      return 'Edit My Profile';
    }
    return isEditing
      ? 'Edit Researchproposalandgrants'
      : 'Add Researchproposalandgrants';
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
                  name={'approvedorrequiredmodificationordifferedordisapproved'}
                  schema={researchproposalandgrantsFields}
                  autoFocus
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'thematicarea'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameofresearch'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameofpi'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'pidesignation'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'pidepartment'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameofcopi'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'copidesignation'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'copidepartment'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'titleofresearchproposal'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'durationstartingandendingdate'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalfundingrequestedrs'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalfundingapproved'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalfundingreleased'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'collaboratingpartnerdetailsifany'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'cofundingpartnerdetailsifany'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'nameofsponsringagency'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'addressofsponsoringagency'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'countryofsponsoringagency'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'status'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'remarks'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'relatedinformation'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'keyprojectdeliverables'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'oricoverheadinapprovedfunding'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofcontract'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofapproval'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofprojectcompletion'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'totalfundingutilized'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <SwitchFormItem
                  name={'approved'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofproposalsubmission'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofreview'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <InputFormItem
                  name={'statusofirbmeeting'}
                  schema={researchproposalandgrantsFields}
                />
              </Grid>

              <Grid item>
                <CategoriesSelectItem
                  name={'categoryId'}
                  schema={researchproposalandgrantsFields}
                  showCreate={!modal}
                  form={form}
                />
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={researchproposalandgrantsFields}
                  path={'researchproposalandgrants/documentaryevidence'}
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
export default ResearchproposalandgrantsForm;
