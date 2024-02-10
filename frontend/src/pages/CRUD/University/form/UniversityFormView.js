import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/University/table/UniversityDataFormatters';
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

import universityFields from 'pages/CRUD/University/helpers/universityFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const UniversityForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(universityFields, record || {});
  };
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const renderForm = () => (
    <Widget title={'View university'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['name'].label}
                </Typography>
                <Typography>{form.values.name}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['province'].label}
                </Typography>
                <Typography>{form.values.province}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['city'].label}
                </Typography>
                <Typography>{form.values.city}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['sector'].label}
                </Typography>
                <Typography>{form.values.sector}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['postaladdress'].label}
                </Typography>
                <Typography>{form.values.postaladdress}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['universityheadposition'].label}
                </Typography>
                <Typography>{form.values.universityheadposition}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['universityheadname'].label}
                </Typography>
                <Typography>{form.values.universityheadname}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['universityheademail'].label}
                </Typography>
                <Typography>{form.values.universityheademail}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['universityheadphonenumber'].label}
                </Typography>
                <Typography>{form.values.universityheadphonenumber}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['registrarname'].label}
                </Typography>
                <Typography>{form.values.registrarname}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['registraremail'].label}
                </Typography>
                <Typography>{form.values.registraremail}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['registrarphonenumber'].label}
                </Typography>
                <Typography>{form.values.registrarphonenumber}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['registrarpaemail'].label}
                </Typography>
                <Typography>{form.values.registrarpaemail}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['registrarpaphonenumber'].label}
                </Typography>
                <Typography>{form.values.registrarpaphonenumber}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {
                    universityFields['totalnumberofsanctionedfaculityposts']
                      .label
                  }
                </Typography>
                <Typography>
                  {form.values.totalnumberofsanctionedfaculityposts}
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['totalnumberoffaculty'].label}
                </Typography>
                <Typography>{form.values.totalnumberoffaculty}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['totalnumberofphdfaculty'].label}
                </Typography>
                <Typography>{form.values.totalnumberofphdfaculty}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {universityFields['totalnumberofvacantfacultyposts'].label}
                </Typography>
                <Typography>
                  {form.values.totalnumberofvacantfacultyposts}
                </Typography>
              </Grid>

              <>
                <Box
                  ml={3}
                  mt={3}
                  mr={3}
                  sx={{ border: 1, borderRadius: 3, borderColor: '#D8D9DA' }}
                >
                  <Typography
                    variant='h5'
                    style={{
                      marginBottom: 10,
                      marginTop: 10,
                      marginLeft: 15,
                      fontWeight: 'bold',
                    }}
                  >
                    Humanresource University Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name</TableCell>

                          <TableCell align='left'>Position</TableCell>

                          <TableCell align='left'>
                            Office phone number
                          </TableCell>

                          <TableCell align='left'>Role</TableCell>

                          <TableCell align='left'>email id</TableCell>

                          <TableCell align='left'>
                            Qualification level
                          </TableCell>

                          <TableCell align='left'>
                            Qualification title
                          </TableCell>

                          <TableCell align='left'>Field of study</TableCell>

                          <TableCell align='left'>CNIC</TableCell>

                          <TableCell align='left'>
                            Date of appointment
                          </TableCell>

                          <TableCell align='left'>period up to</TableCell>

                          <TableCell align='left'>Total experience</TableCell>

                          <TableCell align='left'>
                            Nonacademic experience
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.humanresource_universityId &&
                          Array.isArray(record.humanresource_universityId) &&
                          record.humanresource_universityId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/humanresource/${item.id}/show`}
                              style={{ textDecoration: 'none' }}
                              sx={{ '&:last-child td': { borderBottom: 0 } }}
                            >
                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='name'
                              >
                                {item.name}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='position'
                              >
                                {item.position}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='officephonenumber'
                              >
                                {item.officephonenumber}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='role'
                              >
                                {item.role}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='emailid'
                              >
                                {item.emailid}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='qualificationlevel'
                              >
                                {item.qualificationlevel}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='qualificationtitle'
                              >
                                {item.qualificationtitle}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fieldofstudy'
                              >
                                {item.fieldofstudy}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='cnic'
                              >
                                {item.cnic}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofappointment'
                              >
                                {dataFormat.dateTimeFormatter(
                                  item.dateofappointment,
                                )}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='periodupto'
                              >
                                {item.periodupto}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalexperience'
                              >
                                {item.totalexperience}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nonacademicexperience'
                              >
                                {item.nonacademicexperience}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.humanresource_universityId?.length && (
                    <Typography
                      style={{
                        marginBottom: 10,
                        marginTop: 10,
                        marginLeft: 15,
                      }}
                    >
                      Empty
                    </Typography>
                  )}
                </Box>
              </>

              <>
                <Box
                  ml={3}
                  mt={3}
                  mr={3}
                  sx={{ border: 1, borderRadius: 3, borderColor: '#D8D9DA' }}
                >
                  <Typography
                    variant='h5'
                    style={{
                      marginBottom: 10,
                      marginTop: 10,
                      marginLeft: 15,
                      fontWeight: 'bold',
                    }}
                  >
                    Oricdata University Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            ORIC bank account title
                          </TableCell>

                          <TableCell align='left'>
                            ORIC bank account number
                          </TableCell>

                          <TableCell align='left'>
                            ORIC centralized email id
                          </TableCell>

                          <TableCell align='left'>
                            ORIC postal address
                          </TableCell>

                          <TableCell align='left'>
                            Short link for ORIC website
                          </TableCell>

                          <TableCell align='left'>
                            Name of focal person managing webpage
                          </TableCell>

                          <TableCell align='left'>
                            Phone number of focal person managing webpage
                          </TableCell>

                          <TableCell align='left'>TISC phone number</TableCell>

                          <TableCell align='left'>TISC email id</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.oricdata_universityId &&
                          Array.isArray(record.oricdata_universityId) &&
                          record.oricdata_universityId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/oricdata/${item.id}/show`}
                              style={{ textDecoration: 'none' }}
                              sx={{ '&:last-child td': { borderBottom: 0 } }}
                            >
                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='oricbankaccounttitle'
                              >
                                {item.oricbankaccounttitle}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='oricbankaccountnumber'
                              >
                                {item.oricbankaccountnumber}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='oriccentralizedemailid'
                              >
                                {item.oriccentralizedemailid}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='oricpostaladdress'
                              >
                                {item.oricpostaladdress}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='shortlinkfororicwebsite'
                              >
                                {item.shortlinkfororicwebsite}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameoffocalpersonmanagingwebpage'
                              >
                                {item.nameoffocalpersonmanagingwebpage}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='phonenumberoffocalpersonmanagingwebpage'
                              >
                                {item.phonenumberoffocalpersonmanagingwebpage}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='tiscphonenumber'
                              >
                                {item.tiscphonenumber}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='tiscemailid'
                              >
                                {item.tiscemailid}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.oricdata_universityId?.length && (
                    <Typography
                      style={{
                        marginBottom: 10,
                        marginTop: 10,
                        marginLeft: 15,
                      }}
                    >
                      Empty
                    </Typography>
                  )}
                </Box>
              </>

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
export default UniversityForm;
