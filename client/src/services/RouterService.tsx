import {RouteConfig} from "react-router-config";
import {Redirect} from "react-router-dom";
import DashboardLayout from "../layouts/MenuLayouts/index";
import React, {lazy} from "react";
import AuthLayout from "../layouts/AuthLayout";

// const secureRoute = (component: JSX.Element, token?: string): JSX.Element => {
//     return !token
//         ? <Redirect to="/auth/login"/>
//         : component
// }
const getRoutes = ():Array<RouteConfig> =>[
    {
        path: "/",
        exact: true,
        component: (): JSX.Element => <Redirect to="/overview"/>
    },
    {
        path: "/errors",
        component: (props: any): JSX.Element => <DashboardLayout {...props} />,
        routes: [
            {
                path: '/errors/401',
                exact: true,
                component: lazy(() => import('../views/Errors/Error401'))
            },
            {
                path: '/errors/404',
                exact: true,
                component: lazy(() => import('../views/Errors/Error404'))
            },
            {
                path: '/errors/500',
                exact: true,
                component: lazy(() => import('../views/Errors/Error500'))
            }
        ]
    },
    {
        path: "/auth",
        component: (props: any): JSX.Element => <AuthLayout {...props} />,
        routes: [
            {
                path: '/auth/login',
                exact: true,
                component: lazy(() => import('../views/Auth/Login'))
            },
            {
                path: '/auth/register',
                exact: true,
                component: lazy(() => import('../views/Auth/Register'))
            },
            {
                component: (): JSX.Element => <Redirect to="/errors/404"/>
            }
        ]
    },
    {
        route: '*',
        component: (props: any): JSX.Element => <DashboardLayout {...props} />,
        routes: [
            {
                path: "/overview",
                component: lazy(() => import('../views/overview/Overview'))
            },{
                path: "/panel/jobs",
                component: lazy(() => import('../views/Jobs/jobs'))
            },
            {
                component: (): JSX.Element => <Redirect to="/errors/404"/>
            }
        ]    
    }   
]

export {
    getRoutes
}
// const getRoutes = (token?: string): Array<RouteConfig> => [
//     {
//         path: "/",
//         exact: true,
//         component: (): JSX.Element => <Redirect to="/overview"/>
//     },
//     {
//         path: "/errors",
//         component: (props: any): JSX.Element => <DashboardLayout {...props} />,
//         routes: [
//             {
//                 path: '/errors/401',
//                 exact: true,
//                 component: lazy(() => import('../views/Errors/Error401'))
//             },
//             {
//                 path: '/errors/404',
//                 exact: true,
//                 component: lazy(() => import('../views/Errors/Error404'))
//             },
//             {
//                 path: '/errors/500',
//                 exact: true,
//                 component: lazy(() => import('../views/Errors/Error500'))
//             },
//         ]
//     },
//     {
//         path: "/auth",
//         component: (props: any): JSX.Element => <AuthLayout {...props} />,
//         routes: [
//             {
//                 path: '/auth/login',
//                 exact: true,
//                 component: lazy(() => import('../views/Auth/Login'))
//             },
//             {
//                 path: '/auth/register',
//                 exact: true,
//                 component: lazy(() => import('../views/Auth/Register'))
//             },
//             {
//                 component: (): JSX.Element => <Redirect to="/errors/404"/>
//             }
//         ]
//     },
//     {
//         route: '*',
//         component: (props: any): JSX.Element => <DashboardLayout {...props} />,
//         routes: [
//             {
//                 path: "/overview",
//                 component: lazy(() => import('../views/Overview/Overview'))
//             },
//             {
//                 path: "/test-suites",
//                 component: lazy(() => import('../views/TestSuites/TestSuites'))
//             },
//             {
//                 path: "/tags",
//                 component: lazy(() => import('../views/Tags/TagPage'))
//             },
//             {
//                 path: "/users",
//                 component: lazy(() => import('../views/Users/Users'))
//             },
//             {
//                 path: "/calendar",
//                 component: lazy(() => import('../views/Calendar/calendar'))
//             },
//             {
//                 path: "/panel/jobs",
//                 component: lazy(() => import('../views/Jobs/jobs'))
//             },
//             {
//                 path: `/panel/team/:teamId/members`,
//                 exact: true,
//                 component: lazy(() => import('../views/Teams/TeamMembers'))
//             },
//             {
//                 path: "/panel/teams",
//                 exact: true,
//                 component: lazy(() => import('../views/Teams/teams'))
//             },
//             {
//                 path: "/panel",
//                 exact: true,
//                 component: lazy(() => import('../views/Panel/panel'))
//             },
//             {
//                 path: "/project/:projectId/:projectName",
//                 exact: true,
//                 component: lazy(() => import('../views/Projects/project'))
//             },
//             {
//                 path: "/projects",
//                 exact: true,
//                 component: lazy(() => import('../views/Projects/projects'))
//             },
//             {
//                 path: "/user/:userId",
//                 exact: true,
//                 component: lazy(() => import('../views/Users/Profile'))
//             },
//             {
//                 path: "/dashboards",
//                 exact: true,
//                 component: lazy(() => import('../views/Dashboards/dashboards'))
//             },
//             {
//                 component: (): JSX.Element => <Redirect to="/errors/404"/>
//             }
//         ]
//     }
// ];

// export {
//     getRoutes
// }
