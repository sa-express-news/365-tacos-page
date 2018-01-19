import { combineReducers } from 'redux'

import * as types from '../types';
import * as constants from '../constants';
import * as actions from '../actions';

const restaurants: types.Restaurant[] = require('../tacos.json');

export const initialState: types.AppState = {
    restaurants,
    location: null,
    activeFilter: 'SHOW_ALL',
    currentSearch: '',
    showCredits: false
};

export const currentSearch = (action: actions.SetSearchTerm): string => {
    if (action.term) {
        return action.term;
    }
    else return '';
}

export const location = (action: actions.SetLocation): types.LatLong => {
    return action.location;
}

export const credits = (showCredits: boolean): boolean => {
    return !showCredits;
}

export const tacoApp = (state: types.AppState = initialState, action: actions.Action): types.AppState => {
    switch (action.type) {
        case constants.SET_SEARCH_TERM:
            return Object.assign({}, state, { currentSearch: currentSearch(action as actions.SetSearchTerm) });
        case constants.SET_LOCATION:
            return Object.assign({}, state, { location: location(action as actions.SetLocation) });
        case constants.TOGGLE_CREDITS:
            return Object.assign({}, state, { showCredits: credits(state.showCredits) })
    }
    return state;
}