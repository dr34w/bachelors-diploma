import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Navbar, NavDropdown, Button, Form, FormControl, Nav} from 'react-bootstrap';

import './styles.css';

export class Header extends Component {

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    return (
      <header>
        <div className="container">
          <nav className="navmenu gradient">
            <Link to={'/'} className="navbar-brand head">Home</Link>
            <div className="panel-heading">
            <h3 className="panel-title">
               
              {localStorage.getItem('jwtToken') &&
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
            <ul>
              <li><Link to='/profilepage'>Ryprofilean</Link></li>
            </ul>
            <Link to='/profilepage'>profile</Link>
          </div>
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
              
            </div> */}
          </nav>
          <br />
          <div className="separador"></div>
        </div>
      </header>
    );
  } 
}


