import { Organization, Organization2, userInOrg } from "../../models/entities/Organization";

export const empty_organization:Organization = {
    _id: "",
    name: ""
}

export const empty_organization2:Organization2 = {
    id: "",
    name: ""
}

export const empty_user_in_org:userInOrg = {
    org_id: "",
    is_admin: false,
    jobs: [],
    teams: []
}