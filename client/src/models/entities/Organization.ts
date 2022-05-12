export interface Organization {
    id: number;
    name: string;
}

export interface userInOrg{
    org_id: string;
    is_admin: boolean;
    jobs: string[];
    teams: string[];
}