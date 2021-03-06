export interface Team {
    id: number;
    name: string;
    description: string;
    org_id: number;
}

export interface TeamMembers{
    team_id: number;
    org_id: number;
    member_id: number;
    members: number[];  // ids of the users
}

export interface TeamPieStats {
    jobs: {
        "name": string,
        "users": number,
        "color": string
    }[]; 
}
export interface TeamStats extends Team, TeamPieStats{
}

