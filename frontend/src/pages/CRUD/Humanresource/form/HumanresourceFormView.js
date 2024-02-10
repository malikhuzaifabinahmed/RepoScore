import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as universityActions } from 'actions/university/universityListActions';

import * as dataFormat from 'pages/CRUD/Humanresource/table/HumanresourceDataFormatters';
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

import humanresourceFields from 'pages/CRUD/Humanresource/helpers/humanresourceFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import UniversitySelectItem from 'pages/CRUD/University/helpers/UniversitySelectItem';

const HumanresourceForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(humanresourceFields, record || {});
  };
  const dispatch = useDispatch();

  const universityRows = useSelector((store) => store.university.list.rows);

  useEffect(() => {
    dispatch(universityActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View humanresource'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['name'].label}
                </Typography>
                <Typography>{form.values.name}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['position'].label}
                </Typography>
                <Typography>{form.values.position}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['officephonenumber'].label}
                </Typography>
                <Typography>{form.values.officephonenumber}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['role'].label}
                </Typography>
                <Typography>{form.values.role}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['emailid'].label}
                </Typography>
                <Typography>{form.values.emailid}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['qualificationlevel'].label}
                </Typography>
                <Typography>{form.values.qualificationlevel}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['qualificationtitle'].label}
                </Typography>
                <Typography>{form.values.qualificationtitle}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['fieldofstudy'].label}
                </Typography>
                <Typography>{form.values.fieldofstudy}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['cnic'].label}
                </Typography>
                <Typography>{form.values.cnic}</Typography>
              </Grid>

              <Grid item>
                <DatePickerFormItem
                  name={'dateofappointment'}
                  schema={humanresourceFields}
                />
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['periodupto'].label}
                </Typography>
                <Typography>{form.values.periodupto}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['totalexperience'].label}
                </Typography>
                <Typography>{form.values.totalexperience}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['nonacademicexperience'].label}
                </Typography>
                <Typography>{form.values.nonacademicexperience}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {humanresourceFields['universityId'].label}
                </Typography>
                <Typography>{form.values.universityId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={humanresourceFields}
                  path={'humanresource/documentaryevidence'}
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
export default HumanresourceForm;
