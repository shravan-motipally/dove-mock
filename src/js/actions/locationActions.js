import {CHANGE_LOCATION} from '../constants/action-types';

export const changeLocation = (currentPage, url) => ({
    type: CHANGE_LOCATION,
    currentPage: currentPage
});