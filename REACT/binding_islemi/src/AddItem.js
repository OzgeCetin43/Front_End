import React, { Component } from 'react';

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.addItems = this.addItems.bind(this);
    }

    addItems() {
        this.props.addItem();
    }

    addItems2 = () => {
        this.props.addItem();
    }

    addItems3() {
        this.props.addItem();
    }
    
    render() {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <button onClick={this.addItems} style={{backgroundColor: "red", padding: 10, margin: 10}}>Add Item with Constructor</button>
                <button onClick={this.addItems2} style={{backgroundColor: "blue", padding: 10, margin: 10}}>Add Item with Arrow Function</button>
                <button onClick={() => this.addItems3()} style={{backgroundColor: "orange", padding: 10, margin: 10}}>Add Item with JSX</button>
            </div>
        )
    }
}
