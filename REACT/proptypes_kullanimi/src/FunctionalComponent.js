import React from "react";
import PropTypes from "prop-types";

function FunctionalComponent(props) {
    const {title, description} = props;
    return(
        <div style={{color: "red"}}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

FunctionalComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default FunctionalComponent;