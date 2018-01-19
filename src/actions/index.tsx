import * as constants from '../constants';
import { LatLong } from '../types';

export interface Action {
    type: string;
}

export interface SetSearchTerm extends Action {
    type: constants.SET_SEARCH_TERM;
    term: string;
}

export interface SetLocation extends Action {
    type: constants.SET_LOCATION;
    location: LatLong;
}

export interface ToggleCredits extends Action {
    type: constants.TOGGLE_CREDITS;
}

export const setSearchTerm = (term: string): SetSearchTerm => {
    return {
        type: constants.SET_SEARCH_TERM,
        term
    }
}

export const setLocation = (location: LatLong): SetLocation => {
    return {
        type: constants.SET_LOCATION,
        location
    }
}

export const toggleCredits = (): ToggleCredits => {
    return {
        type: constants.TOGGLE_CREDITS
    }
}