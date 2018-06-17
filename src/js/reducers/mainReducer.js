import { CHANGE_LOCATION } from '../constants/action-types';
import { HOME } from '../constants/page-types';

const initialState = {
    currentPage: HOME
};

const mainReducer = (state = initialState, action) => {
    var newState = initialState;
    switch (action.type) {
        case CHANGE_LOCATION:
            newState = { currentPage: action.currentPage };
            break;
        default:
    }
    return newState;
};

export default mainReducer;