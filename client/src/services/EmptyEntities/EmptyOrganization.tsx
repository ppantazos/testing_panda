import { Organization, userInOrg} from "../../models/entities/Organization";

export const empty_organization:Organization = {
    id: 0,
    name: ""
}


export const empty_user_in_org:userInOrg = {
    org_id: "",
    is_admin: false,
    jobs: [],
    teams: []
}