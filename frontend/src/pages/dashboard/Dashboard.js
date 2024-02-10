import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { CircularProgress, Box, Grid } from '@mui/material'
import {
    useManagementDispatch,
    useManagementState,
} from '../../context/ManagementContext'
import InfoIcon from '@mui/icons-material/Info'
import axios from 'axios'
// styles
import useStyles from './styles'
// components
import Widget from '../../components/Widget/Widget'

const Dashboard = () => {
    let classes = useStyles()
    const managementDispatch = useManagementDispatch()
    const managementValue = useManagementState()

    const [users, setUsers] = useState(0)
    const [activegraduatedstartupinfo, setActivegraduatedstartupinfo] =
        useState(0)
    const [anualresearchrevenue, setAnualresearchrevenue] = useState(0)
    const [bicdata, setBicdata] = useState(0)
    const [bicfundinginfo, setBicfundinginfo] = useState(0)
    const [bichumanresource, setBichumanresource] = useState(0)
    const [bicserviceofferinginfo, setBicserviceofferinginfo] = useState(0)
    const [bicsupportinfo, setBicsupportinfo] = useState(0)
    const [categories, setCategories] = useState(0)
    const [colaborationagreement, setColaborationagreement] = useState(0)
    const [commities, setCommities] = useState(0)
    const [coursedetailsinfo, setCoursedetailsinfo] = useState(0)
    const [engagementevents, setEngagementevents] = useState(0)
    const [
        graduatedstartupfacilitationinfo,
        setGraduatedstartupfacilitationinfo,
    ] = useState(0)
    const [honorsandawards, setHonorsandawards] = useState(0)
    const [humanresource, setHumanresource] = useState(0)
    const [mentorshipinfo, setMentorshipinfo] = useState(0)
    const [oricdata, setOricdata] = useState(0)
    const [partnershipinfo, setPartnershipinfo] = useState(0)
    const [patents, setPatents] = useState(0)
    const [policyadvocacy, setPolicyadvocacy] = useState(0)
    const [researchlinks, setResearchlinks] = useState(0)
    const [researchpolicy, setResearchpolicy] = useState(0)
    const [researchproposalandgrants, setResearchproposalandgrants] =
        useState(0)
    const [spinoffstartups, setSpinoffstartups] = useState(0)
    const [startupevents, setStartupevents] = useState(0)
    const [startupincubation, setStartupincubation] = useState(0)
    const [startupmentoring, setStartupmentoring] = useState(0)
    const [startuprevenue, setStartuprevenue] = useState(0)
    const [startupsappliedforpitching, setStartupsappliedforpitching] =
        useState(0)
    const [startupsincubated, setStartupsincubated] = useState(0)
    const [trainingcourseinfo, setTrainingcourseinfo] = useState(0)
    const [trainings, setTrainings] = useState(0)
    const [university, setUniversity] = useState(0)
    const [
        universityadvancedstudiesandresearchboard,
        setUniversityadvancedstudiesandresearchboard,
    ] = useState(0)
    const [visits, setVisits] = useState(0)
    const [workshopeventinfo, setWorkshopeventinfo] = useState(0)
    const [startupemploment, setStartupemploment] = useState(0)

    const [currentUser, setCurrentUser] = useState(null)

    async function loadData() {
        const fns = [
            setUsers,
            setActivegraduatedstartupinfo,
            setAnualresearchrevenue,
            setBicdata,
            setBicfundinginfo,
            setBichumanresource,
            setBicserviceofferinginfo,
            setBicsupportinfo,
            setCategories,
            setColaborationagreement,
            setCommities,
            setCoursedetailsinfo,
            setEngagementevents,
            setGraduatedstartupfacilitationinfo,
            setHonorsandawards,
            setHumanresource,
            setMentorshipinfo,
            setOricdata,
            setPartnershipinfo,
            setPatents,
            setPolicyadvocacy,
            setResearchlinks,
            setResearchpolicy,
            setResearchproposalandgrants,
            setSpinoffstartups,
            setStartupevents,
            setStartupincubation,
            setStartupmentoring,
            setStartuprevenue,
            setStartupsappliedforpitching,
            setStartupsincubated,
            setTrainingcourseinfo,
            setTrainings,
            setUniversity,
            setUniversityadvancedstudiesandresearchboard,
            setVisits,
            setWorkshopeventinfo,
            setStartupemploment,
        ]

        const responseUsers = axios.get(`/users/count`)
        const responseActivegraduatedstartupinfo = axios.get(
            `/activegraduatedstartupinfo/count`
        )
        const responseAnualresearchrevenue = axios.get(
            `/anualresearchrevenue/count`
        )
        const responseBicdata = axios.get(`/bicdata/count`)
        const responseBicfundinginfo = axios.get(`/bicfundinginfo/count`)
        const responseBichumanresource = axios.get(`/bichumanresource/count`)
        const responseBicserviceofferinginfo = axios.get(
            `/bicserviceofferinginfo/count`
        )
        const responseBicsupportinfo = axios.get(`/bicsupportinfo/count`)
        const responseCategories = axios.get(`/categories/count`)
        const responseColaborationagreement = axios.get(
            `/colaborationagreement/count`
        )
        const responseCommities = axios.get(`/commities/count`)
        const responseCoursedetailsinfo = axios.get(`/coursedetailsinfo/count`)
        const responseEngagementevents = axios.get(`/engagementevents/count`)
        const responseGraduatedstartupfacilitationinfo = axios.get(
            `/graduatedstartupfacilitationinfo/count`
        )
        const responseHonorsandawards = axios.get(`/honorsandawards/count`)
        const responseHumanresource = axios.get(`/humanresource/count`)
        const responseMentorshipinfo = axios.get(`/mentorshipinfo/count`)
        const responseOricdata = axios.get(`/oricdata/count`)
        const responsePartnershipinfo = axios.get(`/partnershipinfo/count`)
        const responsePatents = axios.get(`/patents/count`)
        const responsePolicyadvocacy = axios.get(`/policyadvocacy/count`)
        const responseResearchlinks = axios.get(`/researchlinks/count`)
        const responseResearchpolicy = axios.get(`/researchpolicy/count`)
        const responseResearchproposalandgrants = axios.get(
            `/researchproposalandgrants/count`
        )
        const responseSpinoffstartups = axios.get(`/spinoffstartups/count`)
        const responseStartupevents = axios.get(`/startupevents/count`)
        const responseStartupincubation = axios.get(`/startupincubation/count`)
        const responseStartupmentoring = axios.get(`/startupmentoring/count`)
        const responseStartuprevenue = axios.get(`/startuprevenue/count`)
        const responseStartupsappliedforpitching = axios.get(
            `/startupsappliedforpitching/count`
        )
        const responseStartupsincubated = axios.get(`/startupsincubated/count`)
        const responseTrainingcourseinfo = axios.get(
            `/trainingcourseinfo/count`
        )
        const responseTrainings = axios.get(`/trainings/count`)
        const responseUniversity = axios.get(`/university/count`)
        const responseUniversityadvancedstudiesandresearchboard = axios.get(
            `/universityadvancedstudiesandresearchboard/count`
        )
        const responseVisits = axios.get(`/visits/count`)
        const responseWorkshopeventinfo = axios.get(`/workshopeventinfo/count`)
        const responseStartupemploment = axios.get(`/startupemploment/count`)
        Promise.allSettled([
            responseUsers,
            responseActivegraduatedstartupinfo,
            responseAnualresearchrevenue,
            responseBicdata,
            responseBicfundinginfo,
            responseBichumanresource,
            responseBicserviceofferinginfo,
            responseBicsupportinfo,
            responseCategories,
            responseColaborationagreement,
            responseCommities,
            responseCoursedetailsinfo,
            responseEngagementevents,
            responseGraduatedstartupfacilitationinfo,
            responseHonorsandawards,
            responseHumanresource,
            responseMentorshipinfo,
            responseOricdata,
            responsePartnershipinfo,
            responsePatents,
            responsePolicyadvocacy,
            responseResearchlinks,
            responseResearchpolicy,
            responseResearchproposalandgrants,
            responseSpinoffstartups,
            responseStartupevents,
            responseStartupincubation,
            responseStartupmentoring,
            responseStartuprevenue,
            responseStartupsappliedforpitching,
            responseStartupsincubated,
            responseTrainingcourseinfo,
            responseTrainings,
            responseUniversity,
            responseUniversityadvancedstudiesandresearchboard,
            responseVisits,
            responseWorkshopeventinfo,
            responseStartupemploment,
        ]).then((res) =>
            res.forEach((el, i) => {
                if (el.status === 'fulfilled') {
                    fns[i](el.value.data.count)
                }
            })
        )
    }
    useEffect(() => {
        setCurrentUser(managementValue.currentUser)
        loadData()
    }, [managementDispatch, managementValue])

    if (!currentUser) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress />
            </Box>
        )
    }

    return (
        <div>
            <h1 className="page-title">
                Welcome, {currentUser.firstName}! <br />
                <small>
                    <small>Your role is {currentUser.role}</small>
                </small>
            </h1>
            <Grid container alignItems="center" columns={12} spacing={3}>
                {currentUser && currentUser.role == 'admin' && (
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/users'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Users'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Users:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {users}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                )}

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/activegraduatedstartupinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Activegraduatedstartupinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Activegraduatedstartupinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {activegraduatedstartupinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/anualresearchrevenue'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Anualresearchrevenue'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Anualresearchrevenue:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {anualresearchrevenue}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/bicdata'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Bicdata'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Bicdata:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {bicdata}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/bicfundinginfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Bicfundinginfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Bicfundinginfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {bicfundinginfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/bichumanresource'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Bichumanresource'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Bichumanresource:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {bichumanresource}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/bicserviceofferinginfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Bicserviceofferinginfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Bicserviceofferinginfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {bicserviceofferinginfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/bicsupportinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Bicsupportinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Bicsupportinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {bicsupportinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/categories'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Categories'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Categories:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {categories}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/colaborationagreement'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Colaborationagreement'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Colaborationagreement:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {colaborationagreement}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/commities'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Commities'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Commities:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {commities}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/coursedetailsinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Coursedetailsinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Coursedetailsinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {coursedetailsinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/engagementevents'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Engagementevents'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Engagementevents:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {engagementevents}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/graduatedstartupfacilitationinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Graduatedstartupfacilitationinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Graduatedstartupfacilitationinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {graduatedstartupfacilitationinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/honorsandawards'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Honorsandawards'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Honorsandawards:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {honorsandawards}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/humanresource'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Humanresource'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Humanresource:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {humanresource}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/mentorshipinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Mentorshipinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Mentorshipinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {mentorshipinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/oricdata'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Oricdata'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Oricdata:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {oricdata}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/partnershipinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Partnershipinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Partnershipinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {partnershipinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/patents'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Patents'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Patents:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {patents}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/policyadvocacy'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Policyadvocacy'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Policyadvocacy:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {policyadvocacy}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/researchlinks'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Researchlinks'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Researchlinks:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {researchlinks}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/researchpolicy'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Researchpolicy'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Researchpolicy:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {researchpolicy}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/researchproposalandgrants'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Researchproposalandgrants'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Researchproposalandgrants:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {researchproposalandgrants}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/spinoffstartups'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Spinoffstartups'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Spinoffstartups:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {spinoffstartups}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startupevents'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startupevents'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startupevents:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startupevents}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startupincubation'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startupincubation'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startupincubation:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startupincubation}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startupmentoring'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startupmentoring'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startupmentoring:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startupmentoring}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startuprevenue'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startuprevenue'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startuprevenue:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startuprevenue}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startupsappliedforpitching'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startupsappliedforpitching'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startupsappliedforpitching:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startupsappliedforpitching}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startupsincubated'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startupsincubated'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startupsincubated:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startupsincubated}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/trainingcourseinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Trainingcourseinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Trainingcourseinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {trainingcourseinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/trainings'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Trainings'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Trainings:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {trainings}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/university'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'University'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        University:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {university}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={
                                '/admin/universityadvancedstudiesandresearchboard'
                            }
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget
                                title={
                                    'Universityadvancedstudiesandresearchboard'
                                }
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Universityadvancedstudiesandresearchboard:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {
                                                universityadvancedstudiesandresearchboard
                                            }
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/visits'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Visits'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Visits:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {visits}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/workshopeventinfo'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Workshopeventinfo'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Workshopeventinfo:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {workshopeventinfo}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }

                {
                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                        <Link
                            to={'/admin/startupemploment'}
                            style={{ textDecoration: 'none' }}
                        >
                            <Widget title={'Startupemploment'}>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <InfoIcon color="primary" sx={{ mr: 1 }} />
                                    <p className={classes.widgetText}>
                                        Startupemploment:{' '}
                                        <span
                                            className={classes.widgetTextCount}
                                        >
                                            {startupemploment}
                                        </span>
                                    </p>
                                </div>
                            </Widget>
                        </Link>
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default Dashboard
