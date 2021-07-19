import React, { Component } from 'react';

export default class MyComponent extends Component {
    render() {
        function callAppFunction() {
            this.props.callFunction();
        }

        return (
            <div>
                <button onClick={callAppFunction.bind(this)}  style={{backgroundColor: "crimson", border: "none", padding: 20, fontSize: 20, color: "white"}}>Call App Function</button>
            </div>
        )
    }
}
