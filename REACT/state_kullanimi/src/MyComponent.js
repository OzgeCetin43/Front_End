import React, { Component } from 'react';

export default class MyComponent extends Component {
    addItem() {
        this.props.addTodoItem();
    }

    render() {
        return (
            <div>
                <button onClick={this.addItem.bind(this)}>Add Todo</button>
            </div>
        )
    }
}
