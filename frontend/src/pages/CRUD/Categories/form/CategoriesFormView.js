import { Formik } from 'formik';
import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as dataFormat from 'pages/CRUD/Categories/table/CategoriesDataFormatters';
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

import categoriesFields from 'pages/CRUD/Categories/helpers/categoriesFields';
import IniValues from 'components/FormItems/iniValues';
import PreparedValues from 'components/FormItems/preparedValues';
import FormValidations from 'components/FormItems/formValidations';
import Widget from 'components/Widget';

const CategoriesForm = (props) => {
  const { findLoading, record, onCancel } = props;

  const iniValues = () => {
    return IniValues(categoriesFields, record || {});
  };
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const renderForm = () => (
    <Widget title={'View categories'} collapse close>
      <Formik initialValues={iniValues()}>
        {(form) => (
          <form>
            <Grid container spacing={3} direction='column'>
              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {categoriesFields['categoryname'].label}
                </Typography>
                <Typography>{form.values.categoryname}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {categoriesFields['categorytype'].label}
                </Typography>
                <Typography>{form.values.categorytype}</Typography>
              </Grid>

              <Grid item>
                <Typography variant='h6' style={{ marginBottom: 10 }}>
                  {categoriesFields['organization'].label}
                </Typography>
                <Typography>{form.values.organization}</Typography>
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
                    Activegraduatedstartupinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Name of graduated startup
                          </TableCell>

                          <TableCell align='left'>Company brief idea</TableCell>

                          <TableCell align='left'>Date of graduation</TableCell>

                          <TableCell align='left'>
                            Current status active registered concern accelerated
                          </TableCell>

                          <TableCell align='left'>
                            Net worth of startup average yearly revenue
                          </TableCell>

                          <TableCell align='left'>
                            IPO acquisition amalgamation (if any)
                          </TableCell>

                          <TableCell align='left'>
                            No. of employees with startup
                          </TableCell>

                          <TableCell align='left'>
                            Survival rate of graduated startups
                          </TableCell>

                          <TableCell align='left'>
                            total startups active after graduation
                          </TableCell>

                          <TableCell align='left'>
                            total startups having IPO acquisition
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.activegraduatedstartupinfo_categoryId &&
                          Array.isArray(
                            record.activegraduatedstartupinfo_categoryId,
                          ) &&
                          record.activegraduatedstartupinfo_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/activegraduatedstartupinfo/${item.id}/show`}
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
                                  data-label='nameofgraduatedstartup'
                                >
                                  {item.nameofgraduatedstartup}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='companybriefidea'
                                >
                                  {item.companybriefidea}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='dateofgraduation'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateofgraduation,
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
                                  data-label='currentstatusactiveregisteredconcernaccelerated'
                                >
                                  {
                                    item.currentstatusactiveregisteredconcernaccelerated
                                  }
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='networthofstartupaverageyearlyrevenue'
                                >
                                  {item.networthofstartupaverageyearlyrevenue}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='ipoacquisitionamalgamationifany'
                                >
                                  {item.ipoacquisitionamalgamationifany}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='noofemployeeswithstartup'
                                >
                                  {item.noofemployeeswithstartup}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='survivalrateofgraduatedstartups'
                                >
                                  {item.survivalrateofgraduatedstartups}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalstartupsactiveaftergraduation'
                                >
                                  {item.totalstartupsactiveaftergraduation}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalstartupshavingipoacquisition'
                                >
                                  {item.totalstartupshavingipoacquisition}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.activegraduatedstartupinfo_categoryId?.length && (
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
                    Anualresearchrevenue Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Research grant name
                          </TableCell>

                          <TableCell align='left'>Remarks</TableCell>

                          <TableCell align='left'>Anex page ref no.</TableCell>

                          <TableCell align='left'>
                            ORIC overhead in released funding
                          </TableCell>

                          <TableCell align='left'>
                            National or international
                          </TableCell>

                          <TableCell align='left'>
                            Title of research proposal
                          </TableCell>

                          <TableCell align='left'>Details of PI</TableCell>

                          <TableCell align='left'>Is joint venture</TableCell>

                          <TableCell align='left'>
                            Name of joint venture
                          </TableCell>

                          <TableCell align='left'>
                            Details of joint venture
                          </TableCell>

                          <TableCell align='left'>Start Date</TableCell>

                          <TableCell align='left'>
                            Total funding approved
                          </TableCell>

                          <TableCell align='left'>
                            ORIC overhead in approved funding
                          </TableCell>

                          <TableCell align='left'>Name of PI</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.anualresearchrevenue_categoryId &&
                          Array.isArray(
                            record.anualresearchrevenue_categoryId,
                          ) &&
                          record.anualresearchrevenue_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/anualresearchrevenue/${item.id}/show`}
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
                                  data-label='researchgrantname'
                                >
                                  {item.researchgrantname}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='remarks'
                                >
                                  {item.remarks}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='anexpagerefno'
                                >
                                  {item.anexpagerefno}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='oricoverheadinreleasedfunding'
                                >
                                  {item.oricoverheadinreleasedfunding}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nationalorinternational'
                                >
                                  {item.nationalorinternational}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='titleofresearchproposal'
                                >
                                  {item.titleofresearchproposal}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='detailsofpi'
                                >
                                  {item.detailsofpi}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='isjointventure'
                                >
                                  {item.isjointventure}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofjointventure'
                                >
                                  {item.nameofjointventure}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='detailsofjointventure'
                                >
                                  {item.detailsofjointventure}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='startDate'
                                >
                                  {dataFormat.dateTimeFormatter(item.startDate)}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalfundingapproved'
                                >
                                  {item.totalfundingapproved}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='oricoverheadinapprovedfunding'
                                >
                                  {item.oricoverheadinapprovedfunding}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofpi'
                                >
                                  {item.nameofpi}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.anualresearchrevenue_categoryId?.length && (
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
                    Bicfundinginfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of startup</TableCell>

                          <TableCell align='left'>
                            Name of funding agency
                          </TableCell>

                          <TableCell align='left'>
                            National or International
                          </TableCell>

                          <TableCell align='left'>Type of funding</TableCell>

                          <TableCell align='left'>Amount secured</TableCell>

                          <TableCell align='left'>
                            Amount utilized distributed
                          </TableCell>

                          <TableCell align='left'>
                            In kind support from funding agency (if any)
                          </TableCell>

                          <TableCell align='left'>
                            Agreement signed with funding agency (if any){' '}
                          </TableCell>

                          <TableCell align='left'>
                            Recurring or one type support
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.bicfundinginfo_categoryId &&
                          Array.isArray(record.bicfundinginfo_categoryId) &&
                          record.bicfundinginfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/bicfundinginfo/${item.id}/show`}
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
                                data-label='nameofstartup'
                              >
                                {item.nameofstartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameoffundingagency'
                              >
                                {item.nameoffundingagency}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nationalorinternational'
                              >
                                {item.nationalorinternational}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='typeoffunding'
                              >
                                {item.typeoffunding}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='amountsecured'
                              >
                                {item.amountsecured}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='amountutilizeddistributed'
                              >
                                {item.amountutilizeddistributed}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='inkindsupportfromfundingagencyifany'
                              >
                                {item.inkindsupportfromfundingagencyifany}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='agreementsignedwithfundingagencyifany'
                              >
                                {item.agreementsignedwithfundingagencyifany}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='recurringoronetypesupport'
                              >
                                {item.recurringoronetypesupport}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.bicfundinginfo_categoryId?.length && (
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
                    Bichumanresource Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Is BIC support staff
                          </TableCell>

                          <TableCell align='left'>Position</TableCell>

                          <TableCell align='left'>
                            Full time part time
                          </TableCell>

                          <TableCell align='left'>Name</TableCell>

                          <TableCell align='left'>
                            Office phone number
                          </TableCell>

                          <TableCell align='left'>Mobile number</TableCell>

                          <TableCell align='left'>Email id</TableCell>

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

                          <TableCell align='left'>Period up to</TableCell>

                          <TableCell align='left'>Total experience</TableCell>

                          <TableCell align='left'>
                            Non academia experience
                          </TableCell>

                          <TableCell align='left'>
                            Notification office order joining report and cv
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.bichumanresource_categoryId &&
                          Array.isArray(record.bichumanresource_categoryId) &&
                          record.bichumanresource_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/bichumanresource/${item.id}/show`}
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
                                data-label='isbicsupportstaff'
                              >
                                {item.isbicsupportstaff}
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
                                data-label='fulltimeparttime'
                              >
                                {item.fulltimeparttime}
                              </TableCell>

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
                                data-label='mobilenumber'
                              >
                                {item.mobilenumber}
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
                                data-label='nonacademiaexperience'
                              >
                                {item.nonacademiaexperience}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='notificationofficeorderjoiningreportandcv'
                              >
                                {item.notificationofficeorderjoiningreportandcv}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.bichumanresource_categoryId?.length && (
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
                    Bicserviceofferinginfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Nature of service offered session held
                          </TableCell>

                          <TableCell align='left'>
                            Name of service provider
                          </TableCell>

                          <TableCell align='left'>
                            Background and expertise
                          </TableCell>

                          <TableCell align='left'>
                            local or International
                          </TableCell>

                          <TableCell align='left'>
                            No. of startups facilitated
                          </TableCell>

                          <TableCell align='left'>
                            total no. sessions held
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.bicserviceofferinginfo_categoryId &&
                          Array.isArray(
                            record.bicserviceofferinginfo_categoryId,
                          ) &&
                          record.bicserviceofferinginfo_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/bicserviceofferinginfo/${item.id}/show`}
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
                                  data-label='natureofserviceofferedsessionheld'
                                >
                                  {item.natureofserviceofferedsessionheld}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofserviceprovider'
                                >
                                  {item.nameofserviceprovider}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='backgroundandexpertise'
                                >
                                  {item.backgroundandexpertise}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='localinternational'
                                >
                                  {item.localinternational}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='noofstartupsfacilitated'
                                >
                                  {item.noofstartupsfacilitated}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalnosessionsheld'
                                >
                                  {item.totalnosessionsheld}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.bicserviceofferinginfo_categoryId?.length && (
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
                    Bicsupportinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Level of support financial in kind
                          </TableCell>

                          <TableCell align='left'>
                            Area facilitated through support
                          </TableCell>

                          <TableCell align='left'>
                            Financial in kind support extended for activity
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.bicsupportinfo_categoryId &&
                          Array.isArray(record.bicsupportinfo_categoryId) &&
                          record.bicsupportinfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/bicsupportinfo/${item.id}/show`}
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
                                data-label='levelofsupportfinancialinkind'
                              >
                                {item.levelofsupportfinancialinkind}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='areafacilitatedthroughsupport'
                              >
                                {item.areafacilitatedthroughsupport}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='financialinkindsupportextendedforactivity'
                              >
                                {item.financialinkindsupportextendedforactivity}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.bicsupportinfo_categoryId?.length && (
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
                    Colaborationagreement Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Type of linkages</TableCell>

                          <TableCell align='left'>
                            National or International
                          </TableCell>

                          <TableCell align='left'>Host country name</TableCell>

                          <TableCell align='left'>
                            Host country address
                          </TableCell>

                          <TableCell align='left'>Start Date</TableCell>

                          <TableCell align='left'>End Date</TableCell>

                          <TableCell align='left'>
                            Key initiatives to be undertaken
                          </TableCell>

                          <TableCell align='left'>Field</TableCell>

                          <TableCell align='left'>
                            Scope of collaboration
                          </TableCell>

                          <TableCell align='left'>
                            Date of linkage establishment
                          </TableCell>

                          <TableCell align='left'>Financial support</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.colaborationagreement_categoryId &&
                          Array.isArray(
                            record.colaborationagreement_categoryId,
                          ) &&
                          record.colaborationagreement_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/colaborationagreement/${item.id}/show`}
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
                                  data-label='typeoflinkages'
                                >
                                  {item.typeoflinkages}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nationalinternational'
                                >
                                  {item.nationalinternational}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='hostcountryname'
                                >
                                  {item.hostcountryname}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='hostcountryaddress'
                                >
                                  {item.hostcountryaddress}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='startDate'
                                >
                                  {dataFormat.dateTimeFormatter(item.startDate)}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='endDate'
                                >
                                  {dataFormat.dateTimeFormatter(item.endDate)}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='keyinitiativestobeundertaken'
                                >
                                  {item.keyinitiativestobeundertaken}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='field'
                                >
                                  {item.field}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='scopeofcollaboration'
                                >
                                  {item.scopeofcollaboration}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='dateoflinkageestablishment'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateoflinkageestablishment,
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
                                  data-label='financialsupport'
                                >
                                  {item.financialsupport}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.colaborationagreement_categoryId?.length && (
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
                    Commities Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name</TableCell>

                          <TableCell align='left'>Designation</TableCell>

                          <TableCell align='left'>
                            Parent institution organization
                          </TableCell>

                          <TableCell align='left'>Sector field</TableCell>

                          <TableCell align='left'>
                            Role status in committee
                          </TableCell>

                          <TableCell align='left'>Member since</TableCell>

                          <TableCell align='left'>Notified</TableCell>

                          <TableCell align='left'>No. of members</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.commities_categoryId &&
                          Array.isArray(record.commities_categoryId) &&
                          record.commities_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/commities/${item.id}/show`}
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
                                data-label='designation'
                              >
                                {item.designation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='parentinstitutionorganization'
                              >
                                {item.parentinstitutionorganization}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='sectorfield'
                              >
                                {item.sectorfield}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='rolestatusincommittee'
                              >
                                {item.rolestatusincommittee}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='membersince'
                              >
                                {dataFormat.dateTimeFormatter(item.membersince)}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='notified'
                              >
                                {item.notified}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofmembers'
                              >
                                {item.noofmembers}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.commities_categoryId?.length && (
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
                    Coursedetailsinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Title of course</TableCell>

                          <TableCell align='left'>Field</TableCell>

                          <TableCell align='left'>Level</TableCell>

                          <TableCell align='left'>Credit hours.</TableCell>

                          <TableCell align='left'>Total modules</TableCell>

                          <TableCell align='left'>
                            Optional compulsory
                          </TableCell>

                          <TableCell align='left'>
                            Departments schools offering the course
                          </TableCell>

                          <TableCell align='left'>Learning outcomes</TableCell>

                          <TableCell align='left'>
                            Total no. of courses offered
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.coursedetailsinfo_categoryId &&
                          Array.isArray(record.coursedetailsinfo_categoryId) &&
                          record.coursedetailsinfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/coursedetailsinfo/${item.id}/show`}
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
                                data-label='titleofcourse'
                              >
                                {item.titleofcourse}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='field'
                              >
                                {item.field}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='level'
                              >
                                {item.level}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='credithours'
                              >
                                {item.credithours}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalmodules'
                              >
                                {item.totalmodules}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='optionalcompulsory'
                              >
                                {item.optionalcompulsory}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='departmentsschoolsofferingthecourse'
                              >
                                {item.departmentsschoolsofferingthecourse}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='learningoutcomes'
                              >
                                {item.learningoutcomes}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalnoofcoursesoffered'
                              >
                                {item.totalnoofcoursesoffered}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.coursedetailsinfo_categoryId?.length && (
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
                    Engagementevents Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Title of event</TableCell>

                          <TableCell align='left'>
                            Component of community involved
                          </TableCell>

                          <TableCell align='left'>Audiance</TableCell>

                          <TableCell align='left'>Outcome</TableCell>

                          <TableCell align='left'>
                            Collaboration developed
                          </TableCell>

                          <TableCell align='left'>Date of event</TableCell>

                          <TableCell align='left'>
                            Name of collaborating partners
                          </TableCell>

                          <TableCell align='left'>
                            Name of sponsoring agency
                          </TableCell>

                          <TableCell align='left'>
                            Will be participated or arranged
                          </TableCell>

                          <TableCell align='left'>Remarks</TableCell>

                          <TableCell align='left'>Anex page no</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.engagementevents_categoryId &&
                          Array.isArray(record.engagementevents_categoryId) &&
                          record.engagementevents_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/engagementevents/${item.id}/show`}
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
                                data-label='titleofevent'
                              >
                                {item.titleofevent}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='componentofcommunityinvolved'
                              >
                                {item.componentofcommunityinvolved}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='audiance'
                              >
                                {item.audiance}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='outcome'
                              >
                                {item.outcome}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='collaborationdeveloped'
                              >
                                {item.collaborationdeveloped}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofevent'
                              >
                                {dataFormat.dateTimeFormatter(item.dateofevent)}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameofcollaboratingpartners'
                              >
                                {item.nameofcollaboratingpartners}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameofsponsoringagency'
                              >
                                {item.nameofsponsoringagency}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='willbeparticipatedorarranged'
                              >
                                {item.willbeparticipatedorarranged}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='remarks'
                              >
                                {item.remarks}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='anexpageno'
                              >
                                {item.anexpageno}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.engagementevents_categoryId?.length && (
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
                    Graduatedstartupfacilitationinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Key Areas of facilitation requested by graduated
                            startups
                          </TableCell>

                          <TableCell align='left'>
                            Type of facilitation mentoring trainings provided to
                            graduated
                          </TableCell>

                          <TableCell align='left'>
                            No of graduated startups facilitated
                          </TableCell>

                          <TableCell align='left'>
                            Total startups incubated since BICs inception
                          </TableCell>

                          <TableCell align='left'>
                            Total startups graduated since BICs inception
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.graduatedstartupfacilitationinfo_categoryId &&
                          Array.isArray(
                            record.graduatedstartupfacilitationinfo_categoryId,
                          ) &&
                          record.graduatedstartupfacilitationinfo_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/graduatedstartupfacilitationinfo/${item.id}/show`}
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
                                  data-label='keyareasoffacilitationrequestedbygraduatedstartups'
                                >
                                  {
                                    item.keyareasoffacilitationrequestedbygraduatedstartups
                                  }
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='typeoffacilitationmentoringtrainingsprovidedtograduated'
                                >
                                  {
                                    item.typeoffacilitationmentoringtrainingsprovidedtograduated
                                  }
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='noofgraduatedstartupsfacilitated'
                                >
                                  {item.noofgraduatedstartupsfacilitated}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalstartupsincubatedsincebicsinception'
                                >
                                  {
                                    item.totalstartupsincubatedsincebicsinception
                                  }
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalstartupsgraduatedsincebicsinception'
                                >
                                  {
                                    item.totalstartupsgraduatedsincebicsinception
                                  }
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.graduatedstartupfacilitationinfo_categoryId
                    ?.length && (
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
                    Honorsandawards Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Title of award</TableCell>

                          <TableCell align='left'>
                            Name of awarding organization
                          </TableCell>

                          <TableCell align='left'>
                            Contacts of awarding organization
                          </TableCell>

                          <TableCell align='left'>
                            Brief details of work honored
                          </TableCell>

                          <TableCell align='left'>Prize amount</TableCell>

                          <TableCell align='left'>Award winner name</TableCell>

                          <TableCell align='left'>
                            Award winner designation
                          </TableCell>

                          <TableCell align='left'>
                            Award winner department
                          </TableCell>

                          <TableCell align='left'>Remarks</TableCell>

                          <TableCell align='left'>Annex page ref no</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.honorsandawards_categoryId &&
                          Array.isArray(record.honorsandawards_categoryId) &&
                          record.honorsandawards_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/honorsandawards/${item.id}/show`}
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
                                data-label='titleofaward'
                              >
                                {item.titleofaward}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameofawardingorganization'
                              >
                                {item.nameofawardingorganization}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='contactsofawardingorganization'
                              >
                                {item.contactsofawardingorganization}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='briefdetailsofworkhonored'
                              >
                                {item.briefdetailsofworkhonored}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='prizeamount'
                              >
                                {item.prizeamount}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='awardwinnername'
                              >
                                {item.awardwinnername}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='awardwinnerdesignation'
                              >
                                {item.awardwinnerdesignation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='awardwinnerdepartment'
                              >
                                {item.awardwinnerdepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='remarks'
                              >
                                {item.remarks}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='annexpagerefno'
                              >
                                {item.annexpagerefno}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.honorsandawards_categoryId?.length && (
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
                    Mentorshipinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of mentor</TableCell>

                          <TableCell align='left'>
                            Field areas of expertise
                          </TableCell>

                          <TableCell align='left'>
                            National or international
                          </TableCell>

                          <TableCell align='left'>
                            Mentoring sessions held at BIC during the year
                          </TableCell>

                          <TableCell align='left'>
                            No of startups facilitated through sessions
                          </TableCell>

                          <TableCell align='left'>
                            if corporate body mou signing date (ifany)
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.mentorshipinfo_categoryId &&
                          Array.isArray(record.mentorshipinfo_categoryId) &&
                          record.mentorshipinfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/mentorshipinfo/${item.id}/show`}
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
                                data-label='nameofmentor'
                              >
                                {item.nameofmentor}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fieldareasofexpertise'
                              >
                                {item.fieldareasofexpertise}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nationalinternational'
                              >
                                {item.nationalinternational}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='mentoringsessionsheldatbicduringtheyear'
                              >
                                {item.mentoringsessionsheldatbicduringtheyear}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofstartupsfacilitatedthroughsessions'
                              >
                                {item.noofstartupsfacilitatedthroughsessions}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='ifcorporatebodymousigningdateifany'
                              >
                                {dataFormat.dateTimeFormatter(
                                  item.ifcorporatebodymousigningdateifany,
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.mentorshipinfo_categoryId?.length && (
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
                    Partnershipinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Name of partnering organization
                          </TableCell>

                          <TableCell align='left'>
                            National or International
                          </TableCell>

                          <TableCell align='left'>
                            Field area of expertise
                          </TableCell>

                          <TableCell align='left'>Type of link</TableCell>

                          <TableCell align='left'>Date of signing</TableCell>

                          <TableCell align='left'>
                            Major areas of cooperation modalities
                          </TableCell>

                          <TableCell align='left'>
                            Key outcomes from links
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.partnershipinfo_categoryId &&
                          Array.isArray(record.partnershipinfo_categoryId) &&
                          record.partnershipinfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/partnershipinfo/${item.id}/show`}
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
                                data-label='nameofpartneringorganization'
                              >
                                {item.nameofpartneringorganization}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nationalinternational'
                              >
                                {item.nationalinternational}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fieldareaofexpertise'
                              >
                                {item.fieldareaofexpertise}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='typeoflink'
                              >
                                {item.typeoflink}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofsigning'
                              >
                                {dataFormat.dateTimeFormatter(
                                  item.dateofsigning,
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
                                data-label='majorareasofcooperationmodalities'
                              >
                                {item.majorareasofcooperationmodalities}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='keyoutcomesfromlinks'
                              >
                                {item.keyoutcomesfromlinks}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.partnershipinfo_categoryId?.length && (
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
                    Patents Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Lead inventor name</TableCell>

                          <TableCell align='left'>
                            Lead inventor designation
                          </TableCell>

                          <TableCell align='left'>
                            Lead inventor department
                          </TableCell>

                          <TableCell align='left'>Title of invention</TableCell>

                          <TableCell align='left'>Category of IP</TableCell>

                          <TableCell align='left'>Development status</TableCell>

                          <TableCell align='left'>
                            Key scientific aspects
                          </TableCell>

                          <TableCell align='left'>Commercial partner</TableCell>

                          <TableCell align='left'>
                            Patent filed with name
                          </TableCell>

                          <TableCell align='left'>
                            Patent filed with date
                          </TableCell>

                          <TableCell align='left'>Field of use</TableCell>

                          <TableCell align='left'>
                            National or International
                          </TableCell>

                          <TableCell align='left'>
                            Duration of agreement
                          </TableCell>

                          <TableCell align='left'>Financial support</TableCell>

                          <TableCell align='left'>Previous disclosur</TableCell>

                          <TableCell align='left'>Date of filling</TableCell>

                          <TableCell align='left'>
                            Status of negotiation
                          </TableCell>

                          <TableCell align='left'>Licensee name</TableCell>

                          <TableCell align='left'>
                            Licensee organization
                          </TableCell>

                          <TableCell align='left'>Annex page ref no</TableCell>

                          <TableCell align='left'>Remarks</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.patents_categoryId &&
                          Array.isArray(record.patents_categoryId) &&
                          record.patents_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/patents/${item.id}/show`}
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
                                data-label='leadinventorname'
                              >
                                {item.leadinventorname}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='leadinventordesignation'
                              >
                                {item.leadinventordesignation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='leadinventordepartment'
                              >
                                {item.leadinventordepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='titleofinvention'
                              >
                                {item.titleofinvention}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='categoryofip'
                              >
                                {item.categoryofip}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='developmentstatus'
                              >
                                {item.developmentstatus}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='keyscientificaspects'
                              >
                                {item.keyscientificaspects}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='commercialpartner'
                              >
                                {item.commercialpartner}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='patentfiledwithname'
                              >
                                {item.patentfiledwithname}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='patentfiledwithdate'
                              >
                                {item.patentfiledwithdate}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fieldofuse'
                              >
                                {item.fieldofuse}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nationalinternational'
                              >
                                {item.nationalinternational}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='durationofagreement'
                              >
                                {item.durationofagreement}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='financialsupport'
                              >
                                {item.financialsupport}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='previousdisclosur'
                              >
                                {item.previousdisclosur}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateoffilling'
                              >
                                {dataFormat.dateTimeFormatter(
                                  item.dateoffilling,
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
                                data-label='statusofnegotiation'
                              >
                                {item.statusofnegotiation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='licenseename'
                              >
                                {item.licenseename}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='licenseeorganization'
                              >
                                {item.licenseeorganization}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='annexpagerefno'
                              >
                                {item.annexpagerefno}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='remarks'
                              >
                                {item.remarks}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.patents_categoryId?.length && (
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
                    Policyadvocacy Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Name of government body presented
                          </TableCell>

                          <TableCell align='left'>
                            Date of presentation
                          </TableCell>

                          <TableCell align='left'>Name of PI</TableCell>

                          <TableCell align='left'>PI designation</TableCell>

                          <TableCell align='left'>PI department</TableCell>

                          <TableCell align='left'>Area advocated</TableCell>

                          <TableCell align='left'>Description</TableCell>

                          <TableCell align='left'>
                            Name coalition partner
                          </TableCell>

                          <TableCell align='left'>Issue verification</TableCell>

                          <TableCell align='left'>
                            Backing research status
                          </TableCell>

                          <TableCell align='left'>
                            Advocacy tools adopted
                          </TableCell>

                          <TableCell align='left'>Anex page no</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.policyadvocacy_categoryId &&
                          Array.isArray(record.policyadvocacy_categoryId) &&
                          record.policyadvocacy_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/policyadvocacy/${item.id}/show`}
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
                                data-label='nameofgovernmentbodypresented'
                              >
                                {item.nameofgovernmentbodypresented}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofpresentation'
                              >
                                {dataFormat.dateTimeFormatter(
                                  item.dateofpresentation,
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
                                data-label='nameofpi'
                              >
                                {item.nameofpi}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='pidesignation'
                              >
                                {item.pidesignation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='pidepartment'
                              >
                                {item.pidepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='areaadvocated'
                              >
                                {item.areaadvocated}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='description'
                              >
                                {item.description}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='namecoalitionpartner'
                              >
                                {item.namecoalitionpartner}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='issueverification'
                              >
                                {item.issueverification}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='backingresearchstatus'
                              >
                                {item.backingresearchstatus}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='advocacytoolsadopted'
                              >
                                {item.advocacytoolsadopted}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='anexpageno'
                              >
                                {item.anexpageno}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.policyadvocacy_categoryId?.length && (
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
                    Researchlinks Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Type of linkage</TableCell>

                          <TableCell align='left'>Region</TableCell>

                          <TableCell align='left'>
                            Name host institution
                          </TableCell>

                          <TableCell align='left'>
                            Address host institution
                          </TableCell>

                          <TableCell align='left'>
                            Country of host institution
                          </TableCell>

                          <TableCell align='left'>
                            Name of collaborating partners
                          </TableCell>

                          <TableCell align='left'>
                            Address of collaborating partners
                          </TableCell>

                          <TableCell align='left'>
                            Country of collaborating partners
                          </TableCell>

                          <TableCell align='left'>Field of study</TableCell>

                          <TableCell align='left'>
                            Research border areas
                          </TableCell>

                          <TableCell align='left'>
                            Scope of collaboration
                          </TableCell>

                          <TableCell align='left'>
                            Linkage establishment date
                          </TableCell>

                          <TableCell align='left'>
                            Salient features of linkage
                          </TableCell>

                          <TableCell align='left'>
                            Anex page reference
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.researchlinks_categoryId &&
                          Array.isArray(record.researchlinks_categoryId) &&
                          record.researchlinks_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/researchlinks/${item.id}/show`}
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
                                data-label='typeoflinkage'
                              >
                                {item.typeoflinkage}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='region'
                              >
                                {item.region}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='namehostinstitution'
                              >
                                {item.namehostinstitution}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='addresshostinstitution'
                              >
                                {item.addresshostinstitution}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='countryofhostinstitution'
                              >
                                {item.countryofhostinstitution}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameofcollaboratingpartners'
                              >
                                {item.nameofcollaboratingpartners}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='addressofcollaboratingpartners'
                              >
                                {item.addressofcollaboratingpartners}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='countryofcollaboratingpartners'
                              >
                                {item.countryofcollaboratingpartners}
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
                                data-label='researchborderareas'
                              >
                                {item.researchborderareas}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='scopeofcollaboration'
                              >
                                {item.scopeofcollaboration}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='linkageestablishmentdate'
                              >
                                {item.linkageestablishmentdate}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='salientfeaturesoflinkage'
                              >
                                {item.salientfeaturesoflinkage}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='anexpagereference'
                              >
                                {item.anexpagereference}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.researchlinks_categoryId?.length && (
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
                    Researchpolicy Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Title of research policy
                          </TableCell>

                          <TableCell align='left'>
                            Research policy reference number
                          </TableCell>

                          <TableCell align='left'>Date of approval</TableCell>

                          <TableCell align='left'>Approved by</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.researchpolicy_categoryId &&
                          Array.isArray(record.researchpolicy_categoryId) &&
                          record.researchpolicy_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/researchpolicy/${item.id}/show`}
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
                                data-label='titleofresearchpolicy'
                              >
                                {item.titleofresearchpolicy}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='researchpolicyreferencenumber'
                              >
                                {item.researchpolicyreferencenumber}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofapproval'
                              >
                                {dataFormat.dateTimeFormatter(
                                  item.dateofapproval,
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
                                data-label='approvedby'
                              >
                                {item.approvedby}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.researchpolicy_categoryId?.length && (
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
                    Researchproposalandgrants Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Approved or required modification or differed or
                            disapproved
                          </TableCell>

                          <TableCell align='left'>Thematic area</TableCell>

                          <TableCell align='left'>Name of research</TableCell>

                          <TableCell align='left'>name of PI</TableCell>

                          <TableCell align='left'>PI designation</TableCell>

                          <TableCell align='left'>PI department</TableCell>

                          <TableCell align='left'>name of co PI</TableCell>

                          <TableCell align='left'>co PI designation</TableCell>

                          <TableCell align='left'>co PI department</TableCell>

                          <TableCell align='left'>
                            Title of research proposal
                          </TableCell>

                          <TableCell align='left'>
                            Duration starting and ending date
                          </TableCell>

                          <TableCell align='left'>
                            Total funding requested RS
                          </TableCell>

                          <TableCell align='left'>
                            Total funding approved
                          </TableCell>

                          <TableCell align='left'>
                            Total funding released
                          </TableCell>

                          <TableCell align='left'>
                            Collaborating partner details (if any)
                          </TableCell>

                          <TableCell align='left'>
                            cofounding partner details (if any)
                          </TableCell>

                          <TableCell align='left'>
                            Name of sponsoring agency
                          </TableCell>

                          <TableCell align='left'>
                            Address of sponsoring agency
                          </TableCell>

                          <TableCell align='left'>
                            Country of sponsoring agency
                          </TableCell>

                          <TableCell align='left'>Status</TableCell>

                          <TableCell align='left'>Remarks</TableCell>

                          <TableCell align='left'>
                            Related information
                          </TableCell>

                          <TableCell align='left'>
                            Key project deliverables
                          </TableCell>

                          <TableCell align='left'>
                            ORIC overhead in approved funding
                          </TableCell>

                          <TableCell align='left'>Date of contract</TableCell>

                          <TableCell align='left'>Date of approval</TableCell>

                          <TableCell align='left'>
                            Date of project completion
                          </TableCell>

                          <TableCell align='left'>
                            Total funding utilized
                          </TableCell>

                          <TableCell align='left'>Approved</TableCell>

                          <TableCell align='left'>
                            Date of proposal submission
                          </TableCell>

                          <TableCell align='left'>Date of review</TableCell>

                          <TableCell align='left'>
                            Status of IRB meeting
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.researchproposalandgrants_categoryId &&
                          Array.isArray(
                            record.researchproposalandgrants_categoryId,
                          ) &&
                          record.researchproposalandgrants_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/researchproposalandgrants/${item.id}/show`}
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
                                  data-label='approvedorrequiredmodificationordifferedordisapproved'
                                >
                                  {
                                    item.approvedorrequiredmodificationordifferedordisapproved
                                  }
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='thematicarea'
                                >
                                  {item.thematicarea}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofresearch'
                                >
                                  {item.nameofresearch}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofpi'
                                >
                                  {item.nameofpi}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='pidesignation'
                                >
                                  {item.pidesignation}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='pidepartment'
                                >
                                  {item.pidepartment}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofcopi'
                                >
                                  {item.nameofcopi}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='copidesignation'
                                >
                                  {item.copidesignation}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='copidepartment'
                                >
                                  {item.copidepartment}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='titleofresearchproposal'
                                >
                                  {item.titleofresearchproposal}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='durationstartingandendingdate'
                                >
                                  {item.durationstartingandendingdate}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalfundingrequestedrs'
                                >
                                  {item.totalfundingrequestedrs}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalfundingapproved'
                                >
                                  {item.totalfundingapproved}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='totalfundingreleased'
                                >
                                  {item.totalfundingreleased}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='collaboratingpartnerdetailsifany'
                                >
                                  {item.collaboratingpartnerdetailsifany}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='cofundingpartnerdetailsifany'
                                >
                                  {item.cofundingpartnerdetailsifany}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='nameofsponsringagency'
                                >
                                  {item.nameofsponsringagency}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='addressofsponsoringagency'
                                >
                                  {item.addressofsponsoringagency}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='countryofsponsoringagency'
                                >
                                  {item.countryofsponsoringagency}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='status'
                                >
                                  {item.status}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='remarks'
                                >
                                  {item.remarks}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='relatedinformation'
                                >
                                  {item.relatedinformation}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='keyprojectdeliverables'
                                >
                                  {item.keyprojectdeliverables}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='oricoverheadinapprovedfunding'
                                >
                                  {item.oricoverheadinapprovedfunding}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='dateofcontract'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateofcontract,
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
                                  data-label='dateofapproval'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateofapproval,
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
                                  data-label='dateofprojectcompletion'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateofprojectcompletion,
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
                                  data-label='totalfundingutilized'
                                >
                                  {item.totalfundingutilized}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='approved'
                                >
                                  {item.approved}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='dateofproposalsubmission'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateofproposalsubmission,
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
                                  data-label='dateofreview'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.dateofreview,
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
                                  data-label='statusofirbmeeting'
                                >
                                  {item.statusofirbmeeting}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.researchproposalandgrants_categoryId?.length && (
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
                    Spinoffstartups Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of startup</TableCell>

                          <TableCell align='left'>
                            Brief idea backing research sector field
                          </TableCell>

                          <TableCell align='left'>
                            faculty member name designation department
                          </TableCell>

                          <TableCell align='left'>IP status</TableCell>

                          <TableCell align='left'>Name of spinoff</TableCell>

                          <TableCell align='left'>Stage</TableCell>

                          <TableCell align='left'>
                            license agreement signed (if any)
                          </TableCell>

                          <TableCell align='left'>Funding sources</TableCell>

                          <TableCell align='left'>
                            total Faculty startups
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.spinoffstartups_categoryId &&
                          Array.isArray(record.spinoffstartups_categoryId) &&
                          record.spinoffstartups_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/spinoffstartups/${item.id}/show`}
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
                                data-label='nameofstartup'
                              >
                                {item.nameofstartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='briefideabackingresearchsectorfield'
                              >
                                {item.briefideabackingresearchsectorfield}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='facultymembernamedesignationdepartment'
                              >
                                {item.facultymembernamedesignationdepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='ipstatus'
                              >
                                {item.ipstatus}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameofspinoff'
                              >
                                {item.nameofspinoff}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='stage'
                              >
                                {item.stage}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='licenseagreementsignedifany'
                              >
                                {item.licenseagreementsignedifany}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fundingsources'
                              >
                                {item.fundingsources}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalfacultystartups'
                              >
                                {item.totalfacultystartups}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.spinoffstartups_categoryId?.length && (
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
                    Startupevents Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of event</TableCell>

                          <TableCell align='left'>Date held</TableCell>

                          <TableCell align='left'>Panelist details</TableCell>

                          <TableCell align='left'>Ideas applied</TableCell>

                          <TableCell align='left'>Ideas selected</TableCell>

                          <TableCell align='left'>Winners details</TableCell>

                          <TableCell align='left'>
                            Prize funding amount
                          </TableCell>

                          <TableCell align='left'>
                            Event funding sources sponsors
                          </TableCell>

                          <TableCell align='left'>
                            No. of ideas applied
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startupevents_categoryId &&
                          Array.isArray(record.startupevents_categoryId) &&
                          record.startupevents_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/startupevents/${item.id}/show`}
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
                                data-label='nameofevent'
                              >
                                {item.nameofevent}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateheld'
                              >
                                {dataFormat.dateTimeFormatter(item.dateheld)}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='panelistdetails'
                              >
                                {item.panelistdetails}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='ideasapplied'
                              >
                                {item.ideasapplied}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='ideasselected'
                              >
                                {item.ideasselected}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='winnersdetails'
                              >
                                {item.winnersdetails}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='prizefundingamount'
                              >
                                {item.prizefundingamount}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='eventfundingsourcessponsors'
                              >
                                {item.eventfundingsourcessponsors}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofideasapplied'
                              >
                                {item.noofideasapplied}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startupevents_categoryId?.length && (
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
                    Startupincubation Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of Startup</TableCell>

                          <TableCell align='left'>Idea</TableCell>

                          <TableCell align='left'>Team members</TableCell>

                          <TableCell align='left'>Sector field</TableCell>

                          <TableCell align='left'>
                            Seed funding secured (if any)
                          </TableCell>

                          <TableCell align='left'>Incubated since</TableCell>

                          <TableCell align='left'>
                            Expected Graduation
                          </TableCell>

                          <TableCell align='left'>
                            Internship jobs provided via startup
                          </TableCell>

                          <TableCell align='left'>Total slots</TableCell>

                          <TableCell align='left'>Occupied slots</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startupincubation_categoryId &&
                          Array.isArray(record.startupincubation_categoryId) &&
                          record.startupincubation_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/startupincubation/${item.id}/show`}
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
                                data-label='nameofstartup'
                              >
                                {item.nameofstartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='idea'
                              >
                                {item.idea}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='teammembers'
                              >
                                {item.teammembers}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='sectorfield'
                              >
                                {item.sectorfield}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='seedfundingsecuredifany'
                              >
                                {item.seedfundingsecuredifany}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='incubatedsince'
                              >
                                {item.incubatedsince}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='expectedgraduation'
                              >
                                {item.expectedgraduation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='internshipjobsprovidedviastartup'
                              >
                                {item.internshipjobsprovidedviastartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalslots'
                              >
                                {item.totalslots}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='occupiedslots'
                              >
                                {item.occupiedslots}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startupincubation_categoryId?.length && (
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
                    Startupmentoring Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of mentor</TableCell>

                          <TableCell align='left'>Designation</TableCell>

                          <TableCell align='left'>Field area</TableCell>

                          <TableCell align='left'>
                            No. of mentoring lectures provided
                          </TableCell>

                          <TableCell align='left'>
                            No of startups facilitated
                          </TableCell>

                          <TableCell align='left'>
                            Cost per mentoring hour charged (if any)
                          </TableCell>

                          <TableCell align='left'>
                            Total mentoring sessions
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startupmentoring_categoryId &&
                          Array.isArray(record.startupmentoring_categoryId) &&
                          record.startupmentoring_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/startupmentoring/${item.id}/show`}
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
                                data-label='nameofmentor'
                              >
                                {item.nameofmentor}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='designation'
                              >
                                {item.designation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fieldarea'
                              >
                                {item.fieldarea}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofmentoringlecturesprovided'
                              >
                                {item.noofmentoringlecturesprovided}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofstartupsfacilitated'
                              >
                                {item.noofstartupsfacilitated}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='costpermentoringhourchargedifany'
                              >
                                {item.costpermentoringhourchargedifany}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalmentoringsessions'
                              >
                                {item.totalmentoringsessions}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startupmentoring_categoryId?.length && (
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
                    Startuprevenue Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of startup</TableCell>

                          <TableCell align='left'>
                            Faculty member name designation department
                          </TableCell>

                          <TableCell align='left'>Current status</TableCell>

                          <TableCell align='left'>
                            Incubated since and expected graduation
                          </TableCell>

                          <TableCell align='left'>Revenue generated</TableCell>

                          <TableCell align='left'>
                            Total months in incubation
                          </TableCell>

                          <TableCell align='left'>Average revenue</TableCell>

                          <TableCell align='left'>
                            Sharing mechanism between BIC, HEC and startup
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startuprevenue_categoryId &&
                          Array.isArray(record.startuprevenue_categoryId) &&
                          record.startuprevenue_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/startuprevenue/${item.id}/show`}
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
                                data-label='nameofstartup'
                              >
                                {item.nameofstartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='facultymembernamedesignationdepartment'
                              >
                                {item.facultymembernamedesignationdepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='currentstatus'
                              >
                                {item.currentstatus}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='incubatedsinceandexpectedgraduation'
                              >
                                {item.incubatedsinceandexpectedgraduation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='revenuegenerated'
                              >
                                {item.revenuegenerated}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalmonthsinincubation'
                              >
                                {item.totalmonthsinincubation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='averagerevenue'
                              >
                                {item.averagerevenue}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='sharingmechanismbetweenbicheiandstartup'
                              >
                                {item.sharingmechanismbetweenbicheiandstartup}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startuprevenue_categoryId?.length && (
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
                    Startupsappliedforpitching Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Idea</TableCell>

                          <TableCell align='left'>Entrepreneur</TableCell>

                          <TableCell align='left'>Field area</TableCell>

                          <TableCell align='left'>
                            Educational background
                          </TableCell>

                          <TableCell align='left'>Team members</TableCell>

                          <TableCell align='left'>Current status</TableCell>

                          <TableCell align='left'>
                            Result remarks from competition
                          </TableCell>

                          <TableCell align='left'>
                            Availability of funding seed money
                          </TableCell>

                          <TableCell align='left'>Date held</TableCell>

                          <TableCell align='left'>
                            No of ideas applied
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startupsappliedforpitching_categoryId &&
                          Array.isArray(
                            record.startupsappliedforpitching_categoryId,
                          ) &&
                          record.startupsappliedforpitching_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/startupsappliedforpitching/${item.id}/show`}
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
                                  data-label='idea'
                                >
                                  {item.idea}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='entrepreneur'
                                >
                                  {item.entrepreneur}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='fieldarea'
                                >
                                  {item.fieldarea}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='educationalbackground'
                                >
                                  {item.educationalbackground}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='teammembers'
                                >
                                  {item.teammembers}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='currentstatus'
                                >
                                  {item.currentstatus}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='resultremarksfromcompetition'
                                >
                                  {item.resultremarksfromcompetition}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='availabilityoffundingseedmoney'
                                >
                                  {item.availabilityoffundingseedmoney}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='dateheld'
                                >
                                  {item.dateheld}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='noofideasapplied'
                                >
                                  {item.noofideasapplied}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startupsappliedforpitching_categoryId?.length && (
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
                    Startupsincubated Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of startup</TableCell>

                          <TableCell align='left'>Brief idea</TableCell>

                          <TableCell align='left'>
                            Faculty member name
                          </TableCell>

                          <TableCell align='left'>
                            Faculty member designation
                          </TableCell>

                          <TableCell align='left'>
                            Faculty member department
                          </TableCell>

                          <TableCell align='left'>Sector field</TableCell>

                          <TableCell align='left'>
                            Seed funding secured (if any)
                          </TableCell>

                          <TableCell align='left'>Stage</TableCell>

                          <TableCell align='left'>
                            Incubatedsinceexpectedgraduation
                          </TableCell>

                          <TableCell align='left'>
                            Internship / jobs created
                          </TableCell>

                          <TableCell align='left'>
                            Total faculty startups
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startupsincubated_categoryId &&
                          Array.isArray(record.startupsincubated_categoryId) &&
                          record.startupsincubated_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/startupsincubated/${item.id}/show`}
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
                                data-label='nameofstartup'
                              >
                                {item.nameofstartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='briefidea'
                              >
                                {item.briefidea}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='facultymembername'
                              >
                                {item.facultymembername}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='facultymemberdesignation'
                              >
                                {item.facultymemberdesignation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='facultymemberdepartment'
                              >
                                {item.facultymemberdepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='sectorfield'
                              >
                                {item.sectorfield}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='seedfundingsecuredifany'
                              >
                                {item.seedfundingsecuredifany}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='stage'
                              >
                                {item.stage}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='incubatedsinceexpectedgraduation'
                              >
                                {item.incubatedsinceexpectedgraduation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='internshipjobscreated'
                              >
                                {item.internshipjobscreated}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalfacultystartups'
                              >
                                {item.totalfacultystartups}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startupsincubated_categoryId?.length && (
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
                    Trainingcourseinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of course</TableCell>

                          <TableCell align='left'>Type of course</TableCell>

                          <TableCell align='left'>Level offered</TableCell>

                          <TableCell align='left'>
                            Major areas covered
                          </TableCell>

                          <TableCell align='left'>
                            Key learning outcomes
                          </TableCell>

                          <TableCell align='left'>
                            No of startups completed the course
                          </TableCell>

                          <TableCell align='left'>Course development</TableCell>

                          <TableCell align='left'>
                            If outsourced name of course offered
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.trainingcourseinfo_categoryId &&
                          Array.isArray(record.trainingcourseinfo_categoryId) &&
                          record.trainingcourseinfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/trainingcourseinfo/${item.id}/show`}
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
                                data-label='nameofcourse'
                              >
                                {item.nameofcourse}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='typeofcourse'
                              >
                                {item.typeofcourse}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='leveloffered'
                              >
                                {item.leveloffered}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='majorareascovered'
                              >
                                {item.majorareascovered}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='keylearningoutcomes'
                              >
                                {item.keylearningoutcomes}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofstartupscompletedthecourse'
                              >
                                {item.noofstartupscompletedthecourse}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='coursedevelopment'
                              >
                                {item.coursedevelopment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='ifoutsourcednameofcourseoffered'
                              >
                                {item.ifoutsourcednameofcourseoffered}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.trainingcourseinfo_categoryId?.length && (
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
                    Trainings Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Title of training</TableCell>

                          <TableCell align='left'>Date of event</TableCell>

                          <TableCell align='left'>
                            Number of participants
                          </TableCell>

                          <TableCell align='left'>
                            Major focus area and outcomes
                          </TableCell>

                          <TableCell align='left'>Audience type</TableCell>

                          <TableCell align='left'>Organizer</TableCell>

                          <TableCell align='left'>
                            Name of ORIC personal attended
                          </TableCell>

                          <TableCell align='left'>
                            Details of ORIC personnel attended
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.trainings_categoryId &&
                          Array.isArray(record.trainings_categoryId) &&
                          record.trainings_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/trainings/${item.id}/show`}
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
                                data-label='titleoftraining'
                              >
                                {item.titleoftraining}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofevent'
                              >
                                {dataFormat.dateTimeFormatter(item.dateofevent)}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='numberofparticipants'
                              >
                                {item.numberofparticipants}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='majorfocusareaandoutcomes'
                              >
                                {item.majorfocusareaandoutcomes}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='audiencetype'
                              >
                                {item.audiencetype}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='organizer'
                              >
                                {item.organizer}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='nameoforicpersonalattended'
                              >
                                {item.nameoforicpersonalattended}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='detailsoforicpersonnelattended'
                              >
                                {item.detailsoforicpersonnelattended}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.trainings_categoryId?.length && (
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
                    Universityadvancedstudiesandresearchboard Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>
                            Name of member developed with
                          </TableCell>

                          <TableCell align='left'>Execution date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.universityadvancedstudiesandresearchboard_categoryId &&
                          Array.isArray(
                            record.universityadvancedstudiesandresearchboard_categoryId,
                          ) &&
                          record.universityadvancedstudiesandresearchboard_categoryId?.map(
                            (item) => (
                              <TableRow
                                key={item.id}
                                component='a'
                                href={`#/admin/universityadvancedstudiesandresearchboard/${item.id}/show`}
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
                                  data-label='nameofmemberdevelopedwith'
                                >
                                  {item.nameofmemberdevelopedwith}
                                </TableCell>

                                <TableCell
                                  align='left'
                                  sx={{
                                    '&:last-child': { borderRight: 0 },
                                    borderRight: 2,
                                    borderColor: '#D8D9DA',
                                    borderWidth: 1,
                                  }}
                                  data-label='executiondate'
                                >
                                  {dataFormat.dateTimeFormatter(
                                    item.executiondate,
                                  )}
                                </TableCell>
                              </TableRow>
                            ),
                          )}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.universityadvancedstudiesandresearchboard_categoryId
                    ?.length && (
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
                    Visits Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of visits</TableCell>

                          <TableCell align='left'>Date of visit</TableCell>

                          <TableCell align='left'>Agenda of visit</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.visits_categoryId &&
                          Array.isArray(record.visits_categoryId) &&
                          record.visits_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/visits/${item.id}/show`}
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
                                data-label='nameofvisits'
                              >
                                {item.nameofvisits}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateofvisit'
                              >
                                {item.dateofvisit}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='agendaofvisit'
                              >
                                {item.agendaofvisit}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.visits_categoryId?.length && (
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
                    Workshopeventinfo Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Title</TableCell>

                          <TableCell align='left'>Date held</TableCell>

                          <TableCell align='left'>Venue</TableCell>

                          <TableCell align='left'>
                            Field thematic area
                          </TableCell>

                          <TableCell align='left'>
                            Panelist mentor advisor name
                          </TableCell>

                          <TableCell align='left'>
                            Panelist mentor advisor designation
                          </TableCell>

                          <TableCell align='left'>Arranged by</TableCell>

                          <TableCell align='left'>Faculty student</TableCell>

                          <TableCell align='left'>No of participants</TableCell>

                          <TableCell align='left'>
                            Total no events held
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.workshopeventinfo_categoryId &&
                          Array.isArray(record.workshopeventinfo_categoryId) &&
                          record.workshopeventinfo_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/workshopeventinfo/${item.id}/show`}
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
                                data-label='title'
                              >
                                {item.title}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='dateheld'
                              >
                                {dataFormat.dateTimeFormatter(item.dateheld)}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='venue'
                              >
                                {item.venue}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='fieldthematicarea'
                              >
                                {item.fieldthematicarea}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='panelistmentoradvisorname'
                              >
                                {item.panelistmentoradvisorname}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='panelistmentoradvisordesignation'
                              >
                                {item.panelistmentoradvisordesignation}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='arrangedby'
                              >
                                {item.arrangedby}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='facultystudent'
                              >
                                {item.facultystudent}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='noofparticipants'
                              >
                                {item.noofparticipants}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='totalnoeventsheld'
                              >
                                {item.totalnoeventsheld}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.workshopeventinfo_categoryId?.length && (
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
                    Startupemploment Category Id
                  </Typography>
                  <Divider />
                  <div className='overflow-x-auto'>
                    <Table size='small' aria-label='a dense table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>Name of startup</TableCell>

                          <TableCell align='left'>
                            Startup faculty member name
                          </TableCell>

                          <TableCell align='left'>
                            Designation department
                          </TableCell>

                          <TableCell align='left'>
                            Startup status incubated graduated
                          </TableCell>

                          <TableCell align='left'>Employee name</TableCell>

                          <TableCell align='left'>Employment type</TableCell>

                          <TableCell align='left'>
                            Salary stipend honorarium
                          </TableCell>

                          <TableCell align='left'>Employee since</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {record.startupemploment_categoryId &&
                          Array.isArray(record.startupemploment_categoryId) &&
                          record.startupemploment_categoryId?.map((item) => (
                            <TableRow
                              key={item.id}
                              component='a'
                              href={`#/admin/startupemploment/${item.id}/show`}
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
                                data-label='nameofstartup'
                              >
                                {item.nameofstartup}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='startupfacultymembername'
                              >
                                {item.startupfacultymembername}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='designationdepartment'
                              >
                                {item.designationdepartment}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='startupstatusincubatedgraduated'
                              >
                                {item.startupstatusincubatedgraduated}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='employeename'
                              >
                                {item.employeename}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='employmenttype'
                              >
                                {item.employmenttype}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='salarystipendhonorarium'
                              >
                                {item.salarystipendhonorarium}
                              </TableCell>

                              <TableCell
                                align='left'
                                sx={{
                                  '&:last-child': { borderRight: 0 },
                                  borderRight: 2,
                                  borderColor: '#D8D9DA',
                                  borderWidth: 1,
                                }}
                                data-label='employeesince'
                              >
                                {item.employeesince}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                  {!record?.startupemploment_categoryId?.length && (
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
export default CategoriesForm;
