import React, { Component } from 'react';
import User from "./User";

class MiddleLayer extends Component {
    render() {
        return (
           <div>
               {
                   this.props.data.map(user => (
                       <User name={user.name} department={user.department} salary={user.salary}/>
                   ))
               }
           </div>
        )
    }
}

export default MiddleLayer;
