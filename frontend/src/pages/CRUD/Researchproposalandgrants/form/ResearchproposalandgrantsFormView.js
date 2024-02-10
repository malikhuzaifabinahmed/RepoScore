import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Researchproposalandgrants/table/ResearchproposalandgrantsDataFormatters';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Loader from 'components/Loader';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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
import ItemsList from 'components/FormItems/items/ItemsList';

import researchproposalandgrantsFields from 'pages/CRUD/Researchproposalandgrants/helpers/researchproposalandgrantsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const ResearchproposalandgrantsForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(researchproposalandgrantsFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View researchproposalandgrants'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields[
                      'approvedorrequiredmodificationordifferedordisapproved'
                    ].label
                  }
                </Typography>
                <Typography>
                  {
                    form.values
                      .approvedorrequiredmodificationordifferedordisapproved
                  }
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['thematicarea'].label}
                </Typography>
                <Typography>{form.values.thematicarea}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['nameofresearch'].label}
                </Typography>
                <Typography>{form.values.nameofresearch}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['nameofpi'].label}
                </Typography>
                <Typography>{form.values.nameofpi}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['pidesignation'].label}
                </Typography>
                <Typography>{form.values.pidesignation}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['pidepartment'].label}
                </Typography>
                <Typography>{form.values.pidepartment}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['nameofcopi'].label}
                </Typography>
                <Typography>{form.values.nameofcopi}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['copidesignation'].label}
                </Typography>
                <Typography>{form.values.copidesignation}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['copidepartment'].label}
                </Typography>
                <Typography>{form.values.copidepartment}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['titleofresearchproposal']
                      .label
                  }
                </Typography>
                <Typography>{form.values.titleofresearchproposal}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields[
                      'durationstartingandendingdate'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.durationstartingandendingdate}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['totalfundingrequestedrs']
                      .label
                  }
                </Typography>
                <Typography>{form.values.totalfundingrequestedrs}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['totalfundingapproved']
                      .label
                  }
                </Typography>
                <Typography>{form.values.totalfundingapproved}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['totalfundingreleased']
                      .label
                  }
                </Typography>
                <Typography>{form.values.totalfundingreleased}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields[
                      'collaboratingpartnerdetailsifany'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.collaboratingpartnerdetailsifany}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields[
                      'cofundingpartnerdetailsifany'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.cofundingpartnerdetailsifany}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['nameofsponsringagency']
                      .label
                  }
                </Typography>
                <Typography>{form.values.nameofsponsringagency}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['addressofsponsoringagency']
                      .label
                  }
                </Typography>
                <Typography>{form.values.addressofsponsoringagency}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['countryofsponsoringagency']
                      .label
                  }
                </Typography>
                <Typography>{form.values.countryofsponsoringagency}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['status'].label}
                </Typography>
                <Typography>{form.values.status}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['remarks'].label}
                </Typography>
                <Typography>{form.values.remarks}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['relatedinformation'].label}
                </Typography>
                <Typography>{form.values.relatedinformation}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['keyprojectdeliverables']
                      .label
                  }
                </Typography>
                <Typography>{form.values.keyprojectdeliverables}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields[
                      'oricoverheadinapprovedfunding'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.oricoverheadinapprovedfunding}
                </Typography>
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
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    researchproposalandgrantsFields['totalfundingutilized']
                      .label
                  }
                </Typography>
                <Typography>{form.values.totalfundingutilized}</Typography>
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
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['statusofirbmeeting'].label}
                </Typography>
                <Typography>{form.values.statusofirbmeeting}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {researchproposalandgrantsFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
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

              <Grid container ml={3} mt={3}>
                <Grid item>
                  <Button
                    color='primary'
                    variant='outlined'
                    onClick={() => onCancel()}
                  >
                    Back
                  </Button>
                </Grid>
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
  return renderForm();
};
export default ResearchproposalandgrantsForm;
