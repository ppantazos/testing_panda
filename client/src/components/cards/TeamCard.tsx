import { Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { CardItem } from '../../models/entities/Helpers/CardItem'

type TeamCard={
    items:CardItem[]
}
export function TeamCard(props:TeamCard):JSX.Element{
    const { items } = props
    
    const renderCard=(item:CardItem, key:any):JSX.Element=>{
        return(
            <Card
                key={key}
                hoverable={true}
                style={{ width: 250, 
                         textAlign: "center",
                         marginLeft: "10px", 
                         marginTop: "20px"}}
                cover= {typeof item.icon === 'string'
                        ? <img src={item.icon} alt={item.name}/>
                        : item.icon}
            >
                <Meta title={item.name} description={item.description} />
            </Card>
        )
    }

    return (
        <Row>
            {items.map((item, key) => {
                return item.link
                    ? <a href={item.link}>{renderCard(item, key)}</a>
                    : <>{renderCard(item, key)}</>
                })
            }
        </Row>
    )
}