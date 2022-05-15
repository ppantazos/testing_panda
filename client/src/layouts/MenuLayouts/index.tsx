import Spin from 'antd/lib/spin';
import React, { Suspense, useState } from 'react';
import { renderRoutes, RouteConfig } from "react-router-config";
import { LoadingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import  Sidemenu  from './Sidemenu';
import HeaderMenu from './Header';
import { Layout} from 'antd';
import './index.css'

type DashboardLayoutProps = {
    route: RouteConfig
}

function Index(props: DashboardLayoutProps): JSX.Element {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sidemenu />
            <HeaderMenu {...props}/>
        </Layout>
    );
}

export default Index;