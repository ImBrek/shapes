import React from 'react';
import {render} from 'react-dom';
import configureStore from 'store/configureStore';
import {Provider} from 'react-redux';
import {browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import 'babel-polyfill'
import {Router} from 'react-router'

import font from 'font-awesome/css/font-awesome.css';
import bs from 'bootstrap/dist/css/bootstrap.css';
import routes from 'routes'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
render(
    <Provider store={store}>
        <div className="app">
            <Router history={history} routes={routes}/>
        </div>
    </Provider>,
    document.getElementById('root')
);
