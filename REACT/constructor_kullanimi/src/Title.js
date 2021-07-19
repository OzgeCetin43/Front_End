import React, { Component } from 'react';
import PropTypes from "prop-types";

class Title extends Component {
    constructor(props) {
        super();
        console.log(props);
    }

    static propTypes = {
        info: PropTypes.shape(
            {
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            }
        )};

    render() {
        const {title, description} = this.props.info;

        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    }
}

export default Title;
