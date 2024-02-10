import React, { useEffect } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import classnames from 'classnames'

import SettingsIcon from '@mui/icons-material/Settings'
import GithubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'

import { Fab, IconButton } from '@mui/material'
import { connect } from 'react-redux'
// styles
import useStyles from './styles'

// components
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import { Link } from '../Wrappers'
import ColorChangeThemePopper from './components/ColorChangeThemePopper'

import EditUser from '../../pages/user/EditUser'

// pages
import Dashboard from '../../pages/dashboard'
import BreadCrumbs from '../../components/BreadCrumbs'

// context
import { useLayoutState } from '../../context/LayoutContext'

import UsersFormPage from 'pages/CRUD/Users/form/UsersFormPage'
import UsersFormPageView from 'pages/CRUD/Users/form/UsersFormPageView'
import UsersTablePage from 'pages/CRUD/Users/table/UsersTablePage'

import ActivegraduatedstartupinfoFormPage from 'pages/CRUD/Activegraduatedstartupinfo/form/ActivegraduatedstartupinfoFormPage'
import ActivegraduatedstartupinfoFormPageView from 'pages/CRUD/Activegraduatedstartupinfo/form/ActivegraduatedstartupinfoFormPageView'
import ActivegraduatedstartupinfoTablePage from 'pages/CRUD/Activegraduatedstartupinfo/table/ActivegraduatedstartupinfoTablePage'

import AnualresearchrevenueFormPage from 'pages/CRUD/Anualresearchrevenue/form/AnualresearchrevenueFormPage'
import AnualresearchrevenueFormPageView from 'pages/CRUD/Anualresearchrevenue/form/AnualresearchrevenueFormPageView'
import AnualresearchrevenueTablePage from 'pages/CRUD/Anualresearchrevenue/table/AnualresearchrevenueTablePage'

import BicdataFormPage from 'pages/CRUD/Bicdata/form/BicdataFormPage'
import BicdataFormPageView from 'pages/CRUD/Bicdata/form/BicdataFormPageView'
import BicdataTablePage from 'pages/CRUD/Bicdata/table/BicdataTablePage'

import BicfundinginfoFormPage from 'pages/CRUD/Bicfundinginfo/form/BicfundinginfoFormPage'
import BicfundinginfoFormPageView from 'pages/CRUD/Bicfundinginfo/form/BicfundinginfoFormPageView'
import BicfundinginfoTablePage from 'pages/CRUD/Bicfundinginfo/table/BicfundinginfoTablePage'

import BichumanresourceFormPage from 'pages/CRUD/Bichumanresource/form/BichumanresourceFormPage'
import BichumanresourceFormPageView from 'pages/CRUD/Bichumanresource/form/BichumanresourceFormPageView'
import BichumanresourceTablePage from 'pages/CRUD/Bichumanresource/table/BichumanresourceTablePage'

import BicserviceofferinginfoFormPage from 'pages/CRUD/Bicserviceofferinginfo/form/BicserviceofferinginfoFormPage'
import BicserviceofferinginfoFormPageView from 'pages/CRUD/Bicserviceofferinginfo/form/BicserviceofferinginfoFormPageView'
import BicserviceofferinginfoTablePage from 'pages/CRUD/Bicserviceofferinginfo/table/BicserviceofferinginfoTablePage'

import BicsupportinfoFormPage from 'pages/CRUD/Bicsupportinfo/form/BicsupportinfoFormPage'
import BicsupportinfoFormPageView from 'pages/CRUD/Bicsupportinfo/form/BicsupportinfoFormPageView'
import BicsupportinfoTablePage from 'pages/CRUD/Bicsupportinfo/table/BicsupportinfoTablePage'

import CategoriesFormPage from 'pages/CRUD/Categories/form/CategoriesFormPage'
import CategoriesFormPageView from 'pages/CRUD/Categories/form/CategoriesFormPageView'
import CategoriesTablePage from 'pages/CRUD/Categories/table/CategoriesTablePage'

import ColaborationagreementFormPage from 'pages/CRUD/Colaborationagreement/form/ColaborationagreementFormPage'
import ColaborationagreementFormPageView from 'pages/CRUD/Colaborationagreement/form/ColaborationagreementFormPageView'
import ColaborationagreementTablePage from 'pages/CRUD/Colaborationagreement/table/ColaborationagreementTablePage'

import CommitiesFormPage from 'pages/CRUD/Commities/form/CommitiesFormPage'
import CommitiesFormPageView from 'pages/CRUD/Commities/form/CommitiesFormPageView'
import CommitiesTablePage from 'pages/CRUD/Commities/table/CommitiesTablePage'

