import { PageResource } from "../../models/dtos/PageResource";
import { Team, TeamMembers, TeamStats } from "../../models/entities/Team";
import { fetchErrorAction, fetchStartAction, fetchSuccessAction } from "./creators/CommonActions";
import { createEmptyPage } from "../../services/utils/PageResourceUtils";
import { teams, teamStatsData } from "../../assets/data/teams";
// import { users } from "../../assets/data/users";
import { AppDispatch} from "../store";
import { User } from "../../models/entities/User";


export const getTeams = () => (dispatch: AppDispatch): Promise<PageResource<TeamMembers>> => {
    dispatch(fetchStartAction());

    return Promise.resolve(teams)
        .then(value => {
            dispatch(fetchSuccessAction());

            return value;
        })
        .catch(reason => {
            dispatch(fetchErrorAction(reason));

            return Promise.reject();
        })
}

export const getTeamStats = () => (dispatch: AppDispatch): Promise<PageResource<TeamStats[]>> => {
    dispatch(fetchStartAction());
    let page: PageResource<TeamStats[]> = createEmptyPage()
    return Promise.resolve(teamStatsData)
        .then(value => {
            dispatch(fetchSuccessAction());
            page.content = [];
            return page;
        })
        .catch(reason => {
            dispatch(fetchErrorAction(reason));

            return Promise.reject();
        })
}

// export const getTeamMembers = (teamId:string) => (dispatch: AppDispatch): Promise<User[]> => {
//     dispatch(fetchStartAction());

//     let temp_team:Team|undefined = teams.content.find(team => teamId === team.id)
//     const teamMembers:User[] = temp_team? temp_team.members: []  

//     return Promise.resolve(teamMembers)
//         .then(value => {
//             dispatch(fetchSuccessAction());

//             return value;
//         })
//         .catch(reason => {
//             dispatch(fetchErrorAction(reason));

//             return Promise.reject();
//     })
// }
