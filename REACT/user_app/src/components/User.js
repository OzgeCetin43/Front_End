import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./User.css";

class User extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        deleteUser: PropTypes.func.isRequired,
        showDetail: PropTypes.func.isRequired,
        hideDetail: PropTypes.func.isRequired
    }

    deleteUser(index) {
        this.props.deleteUser(index);
    }

    showDetail(index) {
        this.props.showDetail(index);
    }

    hideDetail(index) {
        this.props.hideDetail(index);
    }

    render() {
        const {users} = this.props;
        return (
            <div>
                {
                    users.map((user, index) => 
                        <div className="card"  key={index.toString()}>
                            <div className="card-body">
                                <div className="card-header">
                                    <h2 className="card-title">{user.name}</h2>
                                    <i className="fas fa-trash-alt" onClick={() => this.deleteUser(index)}></i>
                                </div>
                                <div className="card-context">
                                {
                                    user.isVisible 
                                    ? (
                                        <div>
                                            <img src={user.image} alt="user"/>
                                            <h3>{user.jobType}</h3>
                                            <small>{user.jobDescriptor}</small>
                                            <button onClick={() => this.hideDetail(index)}>Hide Details</button>
                                        </div>
                                      ) 
                                    : <button onClick={() => this.showDetail(index)}>Show Details</button>
                                }
                                </div>
                            </div>
                            <div className="card-contact">
                                <div className="card-contact-item">
                                    <i className="fas fa-home"></i>
                                    <p>{user.address}</p>
                                </div>
                                <div className="card-contact-item">
                                    <i className="fas fa-phone"></i>
                                    <p>{user.phone}</p>
                                </div>
                                <div className="card-contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <p>{user.email}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default User;