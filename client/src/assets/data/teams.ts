import { PageResource } from "../../models/dtos/PageResource";
import { TeamMembers, TeamStats } from "../../models/entities/Team";
import { User } from "../../models/entities/User";
import { org_id } from './org';
import { users } from './users';

// const test_org:number= org_id
// const test_users:User[] = users.content

export const teamStatsData: TeamStats[] = [
    {id: 1,
        name: "QA Team",
        description: "All QA Members",
        org_id: org_id,
        jobs: [{
           "name": "Lead QA",
           "users": 1,
           "color": "#234556"
       },{
           "name": "Back",
           "users": 6,
           "color": "#232556"
       },{
           "name": "Automation Engineer",
           "users": 3,
           "color": "#23f556"
       },{
           "name": "BA",
           "users": 5,
           "color": "#2345b6"
       }]
       },{id: 2,
        name: "Dev Team",
        description: "All Dev Members",
        org_id: org_id,
        jobs: [{
           "name": "Back",
           "users": 6,
           "color": "#23c356"
       },{
           "name": "Front",
           "users": 5,
           "color": "#231d56"
       }]
       }
]

export const teams: PageResource<TeamMembers> = {
    content: [
        // {
        //     id: 1,
        //     name: "QA Team",
        //     org_id: test_org,
        //     description: "All QA Members",
        //     members:[test_users[0], test_users[2], test_users[3], test_users[4], test_users[5], test_users[8]]
        // },{
        //     id: 2,
        //     name: "Dev Team",
        //     org_id: test_org,
        //     description: "All Dev Members",
        //     members: [test_users[0], test_users[1], test_users[9]]
        // },{
        //     id: 3,
        //     name: "Training Team",
        //     org_id: test_org,
        //     description: "Responsible for features like Courses/Curricula/Events",
        //     members: [test_users[0], test_users[1], test_users[2], test_users[3], test_users[4]]
        // },{
        //     id: 4,
        //     name: "Talent Team",
        //     org_id: test_org,
        //     description: "Responsible for features like Skills/Performance Reviews/Goals",
        //     members: [test_users[0], test_users[1], test_users[2], test_users[3], test_users[4]]
        // },{
        //     id: 5,
        //     name: "Business Analyst Team",
        //     org_id: test_org,
        //     description: "Responsible for features like Skills/Performance Reviews/Goals",
        //     members: [test_users[9], test_users[10], test_users[11], test_users[12], test_users[13]]
        // }
    ],
    first: true,
    last: true,
    number: 0,
    numberOfElements: 5,
    size: 20,
    totalElements: 5,
    totalPages: 1
}
