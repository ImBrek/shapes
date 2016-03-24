import React from 'react';
import {Route} from 'react-router';
import {App} from 'containers';
import {Main} from 'pages';

export default (
    <Route path="/" component={App}>
        <Route path="/main" component={Main}/>
    </Route>
);
