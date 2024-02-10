import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Graduatedstartupfacilitationinfo/table/GraduatedstartupfacilitationinfoDataFormatters';
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

import graduatedstartupfacilitationinfoFields from 'pages/CRUD/Graduatedstartupfacilitationinfo/helpers/graduatedstartupfacilitationinfoFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const GraduatedstartupfacilitationinfoForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(graduatedstartupfacilitationinfoFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View graduatedstartupfacilitationinfo'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    graduatedstartupfacilitationinfoFields[
                      'keyareasoffacilitationrequestedbygraduatedstartups'
                    ].label
                  }
                </Typography>
                <Typography>
                  {
                    form.values
                      .keyareasoffacilitationrequestedbygraduatedstartups
                  }
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    graduatedstartupfacilitationinfoFields[
                      'typeoffacilitationmentoringtrainingsprovidedtograduated'
                    ].label
                  }
                </Typography>
                <Typography>
                  {
                    form.values
                      .typeoffacilitationmentoringtrainingsprovidedtograduated
                  }
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    graduatedstartupfacilitationinfoFields[
                      'noofgraduatedstartupsfacilitated'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.noofgraduatedstartupsfacilitated}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    graduatedstartupfacilitationinfoFields[
                      'totalstartupsincubatedsincebicsinception'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.totalstartupsincubatedsincebicsinception}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    graduatedstartupfacilitationinfoFields[
                      'totalstartupsgraduatedsincebicsinception'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.totalstartupsgraduatedsincebicsinception}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {graduatedstartupfacilitationinfoFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={graduatedstartupfacilitationinfoFields}
                  path={'graduatedstartupfacilitationinfo/documentaryevidence'}
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
export default GraduatedstartupfacilitationinfoForm;
