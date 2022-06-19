import { Card, Row } from "antd";
import React from "react";
import { CardItemSimple } from '../../models/cards/CardItem'

type setting = {
    hoverable: boolean;
    onClickFunction: (set:boolean) => void;
    selectedItem: (item:any)=>void;
}

export function CardSimple(items:CardItemSimple[], settings:setting):JSX.Element{
    
    const renderCards=()=>{
        return items.map((item, key) => {
            return <Card key={key}
                         style={{marginTop:"10px", marginLeft:"5px"}} hoverable={settings.hoverable} 
                         title={item.name} 
                         onClick={()=>{
                             settings.selectedItem(item);
                             settings.onClickFunction(true);
                         }}
                         headStyle={{color:item.color? item.color: "fff", textAlign:"center"}}>
                         {item.description}
            </Card>
        })
    }

    return (
        <Row>
            {renderCards()}
        </Row>
    )
}