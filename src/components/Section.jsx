import React, { Component } from 'react';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export class Section extends Component {
    render() { 
        return ( 
            <div className="welcome">
                <h1>Welcome to TaskFinder</h1>
            </div>
         );
    }
}
 