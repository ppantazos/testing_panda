export interface Team {
    id: number;
    name: string;
    description: string;
    org_id: number;
}

export interface TeamMembers{
    id: number;
    members: number[];  // ids of the users
}
