import { Team } from './Team';
import { Job } from './Job';


export interface User{
    id: number;
    name: string;
    lastname: string;
    email: string;
    color: string;
    password?: string;
}

export interface OrgUser{
    id: number;
    org_id: number;
    user_id: number;
    role: number;
    job_ids: number[];
}

export interface SetOrgUser{
    id?: number;
    org_id: number;
    user_id: number;
    role: number;
    job_ids: number[];
    team_ids: number[];
}

export interface OrgUsersInfo{
    user_info: User;
    role: number;
    user_teams_info?: Team[];
    user_jobs_info?: Job[];
}