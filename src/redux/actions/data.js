import Data from '../../models/data';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchData = () => async dispatch => {
    dispatch({ type: FETCH_DATA });
    try {
        const data = await Data.get();
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: FETCH_DATA_ERROR,
            payload: { error },
        });
    }
};
