import Spin from 'antd/lib/spin';
import React, { Suspense, useState } from 'react';
import { renderRoutes, RouteConfig } from "react-router-config";
import { LoadingOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { Layout} from 'antd';
import './index.css'
// import SidebarMenu from "./SidebarMenu";

type DashboardLayoutProps = {
    route: RouteConfig
}

function HeaderMenu(props: DashboardLayoutProps): JSX.Element {
    const {route} = props;

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => setCollapsed(!collapsed);

    const userHasIcon = ():boolean =>{
        return false
    }

    const getUserIcon = ():string =>{
        return userHasIcon()
            ? "get user icon"
            : "/icons/default_user.png"
    }

    const getLoggedinUserId = ():string => {
        return "1"
    }

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Layout className="site-layout">
                <Layout.Header className="site-layout-background" style={{padding: 0}}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                <a href={`/user/${getLoggedinUserId()}`}>
                    <img src={getUserIcon()} alt="User Profile"
                         style={{borderRadius: "50%",
                                 border: "1px solid #000",
                                 float: "right",
                                 margin: "15px 20px 0px 0px",
                                 height:"30px", 
                                 width: "30px",
                                 backgroundImage: "cover"}}/>
                </a>
                </Layout.Header>
                <Layout.Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Suspense fallback={<Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>}>
                        {renderRoutes(route.routes)}
                    </Suspense>
                </Layout.Content>
            </Layout>
        </Layout>
    );
}

export default HeaderMenu;