import CoursedetailsinfoFormPage from 'pages/CRUD/Coursedetailsinfo/form/CoursedetailsinfoFormPage'
import CoursedetailsinfoFormPageView from 'pages/CRUD/Coursedetailsinfo/form/CoursedetailsinfoFormPageView'
import CoursedetailsinfoTablePage from 'pages/CRUD/Coursedetailsinfo/table/CoursedetailsinfoTablePage'

import EngagementeventsFormPage from 'pages/CRUD/Engagementevents/form/EngagementeventsFormPage'
import EngagementeventsFormPageView from 'pages/CRUD/Engagementevents/form/EngagementeventsFormPageView'
import EngagementeventsTablePage from 'pages/CRUD/Engagementevents/table/EngagementeventsTablePage'

import GraduatedstartupfacilitationinfoFormPage from 'pages/CRUD/Graduatedstartupfacilitationinfo/form/GraduatedstartupfacilitationinfoFormPage'
import GraduatedstartupfacilitationinfoFormPageView from 'pages/CRUD/Graduatedstartupfacilitationinfo/form/GraduatedstartupfacilitationinfoFormPageView'
import GraduatedstartupfacilitationinfoTablePage from 'pages/CRUD/Graduatedstartupfacilitationinfo/table/GraduatedstartupfacilitationinfoTablePage'

import HonorsandawardsFormPage from 'pages/CRUD/Honorsandawards/form/HonorsandawardsFormPage'
import HonorsandawardsFormPageView from 'pages/CRUD/Honorsandawards/form/HonorsandawardsFormPageView'
import HonorsandawardsTablePage from 'pages/CRUD/Honorsandawards/table/HonorsandawardsTablePage'

import HumanresourceFormPage from 'pages/CRUD/Humanresource/form/HumanresourceFormPage'
import HumanresourceFormPageView from 'pages/CRUD/Humanresource/form/HumanresourceFormPageView'
import HumanresourceTablePage from 'pages/CRUD/Humanresource/table/HumanresourceTablePage'

import MentorshipinfoFormPage from 'pages/CRUD/Mentorshipinfo/form/MentorshipinfoFormPage'
import MentorshipinfoFormPageView from 'pages/CRUD/Mentorshipinfo/form/MentorshipinfoFormPageView'
import MentorshipinfoTablePage from 'pages/CRUD/Mentorshipinfo/table/MentorshipinfoTablePage'

import OricdataFormPage from 'pages/CRUD/Oricdata/form/OricdataFormPage'
import OricdataFormPageView from 'pages/CRUD/Oricdata/form/OricdataFormPageView'
import OricdataTablePage from 'pages/CRUD/Oricdata/table/OricdataTablePage'

import PartnershipinfoFormPage from 'pages/CRUD/Partnershipinfo/form/PartnershipinfoFormPage'
import PartnershipinfoFormPageView from 'pages/CRUD/Partnershipinfo/form/PartnershipinfoFormPageView'
import PartnershipinfoTablePage from 'pages/CRUD/Partnershipinfo/table/PartnershipinfoTablePage'

import PatentsFormPage from 'pages/CRUD/Patents/form/PatentsFormPage'
import PatentsFormPageView from 'pages/CRUD/Patents/form/PatentsFormPageView'
import PatentsTablePage from 'pages/CRUD/Patents/table/PatentsTablePage'

import PolicyadvocacyFormPage from 'pages/CRUD/Policyadvocacy/form/PolicyadvocacyFormPage'
import PolicyadvocacyFormPageView from 'pages/CRUD/Policyadvocacy/form/PolicyadvocacyFormPageView'
import PolicyadvocacyTablePage from 'pages/CRUD/Policyadvocacy/table/PolicyadvocacyTablePage'

import ResearchlinksFormPage from 'pages/CRUD/Researchlinks/form/ResearchlinksFormPage'
import ResearchlinksFormPageView from 'pages/CRUD/Researchlinks/form/ResearchlinksFormPageView'
import ResearchlinksTablePage from 'pages/CRUD/Researchlinks/table/ResearchlinksTablePage'

import ResearchpolicyFormPage from 'pages/CRUD/Researchpolicy/form/ResearchpolicyFormPage'
import ResearchpolicyFormPageView from 'pages/CRUD/Researchpolicy/form/ResearchpolicyFormPageView'
import ResearchpolicyTablePage from 'pages/CRUD/Researchpolicy/table/ResearchpolicyTablePage'

import ResearchproposalandgrantsFormPage from 'pages/CRUD/Researchproposalandgrants/form/ResearchproposalandgrantsFormPage'
import ResearchproposalandgrantsFormPageView from 'pages/CRUD/Researchproposalandgrants/form/ResearchproposalandgrantsFormPageView'
import ResearchproposalandgrantsTablePage from 'pages/CRUD/Researchproposalandgrants/table/ResearchproposalandgrantsTablePage'

