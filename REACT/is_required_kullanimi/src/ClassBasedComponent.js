import React, { Component } from 'react';
import PropTypes from "prop-types";

class ClassBasedComponent extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired
    }

    render() {
        const {style, title, description} = this.props;

        return (
            <div style={style}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default ClassBasedComponent;
