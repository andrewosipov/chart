import { combineReducers } from 'redux';
import app from './app';
import data from './data';

const reducers = {
    app,
    data,
};

export default combineReducers(reducers);
