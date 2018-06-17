import {ABOUT, HOME, PHOTOS} from "../constants/page-types";
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