import React from 'react';
import {Menu} from 'antd';
import './index.css'
import {defaultMenuItems, projectMenuItems} from './SidebarMenuItems';
import {Link, useLocation} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function SidebarMenu(): JSX.Element {
    const location = useLocation();
    let params:{projectName:string} = useParams();

    let items
    let menu_type:Number
    if(location.pathname.includes('/project/')){
        items = projectMenuItems
        // todo kapws na doulepsei na valw sto menu to id ap to project gia to navigation
        menu_type = 1
    }else{
        items = defaultMenuItems
        menu_type = 0
    }
    
    const index = items.findIndex((menuItem) => menuItem.href === location.pathname)

    
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[index.toString()]}>
            {
                items.map((menuItem, index) => (
                    <Menu.Item key={index} icon={menuItem.icon}>
                        <Link to={(menu_type===1 && menuItem.title==='Project')?menuItem.href + '/' + params.projectName:menuItem.href}>
                            {menuItem.title}
                        </Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    );
}

export default SidebarMenu;