import SpinoffstartupsFormPage from 'pages/CRUD/Spinoffstartups/form/SpinoffstartupsFormPage'
import SpinoffstartupsFormPageView from 'pages/CRUD/Spinoffstartups/form/SpinoffstartupsFormPageView'
import SpinoffstartupsTablePage from 'pages/CRUD/Spinoffstartups/table/SpinoffstartupsTablePage'

import StartupeventsFormPage from 'pages/CRUD/Startupevents/form/StartupeventsFormPage'
import StartupeventsFormPageView from 'pages/CRUD/Startupevents/form/StartupeventsFormPageView'
import StartupeventsTablePage from 'pages/CRUD/Startupevents/table/StartupeventsTablePage'

import StartupincubationFormPage from 'pages/CRUD/Startupincubation/form/StartupincubationFormPage'
import StartupincubationFormPageView from 'pages/CRUD/Startupincubation/form/StartupincubationFormPageView'
import StartupincubationTablePage from 'pages/CRUD/Startupincubation/table/StartupincubationTablePage'

import StartupmentoringFormPage from 'pages/CRUD/Startupmentoring/form/StartupmentoringFormPage'
import StartupmentoringFormPageView from 'pages/CRUD/Startupmentoring/form/StartupmentoringFormPageView'
import StartupmentoringTablePage from 'pages/CRUD/Startupmentoring/table/StartupmentoringTablePage'

import StartuprevenueFormPage from 'pages/CRUD/Startuprevenue/form/StartuprevenueFormPage'
import StartuprevenueFormPageView from 'pages/CRUD/Startuprevenue/form/StartuprevenueFormPageView'
import StartuprevenueTablePage from 'pages/CRUD/Startuprevenue/table/StartuprevenueTablePage'

import StartupsappliedforpitchingFormPage from 'pages/CRUD/Startupsappliedforpitching/form/StartupsappliedforpitchingFormPage'
import StartupsappliedforpitchingFormPageView from 'pages/CRUD/Startupsappliedforpitching/form/StartupsappliedforpitchingFormPageView'
import StartupsappliedforpitchingTablePage from 'pages/CRUD/Startupsappliedforpitching/table/StartupsappliedforpitchingTablePage'

import StartupsincubatedFormPage from 'pages/CRUD/Startupsincubated/form/StartupsincubatedFormPage'
import StartupsincubatedFormPageView from 'pages/CRUD/Startupsincubated/form/StartupsincubatedFormPageView'
import StartupsincubatedTablePage from 'pages/CRUD/Startupsincubated/table/StartupsincubatedTablePage'

import TrainingcourseinfoFormPage from 'pages/CRUD/Trainingcourseinfo/form/TrainingcourseinfoFormPage'
import TrainingcourseinfoFormPageView from 'pages/CRUD/Trainingcourseinfo/form/TrainingcourseinfoFormPageView'
import TrainingcourseinfoTablePage from 'pages/CRUD/Trainingcourseinfo/table/TrainingcourseinfoTablePage'

import TrainingsFormPage from 'pages/CRUD/Trainings/form/TrainingsFormPage'
import TrainingsFormPageView from 'pages/CRUD/Trainings/form/TrainingsFormPageView'
import TrainingsTablePage from 'pages/CRUD/Trainings/table/TrainingsTablePage'

import UniversityFormPage from 'pages/CRUD/University/form/UniversityFormPage'
import UniversityFormPageView from 'pages/CRUD/University/form/UniversityFormPageView'
import UniversityTablePage from 'pages/CRUD/University/table/UniversityTablePage'

import UniversityadvancedstudiesandresearchboardFormPage from 'pages/CRUD/Universityadvancedstudiesandresearchboard/form/UniversityadvancedstudiesandresearchboardFormPage'
import UniversityadvancedstudiesandresearchboardFormPageView from 'pages/CRUD/Universityadvancedstudiesandresearchboard/form/UniversityadvancedstudiesandresearchboardFormPageView'
import UniversityadvancedstudiesandresearchboardTablePage from 'pages/CRUD/Universityadvancedstudiesandresearchboard/table/UniversityadvancedstudiesandresearchboardTablePage'

import VisitsFormPage from 'pages/CRUD/Visits/form/VisitsFormPage'
import VisitsFormPageView from 'pages/CRUD/Visits/form/VisitsFormPageView'
import VisitsTablePage from 'pages/CRUD/Visits/table/VisitsTablePage'

