import { PageResource } from "../../models/dtos/PageResource";
import { Job } from "../../models/entities/Job";
import { Organization } from "../../models/entities/Organization";
import { org_id } from './org';

const test_org:number = org_id

export const job_ids = [
    "607310165478e73a506bdb76", "607316703a52d038e081bead", "607316823a52d038e081beae", "607316913a52d038e081beaf",
    "607316a33a52d038e081beb0", "60732dead3ed4b28b0ec6021"
]

export const jobs: PageResource<Job> = {
    content: [
        {
            id: 1,
            name: "Lead QA",
            color: "#4db9d7",
            description: "This job has extra permissions",
            org_id: test_org
        },{
            id: 2,
            name: "Dev",
            color: "#41d799",
            description: "Developers can only run test and view results",
            org_id: test_org
        },{
            id: 3,
            name: "Automation Engineer",
            color: "#596883",
            description: "Automation Engineers can also add test cases to TestDom",
            org_id: test_org
        },{
            id: 4,
            name: "Business Analyst",
            color: "#88638f",
            description: "BA has access to Dashboards",
            org_id: test_org
        },{
            id: 5,
            name: "Business Analyst",
            color: "#88638f",
            description: "BA has access to Dashboards",
            org_id: test_org
        },{
            id: 6,
            name: "Business Analyst",
            color: "#88638f",
            description: "BA has access to Dashboards",
            org_id: test_org
        },{
            id: 7,
            name: "Business Analyst",
            color: "#88638f",
            description: "BA has access to Dashboards",
            org_id: test_org
        },{
            id: 8,
            name: "Business Analyst",
            color: "#88638f",
            description: "BA has access to Dashboards",
            org_id: test_org
        },{
            id: 9,
            name: "Business Analyst",
            color: "#88638f",
            description: "BA has access to Dashboards",
            org_id: test_org
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
