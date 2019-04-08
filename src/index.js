import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import ProfilePage from './containers/ProfilePage';
import { routerAction } from 'react-router-redux';
import {UserAuthWrapper} from 'redux-auth-wrapper';

ReactDOM.render(
    <Router>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/profilepage' component={ProfilePage} />
        </div>
    </Router>,
    document.getElementById('root')
  );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
