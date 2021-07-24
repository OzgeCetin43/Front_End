import React, { Component } from 'react';
import PropTypes from "prop-types";

class Child extends Component {
    constructor(props) {
        super(props);
        console.log("Child Constructor");
    }

    static propTypes = {
        color: PropTypes.string.isRequired
    }

    componentWillMount() {
        console.log("Child ComponentWillMount");
    }

    componentDidMount() {
        console.log("Child ComponentDidMount");
    }
W
    componentWillReceiveProps() {
        console.log("Child ComponentWillReceiveProps");
    }

    render() {
        console.log("Child Render");
        return (
            <div>
                <p style={{color: this.props.color}}>Merhaba</p>
            </div>
        )
    }
}

export default Child;