import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal, Form, Input } from 'antd';
import { PageResource } from "../../models/dtos/PageResource";
import { Team, TeamMembers, TeamStats } from "../../models/entities/Team";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Job } from "../../models/entities/Job";
import { empty_job } from "../../services/EmptyEntities/EmptyJob";
import { getJobs } from "../../redux/actions/JobActions";
import { FormInstance } from "antd/lib/form";
import { empty_team } from "../../services/EmptyEntities/EmptyTeam";
import { createEmptyPage } from "../../services/utils/PageResourceUtils";
import { getTeams } from "../../redux/actions/TeamActions";
import {org_id} from '../../assets/data/org';
// import { JobFormSelect } from "../Form/JobFormSelect";

type TeamProps = {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    setTeamPage: Dispatch<SetStateAction<PageResource<TeamStats>>>;
}
export function TeamModal(props: TeamProps):JSX.Element{
    return(<></>)
}

// export function TeamModal(props: TeamProps):JSX.Element{
//     const {setVisible, visible, setTeamPage} = props;
    
//     const dispatch: AppDispatch = useDispatch();
    
//     // form state
//     const [componentSize, setComponentSize] = useState();
//     const [form] = Form.useForm();
    
//     // team state
//     const [name, setName] = useState<string>("")
//     const [description, setDescription] = useState<string>("")

//     // set state
//     const [jobs, setJobs] = useState<Job[]>([empty_job]);
//     const [team, setTeam] = useState<Team>(empty_team)
//     const [teams, setTeams] = useState<TeamMembers[]>([empty_team])

//     const onFormLayoutChange = ({ size } :any) => {
//         setComponentSize(size);
//     };

//     useEffect(()=>{
//         dispatch(getJobs(org_id))
//                     .then(foundPage => setJobs(foundPage.content))
//     })
//     useEffect(()=>{
//         dispatch(getTeams())
//                     .then(foundPage => setTeams(foundPage.content))
//     })

//     useEffect(() => {
//         setName(team.name);
//         setDescription(team.description);
//     }, [team]);

//     useEffect(()=>{
//         form.setFieldsValue({
//             name: name,
//             description: description,
//             jobs: []
//         })
//     })

//     const onCreate = (values:any) => {
//         const new_page:PageResource<Team> = createEmptyPage()
//         new_page.content = teams
//         new_page.content.push(team)
//         setTeamPage(new_page)
//         setVisible(false)
//     }

//     const handleOk = (form:FormInstance<any>) => {
//         form
//             .validateFields()
//             .then(values => {
//                 // form.resetFields();
//                 onCreate(values)
//         })
//         .catch(info => {
//             console.log('Validate Failed:', info);
//         });
//     }


//     const handleCancel = () => {
//         setTeam(empty_team)
//         setVisible(false)
//         };


//     return (
//         <Modal visible={visible}
//                title="Add New Team"
//                okText='Save'
//                cancelText="Cancel"
//                onOk={() => handleOk(form)}
//                onCancel={handleCancel}
//         >
//             <Form form={form}
//                   name="createTeam"
//                   labelCol={{ span: 4 }}
//                   wrapperCol={{ span: 14 }}
//                   layout="horizontal"
//                   initialValues={{ size: componentSize }}
//                   onValuesChange={onFormLayoutChange}
//                   size={componentSize}
//             >
//                 <Form.Item  name="name" label="Team Name" 
//                             rules={[{ required: true, message: 'Please input a Team Name!' }]}>
//                     <Input  value={name} placeholder="Enter user first name"
//                             onChange={(event) => setName(event.target.value)}/>
//                 </Form.Item>
//                 <Form.Item  name="description" label="Description"  >
//                     <Input  value={description} placeholder="Enter user last name"
//                             onChange={(event) => setDescription(event.target.value)}/>
//                 </Form.Item>
//                 {/* <JobFormSelect  preselectedJobIds={[]}
//                                 jobs={jobs}
//                 /> */}
//             </Form>
//         </Modal>
//     )
// }