import React, { Component, Fragment } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <Fragment>
                {this.props.users.map(user =>(
                    <User user={user} />
                ))}
            </Fragment>
        )
    }
}

export default Users
