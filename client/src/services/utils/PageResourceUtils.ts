import {PageResource} from "../../models/dtos/PageResource";

export const createEmptyPage = <T>(): PageResource<T> => {
    return {
        content: [],
        first: true,
        last: true,
        number: 0,
        numberOfElements: 0,
        size: 20,
        totalElements: 0,
        totalPages: 0
    }
}
