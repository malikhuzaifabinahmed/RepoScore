import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Bicfundinginfo/table/BicfundinginfoDataFormatters';
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

import bicfundinginfoFields from 'pages/CRUD/Bicfundinginfo/helpers/bicfundinginfoFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const BicfundinginfoForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(bicfundinginfoFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View bicfundinginfo'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['nameofstartup'].label}
                </Typography>
                <Typography>{form.values.nameofstartup}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['nameoffundingagency'].label}
                </Typography>
                <Typography>{form.values.nameoffundingagency}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['nationalorinternational'].label}
                </Typography>
                <Typography>{form.values.nationalorinternational}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['typeoffunding'].label}
                </Typography>
                <Typography>{form.values.typeoffunding}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['amountsecured'].label}
                </Typography>
                <Typography>{form.values.amountsecured}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['amountutilizeddistributed'].label}
                </Typography>
                <Typography>{form.values.amountutilizeddistributed}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    bicfundinginfoFields['inkindsupportfromfundingagencyifany']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.inkindsupportfromfundingagencyifany}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    bicfundinginfoFields[
                      'agreementsignedwithfundingagencyifany'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.agreementsignedwithfundingagencyifany}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['recurringoronetypesupport'].label}
                </Typography>
                <Typography>{form.values.recurringoronetypesupport}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {bicfundinginfoFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
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
export default BicfundinginfoForm;
