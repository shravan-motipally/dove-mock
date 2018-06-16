import {HOME, PHOTOS, ABOUT, CHANGE_LOCATION } from '../constants/action-types';

const initialState = {
    currentPage: HOME
};

const mainReducer = (state = initialState, action) => {
    var newState = initialState;
    switch (action.type) {
        case HOME:
            newState = { currentPage: HOME };
            break;
        case PHOTOS:
            newState = { currentPage: PHOTOS };
            break;
        case ABOUT:
            newState = { currentPage: ABOUT };
            break;
        case CHANGE_LOCATION:
            newState = { currentPage: action.currentPage };
            break;
        default:
    }
    return newState;
};

export default mainReducer;