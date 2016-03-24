import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {createSelector} from 'reselect';
import {autobind} from 'core-decorators';

import styles from './Pad.scss'
import {Circle, Square} from 'components/Shapes'
import {create, startAnimation, remove, stopAnimation} from 'actions/shape'

var Shapes = {
    Circle,
    Square
}

@connect(null, {
    create, startAnimation, remove, stopAnimation
})
export default class Pad extends Component {
    constructor (props) {
        super(props)
    }

    @autobind
    handleClick (e) {
        this.props.create(e.pageX, e.pageY);
        e.preventDefault();
    }

    render () {
        return (
            <div className={styles.pad} onClick={this.handleClick}>
                {this.props.shapes.map((shape)=> {
                    const params = {
                        key: shape.id,
                        ...shape,
                        startAnimation: ()=>this.props.startAnimation(shape.id),
                        stopAnimation: ()=>this.props.stopAnimation(shape.id),
                        remove: ()=>this.props.remove(shape.id)
                    };

                    const el = React.createElement(Shapes[shape.type], params);
                    return el;
                })}
            </div>
        )
    }
}
