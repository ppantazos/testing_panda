import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Modal, Form, Input, Button } from 'antd';
import { Job } from "../../models/entities/Job";
import { PageResource } from "../../models/dtos/PageResource";
import { empty_job } from "../../services/EmptyEntities/EmptyJob";
import { InputGenerateColor } from "../Form/generateColor";
import { FormInstance } from "antd/lib/form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { createJob, updateJob, deleteJob } from "../../redux/actions/JobActions";

const org_id = 1

type JobProps = {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    setJobsPage: Dispatch<SetStateAction<PageResource<Job>>>;
    selectedJob: Job;
    setJobSelected: Dispatch<SetStateAction<Job>>;
    jobPage: PageResource<Job>;
}

export function JobModal(props: JobProps):JSX.Element{
    //props    
    const {setVisible, visible, setJobsPage, selectedJob, setJobSelected, jobPage} = props;
    const dispatch: AppDispatch = useDispatch();

    // form state
    const [componentSize, setComponentSize] = useState();
    const [form] = Form.useForm();

        
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [color, setColor] = useState<string>("");
    
    const onCreate = (values:any) => {
        if(values.color[0] !== "#"){ values.color=`#${values.color}`}

        if (!selectedJob.id){
            const new_job:Omit<Job, 'id'> = {
                name: values.name, 
                description: values.description, 
                org_id: org_id, 
                color: values.color}
            dispatch(createJob(new_job, jobPage.content))
            .then(foundPage => {jobPage.content=foundPage
                setJobsPage(jobPage)})
        }else{
            const new_job:Job = {
                id: selectedJob.id, 
                name:values.name, 
                description:values.description, 
                org_id: org_id, 
                color:values.color}
            dispatch(updateJob(new_job, jobPage.content))
            .then(foundPage => {jobPage.content=foundPage
                 setJobsPage(jobPage)})
        }
        setName('');
        setDescription('');
        setColor('');
        setTimeout(() => {
            setVisible(false)
        }, 500);
    }

    const handleOk = (form:FormInstance<any>) => {
        form
            .validateFields()
            .then(values => {
                // form.resetFields();
                onCreate(values)
        })
        .catch(info => {
            console.log('Validate Failed:', info);
        });
    }

    useEffect(() => {
        setName(selectedJob.name)
        setDescription(selectedJob.description)
        setColor(selectedJob.color)
    }, [selectedJob])

    useEffect(()=>{
        form.setFieldsValue({
            name: name,
            description: description,
            color: color
        })
        
    })

    const handleCancel = () => {
        setVisible(false)
        setJobSelected(empty_job)
    };

    const handleDelete = (job_id:number) => {
        dispatch(deleteJob(job_id))
        // todo, rerender the page
        setVisible(false)

            // .then(foundPage => {jobPage.content=foundPage
                // setJobsPage(jobPage)})
        //request to handle delete
        //remove job from list
        //rerender the page
    }

    const onFormLayoutChange = ({ size } :any) => {
    setComponentSize(size);
    };

    const footer_buttons = [
        <Button key="submit" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={()=>handleOk(form)}>
          {selectedJob===empty_job? 'Create' : 'Save'}
        </Button>]

    return (
        <Modal  visible={visible}
                title={selectedJob===empty_job? 'Add New Job' : 'Edit Job'}
                // okText={selectedJob===empty_job? 'Create' : 'Save'}
                onOk={() => handleOk(form)}
                onCancel={handleCancel}
                footer={selectedJob===empty_job? footer_buttons:[
                    <Button key="submit" type="primary" style={{float:'left'}} danger onClick={()=>handleDelete(selectedJob.id)}>
                      Delete
                    </Button>, ...footer_buttons]}
        >
            <Form   form={form}
                    name="createJob"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{ size: componentSize }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >
                <Form.Item name="name" label="Job Title" >
                    <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter Job Title"/>
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Enter A Short Job Description"/>
                </Form.Item>
                <InputGenerateColor form_id="createJob"
                                    setColor={setColor}
                                    color={color}
                                    infoText= "This will be used in charts"
                                    />
                
            </Form>
        </Modal>
    )
}