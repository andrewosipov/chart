import { DEFAULT_THEME, OS_WEB } from '../../constants';
import {
    SET_LOADING, SET_LOADED,
} from '../actions/app';

const initialState = {
    os: process.env.REACT_APP_OS || OS_WEB,
    theme: DEFAULT_THEME,
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true };
        case SET_LOADED:
            return { ...state, isLoading: false };
        default:
            return state;
    }
}
