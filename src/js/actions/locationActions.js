import { HOME, PHOTOS, ABOUT, CHANGE_LOCATION } from '../constants/action-types';

export const goToHome = currentPage => ({
    type: HOME,
    payload: currentPage
});

export const goToPhotos = currentPage => ({
   type: PHOTOS,
   payload: currentPage
});

export const goToAbout = currentPage => ({
    type: ABOUT,
    payload: currentPage
});

export const changeLocation = (currentPage, url) => ({
    type: CHANGE_LOCATION,
    currentPage: currentPage
});