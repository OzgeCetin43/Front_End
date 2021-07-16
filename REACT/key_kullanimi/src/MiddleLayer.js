import React, { Component } from 'react'
import User from './User'

export default class MiddleLayer extends Component {
    render() {
        const users =  this.props.data.map((user, index) => (
            <User key={index.toString()} name={user.name} department={user.department} salary={user.salary}/>
        ))

        return (
            <div>
                {
                   users
                }
            </div>
        )
    }
}
