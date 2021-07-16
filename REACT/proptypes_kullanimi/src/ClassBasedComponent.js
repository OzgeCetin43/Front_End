import React, { Component } from "react";
import PropTypes from "prop-types";

class ClassBasedComponent extends Component {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string
    }

    render() {
        const {title, description} = this.props;

        return(
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        );
    }
}

export default ClassBasedComponent;