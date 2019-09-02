import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/Screen';

import { store } from './redux/store';

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
