import React, { Component, Fragment } from 'react'
import Users from './Users';

class User extends Component {
    render() {
        const {id, name, login, avatar_url, html_url, followers, public_repos} = this.props.user;
        return (
            <Fragment>
                <div className="card">
                        <div className="card-area">
                            <img className="card-image" src={avatar_url}></img>
                            <h3 className="card-id">Id : {id}</h3>
                            <h3 className="card-header">Name : {login}</h3>
                            <h3 className="card-followers">Followers : {followers}</h3>
                            <h3 className="card-public-repos">Public Repos : {public_repos}</h3>
                            <a className="card-button" href={html_url}>Go Github Profile</a>
                        </div>
                </div>
                    
            </Fragment>
        )
    }
}

export default User
