import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect';
import {Link} from 'react-router'
import  classnames  from 'classnames'
import  {values}  from 'lodash'

import styles from './Main.scss'
import {Pad} from 'containers'
import {create, remove} from 'actions/shape'


export const selector = createSelector(
    state => state.entities.shapes,
    (shapes)=> {
        return {
            shapes: values(shapes)
        }
    }
);


@connect(selector, {
    create, remove
})
export default class MainPage extends Component {
    constructor (props) {
        super(props)
    }

    componentWillMount () {
    }

    render () {
        return (
            <div className="col-sm-6">
                <Pad shapes={this.props.shapes}/>
            </div>
        )
    }
}