import {combineReducers} from 'redux';
import Common from "./Common";
import {projectReducer} from './projectReducer'; 

const rootReducer = combineReducers({
    common: Common,
    projects: projectReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
