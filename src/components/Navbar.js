import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {
    render() {
        return (
            <>
           <div className="navbar">
               <div className="container flex">
                   <h1 className="logo"><i class={this.props.icon}></i>{this.props.title}</h1>
                   <nav>
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">Contacts</a></li>
                      </ul> 
                   </nav>
               </div>
           </div>
            </>
        )
    }
}

Navbar.defaultProps={
    title: 'Finder.',
    icon: 'fab fa-github'
}

Navbar.propTypes={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
