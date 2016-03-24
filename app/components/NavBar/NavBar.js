import React, {Component, PropTypes} from 'react'

export default class NavBar extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <nav className="navbar navbar-default">
                <div classNameName="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">App</a>
                    </div>
                    <p className="navbar-text">Left-click to pad - create element</p>
                    <p className="navbar-text">Left-click to elem - start animation</p>
                    <p className="navbar-text">Right-click to elem - delete</p>
                    <p className="navbar-text">All shapes saves in local storage</p>
                </div>
            </nav>
        )
    }
}

