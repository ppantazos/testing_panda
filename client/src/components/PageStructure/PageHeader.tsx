import React from 'react';
import Text from "../intl/Text";
import { Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';

type PageHeaderProps = {
    className?: string;
    title: string;
    headerButton?: {
        type: string; // "create" - "edit"
        onClickFuntion: ()=>void;
        style?: {};
        title?: string;
    };
    editButton?: {
        onClickFuntion: ()=>void;
        style?: {};
        title?: string;
    }
}

function PageHeader(props: PageHeaderProps): JSX.Element {
    const {title, className, headerButton} = props;

    const has_permission = () => {
        return true
    }


    return (
        <div className={className}>
            <h1><Text id={title}/> &nbsp;
            {has_permission() && headerButton
                ? <Button onClick={headerButton.onClickFuntion}   
                          shape="circle" 
                          size="small"
                          icon={headerButton.type==="create"
                                    ? <PlusOutlined />
                                    : <EditOutlined />}
                          title={headerButton.title? headerButton.title : "Create New"} 
                        //   style={createButton.style? createButton.style: {backgroundColor: "#5BC236", borderColor: "#5BC236", textAlign: "center"}}
                        > 
                     </Button>
                    
                : null}
            </h1>

        </div>
    )
}

export default PageHeader;
