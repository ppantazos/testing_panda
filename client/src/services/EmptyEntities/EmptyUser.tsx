import { User, User2, OrgUsersInfo } from "../../models/entities/User";

export const empty_user:User = {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    color: ""
}

export const empty_user2:User2 = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organizations: [],
    jobs: [],
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
    is_admin: false,
    user_teams_info: [],
    user_jobs_info: []
}