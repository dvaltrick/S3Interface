import { Constants } from '../actions/actionTypes';

export const setFetched = value => ({
    type: Constants.SET_FETCHED,
    fetched: value
});

export const setSelected = value => ({
    type: Constants.SET_SELECTED,
    selected: value
});

export const setParent = value => ({
    type: Constants.SET_PARENT,
    parent: value
});

export const setDirectory = value => ({
    type: Constants.SET_DIRECTORY,
    directory: value
});