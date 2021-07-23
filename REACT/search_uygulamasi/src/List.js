import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./List.css";

class List extends Component {
    constructor(props) {
        super(props);
        this.filterUser = this.filterUser.bind(this);
    }

    static propTypes = {
        users: PropTypes.array.isRequired
    };

    state = {
        filterValue: ""
    };

    filterUser(event) {
        this.setState({
            filterValue: event.target.value
        });
    }

    render() {
        const filteredUSer = this.props.users.filter(user => {
            return user.name.toLowerCase().indexOf(this.state.filterValue.toLowerCase()) !== -1;
        });

        return (
            <div className="list-container">
                <input type="text" id="filter" name="filter" placeholder="Filtrele" className="filtering" value={this.state.filterValue} onChange={this.filterUser}/>
                <ul className="users">
                    {
                        filteredUSer.map((user, index) => 
                            <li className="user" key={index.toString()}>
                                <span className="userName">{ user.name }</span> 
                                <span className="userPhone">{ user.phone }</span> 
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default List;