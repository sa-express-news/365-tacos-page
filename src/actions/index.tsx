import * as constants from '../constants';

export interface Action {
    type: string;
}

export interface SetSearchTerm extends Action {
    type: constants.SET_SEARCH_TERM;
    term: string;
}

export const setSearchTerm = (term: string): SetSearchTerm => {
    return {
        type: constants.SET_SEARCH_TERM,
        term
    }
}