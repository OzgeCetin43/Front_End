import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Header.css";

class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        title: "Default Title"
    }

    render() {
        const {title} = this.props;
        return (
            <div className="header">
                <h1>{title}</h1>
                <hr/>
            </div>
        )
    }
}

export default Header;