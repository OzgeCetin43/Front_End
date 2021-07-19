import React, { Component } from 'react';
import AddItem from "./AddItem";

export default class MiddleLayer extends Component {
    render() {
        return (
            <div>
                <AddItem addItem={this.props.addItem}/>
            </div>
        )
    }
}
