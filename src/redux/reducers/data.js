import {
    FETCH_DATA_SUCCESS,
} from '../actions/data';

const initialState = [];

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_DATA_SUCCESS: {
            return [...payload];
        }
        default:
            return state;
    }
}
