export type ProjectReducer = {
    type: string;
    error: string;
    projects: any[];
    loading: boolean;
}

const INIT_STATE: ProjectReducer = {
    type: '',
    error: '',
    projects: [],
    loading: false,
};

export const projectReducer = (state = INIT_STATE, action: any): ProjectReducer => {
    switch (action.type) {
        case 'GET_PROJECTS':
            return {...state, projects:action.payload}
        default:
            return state;
    }
};

// export default commonReducer;
