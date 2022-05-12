import { User, OrgUsersInfo } from "../../models/entities/User";

export const empty_user:User = {
    id: 0,
    name: "",
    lastname: "",
    email: "",
    password: "",
    color: ""
}

// export const empty_org_user:SetOrgUser = {
//     _id: '',
//     user_info: empty_user,
//     is_admin: false,
//     jobs: [],
//     teams: []
// }

export const empty_org_user_info:OrgUsersInfo = {
    user_info: empty_user,
    role: 1,  // admin
    user_teams_info: [],
    user_jobs_info: []
}