import React, { useState } from 'react';
import { Layout} from 'antd';
import './index.css'
import SidebarMenu from "./SidebarMenu";
import { get_item_from_lcs, set_item_to_lcs} from "../../assets/local_storage/lcs";
import { LcsKeys } from '../../assets/local_storage/lcs_keys';
import { cpuUsage } from 'process';

function Sidemenu(): JSX.Element {

    const isCollapsed = ():boolean => {
        const is_collapsed = get_item_from_lcs(LcsKeys.is_sidemenu_collapsed)
        if(is_collapsed === null){
            set_item_to_lcs(LcsKeys.is_sidemenu_collapsed, false)
            return false
        }
        return is_collapsed
    }

    const [collapsed, setCollapsed] = useState(isCollapsed)


    const toggle = () => {
        setCollapsed(!collapsed)
        set_item_to_lcs(LcsKeys.is_sidemenu_collapsed, !collapsed)
    }
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
