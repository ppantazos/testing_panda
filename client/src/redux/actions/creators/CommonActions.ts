import {FETCH_ERROR, FETCH_RESET, FETCH_START, FETCH_SUCCESS, FetchErrorPayload} from "../types/CommonActionTypes";

export const fetchStartAction = () => ({
    type: FETCH_START,
} as const);

export const fetchSuccessAction = () => ({
    type: FETCH_SUCCESS,
} as const);

export const fetchErrorAction = (payload: FetchErrorPayload) => ({
    type: FETCH_ERROR,
    payload,
} as const);

export const fetchResetAction = () => ({
    type: FETCH_RESET,
} as const);

export type CommonActions =
    | ReturnType<typeof fetchStartAction>
    | ReturnType<typeof fetchSuccessAction>
    | ReturnType<typeof fetchErrorAction>
    | ReturnType<typeof fetchResetAction>
