import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {createSelector} from 'reselect';

import {Main} from 'pages';
import {NavBar} from 'components';

@connect(null, {})
export default class App extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {children} = this.props;
        return (
            <div>
                <NavBar/>
                {children || <Main/>}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node
}

