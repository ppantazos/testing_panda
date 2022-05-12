import { Project } from "../../models/entities/Project";
import { empty_organization2 } from "./EmptyOrganization";

export const empty_project:Project = {
    id: "",
    name: "",
    test_cases: 0,
    organization: empty_organization2,
    icon: ""
}