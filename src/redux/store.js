import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const middleware = [thunk];

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleware),
    ),
);
