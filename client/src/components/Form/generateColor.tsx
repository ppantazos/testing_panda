import { InfoCircleOutlined } from "@ant-design/icons";
import { Input, Form, Button } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { generateColor } from "../../assets/helpers/helper";

type UsersProps = {
    setColor: Dispatch<SetStateAction<string>>;
    color: string;
    infoText: string;
    form_id: string;
}

export function InputGenerateColor(props: UsersProps):JSX.Element{
    const {setColor, color, infoText, form_id} = props;

    return (
        <Form.Item name="color" label="Color" tooltip={{ title: infoText, icon: <InfoCircleOutlined /> }}>
            <Input.Group compact>
                    <Input id={`${form_id}_color`}
                           value={color} 
                           style={{width: "60%", backgroundColor:color, marginRight:"5px"}} 
                           onChange={(event) => setColor(event.target.value)} 
                           placeholder="Hex code #A1B1C1" />
                <Form.Item>
                    <Button onClick={()=>setColor(generateColor())}>Generate</Button>
                </Form.Item>
            </Input.Group>
        </Form.Item>
    )
}