import WorkshopeventinfoFormPage from 'pages/CRUD/Workshopeventinfo/form/WorkshopeventinfoFormPage'
import WorkshopeventinfoFormPageView from 'pages/CRUD/Workshopeventinfo/form/WorkshopeventinfoFormPageView'
import WorkshopeventinfoTablePage from 'pages/CRUD/Workshopeventinfo/table/WorkshopeventinfoTablePage'

import StartupemplomentFormPage from 'pages/CRUD/Startupemploment/form/StartupemplomentFormPage'
import StartupemplomentFormPageView from 'pages/CRUD/Startupemploment/form/StartupemplomentFormPageView'
import StartupemplomentTablePage from 'pages/CRUD/Startupemploment/table/StartupemplomentTablePage'

const Redirect = (props) => {
    useEffect(() => window.location.replace(props.url))
    return <span>Redirecting...</span>
}

function Layout(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    const open = Boolean(anchorEl)
    const id = open ? 'add-section-popover' : undefined
    const handleClick = (event) => {
        setAnchorEl(open ? null : event.currentTarget)
    }

    // global
    let layoutState = useLayoutState()

    return (
        <div className={classes.root}>
            <Header history={props.history} />
            <Sidebar />
            <div
                className={classnames(classes.content, {
                    [classes.contentShift]: layoutState.isSidebarOpened,
                })}
            >
                <div className={classes.fakeToolbar} />
                <BreadCrumbs />
                <Switch>
                    <Route path="/admin/dashboard" component={Dashboard} />
                    <Route path="/admin/user/edit" component={EditUser} />
                    <Route
                        path={'/admin/api-docs'}
                        exact
                        component={(props) => (
                            <Redirect
                                url={
                                    process.env.NODE_ENV === 'production'
                                        ? window.location.origin + '/api-docs'
                                        : 'http://localhost:8080/api-docs'
                                }
                                {...props}
                            />
                        )}
                    />

                    <Route
                        path={'/admin/users'}
                        exact
                        component={UsersTablePage}
                    />
                    <Route
                        path={'/admin/users/new'}
                        exact
                        component={UsersFormPage}
                    />
                    <Route
                        path={'/admin/users/:id/edit'}
                        exact
                        component={UsersFormPage}
                    />
                    <Route
                        path={'/admin/users/:id/show'}
                        exact
                        component={UsersFormPageView}
                    />

                    <Route
                        path={'/admin/activegraduatedstartupinfo'}
                        exact
                        component={ActivegraduatedstartupinfoTablePage}
                    />
                    <Route
                        path={'/admin/activegraduatedstartupinfo/new'}
                        exact
                        component={ActivegraduatedstartupinfoFormPage}
                    />
                    <Route
                        path={'/admin/activegraduatedstartupinfo/:id/edit'}
                        exact
                        component={ActivegraduatedstartupinfoFormPage}
                    />
                    <Route
                        path={'/admin/activegraduatedstartupinfo/:id/show'}
                        exact
                        component={ActivegraduatedstartupinfoFormPageView}
                    />

                    <Route
                        path={'/admin/anualresearchrevenue'}
                        exact
                        component={AnualresearchrevenueTablePage}
                    />
                    <Route
                        path={'/admin/anualresearchrevenue/new'}
                        exact
                        component={AnualresearchrevenueFormPage}
                    />
                    <Route
                        path={'/admin/anualresearchrevenue/:id/edit'}
                        exact
                        component={AnualresearchrevenueFormPage}
                    />
                    <Route
                        path={'/admin/anualresearchrevenue/:id/show'}
                        exact
                        component={AnualresearchrevenueFormPageView}
                    />

                    <Route
                        path={'/admin/bicdata'}
                        exact
                        component={BicdataTablePage}
                    />
                    <Route
                        path={'/admin/bicdata/new'}
                        exact
                        component={BicdataFormPage}
                    />
                    <Route
                        path={'/admin/bicdata/:id/edit'}
                        exact
                        component={BicdataFormPage}
                    />
                    <Route
                        path={'/admin/bicdata/:id/show'}
                        exact
                        component={BicdataFormPageView}
                    />

                    <Route
                        path={'/admin/bicfundinginfo'}
                        exact
                        component={BicfundinginfoTablePage}
                    />
                    <Route
                        path={'/admin/bicfundinginfo/new'}
                        exact
                        component={BicfundinginfoFormPage}
                    />
                    <Route
                        path={'/admin/bicfundinginfo/:id/edit'}
                        exact
                        component={BicfundinginfoFormPage}
                    />
                    <Route
                        path={'/admin/bicfundinginfo/:id/show'}
                        exact
                        component={BicfundinginfoFormPageView}
                    />

                    <Route
                        path={'/admin/bichumanresource'}
                        exact
                        component={BichumanresourceTablePage}
                    />
                    <Route
                        path={'/admin/bichumanresource/new'}
                        exact
                        component={BichumanresourceFormPage}
                    />
                    <Route
                        path={'/admin/bichumanresource/:id/edit'}
                        exact
                        component={BichumanresourceFormPage}
                    />
                    <Route
                        path={'/admin/bichumanresource/:id/show'}
                        exact
                        component={BichumanresourceFormPageView}
                    />

                    <Route
                        path={'/admin/bicserviceofferinginfo'}
                        exact
                        component={BicserviceofferinginfoTablePage}
                    />
                    <Route
                        path={'/admin/bicserviceofferinginfo/new'}
                        exact
                        component={BicserviceofferinginfoFormPage}
                    />
                    <Route
                        path={'/admin/bicserviceofferinginfo/:id/edit'}
                        exact
                        component={BicserviceofferinginfoFormPage}
                    />
                    <Route
                        path={'/admin/bicserviceofferinginfo/:id/show'}
                        exact
                        component={BicserviceofferinginfoFormPageView}
                    />

                    <Route
                        path={'/admin/bicsupportinfo'}
                        exact
                        component={BicsupportinfoTablePage}
                    />
                    <Route
                        path={'/admin/bicsupportinfo/new'}
                        exact
                        component={BicsupportinfoFormPage}
                    />
                    <Route
                        path={'/admin/bicsupportinfo/:id/edit'}
                        exact
                        component={BicsupportinfoFormPage}
                    />
                    <Route
                        path={'/admin/bicsupportinfo/:id/show'}
                        exact
                        component={BicsupportinfoFormPageView}
                    />

                    <Route
                        path={'/admin/categories'}
                        exact
                        component={CategoriesTablePage}
                    />
                    <Route
                        path={'/admin/categories/new'}
                        exact
                        component={CategoriesFormPage}
                    />
                    <Route
                        path={'/admin/categories/:id/edit'}
                        exact
                        component={CategoriesFormPage}
                    />
                    <Route
                        path={'/admin/categories/:id/show'}
                        exact
                        component={CategoriesFormPageView}
                    />

                    <Route
                        path={'/admin/colaborationagreement'}
                        exact
                        component={ColaborationagreementTablePage}
                    />
                    <Route
                        path={'/admin/colaborationagreement/new'}
                        exact
                        component={ColaborationagreementFormPage}
                    />
                    <Route
                        path={'/admin/colaborationagreement/:id/edit'}
                        exact
                        component={ColaborationagreementFormPage}
                    />
                    <Route
                        path={'/admin/colaborationagreement/:id/show'}
                        exact
                        component={ColaborationagreementFormPageView}
                    />

                    <Route
                        path={'/admin/commities'}
                        exact
                        component={CommitiesTablePage}
                    />
                    <Route
                        path={'/admin/commities/new'}
                        exact
                        component={CommitiesFormPage}
                    />
                    <Route
                        path={'/admin/commities/:id/edit'}
                        exact
                        component={CommitiesFormPage}
                    />
                    <Route
                        path={'/admin/commities/:id/show'}
                        exact
                        component={CommitiesFormPageView}
                    />

                    <Route
                        path={'/admin/coursedetailsinfo'}
                        exact
                        component={CoursedetailsinfoTablePage}
                    />
                    <Route
                        path={'/admin/coursedetailsinfo/new'}
                        exact
                        component={CoursedetailsinfoFormPage}
                    />
                    <Route
                        path={'/admin/coursedetailsinfo/:id/edit'}
                        exact
                        component={CoursedetailsinfoFormPage}
                    />
                    <Route
                        path={'/admin/coursedetailsinfo/:id/show'}
                        exact
                        component={CoursedetailsinfoFormPageView}
                    />

                    <Route
                        path={'/admin/engagementevents'}
                        exact
                        component={EngagementeventsTablePage}
                    />
                    <Route
                        path={'/admin/engagementevents/new'}
                        exact
                        component={EngagementeventsFormPage}
                    />
                    <Route
                        path={'/admin/engagementevents/:id/edit'}
                        exact
                        component={EngagementeventsFormPage}
                    />
                    <Route
                        path={'/admin/engagementevents/:id/show'}
                        exact
                        component={EngagementeventsFormPageView}
                    />

                    <Route
                        path={'/admin/graduatedstartupfacilitationinfo'}
                        exact
                        component={GraduatedstartupfacilitationinfoTablePage}
                    />
                    <Route
                        path={'/admin/graduatedstartupfacilitationinfo/new'}
                        exact
                        component={GraduatedstartupfacilitationinfoFormPage}
                    />
                    <Route
                        path={
                            '/admin/graduatedstartupfacilitationinfo/:id/edit'
                        }
                        exact
                        component={GraduatedstartupfacilitationinfoFormPage}
                    />
                    <Route
                        path={
                            '/admin/graduatedstartupfacilitationinfo/:id/show'
                        }
                        exact
                        component={GraduatedstartupfacilitationinfoFormPageView}
                    />

                    <Route
                        path={'/admin/honorsandawards'}
                        exact
                        component={HonorsandawardsTablePage}
                    />
                    <Route
                        path={'/admin/honorsandawards/new'}
                        exact
                        component={HonorsandawardsFormPage}
                    />
                    <Route
                        path={'/admin/honorsandawards/:id/edit'}
                        exact
                        component={HonorsandawardsFormPage}
                    />
                    <Route
                        path={'/admin/honorsandawards/:id/show'}
                        exact
                        component={HonorsandawardsFormPageView}
                    />

                    <Route
                        path={'/admin/humanresource'}
                        exact
                        component={HumanresourceTablePage}
                    />
                    <Route
                        path={'/admin/humanresource/new'}
                        exact
                        component={HumanresourceFormPage}
                    />
                    <Route
                        path={'/admin/humanresource/:id/edit'}
                        exact
                        component={HumanresourceFormPage}
                    />
                    <Route
                        path={'/admin/humanresource/:id/show'}
                        exact
                        component={HumanresourceFormPageView}
                    />

                    <Route
                        path={'/admin/mentorshipinfo'}
                        exact
                        component={MentorshipinfoTablePage}
                    />
                    <Route
                        path={'/admin/mentorshipinfo/new'}
                        exact
                        component={MentorshipinfoFormPage}
                    />
                    <Route
                        path={'/admin/mentorshipinfo/:id/edit'}
                        exact
                        component={MentorshipinfoFormPage}
                    />
                    <Route
                        path={'/admin/mentorshipinfo/:id/show'}
                        exact
                        component={MentorshipinfoFormPageView}
                    />

                    <Route
                        path={'/admin/oricdata'}
                        exact
                        component={OricdataTablePage}
                    />
                    <Route
                        path={'/admin/oricdata/new'}
                        exact
                        component={OricdataFormPage}
                    />
                    <Route
                        path={'/admin/oricdata/:id/edit'}
                        exact
                        component={OricdataFormPage}
                    />
                    <Route
                        path={'/admin/oricdata/:id/show'}
                        exact
                        component={OricdataFormPageView}
                    />

                    <Route
                        path={'/admin/partnershipinfo'}
                        exact
                        component={PartnershipinfoTablePage}
                    />
                    <Route
                        path={'/admin/partnershipinfo/new'}
                        exact
                        component={PartnershipinfoFormPage}
                    />
                    <Route
                        path={'/admin/partnershipinfo/:id/edit'}
                        exact
                        component={PartnershipinfoFormPage}
                    />
                    <Route
                        path={'/admin/partnershipinfo/:id/show'}
                        exact
                        component={PartnershipinfoFormPageView}
                    />

                    <Route
                        path={'/admin/patents'}
                        exact
                        component={PatentsTablePage}
                    />
                    <Route
                        path={'/admin/patents/new'}
                        exact
                        component={PatentsFormPage}
                    />
                    <Route
                        path={'/admin/patents/:id/edit'}
                        exact
                        component={PatentsFormPage}
                    />
                    <Route
                        path={'/admin/patents/:id/show'}
                        exact
                        component={PatentsFormPageView}
                    />

                    <Route
                        path={'/admin/policyadvocacy'}
                        exact
                        component={PolicyadvocacyTablePage}
                    />
                    <Route
                        path={'/admin/policyadvocacy/new'}
                        exact
                        component={PolicyadvocacyFormPage}
                    />
                    <Route
                        path={'/admin/policyadvocacy/:id/edit'}
                        exact
                        component={PolicyadvocacyFormPage}
                    />
                    <Route
                        path={'/admin/policyadvocacy/:id/show'}
                        exact
                        component={PolicyadvocacyFormPageView}
                    />

                    <Route
                        path={'/admin/researchlinks'}
                        exact
                        component={ResearchlinksTablePage}
                    />
                    <Route
                        path={'/admin/researchlinks/new'}
                        exact
                        component={ResearchlinksFormPage}
                    />
                    <Route
                        path={'/admin/researchlinks/:id/edit'}
                        exact
                        component={ResearchlinksFormPage}
                    />
                    <Route
                        path={'/admin/researchlinks/:id/show'}
                        exact
                        component={ResearchlinksFormPageView}
                    />

                    <Route
                        path={'/admin/researchpolicy'}
                        exact
                        component={ResearchpolicyTablePage}
                    />
                    <Route
                        path={'/admin/researchpolicy/new'}
                        exact
                        component={ResearchpolicyFormPage}
                    />
                    <Route
                        path={'/admin/researchpolicy/:id/edit'}
                        exact
                        component={ResearchpolicyFormPage}
                    />
                    <Route
                        path={'/admin/researchpolicy/:id/show'}
                        exact
                        component={ResearchpolicyFormPageView}
                    />

                    <Route
                        path={'/admin/researchproposalandgrants'}
                        exact
                        component={ResearchproposalandgrantsTablePage}
                    />
                    <Route
                        path={'/admin/researchproposalandgrants/new'}
                        exact
                        component={ResearchproposalandgrantsFormPage}
                    />
                    <Route
                        path={'/admin/researchproposalandgrants/:id/edit'}
                        exact
                        component={ResearchproposalandgrantsFormPage}
                    />
                    <Route
                        path={'/admin/researchproposalandgrants/:id/show'}
                        exact
                        component={ResearchproposalandgrantsFormPageView}
                    />

                    <Route
                        path={'/admin/spinoffstartups'}
                        exact
                        component={SpinoffstartupsTablePage}
                    />
                    <Route
                        path={'/admin/spinoffstartups/new'}
                        exact
                        component={SpinoffstartupsFormPage}
                    />
                    <Route
                        path={'/admin/spinoffstartups/:id/edit'}
                        exact
                        component={SpinoffstartupsFormPage}
                    />
                    <Route
                        path={'/admin/spinoffstartups/:id/show'}
                        exact
                        component={SpinoffstartupsFormPageView}
                    />

                    <Route
                        path={'/admin/startupevents'}
                        exact
                        component={StartupeventsTablePage}
                    />
                    <Route
                        path={'/admin/startupevents/new'}
                        exact
                        component={StartupeventsFormPage}
                    />
                    <Route
                        path={'/admin/startupevents/:id/edit'}
                        exact
                        component={StartupeventsFormPage}
                    />
                    <Route
                        path={'/admin/startupevents/:id/show'}
                        exact
                        component={StartupeventsFormPageView}
                    />

                    <Route
                        path={'/admin/startupincubation'}
                        exact
                        component={StartupincubationTablePage}
                    />
                    <Route
                        path={'/admin/startupincubation/new'}
                        exact
                        component={StartupincubationFormPage}
                    />
                    <Route
                        path={'/admin/startupincubation/:id/edit'}
                        exact
                        component={StartupincubationFormPage}
                    />
                    <Route
                        path={'/admin/startupincubation/:id/show'}
                        exact
                        component={StartupincubationFormPageView}
                    />

                    <Route
                        path={'/admin/startupmentoring'}
                        exact
                        component={StartupmentoringTablePage}
                    />
                    <Route
                        path={'/admin/startupmentoring/new'}
                        exact
                        component={StartupmentoringFormPage}
                    />
                    <Route
                        path={'/admin/startupmentoring/:id/edit'}
                        exact
                        component={StartupmentoringFormPage}
                    />
                    <Route
                        path={'/admin/startupmentoring/:id/show'}
                        exact
                        component={StartupmentoringFormPageView}
                    />

                    <Route
                        path={'/admin/startuprevenue'}
                        exact
                        component={StartuprevenueTablePage}
                    />
                    <Route
                        path={'/admin/startuprevenue/new'}
                        exact
                        component={StartuprevenueFormPage}
                    />
                    <Route
                        path={'/admin/startuprevenue/:id/edit'}
                        exact
                        component={StartuprevenueFormPage}
                    />
                    <Route
                        path={'/admin/startuprevenue/:id/show'}
                        exact
                        component={StartuprevenueFormPageView}
                    />

                    <Route
                        path={'/admin/startupsappliedforpitching'}
                        exact
                        component={StartupsappliedforpitchingTablePage}
                    />
                    <Route
                        path={'/admin/startupsappliedforpitching/new'}
                        exact
                        component={StartupsappliedforpitchingFormPage}
                    />
                    <Route
                        path={'/admin/startupsappliedforpitching/:id/edit'}
                        exact
                        component={StartupsappliedforpitchingFormPage}
                    />
                    <Route
                        path={'/admin/startupsappliedforpitching/:id/show'}
                        exact
                        component={StartupsappliedforpitchingFormPageView}
                    />

                    <Route
                        path={'/admin/startupsincubated'}
                        exact
                        component={StartupsincubatedTablePage}
                    />
                    <Route
                        path={'/admin/startupsincubated/new'}
                        exact
                        component={StartupsincubatedFormPage}
                    />
                    <Route
                        path={'/admin/startupsincubated/:id/edit'}
                        exact
                        component={StartupsincubatedFormPage}
                    />
                    <Route
                        path={'/admin/startupsincubated/:id/show'}
                        exact
                        component={StartupsincubatedFormPageView}
                    />

                    <Route
                        path={'/admin/trainingcourseinfo'}
                        exact
                        component={TrainingcourseinfoTablePage}
                    />
                    <Route
                        path={'/admin/trainingcourseinfo/new'}
                        exact
                        component={TrainingcourseinfoFormPage}
                    />
                    <Route
                        path={'/admin/trainingcourseinfo/:id/edit'}
                        exact
                        component={TrainingcourseinfoFormPage}
                    />
                    <Route
                        path={'/admin/trainingcourseinfo/:id/show'}
                        exact
                        component={TrainingcourseinfoFormPageView}
                    />

                    <Route
                        path={'/admin/trainings'}
                        exact
                        component={TrainingsTablePage}
                    />
                    <Route
                        path={'/admin/trainings/new'}
                        exact
                        component={TrainingsFormPage}
                    />
                    <Route
                        path={'/admin/trainings/:id/edit'}
                        exact
                        component={TrainingsFormPage}
                    />
                    <Route
                        path={'/admin/trainings/:id/show'}
                        exact
                        component={TrainingsFormPageView}
                    />

                    <Route
                        path={'/admin/university'}
                        exact
                        component={UniversityTablePage}
                    />
                    <Route
                        path={'/admin/university/new'}
                        exact
                        component={UniversityFormPage}
                    />
                    <Route
                        path={'/admin/university/:id/edit'}
                        exact
                        component={UniversityFormPage}
                    />
                    <Route
                        path={'/admin/university/:id/show'}
                        exact
                        component={UniversityFormPageView}
                    />

                    <Route
                        path={
                            '/admin/universityadvancedstudiesandresearchboard'
                        }
                        exact
                        component={
                            UniversityadvancedstudiesandresearchboardTablePage
                        }
                    />
                    <Route
                        path={
                            '/admin/universityadvancedstudiesandresearchboard/new'
                        }
                        exact
                        component={
                            UniversityadvancedstudiesandresearchboardFormPage
                        }
                    />
                    <Route
                        path={
                            '/admin/universityadvancedstudiesandresearchboard/:id/edit'
                        }
                        exact
                        component={
                            UniversityadvancedstudiesandresearchboardFormPage
                        }
                    />
                    <Route
                        path={
                            '/admin/universityadvancedstudiesandresearchboard/:id/show'
                        }
                        exact
                        component={
                            UniversityadvancedstudiesandresearchboardFormPageView
                        }
                    />

                    <Route
                        path={'/admin/visits'}
                        exact
                        component={VisitsTablePage}
                    />
                    <Route
                        path={'/admin/visits/new'}
                        exact
                        component={VisitsFormPage}
                    />
                    <Route
                        path={'/admin/visits/:id/edit'}
                        exact
                        component={VisitsFormPage}
                    />
                    <Route
                        path={'/admin/visits/:id/show'}
                        exact
                        component={VisitsFormPageView}
                    />

                    <Route
                        path={'/admin/workshopeventinfo'}
                        exact
                        component={WorkshopeventinfoTablePage}
                    />
                    <Route
                        path={'/admin/workshopeventinfo/new'}
                        exact
                        component={WorkshopeventinfoFormPage}
                    />
                    <Route
                        path={'/admin/workshopeventinfo/:id/edit'}
                        exact
                        component={WorkshopeventinfoFormPage}
                    />
                    <Route
                        path={'/admin/workshopeventinfo/:id/show'}
                        exact
                        component={WorkshopeventinfoFormPageView}
                    />

                    <Route
                        path={'/admin/startupemploment'}
                        exact
                        component={StartupemplomentTablePage}
                    />
                    <Route
                        path={'/admin/startupemploment/new'}
                        exact
                        component={StartupemplomentFormPage}
                    />
                    <Route
                        path={'/admin/startupemploment/:id/edit'}
                        exact
                        component={StartupemplomentFormPage}
                    />
                    <Route
                        path={'/admin/startupemploment/:id/show'}
                        exact
                        component={StartupemplomentFormPageView}
                    />
                </Switch>
                {/* <Fab
                    color="primary"
                    aria-label="settings"
                    onClick={(e) => handleClick(e)}
                    className={classes.changeThemeFab}
                    style={{ zIndex: 100 }}
                >
                    <SettingsIcon style={{ color: '#fff' }} />
                </Fab> */}
                {/* <ColorChangeThemePopper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                /> */}
                <Footer>Copy rights reserved by PIEAS</Footer>
            </div>
        </div>
    )
}

export default withRouter(connect()(Layout))
