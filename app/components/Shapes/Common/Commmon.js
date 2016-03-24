import React, {Component, PropTypes} from 'react'
import {autobind} from 'core-decorators';

export default class Circle extends Component {
    @autobind
    preventDefault (e) {
        e.stopPropagation();
        e.preventDefault();
    }

    @autobind
    handleChange (e) {
        this.preventDefault(e);
        switch (e.buttons){
            case 1:
                if (this.props.animate){
                    this.props.stopAnimation();
                } else {
                    this.props.startAnimation();
                }
                break;
            case 2:
                setTimeout(()=>{
                    this.props.remove();
                },1);
                break;
        }
    }


}

