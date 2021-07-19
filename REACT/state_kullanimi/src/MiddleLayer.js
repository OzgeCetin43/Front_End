import React, { Component } from 'react';
import MyComponent from "./MyComponent";

export default class MiddleLayer extends Component {
    render() {
        return (
            <div>
                <MyComponent addTodoItem={this.props.addTodoItem}/>
            </div>
        )
    }
}
