import React, { useState, useEffect, useMemo } from 'react'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { Drawer, IconButton, List } from '@mui/material'
import { useTheme } from '@mui/material'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import {
    useManagementDispatch,
    useManagementState,
} from '../../context/ManagementContext'

import {
    Home as HomeIcon,
    Apps as CoreIcon,
    Description as DocumentationIcon,
    AccountCircle as ProfileIcon,
} from '@mui/icons-material'

// styles
import useStyles from './styles'
import useStyles2 from './components/SidebarLink/styles'

// components
import SidebarLink from './components/SidebarLink/SidebarLink'

// context
import {
    useLayoutState,
    useLayoutDispatch,
    toggleSidebar,
} from '../../context/LayoutContext'

function Sidebar({ location, structure }) {
    let classes = useStyles()
    let classes2 = useStyles2()
    let theme = useTheme()
    const managementDispatch = useManagementDispatch()
    const managementValue = useManagementState()

    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        setCurrentUser(managementValue.currentUser)
    }, [managementDispatch, managementValue])

    const toggleDrawer = (value) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        if (value && !isPermanent) toggleSidebar(layoutDispatch)
    }

    // global
    let { isSidebarOpened } = useLayoutState()
    let layoutDispatch = useLayoutDispatch()

    // local
    let [isPermanent, setPermanent] = useState(true)

    const isSidebarOpenedWrapper = useMemo(
        () => (!isPermanent ? !isSidebarOpened : isSidebarOpened),
        [isPermanent, isSidebarOpened]
    )

    useEffect(function () {
        window.addEventListener('resize', handleWindowWidthChange)
        handleWindowWidthChange()
        return function cleanup() {
            window.removeEventListener('resize', handleWindowWidthChange)
        }
    })

    return (
        <Drawer
            variant={isPermanent ? 'permanent' : 'temporary'}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: isSidebarOpenedWrapper,
                [classes.drawerClose]: !isSidebarOpenedWrapper,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: isSidebarOpenedWrapper,
                    [classes.drawerClose]: !isSidebarOpenedWrapper,
                }),
            }}
            open={isSidebarOpenedWrapper}
            onClose={toggleDrawer(true)}
        >
            <div className={classes.toolbar} />
            <div className={classes.mobileBackButton}>
                <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
                    <ArrowBackIcon
                        classes={{
                            root: classNames(
                                classes.headerIcon,
                                classes.headerIconCollapse
                            ),
                        }}
                    />
                </IconButton>
            </div>
            <List
                className={classes.sidebarList}
                classes={{ padding: classes.padding }}
            >
                <SidebarLink
                    label="Dashboard"
                    link="/admin/dashboard"
                    location={location}
                    isSidebarOpened={isSidebarOpenedWrapper}
                    icon={<HomeIcon />}
                    toggleDrawer={toggleDrawer(true)}
                />

                {currentUser && currentUser.role === 'admin' && (
                    <SidebarLink
                        label="Edit User"
                        link="/admin/user/edit"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<ProfileIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                )}

                {currentUser && currentUser.role === 'admin' && (
                    <SidebarLink
                        label="Users"
                        link="/admin/users"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                )}

                {
                    <SidebarLink
                        label="Active graduated start up info"
                        link="/admin/activegraduatedstartupinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Anual research revenue"
                        link="/admin/anualresearchrevenue"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="BIC data"
                        link="/admin/bicdata"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="BIC funding info"
                        link="/admin/bicfundinginfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="BIC human resource"
                        link="/admin/bichumanresource"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="BIC service offering info"
                        link="/admin/bicserviceofferinginfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="BiC support info"
                        link="/admin/bicsupportinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Categories"
                        link="/admin/categories"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Collaboration agreement"
                        link="/admin/colaborationagreement"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Comities"
                        link="/admin/commities"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Course details info"
                        link="/admin/coursedetailsinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Engagement events"
                        link="/admin/engagementevents"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Graduated startup facilitation info"
                        link="/admin/graduatedstartupfacilitationinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Honors and awards"
                        link="/admin/honorsandawards"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Human resource"
                        link="/admin/humanresource"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Mentorship info"
                        link="/admin/mentorshipinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="ORIC data"
                        link="/admin/oricdata"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Partnership info"
                        link="/admin/partnershipinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Patents"
                        link="/admin/patents"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Policy advocacy"
                        link="/admin/policyadvocacy"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Research Links"
                        link="/admin/researchlinks"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Research policy"
                        link="/admin/researchpolicy"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Research proposal and grants"
                        link="/admin/researchproposalandgrants"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Spinoff startups"
                        link="/admin/spinoffstartups"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startup events"
                        link="/admin/startupevents"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startup incubation"
                        link="/admin/startupincubation"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startup mentoring"
                        link="/admin/startupmentoring"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startup revenue"
                        link="/admin/startuprevenue"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startups applied for pitching"
                        link="/admin/startupsappliedforpitching"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startups incubated"
                        link="/admin/startupsincubated"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Training course info"
                        link="/admin/trainingcourseinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Trainings"
                        link="/admin/trainings"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="University"
                        link="/admin/university"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="University advanced studies and research board"
                        link="/admin/universityadvancedstudiesandresearchboard"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Visits"
                        link="/admin/visits"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Workshop event info"
                        link="/admin/workshopeventinfo"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }

                {
                    <SidebarLink
                        label="Startup employment"
                        link="/admin/startupemploment"
                        location={location}
                        isSidebarOpened={isSidebarOpenedWrapper}
                        icon={<CoreIcon />}
                        toggleDrawer={toggleDrawer(true)}
                    />
                }
            </List>
        </Drawer>
    )

    // ##################################################################
    function handleWindowWidthChange() {
        let windowWidth = window.innerWidth
        let breakpointWidth = theme.breakpoints.values.md
        let isSmallScreen = windowWidth < breakpointWidth

        if (isSmallScreen && isPermanent) {
            setPermanent(false)
        } else if (!isSmallScreen && !isPermanent) {
            setPermanent(true)
        }
    }
}

export default withRouter(Sidebar)
