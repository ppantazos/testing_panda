import { ApartmentOutlined, BarChartOutlined, CalendarOutlined, CheckSquareFilled, ClusterOutlined, CoffeeOutlined, DashboardFilled, SettingOutlined, TagFilled, UserOutlined } from "@ant-design/icons";
import { BackwardFilled } from '@ant-design/icons';

import React from "react";


export type MenuItem = {
    title: string,
    href: string,
    icon: JSX.Element
};


export const defaultMenuItems: MenuItem[] = [
    {
        title: 'Overview',
        href: '/overview',
        icon: <DashboardFilled/>
    },
    {
        title: 'Test Suites',
        href: '/test-suites',
        icon: <CheckSquareFilled/>
    },
    {
        title: 'Tags',
        href: '/tags',
        icon: <TagFilled/>
    },
    {
        title: 'Users',
        href: '/users',
        icon: <UserOutlined />
    },
    {
        title: 'Calendar',
        href: '/calendar',
        icon: <CalendarOutlined />
    },
    {
        title: 'Admin',
        href: '/panel',
        icon: <SettingOutlined />
    },
    {
        title: 'Jobs',
        href: '/panel/jobs',
        icon: <CoffeeOutlined />
    },
    {
        title: 'Teams',
        href: '/panel/teams', ///'/panel/jobs',
        icon: <ClusterOutlined />
    },
    {
        title: 'Projects',
        href: '/projects', 
        icon: <ApartmentOutlined />
    },
    {
        title: 'Dashboard',
        href: '/dashboards', 
        icon: <BarChartOutlined />
    }
];


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
