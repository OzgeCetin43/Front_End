import React, { Component } from 'react';
import MyComponent from "./MyComponent";

export default class MiddleLayer extends Component {
    render() {
        return (
            <div>
                <MyComponent callFunction={this.props.callfunction}/>
            </div>
        )
    }
}
