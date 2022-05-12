import {CommonActions} from "../actions/creators/CommonActions";
import {FETCH_ERROR, FETCH_RESET, FETCH_START, FETCH_SUCCESS} from "../actions/types/CommonActionTypes";

export type CommonReducer = {
    error: string;
    loading: boolean;
}

const INIT_STATE: CommonReducer = {
    error: '',
    loading: false,
};

const commonReducer = (state = INIT_STATE, action: CommonActions): CommonReducer => {
    switch (action.type) {
        case FETCH_START: {
            return {
                ...state,
                error: '',
                loading: true,
            };
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                error: '',
                loading: false,
            };
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }
        case FETCH_RESET: {
            return INIT_STATE;
        }
        default:
            return state;
    }
};

export default commonReducer;
