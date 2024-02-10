import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Spinoffstartups/table/SpinoffstartupsDataFormatters';
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

import spinoffstartupsFields from 'pages/CRUD/Spinoffstartups/helpers/spinoffstartupsFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const SpinoffstartupsForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(spinoffstartupsFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View spinoffstartups'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['nameofstartup'].label}
                </Typography>
                <Typography>{form.values.nameofstartup}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    spinoffstartupsFields['briefideabackingresearchsectorfield']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.briefideabackingresearchsectorfield}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    spinoffstartupsFields[
                      'facultymembernamedesignationdepartment'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.facultymembernamedesignationdepartment}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['ipstatus'].label}
                </Typography>
                <Typography>{form.values.ipstatus}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['nameofspinoff'].label}
                </Typography>
                <Typography>{form.values.nameofspinoff}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['stage'].label}
                </Typography>
                <Typography>{form.values.stage}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['licenseagreementsignedifany'].label}
                </Typography>
                <Typography>
                  {form.values.licenseagreementsignedifany}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['fundingsources'].label}
                </Typography>
                <Typography>{form.values.fundingsources}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['totalfacultystartups'].label}
                </Typography>
                <Typography>{form.values.totalfacultystartups}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {spinoffstartupsFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={spinoffstartupsFields}
                  path={'spinoffstartups/documentaryevidence'}
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
export default SpinoffstartupsForm;
