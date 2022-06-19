import React from 'react';
import {Menu} from 'antd';
import './index.css'
import { sideMenuItems} from './SidebarMenuItems';
import { useLocation} from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import { ItemType } from 'antd/lib/menu/hooks/useItems';

function SidebarMenu(): JSX.Element {
    const location = useLocation();
    // let params:{projectName:string} = useParams();

    let antd_menu:ItemType[] = []

    let items = sideMenuItems
    // let menu_type:Number
    // if(location.pathname.includes('/project/')){
    //     items = projectMenuItems
    //     // todo kapws na doulepsei na valw sto menu to id ap to project gia to navigation
    //     menu_type = 1
    // }else{
        // items = sidemenuItems
        // items = sideMenuItems
        // menu_type = 0
    // let item_key = 0;
    
    items.map((item, key)=>{
        if(item.has_access){
            let children = item.children? item.children.map((child, key)=>{
                let temp_child = {
                    label: child.href?<a href={child.href}>{child.label}</a>:child.label,
                    icon: item.icon,
                    key: key.toString()
                }
                // item_key ++;
                // console.log(item_key)
                return temp_child
            }) : null
            
            let temp_item = { 
                label: item.href?<a href={item.href}>{item.label}</a>:item.label,
                icon: item.icon,
                key: key.toString(),
                children: children
            }
            // item_key ++;
            // console.log(item_key)
            antd_menu.push(temp_item)
        }
    })

    let index = items.findIndex((menuItem) => menuItem.href === location.pathname)

    return (
        <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={[index.toString()]}
            items={antd_menu}
            >
            {/* {
                items.map((menuItem, index) => (
                    <Menu.Item key={index} icon={menuItem.icon}>
                        {/* <Link to={(menu_type===1 && menuItem.label==='Project')?menuItem.href + '/' + params.projectName:menuItem.href}>
                            {menuItem.label}
                        </Link> */}
                    {/* </Menu.Item> */}
                {/* )) */}
            {/* } */} 
        </Menu>
    );
}

export default SidebarMenu;
