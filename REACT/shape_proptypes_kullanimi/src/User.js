import React, { Component } from 'react';
import PropTypes from "prop-types";

class User extends Component {
    static propTypes = {
        info: PropTypes.shape(
            {
                name: PropTypes.string,
                department: PropTypes.string,
                salary: PropTypes.number
            }
        ).isRequired,
        
        departmentId: PropTypes.number
    }

    static defaultProps = {
        departmentId: 5
    }

    render() {
        const departmentId = this.props.departmentId;
        const {name, department, salary} = this.props.info

        return (
            <div>
                <span>{name} - </span>
                <span>{department} - </span>
                <span>{salary} - </span>
                <span>{departmentId}</span>
            </div>
        )
    }
}

export default User;
