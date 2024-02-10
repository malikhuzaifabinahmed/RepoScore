import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Policyadvocacy/table/PolicyadvocacyDataFormatters';
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

import policyadvocacyFields from 'pages/CRUD/Policyadvocacy/helpers/policyadvocacyFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const PolicyadvocacyForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(policyadvocacyFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View policyadvocacy'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['nameofgovernmentbodypresented'].label}
                </Typography>
                <Typography>
                  {form.values.nameofgovernmentbodypresented}
                </Typography>
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofpresentation'}
                  schema={policyadvocacyFields}
                />
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['nameofpi'].label}
                </Typography>
                <Typography>{form.values.nameofpi}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['pidesignation'].label}
                </Typography>
                <Typography>{form.values.pidesignation}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['pidepartment'].label}
                </Typography>
                <Typography>{form.values.pidepartment}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['areaadvocated'].label}
                </Typography>
                <Typography>{form.values.areaadvocated}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['description'].label}
                </Typography>
                <Typography>{form.values.description}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['namecoalitionpartner'].label}
                </Typography>
                <Typography>{form.values.namecoalitionpartner}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['issueverification'].label}
                </Typography>
                <Typography>{form.values.issueverification}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['backingresearchstatus'].label}
                </Typography>
                <Typography>{form.values.backingresearchstatus}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['advocacytoolsadopted'].label}
                </Typography>
                <Typography>{form.values.advocacytoolsadopted}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['anexpageno'].label}
                </Typography>
                <Typography>{form.values.anexpageno}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {policyadvocacyFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={policyadvocacyFields}
                  path={'policyadvocacy/documentaryevidence'}
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
export default PolicyadvocacyForm;
