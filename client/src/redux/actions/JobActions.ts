import axios from "axios";
import {PageResource} from "../../models/dtos/PageResource";
import {AppDispatch} from "../store";
import {fetchErrorAction, fetchStartAction, fetchSuccessAction} from "./creators/CommonActions";
import { Job } from "../../models/entities/Job";

export const getJobs = (org_id:number|string) => (dispatch: AppDispatch): Promise<PageResource<Job>> => {
    dispatch(fetchStartAction());

    const request: any = axios.get(`/api/job/getJobs?org_id=${org_id}`)

    return Promise.resolve(request)
            .then(value => {
                dispatch(fetchSuccessAction());

                return value.data;
            })
            .catch(reason => {
                dispatch(fetchErrorAction(reason));
                return Promise.reject();
            })

} 

//{ name:string, description:string, organization_id: string, color:string}
export const createJob = (data:Omit<Job, 'id'>, jobs:Job[]) => (dispatch: AppDispatch): Promise<Job[]> => {

    dispatch(fetchStartAction());

    const request: any = axios.post(`/api/job/create`, data)
    console.log('here?');

    return Promise.resolve(request)
            .then(value => {
                dispatch(fetchSuccessAction());
                let new_jobs = [...jobs, value.data.new_job];

                value.data = new_jobs
                return value.data;
            })
            .catch(reason => {
                dispatch(fetchErrorAction(reason));
                return Promise.reject();
            })

}


export const updateJob = (new_job:Job, job_list:Job[]) => (dispatch: AppDispatch): Promise<Job[]> => {
    dispatch(fetchStartAction());
    const request: any = axios.put(`/api/job/updateJob`, new_job)    
    return Promise.resolve(request)
            .then(value => {
                dispatch(fetchSuccessAction());

                const job_index = job_list.findIndex(job => job.id === new_job.id);
                job_list[job_index] = new_job;
                value.data = job_list;

                return value.data;
            })
            .catch(reason => {
                dispatch(fetchErrorAction(reason));
                return Promise.reject();
            })
}   

export const deleteJob = (job_id:number) => (dispatch: AppDispatch): Promise<PageResource<Job>> => {
    dispatch(fetchStartAction());
    
    const request: any = axios.delete(`/api/job/deleteJob?job_id=${job_id}`)    
    // todo remove job from users etc
    return Promise.resolve(request)
        .then(value => {
            dispatch(fetchSuccessAction());

            return value;
        })
        .catch(reason => {
            dispatch(fetchErrorAction(reason));

            return Promise.reject();
        })
}