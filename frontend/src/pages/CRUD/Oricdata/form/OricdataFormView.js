import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as universityActions } from 'actions/university/universityListActions';

import * as dataFormat from 'pages/CRUD/Oricdata/table/OricdataDataFormatters';
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

import oricdataFields from 'pages/CRUD/Oricdata/helpers/oricdataFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import UniversitySelectItem from 'pages/CRUD/University/helpers/UniversitySelectItem';

const OricdataForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(oricdataFields, record || {});
  };
  const dispatch = useDispatch();

  const universityRows = useSelector((store) => store.university.list.rows);

  useEffect(() => {
    dispatch(universityActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View oricdata'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['oricbankaccounttitle'].label}
                </Typography>
                <Typography>{form.values.oricbankaccounttitle}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['oricbankaccountnumber'].label}
                </Typography>
                <Typography>{form.values.oricbankaccountnumber}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['oriccentralizedemailid'].label}
                </Typography>
                <Typography>{form.values.oriccentralizedemailid}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['oricpostaladdress'].label}
                </Typography>
                <Typography>{form.values.oricpostaladdress}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['shortlinkfororicwebsite'].label}
                </Typography>
                <Typography>{form.values.shortlinkfororicwebsite}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['nameoffocalpersonmanagingwebpage'].label}
                </Typography>
                <Typography>
                  {form.values.nameoffocalpersonmanagingwebpage}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    oricdataFields['phonenumberoffocalpersonmanagingwebpage']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.phonenumberoffocalpersonmanagingwebpage}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['tiscphonenumber'].label}
                </Typography>
                <Typography>{form.values.tiscphonenumber}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['tiscemailid'].label}
                </Typography>
                <Typography>{form.values.tiscemailid}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {oricdataFields['universityId'].label}
                </Typography>
                <Typography>{form.values.universityId.id}</Typography>
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
export default OricdataForm;
