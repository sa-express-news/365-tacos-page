import { combineReducers } from 'redux'

import * as types from '../types';
import * as constants from '../constants';
import * as actions from '../actions';

const restaurants: types.Restaurant[] = require('../tacos.json');

export const initialState: types.AppState = {
    restaurants,
    location: null,
    activeFilter: 'SHOW_ALL',
    currentSearch: ''
};

export const currentSearch = (action: actions.SetSearchTerm): string => {
    if (action.term) {
        return action.term;
    }
    else return '';
}

export const tacoApp = (state: types.AppState = initialState, action: actions.Action): types.AppState => {
    switch (action.type) {
        case constants.SET_SEARCH_TERM:
            return Object.assign({}, state, { currentSearch: currentSearch(action as actions.SetSearchTerm) })
    }
    return state;
}