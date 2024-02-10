import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as categoriesActions } from 'actions/categories/categoriesListActions';

import * as dataFormat from 'pages/CRUD/Coursedetailsinfo/table/CoursedetailsinfoDataFormatters';
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

import coursedetailsinfoFields from 'pages/CRUD/Coursedetailsinfo/helpers/coursedetailsinfoFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

import CategoriesSelectItem from 'pages/CRUD/Categories/helpers/CategoriesSelectItem';

const CoursedetailsinfoForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(coursedetailsinfoFields, record || {});
  };
  const dispatch = useDispatch();

  const categoriesRows = useSelector((store) => store.categories.list.rows);

  useEffect(() => {
    dispatch(categoriesActions.doFetch());
  }, []);

  const renderForm = () => (
    <Widget title={'View coursedetailsinfo'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['titleofcourse'].label}
                </Typography>
                <Typography>{form.values.titleofcourse}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['field'].label}
                </Typography>
                <Typography>{form.values.field}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['level'].label}
                </Typography>
                <Typography>{form.values.level}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['credithours'].label}
                </Typography>
                <Typography>{form.values.credithours}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['totalmodules'].label}
                </Typography>
                <Typography>{form.values.totalmodules}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['optionalcompulsory'].label}
                </Typography>
                <Typography>{form.values.optionalcompulsory}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    coursedetailsinfoFields[
                      'departmentsschoolsofferingthecourse'
                    ].label
                  }
                </Typography>
                <Typography>
                  {form.values.departmentsschoolsofferingthecourse}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['learningoutcomes'].label}
                </Typography>
                <Typography>{form.values.learningoutcomes}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['totalnoofcoursesoffered'].label}
                </Typography>
                <Typography>{form.values.totalnoofcoursesoffered}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {coursedetailsinfoFields['categoryId'].label}
                </Typography>
                <Typography>{form.values.categoryId.id}</Typography>
              </Grid>

              <Grid item>
                <FilesFormItem
                  name={'documentaryevidence'}
                  schema={coursedetailsinfoFields}
                  path={'coursedetailsinfo/documentaryevidence'}
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
export default CoursedetailsinfoForm;
