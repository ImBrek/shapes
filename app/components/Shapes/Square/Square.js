import React, {Component, PropTypes} from 'react'
import {autobind} from 'core-decorators';
import  classnames  from 'classnames'

import Common from '../Common/Commmon';
import styles from './Square.scss';


export default class Square extends Common {
    render () {
        const {width, height, x, y, id, animate, color} = this.props;
        const style = {
            width: width + 'px',
            height: height + 'px',
            background: color,
            left: x-width/2,
            top: y-height
        }
        return (
            <div onContextMenu={this.preventDefault}
                 onMouseDown={this.handleChange}
                 onClick={this.preventDefault}
                 style={style}
                 className={classnames(styles.square,{'fa-spin':animate})}
            >
                <h3 className={styles.title}>
                    {id}
                </h3>
            </div>
        )
    }
}

