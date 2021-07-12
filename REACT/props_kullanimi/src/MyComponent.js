import React, { Component } from 'react'

class MyComponent extends Component {
    render() {
        const {baslik, aciklama} = this.props;
        return (
            <div>
                <h1>{baslik}</h1>
                <p>{aciklama}</p>
            </div>
        )
    }
}

export default MyComponent;