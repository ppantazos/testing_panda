import { Team2 } from "../../models/entities/Team";
import { empty_organization2 } from './EmptyOrganization';

export const empty_team:Team2 = {
    id: "",
    name: "",
    description: "",
    organization: empty_organization2,
    members: []
}