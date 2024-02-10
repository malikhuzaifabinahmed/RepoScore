import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Partnershipinfo/table/PartnershipinfoDataFormatters';
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

import partnershipinfoFields from 'pages/CRUD/Partnershipinfo/helpers/partnershipinfoFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const PartnershipinfoForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(partnershipinfoFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View partnershipinfo'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {partnershipinfoFields['nameofpartneringorganization'].label}
                </Typography>
                <Typography>
                  {form.values.nameofpartneringorganization}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {partnershipinfoFields['nationalinternational'].label}
                </Typography>
                <Typography>{form.values.nationalinternational}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {partnershipinfoFields['fieldareaofexpertise'].label}
                </Typography>
                <Typography>{form.values.fieldareaofexpertise}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {partnershipinfoFields['typeoflink'].label}
                </Typography>
                <Typography>{form.values.typeoflink}</Typography>
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofsigning'}
                  schema={partnershipinfoFields}
                />
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    partnershipinfoFields['majorareasofcooperationmodalities']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.majorareasofcooperationmodalities}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {partnershipinfoFields['keyoutcomesfromlinks'].label}
                </Typography>
                <Typography>{form.values.keyoutcomesfromlinks}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {partnershipinfoFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={partnershipinfoFields}
                  path={'partnershipinfo/documentaryevidence'}
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
export default PartnershipinfoForm;
