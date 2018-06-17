import {ABOUT, HOME, PHOTOS, ERROR} from "../constants/page-types";
import {changeLocation} from "../actions/locationActions";

export function goToHome(dispatch) {
    dispatch(changeLocation(HOME));
};
export function goToPhotos(dispatch){
    dispatch(changeLocation(PHOTOS));
};
export function goToAbout(dispatch) {
    dispatch(changeLocation(ABOUT));
};
export function goToError(dispatch) {
    dispatch(changeLocation(ERROR));
};