import { PageResource } from "../../models/dtos/PageResource";
import { User } from "../../models/entities/User";
// import { Organization } from "../../models/entities/Organization";
// import { org_id } from './org';
// import { jobs } from './jobs';
// import { Job } from "../../models/entities/Job";

// const test_org:number = org_id
// const testing_jobs:Job[] = jobs.content
// const default_color:string = "#A1B1C1"

export const users: PageResource<User> ={
    content: [{
        id: 1,
        name: "Panos",
        lastname: "Pantazos",
        email: "ppantazos@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[0], testing_jobs[1]],
        // color: default_color
    },{
        id: 2,
        name: "Tommy",
        lastname: "Bakouras",
        email: "tbak@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[1]],
        // color: default_color
    },{
        id: 3,
        name: "Some",
        lastname: "Guy",
        email: "someguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[2]],
        // color: default_color
    },{
        id: 4,
        name: "Some",
        lastname: "Other Guy",
        email: "someotherguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    },{
        id: 5,
        name: "John",
        lastname: "Smith",
        email: "johnsmith@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    },{
        id: 6,
        name: "George",
        lastname: "Smith",
        email: "gsmith@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    },{
        id: 7,
        name: "New",
        lastname: "Guy",
        email: "someotherguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[2]],
        // color: default_color
    },{
        id: 8,
        name: "Kate",
        lastname: "Guy",
        email: "kateguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[1], testing_jobs[2]],
        // color: default_color
    },{
        id: 9,
        name: "All",
        lastname: "Jobs",
        email: "alljobs@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[0], testing_jobs[1], testing_jobs[2], testing_jobs[3]],
        // color: default_color
    },{
        id: 10,
        name: "Some",
        lastname: "Other Guy",
        email: "someotherguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    },{
        id: 11,
        name: "Some",
        lastname: "Other Guy",
        email: "someotherguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    },{
        id: 12,
        name: "Some",
        lastname: "Other Guy",
        email: "someotherguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    },{
        id: 13,
        name: "Some",
        lastname: "Other Guy",
        email: "someotherguy@gmail.com",
        password: "123123"
        // organizations: [test_org],
        // jobs: [testing_jobs[3]],
        // color: default_color
    }
    ],
    first: true,
    last: true,
    number: 0,
    numberOfElements: 5,
    size: 20,
    totalElements: 5,
    totalPages: 1
}