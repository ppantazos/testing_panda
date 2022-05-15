import Spin from 'antd/lib/spin';
import React, { useState } from 'react';
import { renderRoutes, RouteConfig } from "react-router-config";
import { LoadingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout} from 'antd';
import './index.css'
import SidebarMenu from "./SidebarMenu";


function Sidemenu(): JSX.Element {

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => setCollapsed(!collapsed);

    return(
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo"/>
            <SidebarMenu/>
        </Layout.Sider>
    )
}

export default Sidemenu;
