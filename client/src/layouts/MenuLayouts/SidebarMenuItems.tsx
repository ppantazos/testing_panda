import { ApartmentOutlined, BarChartOutlined, CalendarOutlined, PlayCircleOutlined, ClusterOutlined, DashboardFilled, SettingOutlined, TagFilled } from "@ant-design/icons";
import { BackwardFilled } from '@ant-design/icons';
import React from "react";


/*
    fetch Projects
    fetch user role
*/

export type MenuItem = {
    title: string,
    href: string,
    icon: JSX.Element
};

export type sidemenuItems = {
    label: string,
    href?: string,
    icon: JSX.Element,
    has_access: boolean,
    children?: {
        label: string,
        href: string
    }[]
}


const get_projects_menu = ():{label:string, href:string}[] => {
    // todo: fetch projects from db!!! Store them in redis
    // if have permission add create new project
    
    let projects = [{
        label: 'Create New Project',
        href: '/TODO/SOMEWHERE'
    },{
        label: 'Project 1',
        href: '/TODO/SOMEWHERE'
    }, {
        label: 'Project 2',
        href: '/TODO/SOMEWHERE'
    }]

    return projects
}

export const sideMenuItems: sidemenuItems[] = [
    {
        label: 'Overview',
        href: '/overview',
        icon: <DashboardFilled/>,
        has_access: true
    },
    {
        label: 'Projects', 
        icon: <ApartmentOutlined />,
        has_access: true,
        children: get_projects_menu()
    },
    {
        label: 'Run',
        href: '/run',
        icon: <PlayCircleOutlined />,
        has_access: true
    },
    {
        label: 'Tags',
        href: '/tags',
        icon: <TagFilled/>,
        has_access: true
    },
    {
        label: 'Calendar',
        href: '/calendar', 
        icon: <CalendarOutlined />,
        has_access: true
    },
    {
        label: 'Dashboard',
        href: '/dashboards', 
        icon: <BarChartOutlined />,
        has_access: true
    },
    {
        label: 'Admin',
        icon: <SettingOutlined />,
        has_access: true,
        children: [{
            label: 'Panel',
            href: '/panel'
        }, {
            label: 'Jobs',
            href: '/panel/jobs'
        }, {
            label: 'Users',
            href: '/panel/users'
        },
        {
            label: 'Teams',
            href: '/panel/teams', ///'/panel/jobs',
        }]
    }
]


export const projectMenuItems: MenuItem[] = [
    {
        title: 'Back',
        href: '/projects',
        icon: <BackwardFilled/>
    },
    {
        title: 'Project',
        href: `/project`,
        icon: <ApartmentOutlined/>
    },
    {
        title: 'Overview',
        href: '/project/overview',
        icon: <DashboardFilled/>
    }
];
