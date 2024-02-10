import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Anualresearchrevenue/table/AnualresearchrevenueDataFormatters';
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

import anualresearchrevenueFields from 'pages/CRUD/Anualresearchrevenue/helpers/anualresearchrevenueFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const AnualresearchrevenueForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(anualresearchrevenueFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View anualresearchrevenue'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['researchgrantname'].label}
                </Typography>
                <Typography>{form.values.researchgrantname}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['remarks'].label}
                </Typography>
                <Typography>{form.values.remarks}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['anexpagerefno'].label}
                </Typography>
                <Typography>{form.values.anexpagerefno}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    anualresearchrevenueFields['oricoverheadinreleasedfunding']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.oricoverheadinreleasedfunding}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['nationalorinternational'].label}
                </Typography>
                <Typography>{form.values.nationalorinternational}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['titleofresearchproposal'].label}
                </Typography>
                <Typography>{form.values.titleofresearchproposal}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['detailsofpi'].label}
                </Typography>
                <Typography>{form.values.detailsofpi}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['isjointventure'].label}
                </Typography>
                <Typography>{form.values.isjointventure}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['nameofjointventure'].label}
                </Typography>
                <Typography>{form.values.nameofjointventure}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['detailsofjointventure'].label}
                </Typography>
                <Typography>{form.values.detailsofjointventure}</Typography>
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'startDate'}
                  schema={anualresearchrevenueFields}
                />
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['totalfundingapproved'].label}
                </Typography>
                <Typography>{form.values.totalfundingapproved}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    anualresearchrevenueFields['oricoverheadinapprovedfunding']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.oricoverheadinapprovedfunding}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['nameofpi'].label}
                </Typography>
                <Typography>{form.values.nameofpi}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {anualresearchrevenueFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={anualresearchrevenueFields}
                  path={'anualresearchrevenue/documentaryevidence'}
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
export default AnualresearchrevenueForm;
