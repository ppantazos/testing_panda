import { Form, Select } from "antd";
import React, { Dispatch, SetStateAction } from "react";
import { Job } from "../../models/entities/Job";

type UsersProps = {
    preselectedJobIds: string[];
    jobs: Job[];
    setUserJobs: Dispatch<SetStateAction<Job[]>>;
}

export function JobFormSelect(props: UsersProps):JSX.Element{
    const {preselectedJobIds, jobs, setUserJobs} = props;

    const renderJobOptions = () => {
        return jobs.map(job => {
            return <Select.Option value={job.id}>{job.name}</Select.Option>
        })
    }

    const handleJobTagChange = (e:any) => {
        console.log(jobs)
        jobs.find(({id})=> id===e)
        // e.map((job:any)=>{console.log(jobs.find(job))})
        setUserJobs(e.map((job:any)=>{return jobs.find(({id})=> id===job)}))
        // console.log(e)
    }

    return (
        <Form.Item name="jobs" label="Jobs">
            <Select mode="tags" 
                    showArrow
                    style={{ width: '100%' }}
                    defaultValue={preselectedJobIds}
                    onChange={(e) => handleJobTagChange(e)}
            >
                {renderJobOptions()}
            </Select>
        </Form.Item>
    )
}