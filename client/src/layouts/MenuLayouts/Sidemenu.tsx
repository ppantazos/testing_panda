import React, { useState } from 'react';
import { Layout} from 'antd';
import './index.css'
import SidebarMenu from "./SidebarMenu";


function Sidemenu(): JSX.Element {

    const [collapsed, setCollapsed] = useState(false)

    const toggle = () => setCollapsed(!collapsed);
    const hasOrgIcon = () =>{
        return false; // todo get this from db
    }

    return(
        <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" onClick={toggle}>
            </div>
            <SidebarMenu/>
        </Layout.Sider>
    )
}

export default Sidemenu;
